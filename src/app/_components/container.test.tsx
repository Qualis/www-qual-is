import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Container from "./container";

describe("Container", () => {
  it("should render children", () => {
    render(
      <Container>
        <div>Test Content</div>
      </Container>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("should render first child", () => {
    render(
      <Container>
        <div>First</div>
        <div>Second</div>
      </Container>
    );
    expect(screen.getByText("First")).toBeInTheDocument();
  });

  it("should render second child", () => {
    render(
      <Container>
        <div>First</div>
        <div>Second</div>
      </Container>
    );
    expect(screen.getByText("Second")).toBeInTheDocument();
  });

  it("should apply correct CSS classes", () => {
    const { container } = render(
      <Container>
        <div>Test</div>
      </Container>
    );
    const div = container.firstChild;
    expect(div).toHaveClass("container", "mx-auto", "px-5");
  });

  it("should render without children", () => {
    const { container } = render(<Container />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render with string children", () => {
    render(<Container>Plain text content</Container>);
    expect(screen.getByText("Plain text content")).toBeInTheDocument();
  });
});
