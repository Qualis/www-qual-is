import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

const Header = () => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mt-8 mb-6">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight flex items-center">
          <Link 
            href="/" 
            className="flex items-center transition-all duration-200 hover:text-gray-800 dark:hover:text-gray-200 relative group"
          >
            <span className="mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </span>
            qual.is
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-600 dark:bg-gray-400 transition-all duration-200 group-hover:w-full"></span>
          </Link>
        </h2>
        <div className="theme-switcher-container relative">
          <ThemeSwitcher />
        </div>
      </div>
      <hr className="border-t border-gray-300 dark:border-gray-700 w-full" />
    </div>
  );
};

export default Header;
