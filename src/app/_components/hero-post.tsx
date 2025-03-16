import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";
import CoverImageWithTitle from "./cover-image-with-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <div className="mb-10">
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <CoverImageWithTitle
          title={title}
          src={coverImage}
          slug={slug}
          priority={true}
        />
        <div className="mt-3 text-lg text-accent-3 dark:text-accent-1 text-center md:mx-auto">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </section>
  );
}
