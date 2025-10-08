import { describe, it, expect, vi, beforeEach } from "vitest";
import * as fs from "fs";
import * as path from "path";
import {
  buildImageUrls,
  extractTopicFromCoverImage,
  getPostBySlug,
  getAllPosts,
  getAllTopics,
} from "./api";

// Mock fs module
vi.mock("fs");
vi.mock("path", async () => {
  const actual = await vi.importActual<typeof path>("path");
  return {
    ...actual,
    join: vi.fn((...args: string[]) => args.join("/")),
  };
});

describe("buildImageUrls", () => {
  it("should build correct image URLs for a given topic", () => {
    const result = buildImageUrls("engineer");

    expect(result).toEqual({
      coverImage: "/assets/blog/categories/engineer.png",
      ogImage: {
        url: "/assets/blog/categories/engineer.png",
      },
    });
  });

  it("should handle different topics correctly", () => {
    const result = buildImageUrls("lead");

    expect(result.coverImage).toBe("/assets/blog/categories/lead.png");
    expect(result.ogImage.url).toBe("/assets/blog/categories/lead.png");
  });
});

describe("extractTopicFromCoverImage", () => {
  it("should extract topic from a valid cover image URL", () => {
    const coverImage = "/assets/blog/categories/engineer.png";
    const result = extractTopicFromCoverImage(coverImage);

    expect(result).toBe("engineer");
  });

  it("should return 'uncategorized' for invalid cover image URL", () => {
    const coverImage = "/invalid/path/image.png";
    const result = extractTopicFromCoverImage(coverImage);

    expect(result).toBe("uncategorized");
  });

  it("should handle different topic names", () => {
    const coverImage = "/assets/blog/categories/manage.png";
    const result = extractTopicFromCoverImage(coverImage);

    expect(result).toBe("manage");
  });

  it("should return 'uncategorized' for empty string", () => {
    const result = extractTopicFromCoverImage("");

    expect(result).toBe("uncategorized");
  });
});

describe("getPostBySlug", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should read and parse a post correctly", () => {
    const mockFileContents = `---
title: Test Post
date: 2025-01-08
topic: engineer
---

# Test Content`;

    vi.mocked(fs.readFileSync).mockReturnValue(mockFileContents);
    vi.mocked(path.join).mockReturnValue("_posts/test-post.md");

    const result = getPostBySlug("test-post");

    expect(result.title).toBe("Test Post");
    // gray-matter automatically parses dates as Date objects
    expect(result.date).toEqual(new Date("2025-01-08T00:00:00.000Z"));
    expect(result.topic).toBe("engineer");
    expect(result.slug).toBe("test-post");
    expect(result.content).toContain("# Test Content");
  });

  it("should strip .md extension from slug", () => {
    const mockFileContents = `---
title: Test Post
topic: lead
---

Content`;

    vi.mocked(fs.readFileSync).mockReturnValue(mockFileContents);

    const result = getPostBySlug("test-post.md");

    expect(result.slug).toBe("test-post");
  });

  it("should extract topic from coverImage if topic is missing", () => {
    const mockFileContents = `---
title: Test Post
coverImage: /assets/blog/categories/think.png
---

Content`;

    vi.mocked(fs.readFileSync).mockReturnValue(mockFileContents);

    const result = getPostBySlug("test-post");

    expect(result.topic).toBe("think");
  });

  it("should auto-generate coverImage and ogImage when topic is provided but images are missing", () => {
    const mockFileContents = `---
title: Test Post
topic: manage
---

Content`;

    vi.mocked(fs.readFileSync).mockReturnValue(mockFileContents);

    const result = getPostBySlug("test-post");

    expect(result.coverImage).toBe("/assets/blog/categories/manage.png");
    expect(result.ogImage?.url).toBe("/assets/blog/categories/manage.png");
  });
});

describe("getAllPosts", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return all posts sorted by date descending", () => {
    vi.mocked(fs.readdirSync).mockReturnValue([
      "post-1.md",
      "post-2.md",
      "post-3.md",
    ] as any);

    vi.mocked(fs.readFileSync)
      .mockReturnValueOnce(
        `---
title: Post 1
date: 2025-01-01
topic: engineer
---

Content 1`
      )
      .mockReturnValueOnce(
        `---
title: Post 2
date: 2025-01-15
topic: lead
---

Content 2`
      )
      .mockReturnValueOnce(
        `---
title: Post 3
date: 2025-01-10
topic: think
---

Content 3`
      );

    const results = getAllPosts();

    expect(results).toHaveLength(3);
    expect(results[0]?.title).toBe("Post 2"); // Latest date first
    expect(results[1]?.title).toBe("Post 3");
    expect(results[2]?.title).toBe("Post 1");
  });

  it("should return empty array when no posts exist", () => {
    vi.mocked(fs.readdirSync).mockReturnValue([] as any);

    const results = getAllPosts();

    expect(results).toHaveLength(0);
  });
});

describe("getAllTopics", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return unique topics in the correct order", () => {
    vi.mocked(fs.readdirSync).mockReturnValue([
      "post-1.md",
      "post-2.md",
      "post-3.md",
      "post-4.md",
    ] as any);

    vi.mocked(fs.readFileSync)
      .mockReturnValueOnce(
        `---
title: Post 1
date: 2025-01-01
topic: engineer
---

Content 1`
      )
      .mockReturnValueOnce(
        `---
title: Post 2
date: 2025-01-15
topic: lead
---

Content 2`
      )
      .mockReturnValueOnce(
        `---
title: Post 3
date: 2025-01-10
topic: engineer
---

Content 3`
      )
      .mockReturnValueOnce(
        `---
title: Post 4
date: 2025-01-05
topic: manage
---

Content 4`
      );

    const results = getAllTopics();

    expect(results).toEqual(["engineer", "lead", "manage"]);
  });

  it("should only return topics that exist in posts", () => {
    vi.mocked(fs.readdirSync).mockReturnValue(["post-1.md"] as any);

    vi.mocked(fs.readFileSync).mockReturnValueOnce(
      `---
title: Post 1
date: 2025-01-01
topic: engineer
---

Content 1`
    );

    const results = getAllTopics();

    expect(results).toEqual(["engineer"]);
    expect(results).not.toContain("lead");
    expect(results).not.toContain("manage");
    expect(results).not.toContain("think");
  });

  it("should maintain the predefined topic order", () => {
    vi.mocked(fs.readdirSync).mockReturnValue([
      "post-1.md",
      "post-2.md",
      "post-3.md",
      "post-4.md",
    ] as any);

    vi.mocked(fs.readFileSync)
      .mockReturnValueOnce(
        `---
topic: think
---`
      )
      .mockReturnValueOnce(
        `---
topic: manage
---`
      )
      .mockReturnValueOnce(
        `---
topic: lead
---`
      )
      .mockReturnValueOnce(
        `---
topic: engineer
---`
      );

    const results = getAllTopics();

    // Should be in the predefined order: engineer, lead, manage, think
    expect(results).toEqual(["engineer", "lead", "manage", "think"]);
  });
});
