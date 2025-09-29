"use client";

import { ThemeSwitcher } from "./theme-switcher";
import SocialLinks from "./social-links";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <nav className="sticky top-0 z-50 bg-accent-1/95 dark:bg-accent-3/95 backdrop-blur-sm border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 transition-all duration-200 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-xl font-bold text-black dark:text-white relative">
              qual.is
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary dark:bg-primary transition-all duration-200 group-hover:w-full"></span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-primary hover:text-accent-3 dark:hover:text-accent-1 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-primary hover:text-accent-3 dark:hover:text-accent-1 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-primary hover:text-accent-3 dark:hover:text-accent-1 transition-colors">
              Blog
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <SocialLinks />
            </div>
            <ThemeSwitcher />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-primary hover:text-accent-3 dark:hover:text-accent-1"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/10">
            <div className="flex flex-col space-y-2">
              <Link
                href="/#services"
                className="block w-full text-center py-3 px-4 text-primary hover:text-accent-3 dark:hover:text-accent-1 hover:bg-primary/5 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block w-full text-center py-3 px-4 text-primary hover:text-accent-3 dark:hover:text-accent-1 hover:bg-primary/5 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="block w-full text-center py-3 px-4 text-primary hover:text-accent-3 dark:hover:text-accent-1 hover:bg-primary/5 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="pt-4 mt-2 border-t border-primary/10 flex justify-center">
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
