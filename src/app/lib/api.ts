import { Post } from "@/interfaces/post";
import { PostNavigation } from "@/interfaces/postNavigation";
import { container } from "@/infrastructure/di/container";

export function getPostBySlug(slug: string): Post {
  const postService = container.getPostService();
  return postService.getPostBySlug(slug);
}

export function getAllPosts(): Post[] {
  const postService = container.getPostService();
  return postService.getAllPosts();
}

export function getAllTopics(): string[] {
  const postService = container.getPostService();
  return postService.getAllTopics();
}

export function getPostNavigation(slug: string): PostNavigation {
  const postService = container.getPostService();
  return postService.getPostNavigation(slug);
}
