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
    <div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <div className="mb-2">
        <CoverImageWithTitle slug={slug} title={title} src={coverImage} />
      </div>
      <div className="text-lg text-gray-600 dark:text-gray-400 mt-2 mb-4">
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
}
