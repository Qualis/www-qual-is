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
    return fs.readdirSync(this.postsDirectory);
  }

  getRawPostData(slug: string): RawPostData {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(this.postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: realSlug,
      frontMatter: data,
      content,
    };
  }
}
