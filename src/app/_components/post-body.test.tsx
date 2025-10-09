import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PostBody } from "./post-body";

describe("PostBody", () => {
  it("should render HTML content", () => {
    const htmlContent = "<p>Test paragraph</p>";
    render(<PostBody content={htmlContent} />);
    expect(screen.getByText("Test paragraph")).toBeInTheDocument();
  });

  it("should render complex HTML content", () => {
    const htmlContent =
      "<h2>Heading</h2><p>Paragraph</p><ul><li>Item 1</li></ul>";
    render(<PostBody content={htmlContent} />);
    expect(screen.getByText("Heading")).toBeInTheDocument();
    expect(screen.getByText("Paragraph")).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });

  it("should have article content aria-label", () => {
    render(<PostBody content="<p>Test</p>" />);
    const section = screen.getByLabelText("Article content");
    expect(section).toBeInTheDocument();
  });

  it("should have schema.org Article itemType", () => {
    const { container } = render(<PostBody content="<p>Test</p>" />);
    const section = container.querySelector("section[itemscope]");
    expect(section).toHaveAttribute("itemtype", "https://schema.org/Article");
  });

  it("should apply markdown styles class", () => {
    const { container } = render(<PostBody content="<p>Test</p>" />);
    const section = container.querySelector("section");
    expect(section?.className).toContain("markdown");
  });

  it("should render with empty content", () => {
    const { container } = render(<PostBody content="" />);
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
  });

  it("should render with HTML entities", () => {
    const htmlContent = "<p>&lt;Hello&gt; &amp; &quot;World&quot;</p>";
    render(<PostBody content={htmlContent} />);
    expect(screen.getByText(/<Hello> & "World"/)).toBeInTheDocument();
  });

  it("should have wrapper div with full width", () => {
    const { container } = render(<PostBody content="<p>Test</p>" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("w-full");
  });
});
