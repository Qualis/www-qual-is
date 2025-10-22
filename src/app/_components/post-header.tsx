import { PostTitle } from "@/app/_components/post-title";
import DateFormatter from "./date-formatter";
import { OptimizedImage } from "./optimized-image";

type Props = {
  title: string;
  coverImage: string;
  date?: string;
  topic?: string;
};

export function PostHeader({
  title,
  coverImage: _coverImage,
  date,
  topic,
}: Props) {
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
        <div className="post-title-wrapper w-full h-24 md:h-32 lg:h-36 flex items-center justify-center bg-black dark:bg-black">
          <PostTitle>{title}</PostTitle>
        </div>
        {bannerImage && (
          <div className="bg-black post-banner-image w-full">
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
