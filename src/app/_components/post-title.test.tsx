import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PostTitle } from "./post-title";

describe("PostTitle", () => {
  it("should render children text", () => {
    render(<PostTitle>Test Post Title</PostTitle>);
    expect(screen.getByText("Test Post Title")).toBeInTheDocument();
  });

  it("should render as h1 element", () => {
    render(<PostTitle>Test Title</PostTitle>);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("should apply correct CSS classes", () => {
    render(<PostTitle>Test Title</PostTitle>);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveClass(
      "text-xl",
      "md:text-3xl",
      "lg:text-4xl",
      "font-bold",
      "tracking-tighter",
      "leading-tight",
      "md:leading-none",
      "m-0",
      "text-center",
      "text-accent-1",
      "dark:text-accent-1",
      "bg-black",
      "dark:bg-black",
      "py-4",
      "px-6",
      "w-full"
    );
  });

  it("should render with React node children", () => {
    render(
      <PostTitle>
        <span>Complex</span> Title
      </PostTitle>
    );
    expect(screen.getByText("Complex")).toBeInTheDocument();
    expect(screen.getByText(/Title/)).toBeInTheDocument();
  });

  it("should render without children", () => {
    const { container } = render(<PostTitle />);
    const heading = container.querySelector("h1");
    expect(heading).toBeInTheDocument();
  });
});
