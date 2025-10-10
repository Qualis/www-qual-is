import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { OptimizedImage } from "./optimized-image";

let mockPathname = "/blog";

vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname,
}));

vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    width,
    height,
    className,
    priority,
    loading,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    priority?: boolean;
    loading?: string;
  }) => (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      data-priority={priority}
      data-loading={loading}
    />
  ),
}));

describe("OptimizedImage", () => {
  const defaultProps = {
    src: "/test-image.jpg",
    alt: "Test Image",
    width: 800,
    height: 600,
  };

  beforeEach(() => {
    mockPathname = "/blog";
  });

  it("should render image after component mounts", () => {
    const { container } = render(<OptimizedImage {...defaultProps} />);

    const img = container.querySelector("img");
    expect(img).toBeInTheDocument();
  });

  it("should render image after useEffect runs", async () => {
    const { container } = render(<OptimizedImage {...defaultProps} />);

    await waitFor(() => {
      const img = container.querySelector("img");
      expect(img).toBeInTheDocument();
    });
  });

  it("should render image immediately when priority is true", () => {
    const { container } = render(
      <OptimizedImage {...defaultProps} priority={true} />
    );

    const img = container.querySelector("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/test-image.jpg");
  });

  it("should render image immediately when pathname is /", () => {
    mockPathname = "/";
    const { container } = render(<OptimizedImage {...defaultProps} />);

    const img = container.querySelector("img");
    expect(img).toBeInTheDocument();
  });

  it("should set priority to true when priority prop is true", () => {
    const { container } = render(
      <OptimizedImage {...defaultProps} priority={true} />
    );

    const img = container.querySelector("img");
    expect(img).toHaveAttribute("data-priority", "true");
  });

  it("should set priority to true when pathname is /", () => {
    mockPathname = "/";
    const { container } = render(<OptimizedImage {...defaultProps} />);

    const img = container.querySelector("img");
    expect(img).toHaveAttribute("data-priority", "true");
  });

  it("should set loading to eager when priority", () => {
    const { container } = render(
      <OptimizedImage {...defaultProps} priority={true} />
    );

    const img = container.querySelector("img");
    expect(img).toHaveAttribute("data-loading", "eager");
  });

  it("should set loading to lazy when not priority", async () => {
    const { container } = render(<OptimizedImage {...defaultProps} />);

    await waitFor(() => {
      const img = container.querySelector("img");
      expect(img).toHaveAttribute("data-loading", "lazy");
    });
  });

  it("should pass all props to image component", () => {
    const { container } = render(
      <OptimizedImage {...defaultProps} className="custom-class" />
    );

    const img = container.querySelector("img");
    expect(img).toHaveAttribute("src", "/test-image.jpg");
    expect(img).toHaveAttribute("alt", "Test Image");
  });

  it("should pass className to image", async () => {
    const { container } = render(
      <OptimizedImage {...defaultProps} className="custom-class" />
    );

    await waitFor(() => {
      const img = container.querySelector("img");
      expect(img).toHaveClass("custom-class");
    });
  });

  it("should render image with correct alt text", async () => {
    const { container } = render(
      <OptimizedImage {...defaultProps} alt="Custom Alt Text" />
    );

    await waitFor(() => {
      const img = container.querySelector("img");
      expect(img).toHaveAttribute("alt", "Custom Alt Text");
    });
  });

  it("should render image with correct dimensions", async () => {
    const { container } = render(
      <OptimizedImage {...defaultProps} width={1200} height={800} />
    );

    await waitFor(() => {
      const img = container.querySelector("img");
      expect(img).toHaveAttribute("width", "1200");
      expect(img).toHaveAttribute("height", "800");
    });
  });

  it("should handle priority false explicitly", async () => {
    const { container } = render(
      <OptimizedImage {...defaultProps} priority={false} />
    );

    await waitFor(() => {
      const img = container.querySelector("img");
      expect(img).toBeInTheDocument();
    });
  });

  it("should render image with custom dimensions", async () => {
    const { container } = render(
      <OptimizedImage {...defaultProps} width={1000} height={500} />
    );

    await waitFor(() => {
      const img = container.querySelector("img");
      expect(img).toHaveAttribute("width", "1000");
      expect(img).toHaveAttribute("height", "500");
    });
  });

  it("should render image after mounting", async () => {
    const { container } = render(<OptimizedImage {...defaultProps} />);

    await waitFor(() => {
      const img = container.querySelector("img");
      expect(img).toBeInTheDocument();
    });
  });

  it("should set priority false when not on homepage and priority prop is false", async () => {
    mockPathname = "/about";
    const { container } = render(
      <OptimizedImage {...defaultProps} priority={false} />
    );

    await waitFor(() => {
      const img = container.querySelector("img");
      expect(img).toHaveAttribute("data-priority", "false");
    });
  });

  it("should prioritize priority prop over pathname", () => {
    mockPathname = "/about";
    const { container } = render(
      <OptimizedImage {...defaultProps} priority={true} />
    );

    const img = container.querySelector("img");
    expect(img).toHaveAttribute("data-priority", "true");
  });

  it("should handle different pathnames correctly", async () => {
    mockPathname = "/posts/test-post";
    const { container } = render(<OptimizedImage {...defaultProps} />);

    await waitFor(() => {
      const img = container.querySelector("img");
      expect(img).toBeInTheDocument();
    });
  });

  it("should render image immediately when on homepage without priority prop", () => {
    mockPathname = "/";
    const { container } = render(<OptimizedImage {...defaultProps} />);

    const img = container.querySelector("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("data-priority", "true");
    expect(img).toHaveAttribute("data-loading", "eager");
  });
});
