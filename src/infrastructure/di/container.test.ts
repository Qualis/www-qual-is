import { describe, it, expect } from "vitest";
import { createContainer } from "./container";
import { InMemoryPostRepository } from "../repositories/InMemoryPostRepository";
import { FileSystemPostRepository } from "../repositories/FileSystemPostRepository";

describe("Container", () => {
  it("should return a PostRepository instance", () => {
    const container = createContainer();
    const repository = container.getPostRepository();

    expect(repository).toBeInstanceOf(FileSystemPostRepository);
  });

  it("should return the same PostRepository instance on multiple calls", () => {
    const container = createContainer();
    const repository1 = container.getPostRepository();
    const repository2 = container.getPostRepository();

    expect(repository1).toBe(repository2);
  });

  it("should return a PostService instance", () => {
    const container = createContainer();
    const service = container.getPostService();

    expect(service).toBeDefined();
  });

  it("should return the same PostService instance on multiple calls", () => {
    const container = createContainer();
    const service1 = container.getPostService();
    const service2 = container.getPostService();

    expect(service1).toBe(service2);
  });

  it("should allow injecting a custom repository", () => {
    const customRepository = new InMemoryPostRepository();
    const container = createContainer({ postRepository: customRepository });

    expect(container.getPostRepository()).toBe(customRepository);
  });

  it("should create new service with injected repository", () => {
    const customRepository = new InMemoryPostRepository();
    const container = createContainer({ postRepository: customRepository });
    const service = container.getPostService();

    expect(service).toBeDefined();
    expect(container.getPostRepository()).toBe(customRepository);
  });

  it("should provide isolated instances per container", () => {
    const container1 = createContainer();
    const container2 = createContainer();

    const repository1 = container1.getPostRepository();
    const repository2 = container2.getPostRepository();
    const service1 = container1.getPostService();
    const service2 = container2.getPostService();

    expect(repository1).not.toBe(repository2);
    expect(service1).not.toBe(service2);
  });
});
