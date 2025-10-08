import { type Author } from "@/interfaces/author";
import DateFormatter from "./date-formatter";
import CoverImageWithTitle from "./cover-image-with-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  topic: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author: _author,
  slug,
  topic,
}: Props) {
  return (
    <section>
      <div className="mb-10">
        <div className="mb-1 text-center">
          <span className="inline-block capitalize px-2 py-0.5 text-primary dark:text-primary-dark font-medium border border-primary rounded-md">
            {topic}
          </span>
        </div>
        <div className="mt-1 mb-2 text-lg text-accent-3 dark:text-accent-1 text-center md:mx-auto text-sm">
          <DateFormatter dateString={date} />
        </div>
        <CoverImageWithTitle
          title={title}
          src={coverImage}
          slug={slug}
          priority={true}
        />
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </div>
    </section>
  );
}
