import { IPostRepository } from "@/domain/repositories/IPostRepository";
import { FileSystemPostRepository } from "@/infrastructure/repositories/FileSystemPostRepository";
import { PostService } from "@/application/services/PostService";

class Container {
  private static instance: Container;
  private postRepository?: IPostRepository;
  private postService?: PostService;

  private constructor() {}

  static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container();
    }
    return Container.instance;
  }

  getPostRepository(): IPostRepository {
    if (!this.postRepository) {
      this.postRepository = new FileSystemPostRepository();
    }
    return this.postRepository;
  }

  getPostService(): PostService {
    if (!this.postService) {
      this.postService = new PostService(this.getPostRepository());
    }
    return this.postService;
  }

  setPostRepository(repository: IPostRepository): void {
    this.postRepository = repository;
    delete (this as unknown as { postService?: PostService }).postService;
  }

  reset(): void {
    delete (this as unknown as { postRepository?: IPostRepository })
      .postRepository;
    delete (this as unknown as { postService?: PostService }).postService;
  }
}

export const container = Container.getInstance();
