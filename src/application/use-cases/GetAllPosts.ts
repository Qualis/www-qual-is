import { Post } from "@/interfaces/post";
import { IPostRepository } from "@/domain/repositories/IPostRepository";
import { parsePostData, sortPostsByDate } from "@/lib/transformers";

export class GetAllPostsUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  execute(): Post[] {
    const slugs = this.postRepository.getAllSlugs();
    const posts = slugs.map((slug) => {
      const rawData = this.postRepository.getRawPostData(slug);
      return parsePostData(rawData.slug, rawData.frontMatter, rawData.content);
    });
    return sortPostsByDate(posts);
  }
}
