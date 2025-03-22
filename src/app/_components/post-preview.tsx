import { type Author } from "@/interfaces/author";
import Link from "next/link";
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
  author,
  slug,
  topic,
}: Props) {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-1 text-center">
        <span className="inline-block capitalize px-2 py-0.5 text-primary dark:text-primary font-medium border border-primary rounded-md">
          {topic}
        </span>
      </div>
      <div className="text-accent-3 dark:text-accent-1 text-sm mt-1 mb-2 text-center">
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
