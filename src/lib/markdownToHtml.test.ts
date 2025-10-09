import { describe, it, expect } from "vitest";
import markdownToHtml from "./markdownToHtml";

describe("markdownToHtml", () => {
  it("should convert basic markdown to HTML", async () => {
    const markdown = "This is a paragraph.";
    const result = await markdownToHtml(markdown);
    expect(result).toContain("<p>This is a paragraph.</p>");
  });

  it("should add IDs to h1 headers", async () => {
    const markdown = "# Hello World";
    const result = await markdownToHtml(markdown);
    expect(result).toContain('<h1 id="hello-world">Hello World</h1>');
  });

  it("should add IDs to h2 headers", async () => {
    const markdown = "## Section Title";
    const result = await markdownToHtml(markdown);
    expect(result).toContain('<h2 id="section-title">Section Title</h2>');
  });

  it("should add IDs to h3 headers", async () => {
    const markdown = "### Subsection";
    const result = await markdownToHtml(markdown);
    expect(result).toContain('<h3 id="subsection">Subsection</h3>');
  });

  it("should add IDs to h4 headers", async () => {
    const markdown = "#### Level Four";
    const result = await markdownToHtml(markdown);
    expect(result).toContain('<h4 id="level-four">Level Four</h4>');
  });

  it("should add IDs to h5 headers", async () => {
    const markdown = "##### Level Five";
    const result = await markdownToHtml(markdown);
    expect(result).toContain('<h5 id="level-five">Level Five</h5>');
  });

  it("should add IDs to h6 headers", async () => {
    const markdown = "###### Level Six";
    const result = await markdownToHtml(markdown);
    expect(result).toContain('<h6 id="level-six">Level Six</h6>');
  });

  it("should convert header text to lowercase for IDs", async () => {
    const markdown = "# UPPERCASE TITLE";
    const result = await markdownToHtml(markdown);
    expect(result).toContain('<h1 id="uppercase-title">UPPERCASE TITLE</h1>');
  });

  it("should convert spaces to dashes in IDs", async () => {
    const markdown = "# Multiple Word Title";
    const result = await markdownToHtml(markdown);
    expect(result).toContain(
      '<h1 id="multiple-word-title">Multiple Word Title</h1>'
    );
  });

  it("should remove special characters from IDs", async () => {
    const markdown = "# Title with Special! Characters?";
    const result = await markdownToHtml(markdown);
    expect(result).toContain(
      '<h1 id="title-with-special-characters">Title with Special! Characters?</h1>'
    );
  });

  it("should handle multiple consecutive spaces in IDs", async () => {
    const markdown = "# Title   with    spaces";
    const result = await markdownToHtml(markdown);
    expect(result).toContain(
      '<h1 id="title-with-spaces">Title   with    spaces</h1>'
    );
  });

  it("should handle markdown with multiple headers", async () => {
    const markdown = "# First Header\n\n## Second Header";
    const result = await markdownToHtml(markdown);
    expect(result).toContain('<h1 id="first-header">First Header</h1>');
    expect(result).toContain('<h2 id="second-header">Second Header</h2>');
  });

  it("should preserve markdown formatting in HTML", async () => {
    const markdown = "This is **bold** and *italic* text.";
    const result = await markdownToHtml(markdown);
    expect(result).toContain("<strong>bold</strong>");
    expect(result).toContain("<em>italic</em>");
  });

  it("should convert markdown links to HTML", async () => {
    const markdown = "[Link Text](https://example.com)";
    const result = await markdownToHtml(markdown);
    expect(result).toContain('<a href="https://example.com">Link Text</a>');
  });

  it("should convert markdown lists to HTML", async () => {
    const markdown = "- Item 1\n- Item 2";
    const result = await markdownToHtml(markdown);
    expect(result).toContain("<ul>");
    expect(result).toContain("<li>Item 1</li>");
    expect(result).toContain("<li>Item 2</li>");
  });

  it("should handle empty markdown", async () => {
    const markdown = "";
    const result = await markdownToHtml(markdown);
    expect(result).toBe("");
  });

  it("should handle markdown with code blocks", async () => {
    const markdown = "```javascript\nconst x = 1;\n```";
    const result = await markdownToHtml(markdown);
    expect(result).toContain("<pre>");
    expect(result).toContain("<code");
  });
});
