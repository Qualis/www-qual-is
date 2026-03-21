import { IPostRepository } from "@/domain/repositories/IPostRepository";
import { parsePostData, filterExistingTopics } from "@/lib/transformers";

export class GetAllTopicsUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  execute(): string[] {
    const slugs = this.postRepository.getAllSlugs();
    const posts = slugs
      .map((slug) => this.postRepository.getRawPostData(slug))
      .filter((rawData) => rawData !== null)
      .map((rawData) =>
        parsePostData(rawData.slug, rawData.frontMatter, rawData.content)
      );
    return filterExistingTopics(posts);
  }
}
