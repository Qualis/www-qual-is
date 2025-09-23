import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function buildImageUrls(topic: string) {
  const categoryImageUrl = `/assets/blog/categories/${topic}.png`;
  return {
    coverImage: categoryImageUrl,
    ogImage: {
      url: categoryImageUrl,
    },
  };
}

export function extractTopicFromCoverImage(coverImage: string): string {
  const match = coverImage.match(/\/assets\/blog\/categories\/([^.]+)\.png/);
  return match ? match[1] : "uncategorized";
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  let topic = data.topic || extractTopicFromCoverImage(data.coverImage);

  if (data.topic && (!data.coverImage || !data.ogImage?.url)) {
    const imageUrls = buildImageUrls(data.topic);

    if (!data.coverImage) data.coverImage = imageUrls.coverImage;
    if (!data.ogImage?.url) data.ogImage = imageUrls.ogImage;
  }

  return { ...data, slug: realSlug, content, topic } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAllTopics(): string[] {
  const posts = getAllPosts();
  const topicsSet = new Set(posts.map((post) => post.topic));
  const topicOrder = ["engineer", "lead", "manage", "think"];
  return topicOrder.filter(topic => topicsSet.has(topic));
}
