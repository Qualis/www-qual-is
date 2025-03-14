import cn from "classnames";
import Link from "next/link";
import { OptimizedImage } from "./optimized-image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  priority?: boolean;
};

const CoverImage = ({ title, src, slug, priority = false }: Props) => {
  const image = (
    <OptimizedImage
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={1300}
      height={630}
      priority={priority}
    />
  );
  return (
    <div className="sm:mx-0 md:max-w-5xl lg:max-w-4xl xl:max-w-3xl md:mx-auto">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
