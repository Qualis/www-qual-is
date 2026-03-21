import { Post } from "@/interfaces/post";
import { IPostRepository } from "@/domain/repositories/IPostRepository";
import { parsePostData } from "@/lib/transformers";

export class GetPostBySlugUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  execute(slug: string): Post | null {
    const rawData = this.postRepository.getRawPostData(slug);
    if (!rawData) {
      return null;
    }
    return parsePostData(rawData.slug, rawData.frontMatter, rawData.content);
  }
}
