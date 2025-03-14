"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: Props) {
  const pathname = usePathname();
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    setShouldLoad(true);
  }, []);

  const isPriority = priority || pathname === "/";

  if (!shouldLoad && !isPriority) {
    return (
      <div
        className={className}
        style={{
          width: width,
          height: height,
          backgroundColor: "#f5f5f5",
        }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={isPriority}
      loading={isPriority ? "eager" : "lazy"}
    />
  );
}
