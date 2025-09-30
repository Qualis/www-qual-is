import ContactModal from "@/app/_components/modal/contact-modal";
import SocialLinks from "./social-links";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-primary dark:bg-accent-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 transition-all duration-200 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary dark:text-primary-dark"
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

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/about"
              className="text-primary dark:text-primary-dark hover:text-accent-3 dark:hover:text-accent-1 transition-colors text-lg font-medium"
            >
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <SocialLinks />
            <ContactModal />
          </div>
        </div>
      </div>
    </footer>
  );
}
