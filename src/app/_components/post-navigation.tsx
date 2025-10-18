import Link from "next/link";
import { PostNavigation } from "@/interfaces/postNavigation";

type Props = {
  navigation: PostNavigation;
};

export function PostNavigationComponent({ navigation }: Props) {
  return (
    <nav
      className="flex justify-between items-center"
      aria-label="Post navigation"
    >
      <div className="flex-1">
        {navigation.previous ? (
          <Link
            href={`/posts/${navigation.previous.slug}`}
            className="inline-flex items-center text-primary dark:text-primary-dark hover:text-accent-3 dark:hover:text-accent-1 transition-colors"
            aria-label={`Previous post: ${navigation.previous.title}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        ) : (
          <span aria-hidden="true"></span>
        )}
      </div>

      <div className="flex-1 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary dark:text-primary-dark hover:text-accent-3 dark:hover:text-accent-1 transition-colors"
          aria-label="Back to blog"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        </Link>
      </div>

      <div className="flex-1 text-right">
        {navigation.next ? (
          <Link
            href={`/posts/${navigation.next.slug}`}
            className="inline-flex items-center text-primary dark:text-primary-dark hover:text-accent-3 dark:hover:text-accent-1 transition-colors"
            aria-label={`Next post: ${navigation.next.title}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        ) : (
          <span aria-hidden="true"></span>
        )}
      </div>
    </nav>
  );
}
