import { describe, it, expect, beforeEach } from "vitest";
import { GetPostNavigationUseCase } from "./GetPostNavigation";
import { InMemoryPostRepository } from "@/infrastructure/repositories/InMemoryPostRepository";

describe("GetPostNavigationUseCase", () => {
  let repository: InMemoryPostRepository;
  let useCase: GetPostNavigationUseCase;

  beforeEach(() => {
    repository = new InMemoryPostRepository();
    useCase = new GetPostNavigationUseCase(repository);
  });

  it("should return null for both previous and next when post is not found", () => {
    repository.addPost(
      "post-1",
      { title: "Post 1", date: new Date("2025-01-01"), topic: "engineer" },
      "Content 1"
    );

    const result = useCase.execute("non-existent-slug");

    expect(result.previous).toBeNull();
    expect(result.next).toBeNull();
  });

  it("should return null for next when viewing the newest post", () => {
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

    const result = useCase.execute("post-2");

    expect(result.next).toBeNull();
  });

  it("should return null for previous when viewing the oldest post", () => {
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

    const result = useCase.execute("post-1");

    expect(result.previous).toBeNull();
  });

  it("should return previous post (older) for a middle post", () => {
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

    const result = useCase.execute("post-2");

    expect(result.previous).not.toBeNull();
    expect(result.previous?.slug).toBe("post-1");
    expect(result.previous?.title).toBe("Post 1");
  });

  it("should return next post (newer) for a middle post", () => {
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

    const result = useCase.execute("post-2");

    expect(result.next).not.toBeNull();
    expect(result.next?.slug).toBe("post-3");
    expect(result.next?.title).toBe("Post 3");
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

    const result = useCase.execute("post-2");

    expect(result.previous).not.toBeNull();
    expect(result.next).not.toBeNull();
    expect(result.previous?.slug).toBe("post-1");
    expect(result.next?.slug).toBe("post-3");
  });

  it("should return previous post when viewing the newest of two posts", () => {
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

    const result = useCase.execute("post-2");

    expect(result.previous).not.toBeNull();
    expect(result.previous?.slug).toBe("post-1");
    expect(result.next).toBeNull();
  });

  it("should return next post when viewing the oldest of two posts", () => {
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

    const result = useCase.execute("post-1");

    expect(result.next).not.toBeNull();
    expect(result.next?.slug).toBe("post-2");
    expect(result.previous).toBeNull();
  });

  it("should return only slug and title in navigation links", () => {
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

    const result = useCase.execute("post-2");

    expect(result.previous).toHaveProperty("slug");
    expect(result.previous).toHaveProperty("title");
    expect(Object.keys(result.previous || {})).toEqual(["slug", "title"]);
  });
});
