import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Services } from "./services";

vi.mock("./modal/contact-modal", () => ({
  ContactModal: ({
    isOpen,
    onClose,
  }: {
    isOpen: boolean;
    onClose: () => void;
  }) => (
    <div data-testid="contact-modal" data-open={isOpen}>
      <button onClick={onClose}>Close Modal</button>
    </div>
  ),
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    className,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

describe("Services", () => {
  it("should render services section", () => {
    const { container } = render(<Services />);

    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("id", "services");
  });

  it("should render Services heading", () => {
    render(<Services />);

    const heading = screen.getByText("Services");
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H2");
  });

  it("should render services description", () => {
    render(<Services />);

    expect(
      screen.getByText(/For the complex technical problems/i, { exact: false })
    ).toBeInTheDocument();
  });

  it("should render all 6 challenge cards", () => {
    const { container } = render(<Services />);

    const cards = container.querySelectorAll(
      ".bg-white.dark\\:bg-accent-3\\/10"
    );
    expect(cards.length).toBe(6);
  });

  it("should render challenge: Engineering bottleneck", () => {
    render(<Services />);

    expect(
      screen.getByText("Engineering has become your growth bottleneck")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Your product roadmap is delayed/i, { exact: false })
    ).toBeInTheDocument();
  });

  it("should render challenge: Scaling team", () => {
    render(<Services />);

    expect(
      screen.getByText("Scaling beyond your founding technical team")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Your original developers are overwhelmed/i, {
        exact: false,
      })
    ).toBeInTheDocument();
  });

  it("should render challenge: Technical debt", () => {
    render(<Services />);

    expect(
      screen.getByText("Technical debt is slowing everything down")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Simple changes take weeks/i, { exact: false })
    ).toBeInTheDocument();
  });

  it("should render challenge: CTO-level strategy", () => {
    render(<Services />);

    expect(
      screen.getByText("Need CTO-level strategy without full-time investment")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/You need senior technical leadership/i, {
        exact: false,
      })
    ).toBeInTheDocument();
  });

  it("should render challenge: Growth phase", () => {
    render(<Services />);

    expect(
      screen.getByText("Preparing technology for your next growth phase")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Fundraising, acquisition discussions/i, {
        exact: false,
      })
    ).toBeInTheDocument();
  });

  it("should render challenge: Deployments", () => {
    render(<Services />);

    expect(
      screen.getByText("Deployments are risky and block feature delivery")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Every release requires careful coordination/i, {
        exact: false,
      })
    ).toBeInTheDocument();
  });

  it("should render Reach out button", () => {
    render(<Services />);

    const reachOutButton = screen.getByRole("button", { name: /Reach out/i });
    expect(reachOutButton).toBeInTheDocument();
  });

  it("should render About link", () => {
    render(<Services />);

    const aboutLink = screen.getByText("About");
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink.closest("a")).toHaveAttribute("href", "/about");
  });

  it("should render ContactModal component", () => {
    render(<Services />);

    const contactModal = screen.getByTestId("contact-modal");
    expect(contactModal).toBeInTheDocument();
  });

  it("should initialize ContactModal as closed", () => {
    render(<Services />);

    const contactModal = screen.getByTestId("contact-modal");
    expect(contactModal).toHaveAttribute("data-open", "false");
  });

  it("should open ContactModal when Reach out button is clicked", () => {
    render(<Services />);

    const reachOutButton = screen.getByRole("button", { name: /Reach out/i });
    fireEvent.click(reachOutButton);

    const contactModal = screen.getByTestId("contact-modal");
    expect(contactModal).toHaveAttribute("data-open", "true");
  });

  it("should close ContactModal when close button is clicked", () => {
    render(<Services />);

    const reachOutButton = screen.getByRole("button", { name: /Reach out/i });
    fireEvent.click(reachOutButton);

    const closeButton = screen.getByText("Close Modal");
    fireEvent.click(closeButton);

    const contactModal = screen.getByTestId("contact-modal");
    expect(contactModal).toHaveAttribute("data-open", "false");
  });

  it("should render CTA section", () => {
    render(<Services />);

    expect(
      screen.getByText("Ready to scale your engineering team?")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Let's discuss how to accelerate your growth/i, {
        exact: false,
      })
    ).toBeInTheDocument();
  });

  it("should render icons for each challenge", () => {
    const { container } = render(<Services />);

    const icons = container.querySelectorAll("svg");
    expect(icons.length).toBeGreaterThanOrEqual(6);
  });

  it("should apply correct section classes", () => {
    const { container } = render(<Services />);

    const section = container.querySelector("section");
    expect(section).toHaveClass("py-12");
    expect(section).toHaveClass("bg-accent-1/50");
    expect(section).toHaveClass("dark:bg-accent-3/5");
    expect(section).toHaveClass("scroll-mt-20");
  });

  it("should apply correct heading classes", () => {
    const { container } = render(<Services />);

    const heading = container.querySelector("h2");
    expect(heading).toHaveClass("text-4xl");
    expect(heading).toHaveClass("md:text-5xl");
    expect(heading).toHaveClass("font-bold");
    expect(heading).toHaveClass("text-primary");
    expect(heading).toHaveClass("dark:text-primary-dark");
  });

  it("should apply grid layout to challenges", () => {
    const { container } = render(<Services />);

    const grid = container.querySelector(".grid.md\\:grid-cols-2");
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveClass("lg:grid-cols-3");
    expect(grid).toHaveClass("gap-8");
  });

  it("should apply hover effects to challenge cards", () => {
    const { container } = render(<Services />);

    const cards = container.querySelectorAll(".hover\\:shadow-lg");
    expect(cards.length).toBe(6);
  });

  it("should render Reach out button with correct classes", () => {
    render(<Services />);

    const reachOutButton = screen.getByRole("button", { name: /Reach out/i });
    expect(reachOutButton).toHaveClass("bg-primary");
    expect(reachOutButton).toHaveClass("hover:bg-highlight");
    expect(reachOutButton).toHaveClass("text-white");
    expect(reachOutButton).toHaveClass("font-bold");
    expect(reachOutButton).toHaveClass("rounded-full");
  });

  it("should render About link with correct classes", () => {
    render(<Services />);

    const aboutLink = screen.getByText("About").closest("a");
    expect(aboutLink).toHaveClass("border-2");
    expect(aboutLink).toHaveClass("border-primary");
    expect(aboutLink).toHaveClass("text-primary");
    expect(aboutLink).toHaveClass("dark:text-primary-dark");
    expect(aboutLink).toHaveClass("rounded-full");
  });

  it("should render CTA section with background", () => {
    const { container } = render(<Services />);

    const ctaSection = container.querySelector(".bg-primary\\/5");
    expect(ctaSection).toBeInTheDocument();
    expect(ctaSection).toHaveClass("rounded-2xl");
  });

  it("should render max-width container", () => {
    const { container } = render(<Services />);

    const maxWidthContainer = container.querySelector(".max-w-7xl");
    expect(maxWidthContainer).toBeInTheDocument();
    expect(maxWidthContainer).toHaveClass("mx-auto");
  });

  it("should render challenge icons with correct styling", () => {
    const { container } = render(<Services />);

    const iconContainers = container.querySelectorAll(".bg-highlight\\/10");
    expect(iconContainers.length).toBe(6);
    iconContainers.forEach((iconContainer) => {
      expect(iconContainer).toHaveClass("rounded-lg");
      expect(iconContainer).toHaveClass("p-3");
    });
  });

  it("should render challenge titles with correct styling", () => {
    const { container } = render(<Services />);

    const challengeTitles = container.querySelectorAll("h3");
    expect(challengeTitles.length).toBeGreaterThanOrEqual(6);
  });

  it("should render CTA buttons in flex container", () => {
    const { container } = render(<Services />);

    const buttonContainer = container.querySelector(
      ".flex.flex-col.sm\\:flex-row"
    );
    expect(buttonContainer).toBeInTheDocument();
    expect(buttonContainer).toHaveClass("gap-4");
    expect(buttonContainer).toHaveClass("justify-center");
  });
});
