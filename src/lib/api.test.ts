import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  buildImageUrls,
  extractTopicFromCoverImage,
  getPostBySlug,
  getPostSlugs,
  getAllPosts,
  getAllTopics,
} from "./api";
import { InMemoryPostRepository } from "@/infrastructure/repositories/InMemoryPostRepository";
import { container } from "@/infrastructure/di/container";

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

  it("should build correct coverImage for different topics", () => {
    const result = buildImageUrls("lead");

    expect(result.coverImage).toBe("/assets/blog/categories/lead.png");
  });

  it("should build correct ogImage URL for different topics", () => {
    const result = buildImageUrls("lead");

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

describe("getPostSlugs", () => {
  let repository: InMemoryPostRepository;

  beforeEach(() => {
    repository = new InMemoryPostRepository();
    container.setPostRepository(repository);
  });

  afterEach(() => {
    container.reset();
  });

  it("should return all post slugs", () => {
    repository.addPost("post-1", { topic: "engineer" }, "Content 1");
    repository.addPost("post-2", { topic: "lead" }, "Content 2");
    repository.addPost("post-3", { topic: "think" }, "Content 3");

    const results = getPostSlugs();

    expect(results).toHaveLength(3);
  });
});

describe("getPostBySlug", () => {
  let repository: InMemoryPostRepository;

  beforeEach(() => {
    repository = new InMemoryPostRepository();
    container.setPostRepository(repository);
  });

  afterEach(() => {
    container.reset();
  });

  it("should parse the post title correctly", () => {
    repository.addPost(
      "test-post",
      { title: "Test Post", date: new Date("2025-01-08"), topic: "engineer" },
      "# Test Content"
    );

    const result = getPostBySlug("test-post");

    expect(result.title).toBe("Test Post");
  });

  it("should parse the post date correctly", () => {
    repository.addPost(
      "test-post",
      { title: "Test Post", date: new Date("2025-01-08"), topic: "engineer" },
      "# Test Content"
    );

    const result = getPostBySlug("test-post");

    expect(result.date).toEqual(new Date("2025-01-08T00:00:00.000Z"));
  });

  it("should parse the post topic correctly", () => {
    repository.addPost(
      "test-post",
      { title: "Test Post", date: new Date("2025-01-08"), topic: "engineer" },
      "# Test Content"
    );

    const result = getPostBySlug("test-post");

    expect(result.topic).toBe("engineer");
  });

  it("should set the slug from the filename", () => {
    repository.addPost(
      "test-post",
      { title: "Test Post", date: new Date("2025-01-08"), topic: "engineer" },
      "# Test Content"
    );

    const result = getPostBySlug("test-post");

    expect(result.slug).toBe("test-post");
  });

  it("should parse the post content correctly", () => {
    repository.addPost(
      "test-post",
      { title: "Test Post", date: new Date("2025-01-08"), topic: "engineer" },
      "# Test Content"
    );

    const result = getPostBySlug("test-post");

    expect(result.content).toContain("# Test Content");
  });

  it("should strip .md extension from slug", () => {
    repository.addPost(
      "test-post",
      { title: "Test Post", topic: "lead" },
      "Content"
    );

    const result = getPostBySlug("test-post.md");

    expect(result.slug).toBe("test-post");
  });

  it("should extract topic from coverImage if topic is missing", () => {
    repository.addPost(
      "test-post",
      { title: "Test Post", coverImage: "/assets/blog/categories/think.png" },
      "Content"
    );

    const result = getPostBySlug("test-post");

    expect(result.topic).toBe("think");
  });

  it("should auto-generate coverImage when topic is provided but coverImage is missing", () => {
    repository.addPost(
      "test-post",
      { title: "Test Post", topic: "manage" },
      "Content"
    );

    const result = getPostBySlug("test-post");

    expect(result.coverImage).toBe("/assets/blog/categories/manage.png");
  });

  it("should auto-generate ogImage when topic is provided but ogImage is missing", () => {
    repository.addPost(
      "test-post",
      { title: "Test Post", topic: "manage" },
      "Content"
    );

    const result = getPostBySlug("test-post");

    expect(result.ogImage?.url).toBe("/assets/blog/categories/manage.png");
  });

  it("should auto-generate coverImage when topic is provided and ogImage exists", () => {
    repository.addPost(
      "test-post",
      {
        title: "Test Post",
        topic: "manage",
        ogImage: { url: "/custom-og-image.png" },
      },
      "Content"
    );

    const result = getPostBySlug("test-post");

    expect(result.coverImage).toBe("/assets/blog/categories/manage.png");
  });

  it("should preserve custom ogImage when provided", () => {
    repository.addPost(
      "test-post",
      {
        title: "Test Post",
        topic: "manage",
        ogImage: { url: "/custom-og-image.png" },
      },
      "Content"
    );

    const result = getPostBySlug("test-post");

    expect(result.ogImage?.url).toBe("/custom-og-image.png");
  });
});

describe("getAllPosts", () => {
  let repository: InMemoryPostRepository;

  beforeEach(() => {
    repository = new InMemoryPostRepository();
    container.setPostRepository(repository);
  });

  afterEach(() => {
    container.reset();
  });

  it("should return all posts", () => {
    repository.addPost(
      "post-1",
      { title: "Post 1", date: new Date("2025-01-01"), topic: "engineer" },
      "Content 1"
    );
    repository.addPost(
      "post-2",
      { title: "Post 2", date: new Date("2025-01-15"), topic: "lead" },
      "Content 2"
    );
    repository.addPost(
      "post-3",
      { title: "Post 3", date: new Date("2025-01-10"), topic: "think" },
      "Content 3"
    );

    const results = getAllPosts();

    expect(results).toHaveLength(3);
  });

  it("should return posts with most recent date first", () => {
    repository.addPost(
      "post-1",
      { title: "Post 1", date: new Date("2025-01-01"), topic: "engineer" },
      "Content 1"
    );
    repository.addPost(
      "post-2",
      { title: "Post 2", date: new Date("2025-01-15"), topic: "lead" },
      "Content 2"
    );
    repository.addPost(
      "post-3",
      { title: "Post 3", date: new Date("2025-01-10"), topic: "think" },
      "Content 3"
    );

    const results = getAllPosts();

    expect(results[0]?.title).toBe("Post 2");
  });

  it("should return posts with second most recent date second", () => {
    repository.addPost(
      "post-1",
      { title: "Post 1", date: new Date("2025-01-01"), topic: "engineer" },
      "Content 1"
    );
    repository.addPost(
      "post-2",
      { title: "Post 2", date: new Date("2025-01-15"), topic: "lead" },
      "Content 2"
    );
    repository.addPost(
      "post-3",
      { title: "Post 3", date: new Date("2025-01-10"), topic: "think" },
      "Content 3"
    );

    const results = getAllPosts();

    expect(results[1]?.title).toBe("Post 3");
  });

  it("should return posts with oldest date last", () => {
    repository.addPost(
      "post-1",
      { title: "Post 1", date: new Date("2025-01-01"), topic: "engineer" },
      "Content 1"
    );
    repository.addPost(
      "post-2",
      { title: "Post 2", date: new Date("2025-01-15"), topic: "lead" },
      "Content 2"
    );
    repository.addPost(
      "post-3",
      { title: "Post 3", date: new Date("2025-01-10"), topic: "think" },
      "Content 3"
    );

    const results = getAllPosts();

    expect(results[2]?.title).toBe("Post 1");
  });

  it("should return empty array when no posts exist", () => {
    const results = getAllPosts();

    expect(results).toHaveLength(0);
  });
});

describe("getAllTopics", () => {
  let repository: InMemoryPostRepository;

  beforeEach(() => {
    repository = new InMemoryPostRepository();
    container.setPostRepository(repository);
  });

  afterEach(() => {
    container.reset();
  });

  it("should return unique topics in the correct order", () => {
    repository.addPost(
      "post-1",
      { title: "Post 1", date: new Date("2025-01-01"), topic: "engineer" },
      "Content 1"
    );
    repository.addPost(
      "post-2",
      { title: "Post 2", date: new Date("2025-01-15"), topic: "lead" },
      "Content 2"
    );
    repository.addPost(
      "post-3",
      { title: "Post 3", date: new Date("2025-01-10"), topic: "engineer" },
      "Content 3"
    );
    repository.addPost(
      "post-4",
      { title: "Post 4", date: new Date("2025-01-05"), topic: "manage" },
      "Content 4"
    );

    const results = getAllTopics();

    expect(results).toEqual(["engineer", "lead", "manage"]);
  });

  it("should only return topics that exist in posts", () => {
    repository.addPost(
      "post-1",
      { title: "Post 1", date: new Date("2025-01-01"), topic: "engineer" },
      "Content 1"
    );

    const results = getAllTopics();

    expect(results).toEqual(["engineer"]);
  });

  it("should not include lead topic when no posts have lead topic", () => {
    repository.addPost(
      "post-1",
      { title: "Post 1", date: new Date("2025-01-01"), topic: "engineer" },
      "Content 1"
    );

    const results = getAllTopics();

    expect(results).not.toContain("lead");
  });

  it("should not include manage topic when no posts have manage topic", () => {
    repository.addPost(
      "post-1",
      { title: "Post 1", date: new Date("2025-01-01"), topic: "engineer" },
      "Content 1"
    );

    const results = getAllTopics();

    expect(results).not.toContain("manage");
  });

  it("should not include think topic when no posts have think topic", () => {
    repository.addPost(
      "post-1",
      { title: "Post 1", date: new Date("2025-01-01"), topic: "engineer" },
      "Content 1"
    );

    const results = getAllTopics();

    expect(results).not.toContain("think");
  });

  it("should maintain the predefined topic order", () => {
    repository.addPost("post-1", { topic: "think" }, "");
    repository.addPost("post-2", { topic: "manage" }, "");
    repository.addPost("post-3", { topic: "lead" }, "");
    repository.addPost("post-4", { topic: "engineer" }, "");

    const results = getAllTopics();

    expect(results).toEqual(["engineer", "lead", "manage", "think"]);
  });
});
