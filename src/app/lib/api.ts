import { Post } from "@/interfaces/post";
import { container } from "@/infrastructure/di/container";

export { buildImageUrls, extractTopicFromCoverImage } from "@/lib/transformers";

export function getPostSlugs(): string[] {
  const postService = container.getPostService();
  return postService.getPostSlugs();
}

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
