import { ThemeSwitcher } from "./theme-switcher";
import SocialLinks from "./social-links";
import Link from "next/link";
import Image from "next/image";

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
            <Link
              href="/svo"
              className="text-primary transition-colors"
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
            <div className="theme-switcher-container relative flex-shrink-0">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
        <hr className="border-t border-primary dark:border-primary w-full" />
      </div>

      <div className="flex justify-center mb-6 w-full">
        <Image
          src="/assets/banner.png"
          alt="Code, People & Strategy - Musings by SVO"
          width={1200}
          height={300}
          className="w-full h-auto"
          priority
        />
      </div>

      <p className="text-accent-3 dark:text-accent-1 text-lg leading-relaxed mb-10 text-center max-w-4xl mx-auto">
        Insights on technical architecture, leadership strategies, process
        improvement, and hands-on software engineering practices; complete with
        working code and real-world examples. You'll find posts on decision
        frameworks, team scaling, cloud-native architectures, and more.
      </p>
    </div>
  );
}
