import { type Author } from "@/interfaces/author";
import CoverImageWithTitle from "./cover-image-with-title";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  topic: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author: _author,
  slug,
  topic,
}: Props) {
  return (
    <div className="flex flex-col h-full">
      <div className="text-left flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-primary dark:text-primary-dark"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
        <span className="capitalize text-primary dark:text-primary-dark font-bold">
          {topic}
        </span>
      </div>
      <div className="text-accent-3 dark:text-accent-1 text-sm mb-2 text-left">
        <DateFormatter dateString={date} />
      </div>
      <div className="mb-2">
        <CoverImageWithTitle slug={slug} title={title} src={coverImage} />
      </div>
      <div className="flex-grow">
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </div>
    </div>
  );
}
