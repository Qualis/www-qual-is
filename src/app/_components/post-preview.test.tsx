import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { PostPreview } from "./post-preview";

vi.mock("./date-formatter", () => ({
  default: ({ dateString }: { dateString: string }) => (
    <span>{dateString}</span>
  ),
}));

vi.mock("./cover-image-with-title", () => ({
  default: ({ title }: { title: string }) => <div>{title}</div>,
}));

describe("PostPreview", () => {
  const defaultProps = {
    title: "Preview Post Title",
    coverImage: "/preview-image.jpg",
    date: "2024-02-01",
    excerpt: "This is a preview excerpt",
    author: { name: "Jane Doe", picture: "/jane.jpg" },
    slug: "preview-post",
    topic: "science",
  };

  it("should render the post title", () => {
    render(<PostPreview {...defaultProps} />);
    expect(screen.getByText("Preview Post Title")).toBeInTheDocument();
  });

  it("should render the excerpt", () => {
    render(<PostPreview {...defaultProps} />);
    expect(screen.getByText("This is a preview excerpt")).toBeInTheDocument();
  });

  it("should render the date", () => {
    render(<PostPreview {...defaultProps} />);
    expect(screen.getByText("2024-02-01")).toBeInTheDocument();
  });

  it("should render the topic", () => {
    render(<PostPreview {...defaultProps} />);
    expect(screen.getByText("science")).toBeInTheDocument();
  });

  it("should have flex column layout", () => {
    const { container } = render(<PostPreview {...defaultProps} />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("flex", "flex-col", "h-full");
  });

  it("should style topic badge correctly", () => {
    render(<PostPreview {...defaultProps} />);
    const topic = screen.getByText("science");
    expect(topic).toHaveClass("capitalize", "font-bold");
  });

  it("should have flex-grow on content area", () => {
    const { container } = render(<PostPreview {...defaultProps} />);
    const contentArea = container.querySelector(".flex-grow");
    expect(contentArea).toBeInTheDocument();
  });
});
