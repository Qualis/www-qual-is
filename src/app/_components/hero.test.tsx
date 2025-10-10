import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Hero } from "./hero";

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

describe("Hero", () => {
  it("should render hero section", () => {
    const { container } = render(<Hero />);

    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
  });

  it("should render main heading", () => {
    render(<Hero />);

    expect(
      screen.getByText(/Connecting the Dots:/i, { exact: false })
    ).toBeInTheDocument();
    expect(screen.getByText(/Decoding Complexity/i)).toBeInTheDocument();
  });

  it("should render description text", () => {
    render(<Hero />);

    expect(
      screen.getByText(/Need to scale your engineering capabilities/i, {
        exact: false,
      })
    ).toBeInTheDocument();
  });

  it("should render 'Reach out' button", () => {
    render(<Hero />);

    const reachOutButton = screen.getByRole("button", { name: /Reach out/i });
    expect(reachOutButton).toBeInTheDocument();
  });

  it("should render 'Services on offer' link", () => {
    render(<Hero />);

    const servicesLink = screen.getByText(/Services on offer/i);
    expect(servicesLink).toBeInTheDocument();
    expect(servicesLink.closest("a")).toHaveAttribute("href", "/#services");
  });

  it("should render ContactModal component", () => {
    render(<Hero />);

    const contactModal = screen.getByTestId("contact-modal");
    expect(contactModal).toBeInTheDocument();
  });

  it("should initialize ContactModal as closed", () => {
    render(<Hero />);

    const contactModal = screen.getByTestId("contact-modal");
    expect(contactModal).toHaveAttribute("data-open", "false");
  });

  it("should open ContactModal when 'Reach out' button is clicked", () => {
    render(<Hero />);

    const reachOutButton = screen.getByRole("button", { name: /Reach out/i });
    fireEvent.click(reachOutButton);

    const contactModal = screen.getByTestId("contact-modal");
    expect(contactModal).toHaveAttribute("data-open", "true");
  });

  it("should close ContactModal when close button is clicked", () => {
    render(<Hero />);

    const reachOutButton = screen.getByRole("button", { name: /Reach out/i });
    fireEvent.click(reachOutButton);

    const contactModal = screen.getByTestId("contact-modal");
    expect(contactModal).toHaveAttribute("data-open", "true");

    const closeButton = screen.getByText("Close Modal");
    fireEvent.click(closeButton);

    expect(contactModal).toHaveAttribute("data-open", "false");
  });

  it("should render SVG visualization", () => {
    const { container } = render(<Hero />);

    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("should apply correct classes to section", () => {
    const { container } = render(<Hero />);

    const section = container.querySelector("section");
    expect(section).toHaveClass("py-20");
    expect(section).toHaveClass("lg:py-32");
  });

  it("should render heading with correct classes", () => {
    const { container } = render(<Hero />);

    const heading = container.querySelector("h1");
    expect(heading).toHaveClass("text-4xl");
    expect(heading).toHaveClass("md:text-5xl");
    expect(heading).toHaveClass("lg:text-6xl");
    expect(heading).toHaveClass("font-bold");
    expect(heading).toHaveClass("text-primary");
    expect(heading).toHaveClass("dark:text-primary-dark");
  });

  it("should render 'Reach out' button with correct classes", () => {
    render(<Hero />);

    const reachOutButton = screen.getByRole("button", { name: /Reach out/i });
    expect(reachOutButton).toHaveClass("bg-primary");
    expect(reachOutButton).toHaveClass("hover:bg-accent-1");
    expect(reachOutButton).toHaveClass("text-white");
    expect(reachOutButton).toHaveClass("font-bold");
    expect(reachOutButton).toHaveClass("rounded-full");
  });

  it("should render 'Services on offer' link with correct classes", () => {
    render(<Hero />);

    const servicesLink = screen.getByText(/Services on offer/i).closest("a");
    expect(servicesLink).toHaveClass("border-2");
    expect(servicesLink).toHaveClass("border-primary");
    expect(servicesLink).toHaveClass("text-primary");
    expect(servicesLink).toHaveClass("dark:text-primary-dark");
    expect(servicesLink).toHaveClass("hover:bg-primary");
    expect(servicesLink).toHaveClass("rounded-full");
  });

  it("should render grid layout", () => {
    const { container } = render(<Hero />);

    const grid = container.querySelector(".grid");
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveClass("lg:grid-cols-2");
    expect(grid).toHaveClass("gap-12");
  });

  it("should render gradient background for SVG", () => {
    const { container } = render(<Hero />);

    const gradientBg = container.querySelector(".bg-gradient-to-br");
    expect(gradientBg).toBeInTheDocument();
    expect(gradientBg).toHaveClass("rounded-2xl");
  });

  it("should render multiple SVG groups", () => {
    const { container } = render(<Hero />);

    const svgGroups = container.querySelectorAll("svg g");
    expect(svgGroups.length).toBeGreaterThan(0);
  });

  it("should render SVG paths", () => {
    const { container } = render(<Hero />);

    const paths = container.querySelectorAll("svg path");
    expect(paths.length).toBeGreaterThan(0);
  });

  it("should render SVG circles", () => {
    const { container } = render(<Hero />);

    const circles = container.querySelectorAll("svg circle");
    expect(circles.length).toBeGreaterThan(0);
  });

  it("should render pulse animation classes", () => {
    const { container } = render(<Hero />);

    const pulseSlow = container.querySelector(".pulse-slow");
    expect(pulseSlow).toBeInTheDocument();

    const pulseMedium = container.querySelector(".pulse-medium");
    expect(pulseMedium).toBeInTheDocument();

    const pulseFast = container.querySelector(".pulse-fast");
    expect(pulseFast).toBeInTheDocument();
  });

  it("should render max-width container", () => {
    const { container } = render(<Hero />);

    const maxWidthContainer = container.querySelector(".max-w-7xl");
    expect(maxWidthContainer).toBeInTheDocument();
    expect(maxWidthContainer).toHaveClass("mx-auto");
  });

  it("should render button container with flex layout", () => {
    const { container } = render(<Hero />);

    const buttonContainer = container.querySelector(".flex.flex-col");
    expect(buttonContainer).toBeInTheDocument();
    expect(buttonContainer).toHaveClass("sm:flex-row");
    expect(buttonContainer).toHaveClass("gap-4");
  });

  it("should have correct heading text structure", () => {
    const { container } = render(<Hero />);

    const heading = container.querySelector("h1");
    expect(heading?.textContent).toContain("Connecting the Dots:");
    expect(heading?.textContent).toContain("Decoding Complexity");
    expect(heading?.textContent).toContain("with Code, People & Strategy");
  });

  it("should render accent span in heading", () => {
    const { container } = render(<Hero />);

    const accentSpan = container.querySelector("h1 .text-accent-3");
    expect(accentSpan).toBeInTheDocument();
    expect(accentSpan).toHaveClass("dark:text-accent-1");
  });

  it("should render description paragraph with correct classes", () => {
    const { container } = render(<Hero />);

    const paragraph = container.querySelector("p");
    expect(paragraph).toHaveClass("text-xl");
    expect(paragraph).toHaveClass("md:text-2xl");
    expect(paragraph).toHaveClass("text-primary");
    expect(paragraph).toHaveClass("dark:text-primary-dark");
    expect(paragraph).toHaveClass("leading-relaxed");
  });
});
