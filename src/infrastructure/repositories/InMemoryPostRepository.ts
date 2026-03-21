import {
  IPostRepository,
  RawPostData,
} from "@/domain/repositories/IPostRepository";

export class InMemoryPostRepository implements IPostRepository {
  private posts: Map<string, RawPostData> = new Map();

  addPost(
    slug: string,
    frontMatter: Record<string, any>,
    content: string
  ): void {
    const realSlug = slug.replace(/\.md$/, "");
    this.posts.set(realSlug, {
      slug: realSlug,
      frontMatter,
      content,
    });
  }

  getAllSlugs(): string[] {
    return Array.from(this.posts.keys()).map((slug) => `${slug}.md`);
  }

  getRawPostData(slug: string): RawPostData | null {
    const realSlug = slug.replace(/\.md$/, "");
    return this.posts.get(realSlug) ?? null;
  }

  clear(): void {
    this.posts.clear();
  }
}
