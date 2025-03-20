import CoverImage from "./cover-image";
import { PostTitle } from "@/app/_components/post-title";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date?: string;
  topic?: string;
};

export function PostHeader({ title, coverImage, date, topic }: Props) {
  return (
    <div className="w-full">
      <PostTitle>{title}</PostTitle>
      {topic && (
        <div className="mb-2 md:mb-4 text-center">
          <span className="inline-block capitalize px-3 py-1 text-primary dark:text-primary font-medium border border-primary rounded-md">{topic}</span>
        </div>
      )}
      {date && (
        <div className="mb-8 md:mb-16 text-lg text-primary dark:text-primary text-center">
          <p>
            Published on <DateFormatter dateString={date} />
          </p>
        </div>
      )}
    </div>
  );
}
