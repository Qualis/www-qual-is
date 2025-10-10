import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CoverImage from "./cover-image";

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
  }: {
    href: string;
    children: React.ReactNode;
    "aria-label": string;
  }) => (
    <a href={href} aria-label={ariaLabel}>
      {children}
    </a>
  ),
}));

describe("CoverImage", () => {
  const defaultProps = {
    title: "Test Post Title",
    src: "/test-image.jpg",
  };

  it("should render image with correct props", () => {
    render(<CoverImage {...defaultProps} />);

    const img = screen.getByAltText("Cover Image for Test Post Title");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/test-image.jpg");
    expect(img).toHaveAttribute("width", "1300");
    expect(img).toHaveAttribute("height", "630");
  });

  it("should render image without link when slug is not provided", () => {
    const { container } = render(<CoverImage {...defaultProps} />);

    const link = container.querySelector("a");
    expect(link).not.toBeInTheDocument();

    const img = screen.getByAltText("Cover Image for Test Post Title");
    expect(img).toBeInTheDocument();
  });

  it("should render image with link when slug is provided", () => {
    render(<CoverImage {...defaultProps} slug="test-post" />);

    const link = screen.getByRole("link", { name: "Test Post Title" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/posts/test-post");

    const img = screen.getByAltText("Cover Image for Test Post Title");
    expect(img).toBeInTheDocument();
  });

  it("should add hover classes when slug is provided", () => {
    render(<CoverImage {...defaultProps} slug="test-post" />);

    const img = screen.getByAltText("Cover Image for Test Post Title");
    expect(img.className).toContain("hover:shadow-lg");
    expect(img.className).toContain("transition-shadow");
    expect(img.className).toContain("duration-200");
  });

  it("should not add hover classes when slug is not provided", () => {
    render(<CoverImage {...defaultProps} />);

    const img = screen.getByAltText("Cover Image for Test Post Title");
    expect(img.className).not.toContain("hover:shadow-lg");
  });

  it("should render with priority prop set to true", () => {
    render(<CoverImage {...defaultProps} priority={true} />);

    const img = screen.getByAltText("Cover Image for Test Post Title");
    expect(img).toHaveAttribute("data-priority", "true");
  });

  it("should render with priority prop set to false by default", () => {
    render(<CoverImage {...defaultProps} />);

    const img = screen.getByAltText("Cover Image for Test Post Title");
    expect(img).toHaveAttribute("data-priority", "false");
  });

  it("should render container with correct classes", () => {
    const { container } = render(<CoverImage {...defaultProps} />);

    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("sm:mx-0");
    expect(wrapper).toHaveClass("md:max-w-5xl");
    expect(wrapper).toHaveClass("lg:max-w-4xl");
    expect(wrapper).toHaveClass("xl:max-w-3xl");
    expect(wrapper).toHaveClass("md:mx-auto");
  });

  it("should always include shadow-sm and w-full classes", () => {
    render(<CoverImage {...defaultProps} />);

    const img = screen.getByAltText("Cover Image for Test Post Title");
    expect(img.className).toContain("shadow-sm");
    expect(img.className).toContain("w-full");
  });

  it("should handle different title values", () => {
    const { rerender } = render(
      <CoverImage {...defaultProps} title="First Title" />
    );

    expect(
      screen.getByAltText("Cover Image for First Title")
    ).toBeInTheDocument();

    rerender(<CoverImage {...defaultProps} title="Second Title" />);

    expect(
      screen.getByAltText("Cover Image for Second Title")
    ).toBeInTheDocument();
  });

  it("should handle different src values", () => {
    const { rerender } = render(
      <CoverImage {...defaultProps} src="/image1.jpg" />
    );

    let img = screen.getByAltText("Cover Image for Test Post Title");
    expect(img).toHaveAttribute("src", "/image1.jpg");

    rerender(<CoverImage {...defaultProps} src="/image2.jpg" />);

    img = screen.getByAltText("Cover Image for Test Post Title");
    expect(img).toHaveAttribute("src", "/image2.jpg");
  });
});
