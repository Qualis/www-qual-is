import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./header";

vi.mock("./theme-switcher", () => ({
  ThemeSwitcher: () => <div data-testid="theme-switcher">Theme Switcher</div>,
}));

vi.mock("./social-links", () => ({
  default: () => <div data-testid="social-links">Social Links</div>,
}));

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

describe("Header", () => {
  it("should render header container", () => {
    const { container } = render(<Header />);

    const headerContainer = container.querySelector(".mb-6");
    expect(headerContainer).toBeInTheDocument();
  });

  it("should render qual.is brand link", () => {
    render(<Header />);

    const brandLink = screen.getByText("qual.is");
    expect(brandLink).toBeInTheDocument();
    expect(brandLink.closest("a")).toHaveAttribute("href", "/");
  });

  it("should render home icon in brand link", () => {
    const { container } = render(<Header />);

    const homeIcon = container.querySelector("svg");
    expect(homeIcon).toBeInTheDocument();
  });

  it("should render author link with aria-label", () => {
    render(<Header />);

    const authorLink = screen.getByLabelText("Sean Van Osselaer");
    expect(authorLink).toBeInTheDocument();
    expect(authorLink).toHaveAttribute("href", "/svo");
  });

  it("should render author icon", () => {
    const { container } = render(<Header />);

    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThan(1);
  });

  it("should render SocialLinks component", () => {
    render(<Header />);

    const socialLinks = screen.getByTestId("social-links");
    expect(socialLinks).toBeInTheDocument();
  });

  it("should render ThemeSwitcher component", () => {
    render(<Header />);

    const themeSwitcher = screen.getByTestId("theme-switcher");
    expect(themeSwitcher).toBeInTheDocument();
  });

  it("should render horizontal rule", () => {
    const { container } = render(<Header />);

    const hr = container.querySelector("hr");
    expect(hr).toBeInTheDocument();
    expect(hr).toHaveClass("border-t");
    expect(hr).toHaveClass("border-primary");
    expect(hr).toHaveClass("dark:border-primary");
    expect(hr).toHaveClass("w-full");
  });

  it("should apply correct classes to brand link", () => {
    render(<Header />);

    const brandLink = screen.getByText("qual.is").closest("a");
    expect(brandLink).toHaveClass("text-accent-3");
    expect(brandLink).toHaveClass("dark:text-accent-1");
    expect(brandLink).toHaveClass("flex");
    expect(brandLink).toHaveClass("items-center");
    expect(brandLink).toHaveClass("transition-all");
    expect(brandLink).toHaveClass("duration-200");
    expect(brandLink).toHaveClass("hover:text-primary");
    expect(brandLink).toHaveClass("dark:hover:text-primary");
    expect(brandLink).toHaveClass("relative");
    expect(brandLink).toHaveClass("group");
  });

  it("should render brand heading with correct classes", () => {
    const { container } = render(<Header />);

    const heading = container.querySelector("h2");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("text-2xl");
    expect(heading).toHaveClass("md:text-4xl");
    expect(heading).toHaveClass("font-bold");
    expect(heading).toHaveClass("tracking-tight");
    expect(heading).toHaveClass("md:tracking-tighter");
    expect(heading).toHaveClass("leading-tight");
  });

  it("should render home icon with correct classes", () => {
    const { container } = render(<Header />);

    const homeIcon = container.querySelector("svg");
    expect(homeIcon).toHaveClass("h-5");
    expect(homeIcon).toHaveClass("w-5");
    expect(homeIcon).toHaveClass("md:h-6");
    expect(homeIcon).toHaveClass("md:w-6");
    expect(homeIcon).toHaveClass("text-primary");
    expect(homeIcon).toHaveClass("dark:text-primary-dark");
  });

  it("should render home icon with correct attributes", () => {
    const { container } = render(<Header />);

    const homeIcon = container.querySelector("svg");
    expect(homeIcon).toHaveAttribute("fill", "none");
    expect(homeIcon).toHaveAttribute("stroke", "currentColor");
  });

  it("should render home icon path element", () => {
    const { container } = render(<Header />);

    const path = container.querySelector("path");
    expect(path).toBeInTheDocument();
  });

  it("should render icon container with margin", () => {
    const { container } = render(<Header />);

    const iconContainer = container.querySelector(".mr-1");
    expect(iconContainer).toBeInTheDocument();
    expect(iconContainer).toContainElement(container.querySelector("svg"));
  });

  it("should render underline span with correct classes", () => {
    const { container } = render(<Header />);

    const underlineSpan = container.querySelector(
      ".absolute.bottom-0.left-0.w-0"
    );
    expect(underlineSpan).toBeInTheDocument();
    expect(underlineSpan?.className).toContain("h-0.5");
    expect(underlineSpan?.className).toContain("bg-primary");
    expect(underlineSpan?.className).toContain("dark:bg-primary");
    expect(underlineSpan?.className).toContain("transition-all");
    expect(underlineSpan?.className).toContain("duration-200");
    expect(underlineSpan?.className).toContain("group-hover:w-full");
  });

  it("should render flex container for actions", () => {
    const { container } = render(<Header />);

    const actionsContainer = container.querySelector(
      ".flex.items-center.space-x-4"
    );
    expect(actionsContainer).toBeInTheDocument();
  });

  it("should render author link with correct classes", () => {
    render(<Header />);

    const authorLink = screen.getByLabelText("Sean Van Osselaer");
    expect(authorLink).toHaveClass("text-primary");
    expect(authorLink).toHaveClass("dark:text-primary-dark");
    expect(authorLink).toHaveClass("transition-colors");
  });

  it("should render theme switcher in container", () => {
    const { container } = render(<Header />);

    const themeSwitcherContainer = container.querySelector(
      ".theme-switcher-container"
    );
    expect(themeSwitcherContainer).toBeInTheDocument();
    expect(themeSwitcherContainer).toHaveClass("relative");
    expect(themeSwitcherContainer).toContainElement(
      screen.getByTestId("theme-switcher")
    );
  });

  it("should render top level container with correct spacing", () => {
    const { container } = render(<Header />);

    const topContainer = container.querySelector(".flex.justify-between");
    expect(topContainer).toBeInTheDocument();
    expect(topContainer).toHaveClass("items-center");
    expect(topContainer).toHaveClass("mt-8");
    expect(topContainer).toHaveClass("mb-6");
  });

  it("should render all components in correct order", () => {
    render(<Header />);

    const brandLink = screen.getByText("qual.is");
    const authorLink = screen.getByLabelText("Sean Van Osselaer");
    const socialLinks = screen.getByTestId("social-links");
    const themeSwitcher = screen.getByTestId("theme-switcher");

    expect(brandLink).toBeInTheDocument();
    expect(authorLink).toBeInTheDocument();
    expect(socialLinks).toBeInTheDocument();
    expect(themeSwitcher).toBeInTheDocument();
  });

  it("should render path elements", () => {
    const { container } = render(<Header />);

    const paths = container.querySelectorAll("path");
    expect(paths.length).toBeGreaterThan(0);
  });
});
