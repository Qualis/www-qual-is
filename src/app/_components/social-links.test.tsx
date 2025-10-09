import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SocialLinks from "./social-links";

describe("SocialLinks", () => {
  it("should render LinkedIn link", () => {
    render(<SocialLinks />);
    const linkedInLink = screen.getByLabelText("LinkedIn Profile");
    expect(linkedInLink).toBeInTheDocument();
  });

  it("should have correct LinkedIn href", () => {
    render(<SocialLinks />);
    const linkedInLink = screen.getByLabelText("LinkedIn Profile");
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/5v0/"
    );
  });

  it("should render GitHub link", () => {
    render(<SocialLinks />);
    const githubLink = screen.getByLabelText("GitHub Profile");
    expect(githubLink).toBeInTheDocument();
  });

  it("should have correct GitHub href", () => {
    render(<SocialLinks />);
    const githubLink = screen.getByLabelText("GitHub Profile");
    expect(githubLink).toHaveAttribute("href", "https://github.com/svo");
  });

  it("should open links in new tab", () => {
    render(<SocialLinks />);
    const linkedInLink = screen.getByLabelText("LinkedIn Profile");
    const githubLink = screen.getByLabelText("GitHub Profile");
    expect(linkedInLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("target", "_blank");
  });

  it("should have noopener noreferrer for security", () => {
    render(<SocialLinks />);
    const linkedInLink = screen.getByLabelText("LinkedIn Profile");
    const githubLink = screen.getByLabelText("GitHub Profile");
    expect(linkedInLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should render SVG icons", () => {
    const { container } = render(<SocialLinks />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs).toHaveLength(2);
  });

  it("should apply correct CSS classes to container", () => {
    const { container } = render(<SocialLinks />);
    const div = container.firstChild;
    expect(div).toHaveClass("flex", "items-center", "space-x-4");
  });

  it("should apply correct CSS classes to links", () => {
    render(<SocialLinks />);
    const linkedInLink = screen.getByLabelText("LinkedIn Profile");
    const githubLink = screen.getByLabelText("GitHub Profile");
    expect(linkedInLink).toHaveClass(
      "text-primary",
      "dark:text-primary-dark",
      "transition-colors"
    );
    expect(githubLink).toHaveClass(
      "text-primary",
      "dark:text-primary-dark",
      "transition-colors"
    );
  });
});
