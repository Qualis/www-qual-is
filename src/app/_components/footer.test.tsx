import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "./footer";

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

vi.mock("./social-links", () => ({
  default: () => <div data-testid="social-links">Social Links</div>,
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

describe("Footer", () => {
  it("should render footer element", () => {
    const { container } = render(<Footer />);

    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });

  it("should render footer with correct classes", () => {
    const { container } = render(<Footer />);

    const footer = container.querySelector("footer");
    expect(footer).toHaveClass("bg-accent-1");
    expect(footer).toHaveClass("border-t");
    expect(footer).toHaveClass("border-primary");
    expect(footer).toHaveClass("dark:bg-accent-3");
  });

  it("should render qual.is brand link", () => {
    render(<Footer />);

    const brandLink = screen.getByText("qual.is").closest("a");
    expect(brandLink).toBeInTheDocument();
    expect(brandLink).toHaveAttribute("href", "/");
  });

  it("should render home icon in brand link", () => {
    const { container } = render(<Footer />);

    const homeIcon = container.querySelector("svg");
    expect(homeIcon).toBeInTheDocument();
  });

  it("should render About link", () => {
    render(<Footer />);

    const aboutLink = screen.getByText("About");
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink.closest("a")).toHaveAttribute("href", "/about");
  });

  it("should render About link with correct classes", () => {
    render(<Footer />);

    const aboutLink = screen.getByText("About").closest("a");
    expect(aboutLink).toHaveClass("text-primary");
    expect(aboutLink).toHaveClass("dark:text-primary-dark");
    expect(aboutLink).toHaveClass("hover:text-accent-3");
    expect(aboutLink).toHaveClass("dark:hover:text-accent-1");
    expect(aboutLink).toHaveClass("transition-colors");
  });

  it("should render SocialLinks component", () => {
    render(<Footer />);

    const socialLinks = screen.getByTestId("social-links");
    expect(socialLinks).toBeInTheDocument();
  });

  it("should render ContactModal component", () => {
    render(<Footer />);

    const contactModal = screen.getByTestId("contact-modal");
    expect(contactModal).toBeInTheDocument();
  });

  it("should initialize ContactModal as closed", () => {
    render(<Footer />);

    const contactModal = screen.getByTestId("contact-modal");
    expect(contactModal).toHaveAttribute("data-open", "false");
  });

  it("should apply group hover classes to brand link", () => {
    render(<Footer />);

    const brandLink = screen.getByText("qual.is").closest("a");
    expect(brandLink).toHaveClass("group");
    expect(brandLink).toHaveClass("transition-all");
    expect(brandLink).toHaveClass("duration-200");
  });

  it("should render underline span with correct classes", () => {
    const { container } = render(<Footer />);

    const underlineSpan = container.querySelector(
      ".absolute.bottom-0.left-0.w-0"
    );
    expect(underlineSpan).toBeInTheDocument();
    expect(underlineSpan?.className).toContain("group-hover:w-full");
    expect(underlineSpan?.className).toContain("transition-all");
  });

  it("should center About link", () => {
    const { container } = render(<Footer />);

    const centerDiv = container.querySelector(
      ".absolute.left-1\\/2.transform.-translate-x-1\\/2"
    );
    expect(centerDiv).toBeInTheDocument();
    expect(centerDiv).toContainElement(screen.getByText("About"));
  });

  it("should render brand text with correct styling", () => {
    render(<Footer />);

    const brandText = screen.getByText("qual.is");
    expect(brandText).toHaveClass("text-xl");
    expect(brandText).toHaveClass("font-bold");
    expect(brandText).toHaveClass("text-black");
    expect(brandText).toHaveClass("dark:text-white");
    expect(brandText).toHaveClass("relative");
  });

  it("should render home icon with correct classes", () => {
    const { container } = render(<Footer />);

    const homeIcon = container.querySelector("svg");
    expect(homeIcon).toHaveClass("h-6");
    expect(homeIcon).toHaveClass("w-6");
    expect(homeIcon).toHaveClass("text-primary");
    expect(homeIcon).toHaveClass("dark:text-primary-dark");
  });

  it("should render max-width container", () => {
    const { container } = render(<Footer />);

    const maxWidthContainer = container.querySelector(".max-w-7xl");
    expect(maxWidthContainer).toBeInTheDocument();
    expect(maxWidthContainer).toHaveClass("mx-auto");
    expect(maxWidthContainer).toHaveClass("px-4");
    expect(maxWidthContainer).toHaveClass("sm:px-6");
    expect(maxWidthContainer).toHaveClass("lg:px-8");
  });

  it("should render flex container with correct layout", () => {
    const { container } = render(<Footer />);

    const flexContainer = container.querySelector(".flex.justify-between");
    expect(flexContainer).toBeInTheDocument();
    expect(flexContainer).toHaveClass("items-center");
    expect(flexContainer).toHaveClass("h-20");
    expect(flexContainer).toHaveClass("pb-6");
  });

  it("should render social links in flex container", () => {
    const { container } = render(<Footer />);

    const socialLinksContainer = container.querySelector(
      ".flex.items-center.space-x-4"
    );
    expect(socialLinksContainer).toBeInTheDocument();
    expect(socialLinksContainer).toContainElement(
      screen.getByTestId("social-links")
    );
  });

  it("should render home icon with correct stroke attributes", () => {
    const { container } = render(<Footer />);

    const homeIcon = container.querySelector("svg");
    expect(homeIcon).toHaveAttribute("fill", "none");
    expect(homeIcon).toHaveAttribute("stroke", "currentColor");
  });

  it("should render home icon path element", () => {
    const { container } = render(<Footer />);

    const path = container.querySelector("path");
    expect(path).toBeInTheDocument();
  });

  it("should call closeContactModal when modal close button is clicked", () => {
    render(<Footer />);

    const closeButton = screen.getByText("Close Modal");
    fireEvent.click(closeButton);

    const contactModal = screen.getByTestId("contact-modal");
    expect(contactModal).toHaveAttribute("data-open", "false");
  });
});
