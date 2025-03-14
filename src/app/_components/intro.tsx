import { ThemeSwitcher } from "./theme-switcher";

export function Intro() {
  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between items-center mt-8 mb-6">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
            qual.is
          </h1>
          <div className="theme-switcher-container relative flex-shrink-0">
            <ThemeSwitcher />
          </div>
        </div>
        <hr className="border-t border-gray-300 dark:border-gray-700 w-full" />
      </div>
      
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-10 text-center md:w-4/5 mx-auto">
        Software Development & Delivery Musings by Sean (SVO) Van Osselaer
      </h2>
    </div>
  );
}
