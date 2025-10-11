import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TopicFilter } from "./topic-filter";
import { Post } from "@/interfaces/post";

vi.mock("./hero-post", () => ({
  HeroPost: ({ title, topic }: { title: string; topic: string }) => (
    <div data-testid="hero-post">
      <h1>{title}</h1>
      <span>{topic}</span>
    </div>
  ),
}));

vi.mock("./more-posts", () => ({
  MorePosts: ({ posts }: { posts: Post[] }) => (
    <div data-testid="more-posts">
      {posts.map((post) => (
        <div key={post.slug}>{post.title}</div>
      ))}
    </div>
  ),
}));

describe("TopicFilter", () => {
  const mockPosts: Post[] = [
    {
      slug: "post-1",
      title: "Engineer Post",
      date: "2024-01-01",
      coverImage: "/image1.jpg",
      author: { name: "Author 1", picture: "/author1.jpg" },
      excerpt: "Excerpt 1",
      ogImage: { url: "/og1.jpg" },
      content: "Content 1",
      topic: "engineer",
    },
    {
      slug: "post-2",
      title: "Lead Post",
      date: "2024-01-02",
      coverImage: "/image2.jpg",
      author: { name: "Author 2", picture: "/author2.jpg" },
      excerpt: "Excerpt 2",
      ogImage: { url: "/og2.jpg" },
      content: "Content 2",
      topic: "lead",
    },
    {
      slug: "post-3",
      title: "Manage Post",
      date: "2024-01-03",
      coverImage: "/image3.jpg",
      author: { name: "Author 3", picture: "/author3.jpg" },
      excerpt: "Excerpt 3",
      ogImage: { url: "/og3.jpg" },
      content: "Content 3",
      topic: "manage",
    },
    {
      slug: "post-4",
      title: "Another Engineer Post",
      date: "2024-01-04",
      coverImage: "/image4.jpg",
      author: { name: "Author 4", picture: "/author4.jpg" },
      excerpt: "Excerpt 4",
      ogImage: { url: "/og4.jpg" },
      content: "Content 4",
      topic: "engineer",
    },
  ];

  const mockTopics = ["engineer", "lead", "manage"];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render with all topics initially selected", () => {
    render(<TopicFilter topics={mockTopics} allPosts={mockPosts} />);
    expect(screen.getByText("Topic Filters")).toBeInTheDocument();

    const engineerButton = screen.getByRole("button", { name: /engineer/i });
    const leadButton = screen.getByRole("button", { name: /lead/i });
    const manageButton = screen.getByRole("button", { name: /manage/i });

    expect(engineerButton).toHaveClass("bg-primary");
    expect(leadButton).toHaveClass("bg-primary");
    expect(manageButton).toHaveClass("bg-primary");
  });

  it("should render hero post and more posts", () => {
    render(<TopicFilter topics={mockTopics} allPosts={mockPosts} />);
    expect(screen.getByTestId("hero-post")).toBeInTheDocument();
    expect(screen.getByTestId("more-posts")).toBeInTheDocument();
  });

  it("should filter posts when topic is deselected", () => {
    render(<TopicFilter topics={mockTopics} allPosts={mockPosts} />);

    const leadButton = screen.getByRole("button", { name: /lead/i });
    fireEvent.click(leadButton);

    expect(leadButton).not.toHaveClass("bg-primary");
    expect(screen.queryByText("Lead Post")).not.toBeInTheDocument();
  });

  it("should filter posts when topic is selected after deselection", () => {
    render(<TopicFilter topics={mockTopics} allPosts={mockPosts} />);

    const leadButton = screen.getByRole("button", { name: /lead/i });
    fireEvent.click(leadButton);
    expect(leadButton).not.toHaveClass("bg-primary");

    fireEvent.click(leadButton);
    expect(leadButton).toHaveClass("bg-primary");
  });

  it("should reset to all topics when last selected topic is deselected", () => {
    render(<TopicFilter topics={mockTopics} allPosts={mockPosts} />);

    const engineerButton = screen.getByRole("button", { name: /engineer/i });
    const leadButton = screen.getByRole("button", { name: /lead/i });
    const manageButton = screen.getByRole("button", { name: /manage/i });

    fireEvent.click(leadButton);
    fireEvent.click(manageButton);

    expect(engineerButton).toHaveClass("bg-primary");
    expect(leadButton).not.toHaveClass("bg-primary");
    expect(manageButton).not.toHaveClass("bg-primary");

    fireEvent.click(engineerButton);

    expect(engineerButton).toHaveClass("bg-primary");
    expect(leadButton).toHaveClass("bg-primary");
    expect(manageButton).toHaveClass("bg-primary");
  });

  it("should show all posts when all topics are selected", () => {
    render(<TopicFilter topics={mockTopics} allPosts={mockPosts} />);

    const engineerButton = screen.getByRole("button", { name: /engineer/i });
    fireEvent.click(engineerButton);
    fireEvent.click(engineerButton);

    expect(screen.getByText("Engineer Post")).toBeInTheDocument();
  });

  it("should display correct emoji icons for selected/unselected topics", () => {
    render(<TopicFilter topics={mockTopics} allPosts={mockPosts} />);

    const engineerButton = screen.getByRole("button", { name: /engineer/i });
    expect(engineerButton.textContent).toContain("🔘");

    fireEvent.click(engineerButton);
    expect(engineerButton.textContent).toContain("⚪️");
  });

  it("should render topic buttons with capitalize class", () => {
    render(<TopicFilter topics={mockTopics} allPosts={mockPosts} />);

    const engineerButton = screen.getByRole("button", { name: /engineer/i });
    expect(engineerButton).toHaveClass("capitalize");
  });

  it("should show no posts message when no posts match filter", () => {
    const postsWithDifferentTopic: Post[] = [
      {
        slug: "post-1",
        title: "Think Post",
        date: "2024-01-01",
        coverImage: "/image1.jpg",
        author: { name: "Author 1", picture: "/author1.jpg" },
        excerpt: "Excerpt 1",
        ogImage: { url: "/og1.jpg" },
        content: "Content 1",
        topic: "think",
      },
    ];

    render(
      <TopicFilter
        topics={["manage", "lead"]}
        allPosts={postsWithDifferentTopic}
      />
    );

    const leadButton = screen.getByRole("button", {
      name: /lead/i,
    });
    fireEvent.click(leadButton);

    expect(
      screen.getByText("No posts found for the selected topics.")
    ).toBeInTheDocument();
  });

  it("should render hero post with correct props", () => {
    render(<TopicFilter topics={mockTopics} allPosts={mockPosts} />);

    const heroPost = screen.getByTestId("hero-post");
    expect(heroPost).toBeInTheDocument();
    expect(screen.getByText("Engineer Post")).toBeInTheDocument();
    expect(screen.getByText("engineer")).toBeInTheDocument();
  });

  it("should render more posts with correct number of posts", () => {
    render(<TopicFilter topics={mockTopics} allPosts={mockPosts} />);

    const morePosts = screen.getByTestId("more-posts");
    expect(morePosts).toBeInTheDocument();
    expect(screen.getByText("Lead Post")).toBeInTheDocument();
    expect(screen.getByText("Manage Post")).toBeInTheDocument();
    expect(screen.getByText("Another Engineer Post")).toBeInTheDocument();
  });

  it("should not render hero post when no posts available", () => {
    render(<TopicFilter topics={mockTopics} allPosts={[]} />);
    expect(screen.queryByTestId("hero-post")).not.toBeInTheDocument();
  });

  it("should handle multiple topic selections", () => {
    render(<TopicFilter topics={mockTopics} allPosts={mockPosts} />);

    const engineerButton = screen.getByRole("button", { name: /engineer/i });
    const manageButton = screen.getByRole("button", { name: /manage/i });

    fireEvent.click(manageButton);

    expect(engineerButton).toHaveClass("bg-primary");
    expect(manageButton).not.toHaveClass("bg-primary");

    expect(screen.getByText("Engineer Post")).toBeInTheDocument();
    expect(screen.queryByText("Manage Post")).not.toBeInTheDocument();
  });

  it("should apply disabled class to unselected topics", () => {
    render(<TopicFilter topics={mockTopics} allPosts={mockPosts} />);

    const leadButton = screen.getByRole("button", { name: /lead/i });
    fireEvent.click(leadButton);

    const buttonClasses = leadButton.className;
    expect(buttonClasses).toContain("border-gray-400");
    expect(buttonClasses).toContain("text-gray-600");
  });

  it("should render container with correct ref", () => {
    const { container } = render(
      <TopicFilter topics={mockTopics} allPosts={mockPosts} />
    );

    const topicContainer = container.querySelector(
      ".flex.flex-wrap.justify-center"
    );
    expect(topicContainer).toBeInTheDocument();
  });

  it("should render heading with correct classes", () => {
    render(<TopicFilter topics={mockTopics} allPosts={mockPosts} />);

    const heading = screen.getByText("Topic Filters");
    expect(heading).toHaveClass("text-primary");
    expect(heading).toHaveClass("dark:text-primary-dark");
    expect(heading).toHaveClass("font-bold");
  });

  it("should have transition-colors class on buttons", () => {
    render(<TopicFilter topics={mockTopics} allPosts={mockPosts} />);

    const engineerButton = screen.getByRole("button", { name: /engineer/i });
    expect(engineerButton).toHaveClass("transition-colors");
    expect(engineerButton).toHaveClass("duration-200");
  });

  it("should equalize button widths based on widest button", () => {
    const originalGetBoundingClientRect =
      HTMLElement.prototype.getBoundingClientRect;

    HTMLElement.prototype.getBoundingClientRect = vi.fn(function (
      this: HTMLElement
    ) {
      const content = this.textContent || "";
      if (content.includes("engineer")) {
        return {
          width: 100,
          height: 30,
          top: 0,
          left: 0,
          bottom: 30,
          right: 100,
          x: 0,
          y: 0,
          toJSON: () => ({}),
        } as DOMRect;
      }
      if (content.includes("lead")) {
        return {
          width: 150,
          height: 30,
          top: 0,
          left: 0,
          bottom: 30,
          right: 150,
          x: 0,
          y: 0,
          toJSON: () => ({}),
        } as DOMRect;
      }
      if (content.includes("manage")) {
        return {
          width: 120,
          height: 30,
          top: 0,
          left: 0,
          bottom: 30,
          right: 120,
          x: 0,
          y: 0,
          toJSON: () => ({}),
        } as DOMRect;
      }
      return {
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0,
        toJSON: () => ({}),
      } as DOMRect;
    });

    render(<TopicFilter topics={mockTopics} allPosts={mockPosts} />);

    const buttons = screen.getAllByRole("button");
    const topicButtons = buttons.filter((b) =>
      b.textContent?.match(/engineer|lead|manage/)
    );

    topicButtons.forEach((button) => {
      expect(button.style.width).toBe("150px");
    });

    HTMLElement.prototype.getBoundingClientRect = originalGetBoundingClientRect;
  });
});
