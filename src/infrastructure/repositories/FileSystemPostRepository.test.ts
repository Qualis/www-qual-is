import { describe, it, expect } from "vitest";
import { FileSystemPostRepository } from "./FileSystemPostRepository";
import { join } from "path";

describe("FileSystemPostRepository", () => {
  it("should get all slugs from _posts directory", () => {
    const repository = new FileSystemPostRepository();

    const slugs = repository.getAllSlugs();

    expect(slugs.length).toBeGreaterThan(0);
  });

  it("should retrieve raw post data for a valid slug", () => {
    const repository = new FileSystemPostRepository();
    const slugs = repository.getAllSlugs();
    const firstSlug = slugs[0];

    const data = repository.getRawPostData(firstSlug!);

    expect(data.slug).toBe(firstSlug!.replace(/\.md$/, ""));
    expect(data.frontMatter).toBeDefined();
    expect(data.content).toBeDefined();
  });

  it("should use custom directory when provided", () => {
    const customPath = join(process.cwd(), "_posts");
    const repository = new FileSystemPostRepository(customPath);

    const slugs = repository.getAllSlugs();

    expect(slugs.length).toBeGreaterThan(0);
  });

  it("should strip .md extension from slug when retrieving", () => {
    const repository = new FileSystemPostRepository();
    const slugs = repository.getAllSlugs();
    const firstSlug = slugs[0];

    const data = repository.getRawPostData(firstSlug!);

    expect(data.slug).not.toContain(".md");
  });
});
