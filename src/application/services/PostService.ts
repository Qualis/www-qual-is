import { Post } from "@/interfaces/post";
import { IPostRepository } from "@/domain/repositories/IPostRepository";
import { PostNavigation } from "@/interfaces/postNavigation";
import { GetPostBySlugUseCase } from "../use-cases/GetPostBySlug";
import { GetAllPostsUseCase } from "../use-cases/GetAllPosts";
import { GetAllTopicsUseCase } from "../use-cases/GetAllTopics";
import { GetPostNavigationUseCase } from "../use-cases/GetPostNavigation";

export class PostService {
  private readonly getPostBySlugUseCase: GetPostBySlugUseCase;
  private readonly getAllPostsUseCase: GetAllPostsUseCase;
  private readonly getAllTopicsUseCase: GetAllTopicsUseCase;
  private readonly getPostNavigationUseCase: GetPostNavigationUseCase;

  constructor(postRepository: IPostRepository) {
    this.getPostBySlugUseCase = new GetPostBySlugUseCase(postRepository);
    this.getAllPostsUseCase = new GetAllPostsUseCase(postRepository);
    this.getAllTopicsUseCase = new GetAllTopicsUseCase(postRepository);
    this.getPostNavigationUseCase = new GetPostNavigationUseCase(
      postRepository
    );
  }

  getPostBySlug(slug: string): Post {
    return this.getPostBySlugUseCase.execute(slug);
  }

  getAllPosts(): Post[] {
    return this.getAllPostsUseCase.execute();
  }

  getAllTopics(): string[] {
    return this.getAllTopicsUseCase.execute();
  }

  getPostNavigation(slug: string): PostNavigation {
    return this.getPostNavigationUseCase.execute(slug);
  }
}
