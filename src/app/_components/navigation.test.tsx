import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Navigation } from "./navigation";

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
    onClick,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
  }) => (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  ),
}));

describe("Navigation", () => {
  it("should render navigation element", () => {
    const { container } = render(<Navigation />);

    const nav = container.querySelector("nav");
    expect(nav).toBeInTheDocument();
  });

  it("should render qual.is brand link", () => {
    render(<Navigation />);

    const brandLink = screen.getByText("qual.is");
    expect(brandLink).toBeInTheDocument();
    expect(brandLink.closest("a")).toHaveAttribute("href", "/");
  });

  it("should render home icon", () => {
    const { container } = render(<Navigation />);

    const homeIcon = container.querySelector("svg");
    expect(homeIcon).toBeInTheDocument();
  });

  it("should render desktop navigation links", () => {
    render(<Navigation />);

    const servicesLink = screen.getByText("Services");
    const aboutLink = screen.getByText("About");
    const blogLink = screen.getByText("Blog");

    expect(servicesLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
  });

  it("should render Services link with correct href", () => {
    render(<Navigation />);

    const servicesLinks = screen.getAllByText("Services");
    const desktopServicesLink = servicesLinks[0]?.closest("a");
    expect(desktopServicesLink).toHaveAttribute("href", "/#services");
  });

  it("should render About link with correct href", () => {
    render(<Navigation />);

    const aboutLinks = screen.getAllByText("About");
    const desktopAboutLink = aboutLinks[0]?.closest("a");
    expect(desktopAboutLink).toHaveAttribute("href", "/about");
  });

  it("should render Blog link with correct href", () => {
    render(<Navigation />);

    const blogLinks = screen.getAllByText("Blog");
    const desktopBlogLink = blogLinks[0]?.closest("a");
    expect(desktopBlogLink).toHaveAttribute("href", "/blog");
  });

  it("should render ThemeSwitcher component", () => {
    render(<Navigation />);

    const themeSwitcher = screen.getByTestId("theme-switcher");
    expect(themeSwitcher).toBeInTheDocument();
  });

  it("should render SocialLinks component", () => {
    render(<Navigation />);

    const socialLinks = screen.getAllByTestId("social-links");
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  it("should render mobile menu toggle button", () => {
    render(<Navigation />);

    const menuButton = screen.getByLabelText("Toggle menu");
    expect(menuButton).toBeInTheDocument();
  });

  it("should not show mobile menu by default", () => {
    const { container } = render(<Navigation />);

    const mobileMenu = container.querySelector(".md\\:hidden.py-4");
    expect(mobileMenu).not.toBeInTheDocument();
  });

  it("should show mobile menu when toggle button is clicked", () => {
    const { container } = render(<Navigation />);

    const menuButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(menuButton);

    const mobileMenu = container.querySelector(".md\\:hidden.py-4");
    expect(mobileMenu).toBeInTheDocument();
  });

  it("should hide mobile menu when toggle button is clicked again", () => {
    const { container } = render(<Navigation />);

    const menuButton = screen.getByLabelText("Toggle menu");

    fireEvent.click(menuButton);
    let mobileMenu = container.querySelector(".md\\:hidden.py-4");
    expect(mobileMenu).toBeInTheDocument();

    fireEvent.click(menuButton);
    mobileMenu = container.querySelector(".md\\:hidden.py-4");
    expect(mobileMenu).not.toBeInTheDocument();
  });

  it("should render hamburger icon when menu is closed", () => {
    const { container } = render(<Navigation />);

    const hamburgerPath = container.querySelector(
      'path[d="M4 6h16M4 12h16M4 18h16"]'
    );
    expect(hamburgerPath).toBeInTheDocument();
  });

  it("should render close icon when menu is open", () => {
    const { container } = render(<Navigation />);

    const menuButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(menuButton);

    const closePath = container.querySelector('path[d="M6 18L18 6M6 6l12 12"]');
    expect(closePath).toBeInTheDocument();
  });

  it("should close mobile menu when mobile Services link is clicked", () => {
    const { container } = render(<Navigation />);

    const menuButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(menuButton);

    const servicesLinks = screen.getAllByText("Services");
    const mobileServicesLink = servicesLinks[1];
    fireEvent.click(mobileServicesLink!);

    const mobileMenu = container.querySelector(".md\\:hidden.py-4");
    expect(mobileMenu).not.toBeInTheDocument();
  });

  it("should close mobile menu when mobile About link is clicked", () => {
    const { container } = render(<Navigation />);

    const menuButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(menuButton);

    const aboutLinks = screen.getAllByText("About");
    const mobileAboutLink = aboutLinks[1];
    fireEvent.click(mobileAboutLink!);

    const mobileMenu = container.querySelector(".md\\:hidden.py-4");
    expect(mobileMenu).not.toBeInTheDocument();
  });

  it("should close mobile menu when mobile Blog link is clicked", () => {
    const { container } = render(<Navigation />);

    const menuButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(menuButton);

    const blogLinks = screen.getAllByText("Blog");
    const mobileBlogLink = blogLinks[1];
    fireEvent.click(mobileBlogLink!);

    const mobileMenu = container.querySelector(".md\\:hidden.py-4");
    expect(mobileMenu).not.toBeInTheDocument();
  });

  it("should apply sticky nav classes", () => {
    const { container } = render(<Navigation />);

    const nav = container.querySelector("nav");
    expect(nav).toHaveClass("sticky");
    expect(nav).toHaveClass("top-0");
    expect(nav).toHaveClass("z-50");
  });

  it("should apply backdrop blur classes", () => {
    const { container } = render(<Navigation />);

    const nav = container.querySelector("nav");
    expect(nav).toHaveClass("bg-accent-1/95");
    expect(nav).toHaveClass("dark:bg-accent-3/95");
    expect(nav).toHaveClass("backdrop-blur-sm");
  });

  it("should render brand with correct classes", () => {
    render(<Navigation />);

    const brandText = screen.getByText("qual.is");
    expect(brandText).toHaveClass("text-xl");
    expect(brandText).toHaveClass("font-bold");
    expect(brandText).toHaveClass("text-black");
    expect(brandText).toHaveClass("dark:text-white");
    expect(brandText).toHaveClass("relative");
  });

  it("should render desktop navigation with hidden-md class", () => {
    const { container } = render(<Navigation />);

    const desktopNav = container.querySelector(".hidden.md\\:flex");
    expect(desktopNav).toBeInTheDocument();
    expect(desktopNav).toHaveClass("items-center");
    expect(desktopNav).toHaveClass("space-x-8");
  });

  it("should render mobile menu button with correct classes", () => {
    render(<Navigation />);

    const menuButton = screen.getByLabelText("Toggle menu");
    expect(menuButton).toHaveClass("md:hidden");
    expect(menuButton).toHaveClass("text-primary");
    expect(menuButton).toHaveClass("dark:text-primary-dark");
  });

  it("should render mobile menu links with correct styles", () => {
    const { container } = render(<Navigation />);

    const menuButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(menuButton);

    const mobileLinks = container.querySelectorAll(".md\\:hidden a");
    mobileLinks.forEach((link) => {
      expect(link).toHaveClass("block");
      expect(link).toHaveClass("w-full");
      expect(link).toHaveClass("text-center");
      expect(link).toHaveClass("rounded-lg");
    });
  });

  it("should render underline span in brand", () => {
    const { container } = render(<Navigation />);

    const underlineSpan = container.querySelector(
      ".absolute.bottom-0.left-0.w-0"
    );
    expect(underlineSpan).toBeInTheDocument();
    expect(underlineSpan?.className).toContain("group-hover:w-full");
  });

  it("should render max-width container", () => {
    const { container } = render(<Navigation />);

    const maxWidthContainer = container.querySelector(".max-w-7xl");
    expect(maxWidthContainer).toBeInTheDocument();
    expect(maxWidthContainer).toHaveClass("mx-auto");
  });

  it("should render home icon with correct classes", () => {
    const { container } = render(<Navigation />);

    const homeIcon = container.querySelector("svg");
    expect(homeIcon).toHaveClass("h-6");
    expect(homeIcon).toHaveClass("w-6");
    expect(homeIcon).toHaveClass("text-primary");
    expect(homeIcon).toHaveClass("dark:text-primary-dark");
  });

  it("should render mobile social links in menu", () => {
    render(<Navigation />);

    const menuButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(menuButton);

    const socialLinks = screen.getAllByTestId("social-links");
    expect(socialLinks.length).toBe(2);
  });

  it("should render desktop social links with hidden class", () => {
    const { container } = render(<Navigation />);

    const desktopSocialContainer =
      container.querySelector(".hidden.md\\:block");
    expect(desktopSocialContainer).toBeInTheDocument();
  });

  it("should have correct navigation structure", () => {
    render(<Navigation />);

    expect(screen.getByText("qual.is")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByTestId("theme-switcher")).toBeInTheDocument();
    expect(screen.getByLabelText("Toggle menu")).toBeInTheDocument();
  });
});
