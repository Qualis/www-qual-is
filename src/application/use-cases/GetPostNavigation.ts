import { IPostRepository } from "@/domain/repositories/IPostRepository";
import { PostNavigation } from "@/interfaces/postNavigation";
import { GetAllPostsUseCase } from "./GetAllPosts";

export class GetPostNavigationUseCase {
  private readonly getAllPostsUseCase: GetAllPostsUseCase;

  constructor(postRepository: IPostRepository) {
    this.getAllPostsUseCase = new GetAllPostsUseCase(postRepository);
  }

  execute(slug: string): PostNavigation {
    const allPosts = this.getAllPostsUseCase.execute();
    const currentIndex = allPosts.findIndex((post) => post.slug === slug);

    if (currentIndex === -1) {
      return { previous: null, next: null };
    }

    const previousPost = allPosts[currentIndex + 1];
    const nextPost = allPosts[currentIndex - 1];

    return {
      previous: previousPost
        ? { slug: previousPost.slug, title: previousPost.title }
        : null,
      next: nextPost ? { slug: nextPost.slug, title: nextPost.title } : null,
    };
  }
}
