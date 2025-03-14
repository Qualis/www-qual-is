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
      <div className="mb-4 md:mb-8 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      {date && (
        <div className="mb-8 md:mb-16 text-lg text-gray-600 dark:text-gray-400 text-center">
          <p>
            Published on <DateFormatter dateString={date} />
          </p>
        </div>
      )}
    </div>
  );
}
