import {
  IPostRepository,
  RawPostData,
} from "@/domain/repositories/IPostRepository";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

export class FileSystemPostRepository implements IPostRepository {
  private readonly postsDirectory: string;

  constructor(postsDirectory?: string) {
    this.postsDirectory = postsDirectory || join(process.cwd(), "_posts");
  }

  getAllSlugs(): string[] {
    try {
      return fs.readdirSync(this.postsDirectory);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      throw new Error(
        `Failed to read posts directory at "${this.postsDirectory}". ` +
          `Ensure the directory exists and is readable. Original error: ${errorMessage}`
      );
    }
  }

  getRawPostData(slug: string): RawPostData {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(this.postsDirectory, `${realSlug}.md`);

    if (!fs.existsSync(fullPath)) {
      throw new Error(
        `Post file not found: "${realSlug}.md" at path "${fullPath}". ` +
          `Available posts: ${this.getAllSlugs().join(", ")}`
      );
    }

    try {
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: realSlug,
        frontMatter: data,
        content,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      throw new Error(
        `Failed to parse post file "${realSlug}.md". ` +
          `Check that the file has valid frontmatter and UTF-8 encoding. ` +
          `Original error: ${errorMessage}`
      );
    }
  }
}
