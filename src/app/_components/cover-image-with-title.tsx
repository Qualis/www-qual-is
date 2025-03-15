import cn from "classnames";
import Link from "next/link";
import { OptimizedImage } from "./optimized-image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  priority?: boolean;
};

const CoverImageWithTitle = ({ title, src, slug, priority = false }: Props) => {
  const image = (
    <div
      className={cn(
        "relative group overflow-hidden rounded-lg shadow-md transition-all duration-300",
        { "cursor-pointer transform hover:scale-[1.02] hover:shadow-xl": slug }
      )}
    >
      <OptimizedImage
        src={src}
        alt={`Cover Image for ${title}`}
        className="w-full transition-transform duration-500 group-hover:scale-105"
        width={1300}
        height={630}
        priority={priority}
      />
      <div
        className={cn(
          "absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-all duration-300",
          { "group-hover:bg-opacity-60": slug }
        )}
      >
        <h3 className="text-lg md:text-xl lg:text-2xl text-white font-bold text-center px-4 max-w-[90%] relative">
          {title}
          {slug && (
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-white text-black text-sm py-1 px-3 rounded-full inline-flex items-center">
                👀
              </span>
            </div>
          )}
        </h3>
      </div>
    </div>
  );

  return (
    <div className="sm:mx-0 md:max-w-5xl lg:max-w-4xl xl:max-w-3xl md:mx-auto">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title} className="block">
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImageWithTitle;
