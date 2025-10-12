import { Post } from "@/interfaces/post";

function buildImageUrls(topic: string) {
  const categoryImageUrl = `/assets/blog/categories/${topic}.png`;
  return {
    coverImage: categoryImageUrl,
    ogImage: {
      url: categoryImageUrl,
    },
  };
}

function extractTopicFromCoverImage(coverImage: string): string {
  const match = coverImage.match(/\/assets\/blog\/categories\/([^.]+)\.png/);
  return match?.[1] ?? "uncategorized";
}

export function parsePostData(
  slug: string,
  frontMatter: Record<string, any>,
  content: string
): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const topic =
    frontMatter.topic || extractTopicFromCoverImage(frontMatter.coverImage);

  let coverImage = frontMatter.coverImage;
  let ogImage = frontMatter.ogImage;

  if (frontMatter.topic && (!coverImage || !ogImage?.url)) {
    const imageUrls = buildImageUrls(frontMatter.topic);
    if (!coverImage) coverImage = imageUrls.coverImage;
    if (!ogImage?.url) ogImage = imageUrls.ogImage;
  }

  return {
    ...frontMatter,
    slug: realSlug,
    content,
    topic,
    coverImage,
    ogImage,
  } as Post;
}

export function sortPostsByDate(posts: Post[]): Post[] {
  return [...posts].sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

export function filterExistingTopics(posts: Post[]): string[] {
  const topicsSet = new Set(posts.map((post) => post.topic));
  const topicOrder = ["engineer", "lead", "manage", "think"];
  return topicOrder.filter((topic) => topicsSet.has(topic));
}
