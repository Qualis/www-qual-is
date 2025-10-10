import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Intro } from "./intro";

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

vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    width,
    height,
    className,
    priority,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    priority?: boolean;
  }) => (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      data-priority={priority}
    />
  ),
}));

describe("Intro", () => {
  it("should render intro container", () => {
    const { container } = render(<Intro />);

    const introContainer = container.firstChild;
    expect(introContainer).toBeInTheDocument();
  });

  it("should render qual.is heading", () => {
    render(<Intro />);

    const heading = screen.getByText("qual.is");
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H1");
  });

  it("should render heading with correct classes", () => {
    const { container } = render(<Intro />);

    const heading = container.querySelector("h1");
    expect(heading).toHaveClass("text-primary");
    expect(heading).toHaveClass("dark:text-primary-dark");
    expect(heading).toHaveClass("text-2xl");
    expect(heading).toHaveClass("md:text-4xl");
    expect(heading).toHaveClass("font-bold");
  });

  it("should render checkmark icon in heading", () => {
    const { container } = render(<Intro />);

    const checkmarkIcon = container.querySelector("svg");
    expect(checkmarkIcon).toBeInTheDocument();
  });

  it("should render author link with aria-label", () => {
    render(<Intro />);

    const authorLinks = screen.getAllByLabelText("Sean Van Osselaer");
    expect(authorLinks.length).toBeGreaterThan(0);
    expect(authorLinks[0]).toHaveAttribute("href", "/svo");
  });

  it("should render SocialLinks component", () => {
    render(<Intro />);

    const socialLinks = screen.getByTestId("social-links");
    expect(socialLinks).toBeInTheDocument();
  });

  it("should render ThemeSwitcher component", () => {
    render(<Intro />);

    const themeSwitcher = screen.getByTestId("theme-switcher");
    expect(themeSwitcher).toBeInTheDocument();
  });

  it("should render banner image", () => {
    render(<Intro />);

    const banner = screen.getByAltText(
      "Code, People & Strategy - Musings by SVO"
    );
    expect(banner).toBeInTheDocument();
    expect(banner).toHaveAttribute("src", "/assets/banner.png");
    expect(banner).toHaveAttribute("width", "1200");
    expect(banner).toHaveAttribute("height", "300");
  });

  it("should render banner with priority", () => {
    render(<Intro />);

    const banner = screen.getByAltText(
      "Code, People & Strategy - Musings by SVO"
    );
    expect(banner).toHaveAttribute("data-priority", "true");
  });

  it("should render banner inside link", () => {
    render(<Intro />);

    const banner = screen.getByAltText(
      "Code, People & Strategy - Musings by SVO"
    );
    const link = banner.closest("a");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/svo");
  });

  it("should render description paragraph", () => {
    render(<Intro />);

    expect(
      screen.getByText(/Need to scale your engineering team/i, { exact: false })
    ).toBeInTheDocument();
  });

  it("should render 'How I Can Help' button", () => {
    render(<Intro />);

    const ctaButton = screen.getByText(/How I Can Help/i);
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton.closest("a")).toHaveAttribute("href", "/svo");
  });

  it("should render 'How I Can Help' button with correct classes", () => {
    render(<Intro />);

    const ctaButton = screen.getByText(/How I Can Help/i).closest("a");
    expect(ctaButton).toHaveClass("bg-primary");
    expect(ctaButton).toHaveClass("hover:bg-accent-1");
    expect(ctaButton).toHaveClass("text-white");
    expect(ctaButton).toHaveClass("font-bold");
    expect(ctaButton).toHaveClass("rounded-full");
    expect(ctaButton).toHaveClass("shadow-2xl");
  });

  it("should render 'Musings' heading", () => {
    render(<Intro />);

    const musingsHeading = screen.getByText("Musings");
    expect(musingsHeading).toBeInTheDocument();
    expect(musingsHeading.tagName).toBe("H2");
  });

  it("should render 'Musings' heading with correct classes", () => {
    const { container } = render(<Intro />);

    const musingsHeading = container.querySelector("h2");
    expect(musingsHeading).toHaveClass("text-primary");
    expect(musingsHeading).toHaveClass("dark:text-primary-dark");
    expect(musingsHeading).toHaveClass("text-xl");
    expect(musingsHeading).toHaveClass("md:text-3xl");
    expect(musingsHeading).toHaveClass("lg:text-4xl");
    expect(musingsHeading).toHaveClass("font-bold");
  });

  it("should render musings description", () => {
    render(<Intro />);

    expect(
      screen.getByText(/Insights on technical architecture/i, { exact: false })
    ).toBeInTheDocument();
  });

  it("should render musings description with correct classes", () => {
    render(<Intro />);

    const musingsDescription = screen.getByText(
      /Insights on technical architecture/i,
      { exact: false }
    );
    expect(musingsDescription).toHaveClass("text-accent-3");
    expect(musingsDescription).toHaveClass("dark:text-accent-1");
    expect(musingsDescription).toHaveClass("text-lg");
    expect(musingsDescription).toHaveClass("leading-relaxed");
  });

  it("should render horizontal rules", () => {
    const { container } = render(<Intro />);

    const hrs = container.querySelectorAll("hr");
    expect(hrs.length).toBe(2);
  });

  it("should render horizontal rules with correct classes", () => {
    const { container } = render(<Intro />);

    const hrs = container.querySelectorAll("hr");
    hrs.forEach((hr) => {
      expect(hr).toHaveClass("border-t");
      expect(hr).toHaveClass("border-primary");
      expect(hr).toHaveClass("dark:border-primary");
      expect(hr).toHaveClass("w-full");
    });
  });

  it("should render theme switcher in container", () => {
    const { container } = render(<Intro />);

    const themeSwitcherContainer = container.querySelector(
      ".theme-switcher-container"
    );
    expect(themeSwitcherContainer).toBeInTheDocument();
    expect(themeSwitcherContainer).toHaveClass("relative");
    expect(themeSwitcherContainer).toHaveClass("flex-shrink-0");
  });

  it("should render top navigation with correct layout", () => {
    const { container } = render(<Intro />);

    const nav = container.querySelector(".flex.justify-between.items-center");
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass("mt-8");
    expect(nav).toHaveClass("mb-6");
  });

  it("should render actions container", () => {
    const { container } = render(<Intro />);

    const actionsContainer = container.querySelector(
      ".flex.items-center.space-x-4"
    );
    expect(actionsContainer).toBeInTheDocument();
  });

  it("should render banner with hover classes", () => {
    render(<Intro />);

    const banner = screen.getByAltText(
      "Code, People & Strategy - Musings by SVO"
    );
    expect(banner).toHaveClass("cursor-pointer");
    expect(banner).toHaveClass("hover:opacity-80");
    expect(banner).toHaveClass("transition-opacity");
  });

  it("should render description section with max-width", () => {
    const { container } = render(<Intro />);

    const descriptionSection = container.querySelector(".max-w-4xl");
    expect(descriptionSection).toBeInTheDocument();
    expect(descriptionSection).toHaveClass("mx-auto");
    expect(descriptionSection).toHaveClass("text-center");
  });

  it("should render description paragraph with correct classes", () => {
    render(<Intro />);

    const description = screen.getByText(
      /Need to scale your engineering team/i,
      { exact: false }
    );
    expect(description).toHaveClass("text-primary");
    expect(description).toHaveClass("dark:text-primary-dark");
    expect(description).toHaveClass("text-xl");
    expect(description).toHaveClass("md:text-2xl");
    expect(description).toHaveClass("font-semibold");
  });

  it("should render checkmark icon with correct classes", () => {
    const { container } = render(<Intro />);

    const checkmarkIcon = container.querySelector("svg");
    expect(checkmarkIcon).toHaveClass("h-5");
    expect(checkmarkIcon).toHaveClass("w-5");
    expect(checkmarkIcon).toHaveClass("md:h-6");
    expect(checkmarkIcon).toHaveClass("md:w-6");
    expect(checkmarkIcon).toHaveClass("text-primary");
    expect(checkmarkIcon).toHaveClass("dark:text-primary-dark");
  });

  it("should render author icon", () => {
    const { container } = render(<Intro />);

    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThan(1);
  });

  it("should render all main sections", () => {
    render(<Intro />);

    expect(screen.getByText("qual.is")).toBeInTheDocument();
    expect(
      screen.getByAltText("Code, People & Strategy - Musings by SVO")
    ).toBeInTheDocument();
    expect(screen.getByText(/How I Can Help/i)).toBeInTheDocument();
    expect(screen.getByText("Musings")).toBeInTheDocument();
  });
});
