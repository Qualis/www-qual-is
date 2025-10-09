import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Avatar from "./avatar";

describe("Avatar", () => {
  it("should render the avatar image", () => {
    render(<Avatar name="John Doe" picture="/test-image.jpg" />);
    const image = screen.getByAltText("John Doe");
    expect(image).toBeInTheDocument();
  });

  it("should render with correct image src", () => {
    render(<Avatar name="John Doe" picture="/test-image.jpg" />);
    const image = screen.getByAltText("John Doe");
    expect(image).toHaveAttribute("src", "/test-image.jpg");
  });

  it("should render the name text", () => {
    render(<Avatar name="John Doe" picture="/test-image.jpg" />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("should have correct alt text for accessibility", () => {
    render(<Avatar name="Jane Smith" picture="/jane.jpg" />);
    const image = screen.getByAltText("Jane Smith");
    expect(image).toHaveAttribute("alt", "Jane Smith");
  });

  it("should apply correct CSS classes to image", () => {
    render(<Avatar name="John Doe" picture="/test-image.jpg" />);
    const image = screen.getByAltText("John Doe");
    expect(image).toHaveClass("w-12", "h-12", "rounded-full", "mr-4");
  });

  it("should apply correct CSS classes to container", () => {
    const { container } = render(
      <Avatar name="John Doe" picture="/test-image.jpg" />
    );
    const div = container.firstChild;
    expect(div).toHaveClass("flex", "items-center");
  });

  it("should apply correct CSS classes to name", () => {
    render(<Avatar name="John Doe" picture="/test-image.jpg" />);
    const name = screen.getByText("John Doe");
    expect(name).toHaveClass("text-xl", "font-bold");
  });
});
