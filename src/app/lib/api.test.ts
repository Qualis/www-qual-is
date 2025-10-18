import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  getPostBySlug,
  getAllPosts,
  getAllTopics,
  getPostNavigation,
} from "./api";
import { InMemoryPostRepository } from "@/infrastructure/repositories/InMemoryPostRepository";
import { createContainer, Container } from "@/infrastructure/di/container";

type MockedContainerModule = typeof import("@/infrastructure/di/container") & {
  setTestContainer: (container: Container) => void;
};

vi.mock("@/infrastructure/di/container", async () => {
  const actual = await vi.importActual<
    typeof import("@/infrastructure/di/container")
  >("@/infrastructure/di/container");
  let testContainer = actual.createContainer();
  return {
    ...actual,
    get container() {
      return testContainer;
    },
    setTestContainer: (
      container: ReturnType<typeof actual.createContainer>
    ) => {
      testContainer = container;
    },
  };
});

describe("getPostBySlug", () => {
  let repository: InMemoryPostRepository;

  beforeEach(async () => {
    const { setTestContainer } = (await import(
      "@/infrastructure/di/container"
    )) as MockedContainerModule;
    repository = new InMemoryPostRepository();
    setTestContainer(createContainer({ postRepository: repository }));
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

  beforeEach(async () => {
    const { setTestContainer } = (await import(
      "@/infrastructure/di/container"
    )) as MockedContainerModule;
    repository = new InMemoryPostRepository();
    setTestContainer(createContainer({ postRepository: repository }));
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

  beforeEach(async () => {
    const { setTestContainer } = (await import(
      "@/infrastructure/di/container"
    )) as MockedContainerModule;
    repository = new InMemoryPostRepository();
    setTestContainer(createContainer({ postRepository: repository }));
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

describe("getPostNavigation", () => {
  let repository: InMemoryPostRepository;

  beforeEach(async () => {
    const { setTestContainer } = (await import(
      "@/infrastructure/di/container"
    )) as MockedContainerModule;
    repository = new InMemoryPostRepository();
    setTestContainer(createContainer({ postRepository: repository }));
  });

  it("should return navigation with null next for the newest post", () => {
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

    const result = getPostNavigation("post-2");

    expect(result.next).toBeNull();
    expect(result.previous).not.toBeNull();
  });

  it("should return navigation with null previous for the oldest post", () => {
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

    const result = getPostNavigation("post-1");

    expect(result.previous).toBeNull();
    expect(result.next).not.toBeNull();
  });

  it("should return both previous and next for a middle post", () => {
    repository.addPost(
      "post-1",
      { title: "Post 1", date: new Date("2025-01-01"), topic: "engineer" },
      "Content 1"
    );
    repository.addPost(
      "post-2",
      { title: "Post 2", date: new Date("2025-01-10"), topic: "lead" },
      "Content 2"
    );
    repository.addPost(
      "post-3",
      { title: "Post 3", date: new Date("2025-01-15"), topic: "think" },
      "Content 3"
    );

    const result = getPostNavigation("post-2");

    expect(result.previous).not.toBeNull();
    expect(result.next).not.toBeNull();
    expect(result.previous?.slug).toBe("post-1");
    expect(result.next?.slug).toBe("post-3");
  });

  it("should return correct slugs and titles in navigation links", () => {
    repository.addPost(
      "post-1",
      { title: "First Post", date: new Date("2025-01-01"), topic: "engineer" },
      "Content 1"
    );
    repository.addPost(
      "post-2",
      { title: "Second Post", date: new Date("2025-01-10"), topic: "lead" },
      "Content 2"
    );
    repository.addPost(
      "post-3",
      { title: "Third Post", date: new Date("2025-01-15"), topic: "think" },
      "Content 3"
    );

    const result = getPostNavigation("post-2");

    expect(result.previous?.slug).toBe("post-1");
    expect(result.previous?.title).toBe("First Post");
    expect(result.next?.slug).toBe("post-3");
    expect(result.next?.title).toBe("Third Post");
  });
});
