import { describe, it, expect, vi, beforeEach } from "vitest";
import OgImage, {
  size,
  contentType,
  generateStaticParams,
} from "./opengraph-image";

const mockPost = {
  slug: "test-post",
  title: "Test Post Title",
  date: "2026-01-15",
  excerpt: "Test excerpt",
  author: { name: "SVO", picture: "/assets/blog/authors/svo.png" },
  coverImage: "/assets/blog/categories/think.png",
  topic: "think",
  ogImage: { url: "/assets/blog/categories/think.png" },
  content: "Content here",
};

const mockPosts = [
  mockPost,
  {
    ...mockPost,
    slug: "second-post",
    title: "Second Post",
    topic: "engineer",
  },
  {
    ...mockPost,
    slug: "unknown-topic-post",
    title: "Unknown Topic Post",
    topic: "unknown",
  },
];

vi.mock("@/app/lib/api", () => ({
  getPostBySlug: vi.fn((slug: string) =>
    mockPosts.find((p) => p.slug === slug)
  ),
  getAllPosts: vi.fn(() => mockPosts),
}));

vi.mock("next/navigation", () => ({
  notFound: vi.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

vi.mock("next/og", () => ({
  ImageResponse: class MockImageResponse {
    constructor(
      public element: React.ReactElement,
      public options: Record<string, unknown>
    ) {}
  },
}));

describe("OpenGraph Image", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should export correct image dimensions", () => {
    expect(size.width).toBe(1200);
    expect(size.height).toBe(630);
  });

  it("should export PNG content type", () => {
    expect(contentType).toBe("image/png");
  });

  it("should return an ImageResponse for a valid post", async () => {
    const result = await OgImage({
      params: Promise.resolve({ slug: "test-post" }),
    });

    expect(result).toBeDefined();
  });

  it("should fall back to default color for unknown topic", async () => {
    const result = await OgImage({
      params: Promise.resolve({ slug: "unknown-topic-post" }),
    });

    expect(result).toBeDefined();
  });

  it("should call notFound when post does not exist", async () => {
    await expect(
      OgImage({ params: Promise.resolve({ slug: "nonexistent-post" }) })
    ).rejects.toThrow("NEXT_NOT_FOUND");
  });

  it("should generate static params for all posts", async () => {
    const params = await generateStaticParams();

    expect(params).toEqual([
      { slug: "test-post" },
      { slug: "second-post" },
      { slug: "unknown-topic-post" },
    ]);
  });
});
