import { ThemeSwitcher } from "./theme-switcher";
import SocialLinks from "./social-links";

export function Intro() {
  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between items-center mt-8 mb-6">
          <h1 className="text-primary text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight flex items-center">
            <span className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 text-primary dark:text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            qual.is
          </h1>
          <div className="flex items-center space-x-4">
            <SocialLinks />
            <div className="theme-switcher-container relative flex-shrink-0">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
        <hr className="border-t border-primary dark:border-primary w-full" />
      </div>

      <h2 className="text-primary text-xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-10 text-center md:w-4/5 mx-auto">
        Code, People & Strategy - Musings by SVO
      </h2>
    </div>
  );
}
