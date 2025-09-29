import CoverImage from "./cover-image";
import { PostTitle } from "@/app/_components/post-title";
import DateFormatter from "./date-formatter";
import { OptimizedImage } from "./optimized-image";

type Props = {
  title: string;
  coverImage: string;
  date?: string;
  topic?: string;
};

export function PostHeader({ title, coverImage, date, topic }: Props) {
  const bannerImage = topic
    ? `/assets/blog/categories/${topic}-banner.png`
    : null;

  return (
    <div className="w-full">
      {date && (
        <div className="mb-4 md:mb-8 text-lg text-primary dark:text-primary-dark text-center">
          <p>
            Published on <DateFormatter dateString={date} />
          </p>
        </div>
      )}
      <div className="flex flex-col items-center w-full">
        <div className="post-title-wrapper w-full">
          <PostTitle>{title}</PostTitle>
        </div>
        {bannerImage && (
          <div className="mb-10 md:mb-16 bg-black post-banner-image w-full">
            <OptimizedImage
              src={bannerImage}
              alt={`${topic} banner`}
              width={1920}
              height={400}
              priority={true}
              className="block"
            />
          </div>
        )}
      </div>
    </div>
  );
}
