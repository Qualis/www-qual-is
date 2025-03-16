import CoverImage from "./cover-image";
import { PostTitle } from "@/app/_components/post-title";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date?: string;
};

export function PostHeader({ title, coverImage, date }: Props) {
  return (
    <div className="w-full">
      <PostTitle>{title}</PostTitle>
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
