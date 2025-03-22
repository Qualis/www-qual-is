import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none m-0 text-center text-accent-1 dark:text-accent-1 bg-black dark:bg-black py-4 px-6 w-full">
      {children}
    </h1>
  );
}
