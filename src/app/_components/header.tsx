import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";
import SocialLinks from "./social-links";

const Header = () => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mt-8 mb-6">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight flex items-center">
          <Link
            href="/"
            className="text-accent-3 dark:text-accent-1 flex items-center transition-all duration-200 hover:text-primary dark:hover:text-primary relative group"
          >
            <span className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 text-primary dark:text-primary-dark"
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
            </span>
            qual.is
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary dark:bg-primary transition-all duration-200 group-hover:w-full"></span>
          </Link>
        </h2>
        <div className="flex items-center space-x-4">
          <Link
            href="/svo"
            className="text-primary dark:text-primary-dark transition-colors"
            aria-label="Sean Van Osselaer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
            </svg>
          </Link>
          <SocialLinks />
          <div className="theme-switcher-container relative">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      <hr className="border-t border-primary dark:border-primary w-full" />
    </div>
  );
};

export default Header;
