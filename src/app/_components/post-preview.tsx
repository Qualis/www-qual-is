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
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow">
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </div>
      <div className="mb-2">
        <CoverImageWithTitle slug={slug} title={title} src={coverImage} />
      </div>
      <div className="text-accent-3 dark:text-accent-1 text-lg mt-2 mb-4 text-center">
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
}
