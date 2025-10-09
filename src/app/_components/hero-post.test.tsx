import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { HeroPost } from "./hero-post";

vi.mock("./date-formatter", () => ({
  default: ({ dateString }: { dateString: string }) => (
    <span>{dateString}</span>
  ),
}));

vi.mock("./cover-image-with-title", () => ({
  default: ({ title }: { title: string }) => <div>{title}</div>,
}));

describe("HeroPost", () => {
  const defaultProps = {
    title: "Test Post Title",
    coverImage: "/test-image.jpg",
    date: "2024-01-01",
    excerpt: "This is a test excerpt",
    author: { name: "John Doe", picture: "/author.jpg" },
    slug: "test-post",
    topic: "technology",
  };

  it("should render the post title", () => {
    render(<HeroPost {...defaultProps} />);
    expect(screen.getByText("Test Post Title")).toBeInTheDocument();
  });

  it("should render the excerpt", () => {
    render(<HeroPost {...defaultProps} />);
    expect(screen.getByText("This is a test excerpt")).toBeInTheDocument();
  });

  it("should render the date", () => {
    render(<HeroPost {...defaultProps} />);
    expect(screen.getByText("2024-01-01")).toBeInTheDocument();
  });

  it("should render the topic", () => {
    render(<HeroPost {...defaultProps} />);
    expect(screen.getByText("technology")).toBeInTheDocument();
  });

  it("should capitalize and style the topic", () => {
    render(<HeroPost {...defaultProps} />);
    const topic = screen.getByText("technology");
    expect(topic).toHaveClass(
      "capitalize",
      "px-2",
      "py-0.5",
      "text-primary",
      "dark:text-primary-dark",
      "font-medium",
      "border",
      "border-primary",
      "rounded-md"
    );
  });

  it("should render in a section element", () => {
    const { container } = render(<HeroPost {...defaultProps} />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("should apply correct classes to excerpt", () => {
    render(<HeroPost {...defaultProps} />);
    const excerpt = screen.getByText("This is a test excerpt");
    expect(excerpt).toHaveClass("text-lg", "leading-relaxed", "mb-4");
  });
});
