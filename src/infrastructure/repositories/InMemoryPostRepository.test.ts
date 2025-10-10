import { describe, it, expect, beforeEach } from "vitest";
import { InMemoryPostRepository } from "./InMemoryPostRepository";

describe("InMemoryPostRepository", () => {
  let repository: InMemoryPostRepository;

  beforeEach(() => {
    repository = new InMemoryPostRepository();
  });

  it("should return empty array when no posts exist", () => {
    const slugs = repository.getAllSlugs();

    expect(slugs).toEqual([]);
  });

  it("should add and retrieve a post", () => {
    repository.addPost("test-post", { title: "Test" }, "Content");

    const slugs = repository.getAllSlugs();

    expect(slugs).toEqual(["test-post.md"]);
  });

  it("should retrieve raw post data", () => {
    repository.addPost("test-post", { title: "Test" }, "Content");

    const data = repository.getRawPostData("test-post");

    expect(data).toEqual({
      slug: "test-post",
      frontMatter: { title: "Test" },
      content: "Content",
    });
  });

  it("should strip .md extension when retrieving raw post data", () => {
    repository.addPost("test-post", { title: "Test" }, "Content");

    const data = repository.getRawPostData("test-post.md");

    expect(data.slug).toBe("test-post");
  });

  it("should throw error when post not found", () => {
    expect(() => repository.getRawPostData("non-existent")).toThrow(
      "Post not found: non-existent"
    );
  });

  it("should clear all posts", () => {
    repository.addPost("post-1", { title: "Post 1" }, "Content 1");
    repository.addPost("post-2", { title: "Post 2" }, "Content 2");

    repository.clear();

    expect(repository.getAllSlugs()).toEqual([]);
  });

  it("should add multiple posts", () => {
    repository.addPost("post-1", { title: "Post 1" }, "Content 1");
    repository.addPost("post-2", { title: "Post 2" }, "Content 2");

    const slugs = repository.getAllSlugs();

    expect(slugs).toHaveLength(2);
  });
});
