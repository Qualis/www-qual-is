import { describe, it, expect, beforeEach } from "vitest";
import { container } from "./container";
import { InMemoryPostRepository } from "../repositories/InMemoryPostRepository";
import { FileSystemPostRepository } from "../repositories/FileSystemPostRepository";

describe("Container", () => {
  beforeEach(() => {
    container.reset();
  });

  it("should return a PostRepository instance", () => {
    const repository = container.getPostRepository();

    expect(repository).toBeInstanceOf(FileSystemPostRepository);
  });

  it("should return the same PostRepository instance on multiple calls", () => {
    const repository1 = container.getPostRepository();
    const repository2 = container.getPostRepository();

    expect(repository1).toBe(repository2);
  });

  it("should return a PostService instance", () => {
    const service = container.getPostService();

    expect(service).toBeDefined();
  });

  it("should return the same PostService instance on multiple calls", () => {
    const service1 = container.getPostService();
    const service2 = container.getPostService();

    expect(service1).toBe(service2);
  });

  it("should allow setting a custom repository", () => {
    const customRepository = new InMemoryPostRepository();

    container.setPostRepository(customRepository);

    expect(container.getPostRepository()).toBe(customRepository);
  });

  it("should reset service when setting new repository", () => {
    const service1 = container.getPostService();
    container.setPostRepository(new InMemoryPostRepository());
    const service2 = container.getPostService();

    expect(service1).not.toBe(service2);
  });

  it("should reset all instances", () => {
    const repository1 = container.getPostRepository();
    const service1 = container.getPostService();

    container.reset();

    const repository2 = container.getPostRepository();
    const service2 = container.getPostService();

    expect(repository1).not.toBe(repository2);
    expect(service1).not.toBe(service2);
  });
});
