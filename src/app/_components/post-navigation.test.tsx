import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { PostNavigationComponent } from "./post-navigation";
import { PostNavigation } from "@/interfaces/postNavigation";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    className,
    "aria-label": ariaLabel,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
    "aria-label"?: string;
  }) => (
    <a href={href} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  ),
}));

describe("PostNavigationComponent", () => {
  it("should render navigation element with aria-label", () => {
    const navigation: PostNavigation = {
      previous: null,
      next: null,
    };

    const { container } = render(
      <PostNavigationComponent navigation={navigation} />
    );

    const nav = container.querySelector('nav[aria-label="Post navigation"]');
    expect(nav).toBeInTheDocument();
  });

  it("should render Blog link", () => {
    const navigation: PostNavigation = {
      previous: null,
      next: null,
    };

    render(<PostNavigationComponent navigation={navigation} />);

    const blogLink = screen.getByLabelText("Back to blog");
    expect(blogLink).toBeInTheDocument();
    expect(blogLink).toHaveAttribute("href", "/blog");
  });

  it("should render previous link when previous post exists", () => {
    const navigation: PostNavigation = {
      previous: { slug: "previous-post", title: "Previous Post" },
      next: null,
    };

    render(<PostNavigationComponent navigation={navigation} />);

    const previousLink = screen.getByLabelText("Previous post: Previous Post");
    expect(previousLink).toBeInTheDocument();
    expect(previousLink).toHaveAttribute("href", "/posts/previous-post");
  });

  it("should render next link when next post exists", () => {
    const navigation: PostNavigation = {
      previous: null,
      next: { slug: "next-post", title: "Next Post" },
    };

    render(<PostNavigationComponent navigation={navigation} />);

    const nextLink = screen.getByLabelText("Next post: Next Post");
    expect(nextLink).toBeInTheDocument();
    expect(nextLink).toHaveAttribute("href", "/posts/next-post");
  });

  it("should not render previous link when previous post is null", () => {
    const navigation: PostNavigation = {
      previous: null,
      next: { slug: "next-post", title: "Next Post" },
    };

    render(<PostNavigationComponent navigation={navigation} />);

    const previousLink = screen.queryByLabelText(/Previous post:/);
    expect(previousLink).not.toBeInTheDocument();
  });

  it("should not render next link when next post is null", () => {
    const navigation: PostNavigation = {
      previous: { slug: "previous-post", title: "Previous Post" },
      next: null,
    };

    render(<PostNavigationComponent navigation={navigation} />);

    const nextLink = screen.queryByLabelText(/Next post:/);
    expect(nextLink).not.toBeInTheDocument();
  });

  it("should render both previous and next links when both exist", () => {
    const navigation: PostNavigation = {
      previous: { slug: "previous-post", title: "Previous Post" },
      next: { slug: "next-post", title: "Next Post" },
    };

    render(<PostNavigationComponent navigation={navigation} />);

    const previousLink = screen.getByLabelText("Previous post: Previous Post");
    const nextLink = screen.getByLabelText("Next post: Next Post");

    expect(previousLink).toBeInTheDocument();
    expect(nextLink).toBeInTheDocument();
  });

  it("should render previous icon (left arrow)", () => {
    const navigation: PostNavigation = {
      previous: { slug: "previous-post", title: "Previous Post" },
      next: null,
    };

    render(<PostNavigationComponent navigation={navigation} />);

    const previousLink = screen.getByLabelText("Previous post: Previous Post");
    const icon = previousLink.querySelector("svg");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("h-6");
    expect(icon).toHaveClass("w-6");
  });

  it("should render next icon (right arrow)", () => {
    const navigation: PostNavigation = {
      previous: null,
      next: { slug: "next-post", title: "Next Post" },
    };

    render(<PostNavigationComponent navigation={navigation} />);

    const nextLink = screen.getByLabelText("Next post: Next Post");
    const icon = nextLink.querySelector("svg");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("h-6");
    expect(icon).toHaveClass("w-6");
  });

  it("should render blog icon (grid)", () => {
    const navigation: PostNavigation = {
      previous: null,
      next: null,
    };

    render(<PostNavigationComponent navigation={navigation} />);

    const blogLink = screen.getByLabelText("Back to blog");
    const icon = blogLink.querySelector("svg");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("h-6");
    expect(icon).toHaveClass("w-6");
  });

  it("should apply correct styling classes to navigation", () => {
    const navigation: PostNavigation = {
      previous: null,
      next: null,
    };

    const { container } = render(
      <PostNavigationComponent navigation={navigation} />
    );

    const nav = container.querySelector("nav");
    expect(nav).toHaveClass("flex");
    expect(nav).toHaveClass("justify-between");
    expect(nav).toHaveClass("items-center");
  });

  it("should apply correct styling to links", () => {
    const navigation: PostNavigation = {
      previous: { slug: "previous-post", title: "Previous Post" },
      next: { slug: "next-post", title: "Next Post" },
    };

    render(<PostNavigationComponent navigation={navigation} />);

    const previousLink = screen.getByLabelText("Previous post: Previous Post");
    const nextLink = screen.getByLabelText("Next post: Next Post");
    const blogLink = screen.getByLabelText("Back to blog");

    expect(previousLink).toHaveClass("text-primary");
    expect(previousLink).toHaveClass("dark:text-primary-dark");
    expect(previousLink).toHaveClass("hover:text-accent-3");
    expect(previousLink).toHaveClass("dark:hover:text-accent-1");
    expect(previousLink).toHaveClass("transition-colors");

    expect(nextLink).toHaveClass("text-primary");
    expect(nextLink).toHaveClass("dark:text-primary-dark");
    expect(nextLink).toHaveClass("hover:text-accent-3");
    expect(nextLink).toHaveClass("dark:hover:text-accent-1");
    expect(nextLink).toHaveClass("transition-colors");

    expect(blogLink).toHaveClass("text-primary");
    expect(blogLink).toHaveClass("dark:text-primary-dark");
    expect(blogLink).toHaveClass("hover:text-accent-3");
    expect(blogLink).toHaveClass("dark:hover:text-accent-1");
    expect(blogLink).toHaveClass("transition-colors");
  });

  it("should use three-column layout with flex-1", () => {
    const navigation: PostNavigation = {
      previous: { slug: "previous-post", title: "Previous Post" },
      next: { slug: "next-post", title: "Next Post" },
    };

    const { container } = render(
      <PostNavigationComponent navigation={navigation} />
    );

    const columns = container.querySelectorAll(".flex-1");
    expect(columns).toHaveLength(3);
  });

  it("should center the blog link", () => {
    const navigation: PostNavigation = {
      previous: null,
      next: null,
    };

    const { container } = render(
      <PostNavigationComponent navigation={navigation} />
    );

    const centerColumn = container.querySelector(".flex-1.text-center");
    expect(centerColumn).toBeInTheDocument();
  });

  it("should right-align the next link", () => {
    const navigation: PostNavigation = {
      previous: null,
      next: { slug: "next-post", title: "Next Post" },
    };

    const { container } = render(
      <PostNavigationComponent navigation={navigation} />
    );

    const rightColumn = container.querySelector(".flex-1.text-right");
    expect(rightColumn).toBeInTheDocument();
  });
});
