import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MorePosts } from "./more-posts";
import { Post } from "@/interfaces/post";

vi.mock("./post-preview", () => ({
  PostPreview: ({ title }: { title: string }) => (
    <div data-testid="post-preview">{title}</div>
  ),
}));

describe("MorePosts", () => {
  const mockPosts: Post[] = [
    {
      slug: "post-1",
      title: "First Post",
      date: "2024-01-01",
      coverImage: "/image1.jpg",
      excerpt: "First excerpt",
      ogImage: { url: "/og1.jpg" },
      content: "Content 1",
      author: { name: "Author 1", picture: "/author1.jpg" },
      topic: "tech",
    },
    {
      slug: "post-2",
      title: "Second Post",
      date: "2024-01-02",
      coverImage: "/image2.jpg",
      excerpt: "Second excerpt",
      ogImage: { url: "/og2.jpg" },
      content: "Content 2",
      author: { name: "Author 2", picture: "/author2.jpg" },
      topic: "science",
    },
  ];

  it("should render the heading", () => {
    render(<MorePosts posts={mockPosts} />);
    expect(screen.getByText("More Musings")).toBeInTheDocument();
  });

  it("should render heading as h2", () => {
    render(<MorePosts posts={mockPosts} />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("More Musings");
  });

  it("should render all posts", () => {
    render(<MorePosts posts={mockPosts} />);
    const previews = screen.getAllByTestId("post-preview");
    expect(previews).toHaveLength(2);
  });

  it("should render post titles", () => {
    render(<MorePosts posts={mockPosts} />);
    expect(screen.getByText("First Post")).toBeInTheDocument();
    expect(screen.getByText("Second Post")).toBeInTheDocument();
  });

  it("should render in a section element", () => {
    const { container } = render(<MorePosts posts={mockPosts} />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("should use grid layout", () => {
    const { container } = render(<MorePosts posts={mockPosts} />);
    const grid = container.querySelector(".grid");
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveClass("grid-cols-1", "md:grid-cols-2");
  });

  it("should render with empty posts array", () => {
    render(<MorePosts posts={[]} />);
    expect(screen.getByText("More Musings")).toBeInTheDocument();
    expect(screen.queryAllByTestId("post-preview")).toHaveLength(0);
  });
});
