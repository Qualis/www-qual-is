import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { PostHeader } from "./post-header";

vi.mock("./post-title", () => ({
  PostTitle: ({ children }: { children: React.ReactNode }) => (
    <h1>{children}</h1>
  ),
}));

vi.mock("./date-formatter", () => ({
  default: ({ dateString }: { dateString: string }) => (
    <span>{dateString}</span>
  ),
}));

vi.mock("./optimized-image", () => ({
  OptimizedImage: ({ alt }: { alt: string }) => <img alt={alt} />,
}));

describe("PostHeader", () => {
  it("should render the title", () => {
    render(<PostHeader title="Test Title" coverImage="/test.jpg" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("should render the date when provided", () => {
    render(
      <PostHeader title="Test Title" coverImage="/test.jpg" date="2024-01-01" />
    );
    expect(screen.getByText("Published on")).toBeInTheDocument();
    expect(screen.getByText("2024-01-01")).toBeInTheDocument();
  });

  it("should not render date section when date is not provided", () => {
    render(<PostHeader title="Test Title" coverImage="/test.jpg" />);
    expect(screen.queryByText("Published on")).not.toBeInTheDocument();
  });

  it("should render banner image when topic is provided", () => {
    render(
      <PostHeader
        title="Test Title"
        coverImage="/test.jpg"
        topic="technology"
      />
    );
    const bannerImage = screen.getByAltText("technology banner");
    expect(bannerImage).toBeInTheDocument();
  });

  it("should not render banner image when topic is not provided", () => {
    render(<PostHeader title="Test Title" coverImage="/test.jpg" />);
    const bannerImages = screen.queryByRole("img");
    expect(bannerImages).not.toBeInTheDocument();
  });

  it("should use correct banner path for topic", () => {
    render(
      <PostHeader title="Test Title" coverImage="/test.jpg" topic="science" />
    );
    expect(screen.getByAltText("science banner")).toBeInTheDocument();
  });

  it("should wrap everything in a full-width div", () => {
    const { container } = render(
      <PostHeader title="Test Title" coverImage="/test.jpg" />
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("w-full");
  });

  it("should render title in post-title-wrapper", () => {
    const { container } = render(
      <PostHeader title="Test Title" coverImage="/test.jpg" />
    );
    const titleWrapper = container.querySelector(".post-title-wrapper");
    expect(titleWrapper).toBeInTheDocument();
    expect(titleWrapper).toHaveClass("w-full");
  });

  it("should render date with correct styling when present", () => {
    const { container } = render(
      <PostHeader title="Test Title" coverImage="/test.jpg" date="2024-01-01" />
    );
    const dateDiv = container.querySelector(
      ".text-primary.dark\\:text-primary-dark"
    );
    expect(dateDiv).toBeInTheDocument();
  });
});
