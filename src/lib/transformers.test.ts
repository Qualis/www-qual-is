import { describe, it, expect } from "vitest";
import { parsePostData } from "./transformers";

describe("parsePostData", () => {
  it("should auto-generate ogImage when topic and coverImage exist but ogImage does not", () => {
    const result = parsePostData(
      "test-post",
      {
        title: "Test",
        topic: "engineer",
        coverImage: "/custom/cover.png",
      },
      "Content"
    );

    expect(result.ogImage?.url).toBe("/assets/blog/categories/engineer.png");
  });

  it("should not modify images when both coverImage and ogImage exist", () => {
    const result = parsePostData(
      "test-post",
      {
        title: "Test",
        topic: "engineer",
        coverImage: "/custom/cover.png",
        ogImage: { url: "/custom/og.png" },
      },
      "Content"
    );

    expect(result.coverImage).toBe("/custom/cover.png");
    expect(result.ogImage?.url).toBe("/custom/og.png");
  });
});
