import { describe, it, expect } from "vitest";
import { FileSystemPostRepository } from "./FileSystemPostRepository";
import { join } from "path";
import fs from "fs";
import { afterEach, vi } from "vitest";

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

  describe("error handling", () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    it("should throw error when posts directory does not exist", () => {
      const repository = new FileSystemPostRepository("/nonexistent/path");

      expect(() => repository.getAllSlugs()).toThrow(
        'Failed to read posts directory at "/nonexistent/path"'
      );
    });

    it("should include original error message when directory read fails", () => {
      const repository = new FileSystemPostRepository("/nonexistent/path");

      expect(() => repository.getAllSlugs()).toThrow(/Original error:/);
    });

    it("should throw error when post file does not exist", () => {
      const repository = new FileSystemPostRepository();

      expect(() => repository.getRawPostData("nonexistent-post")).toThrow(
        'Post file not found: "nonexistent-post.md"'
      );
    });

    it("should include path in error message when post file not found", () => {
      const repository = new FileSystemPostRepository();

      expect(() => repository.getRawPostData("nonexistent-post")).toThrow(
        /at path/
      );
    });

    it("should list available posts when post file not found", () => {
      const repository = new FileSystemPostRepository();

      expect(() => repository.getRawPostData("nonexistent-post")).toThrow(
        /Available posts:/
      );
    });

    it("should throw error when post file has invalid YAML", () => {
      const repository = new FileSystemPostRepository();
      const slugs = repository.getAllSlugs();
      const firstSlug = slugs[0];

      const malformedYaml = `---
title: Test
invalid: [unclosed array
---
content`;

      vi.spyOn(fs, "readFileSync").mockReturnValue(malformedYaml);

      expect(() => repository.getRawPostData(firstSlug!)).toThrow(
        "Failed to parse post file"
      );
    });

    it("should throw error when readFileSync throws", () => {
      const repository = new FileSystemPostRepository();
      const slugs = repository.getAllSlugs();
      const firstSlug = slugs[0];

      vi.spyOn(fs, "readFileSync").mockImplementation(() => {
        throw new Error("Permission denied");
      });

      expect(() => repository.getRawPostData(firstSlug!)).toThrow(
        "Failed to parse post file"
      );
    });

    it("should handle non-Error exceptions in getAllSlugs", () => {
      vi.spyOn(fs, "readdirSync").mockImplementation(() => {
        throw "String error";
      });

      const repository = new FileSystemPostRepository();

      expect(() => repository.getAllSlugs()).toThrow(/String error/);
    });

    it("should handle non-Error exceptions in getRawPostData", () => {
      const repository = new FileSystemPostRepository();
      const slugs = repository.getAllSlugs();
      const firstSlug = slugs[0];

      vi.spyOn(fs, "readFileSync").mockImplementation(() => {
        throw "String error";
      });

      expect(() => repository.getRawPostData(firstSlug!)).toThrow(
        /String error/
      );
    });
  });
});
