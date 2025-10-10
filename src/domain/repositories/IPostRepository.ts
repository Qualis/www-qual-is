export interface RawPostData {
  slug: string;
  frontMatter: Record<string, any>;
  content: string;
}

export interface IPostRepository {
  getAllSlugs(): string[];
  getRawPostData(slug: string): RawPostData;
}
