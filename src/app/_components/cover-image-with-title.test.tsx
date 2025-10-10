import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CoverImageWithTitle from "./cover-image-with-title";

vi.mock("./optimized-image", () => ({
  OptimizedImage: ({
    src,
    alt,
    className,
    width,
    height,
    priority,
  }: {
    src: string;
    alt: string;
    className: string;
    width: number;
    height: number;
    priority: boolean;
  }) => (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      data-priority={priority}
    />
  ),
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    "aria-label": ariaLabel,
    className,
  }: {
    href: string;
    children: React.ReactNode;
    "aria-label": string;
    className?: string;
  }) => (
    <a href={href} aria-label={ariaLabel} className={className}>
      {children}
    </a>
  ),
}));

describe("CoverImageWithTitle", () => {
  const defaultProps = {
    title: "Test Post Title",
    src: "/test-image.jpg",
  };

  it("should render image with correct props", () => {
    render(<CoverImageWithTitle {...defaultProps} />);

    const img = screen.getByAltText("Cover Image for Test Post Title");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/test-image.jpg");
    expect(img).toHaveAttribute("width", "1300");
    expect(img).toHaveAttribute("height", "630");
  });

  it("should render title overlay", () => {
    render(<CoverImageWithTitle {...defaultProps} />);

    const title = screen.getByText("Test Post Title");
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H3");
  });

  it("should render without link when slug is not provided", () => {
    const { container } = render(<CoverImageWithTitle {...defaultProps} />);

    const link = container.querySelector("a");
    expect(link).not.toBeInTheDocument();
  });

  it("should render with link when slug is provided", () => {
    render(<CoverImageWithTitle {...defaultProps} slug="test-post" />);

    const link = screen.getByRole("link", { name: "Test Post Title" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/posts/test-post");
    expect(link).toHaveClass("block");
  });

  it("should render emoji indicator when slug is provided", () => {
    render(<CoverImageWithTitle {...defaultProps} slug="test-post" />);

    const emoji = screen.getByText("👀");
    expect(emoji).toBeInTheDocument();

    const emojiContainer = emoji.parentElement;
    expect(emojiContainer?.className).toContain("opacity-0");
    expect(emojiContainer?.className).toContain("group-hover:opacity-100");
  });

  it("should not render emoji indicator when slug is not provided", () => {
    render(<CoverImageWithTitle {...defaultProps} />);

    const emoji = screen.queryByText("👀");
    expect(emoji).not.toBeInTheDocument();
  });

  it("should apply hover classes to outer div when slug is provided", () => {
    const { container } = render(
      <CoverImageWithTitle {...defaultProps} slug="test-post" />
    );

    const outerDiv = container.querySelector(".group");
    expect(outerDiv?.className).toContain("cursor-pointer");
    expect(outerDiv?.className).toContain("transform");
    expect(outerDiv?.className).toContain("hover:scale-[1.02]");
    expect(outerDiv?.className).toContain("hover:shadow-xl");
  });

  it("should not apply hover classes to outer div when slug is not provided", () => {
    const { container } = render(<CoverImageWithTitle {...defaultProps} />);

    const outerDiv = container.querySelector(".group");
    expect(outerDiv?.className).not.toContain("cursor-pointer");
    expect(outerDiv?.className).not.toContain("hover:scale-[1.02]");
  });

  it("should apply group-hover classes to overlay when slug is provided", () => {
    const { container } = render(
      <CoverImageWithTitle {...defaultProps} slug="test-post" />
    );

    const overlays = container.querySelectorAll(".absolute.inset-0");
    const firstOverlay = overlays[0];
    expect(firstOverlay?.className).toContain("group-hover:shadow-inner");
  });

  it("should not apply group-hover classes to overlay when slug is not provided", () => {
    const { container } = render(<CoverImageWithTitle {...defaultProps} />);

    const overlays = container.querySelectorAll(".absolute.inset-0");
    const firstOverlay = overlays[0];
    expect(firstOverlay?.className).not.toContain("group-hover:shadow-inner");
  });

  it("should render with priority prop set to true", () => {
    render(<CoverImageWithTitle {...defaultProps} priority={true} />);

    const img = screen.getByAltText("Cover Image for Test Post Title");
    expect(img).toHaveAttribute("data-priority", "true");
  });

  it("should render with priority prop set to false by default", () => {
    render(<CoverImageWithTitle {...defaultProps} />);

    const img = screen.getByAltText("Cover Image for Test Post Title");
    expect(img).toHaveAttribute("data-priority", "false");
  });

  it("should apply correct image classes", () => {
    render(<CoverImageWithTitle {...defaultProps} />);

    const img = screen.getByAltText("Cover Image for Test Post Title");
    expect(img.className).toContain("w-full");
    expect(img.className).toContain("transition-transform");
    expect(img.className).toContain("duration-500");
    expect(img.className).toContain("group-hover:scale-105");
  });

  it("should apply base classes to outer container", () => {
    const { container } = render(<CoverImageWithTitle {...defaultProps} />);

    const outerDiv = container.querySelector(".group");
    expect(outerDiv?.className).toContain("relative");
    expect(outerDiv?.className).toContain("overflow-hidden");
    expect(outerDiv?.className).toContain("rounded-lg");
    expect(outerDiv?.className).toContain("shadow-md");
    expect(outerDiv?.className).toContain("transition-all");
    expect(outerDiv?.className).toContain("duration-300");
  });

  it("should render container wrapper with correct classes", () => {
    const { container } = render(<CoverImageWithTitle {...defaultProps} />);

    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("sm:mx-0");
    expect(wrapper).toHaveClass("md:max-w-5xl");
    expect(wrapper).toHaveClass("lg:max-w-4xl");
    expect(wrapper).toHaveClass("xl:max-w-3xl");
    expect(wrapper).toHaveClass("md:mx-auto");
  });

  it("should apply correct title styling classes", () => {
    render(<CoverImageWithTitle {...defaultProps} />);

    const title = screen.getByText("Test Post Title");
    expect(title.className).toContain("text-lg");
    expect(title.className).toContain("md:text-xl");
    expect(title.className).toContain("lg:text-2xl");
    expect(title.className).toContain("text-accent-1");
    expect(title.className).toContain("font-bold");
    expect(title.className).toContain("text-center");
    expect(title.className).toContain("drop-shadow-lg");
  });

  it("should apply correct emoji container classes", () => {
    const { container } = render(
      <CoverImageWithTitle {...defaultProps} slug="test-post" />
    );

    const emojiSpan = container.querySelector(".bg-white");

    expect(emojiSpan?.className).toContain("bg-white");
    expect(emojiSpan?.className).toContain("text-black");
    expect(emojiSpan?.className).toContain("text-sm");
    expect(emojiSpan?.className).toContain("py-1");
    expect(emojiSpan?.className).toContain("px-3");
    expect(emojiSpan?.className).toContain("rounded-full");
  });

  it("should handle different title values", () => {
    const { rerender } = render(
      <CoverImageWithTitle {...defaultProps} title="First Title" />
    );

    expect(screen.getByText("First Title")).toBeInTheDocument();

    rerender(<CoverImageWithTitle {...defaultProps} title="Second Title" />);

    expect(screen.getByText("Second Title")).toBeInTheDocument();
  });

  it("should handle different src values", () => {
    const { rerender } = render(
      <CoverImageWithTitle {...defaultProps} src="/image1.jpg" />
    );

    let img = screen.getByAltText("Cover Image for Test Post Title");
    expect(img).toHaveAttribute("src", "/image1.jpg");

    rerender(<CoverImageWithTitle {...defaultProps} src="/image2.jpg" />);

    img = screen.getByAltText("Cover Image for Test Post Title");
    expect(img).toHaveAttribute("src", "/image2.jpg");
  });

  it("should position emoji at bottom with correct classes", () => {
    const { container } = render(
      <CoverImageWithTitle {...defaultProps} slug="test-post" />
    );

    const emojiContainer = container.querySelector(".bottom-4");

    expect(emojiContainer?.className).toContain("absolute");
    expect(emojiContainer?.className).toContain("bottom-4");
    expect(emojiContainer?.className).toContain("opacity-0");
    expect(emojiContainer?.className).toContain("group-hover:opacity-100");
    expect(emojiContainer?.className).toContain("transition-opacity");
    expect(emojiContainer?.className).toContain("duration-300");
  });
});
