import { Post } from "@/interfaces/post";
import { IPostRepository } from "@/domain/repositories/IPostRepository";
import { GetPostBySlugUseCase } from "../use-cases/GetPostBySlug";
import { GetAllPostsUseCase } from "../use-cases/GetAllPosts";
import { GetAllTopicsUseCase } from "../use-cases/GetAllTopics";

export class PostService {
  private readonly getPostBySlugUseCase: GetPostBySlugUseCase;
  private readonly getAllPostsUseCase: GetAllPostsUseCase;
  private readonly getAllTopicsUseCase: GetAllTopicsUseCase;

  constructor(private readonly postRepository: IPostRepository) {
    this.getPostBySlugUseCase = new GetPostBySlugUseCase(postRepository);
    this.getAllPostsUseCase = new GetAllPostsUseCase(postRepository);
    this.getAllTopicsUseCase = new GetAllTopicsUseCase(postRepository);
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

  getPostSlugs(): string[] {
    return this.postRepository.getAllSlugs();
  }
}
