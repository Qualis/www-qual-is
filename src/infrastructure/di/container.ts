import { IPostRepository } from "@/domain/repositories/IPostRepository";
import { FileSystemPostRepository } from "@/infrastructure/repositories/FileSystemPostRepository";
import { PostService } from "@/application/services/PostService";

export interface Dependencies {
  postRepository?: IPostRepository;
}

export class Container {
  private _postRepository?: IPostRepository;
  private _postService?: PostService;

  constructor(private readonly deps?: Dependencies) {}

  getPostRepository(): IPostRepository {
    if (!this._postRepository) {
      this._postRepository =
        this.deps?.postRepository ?? new FileSystemPostRepository();
    }
    return this._postRepository;
  }

  getPostService(): PostService {
    if (!this._postService) {
      this._postService = new PostService(this.getPostRepository());
    }
    return this._postService;
  }
}

export function createContainer(deps?: Dependencies): Container {
  return new Container(deps);
}

export const container = createContainer();
