import type { ImgHTMLAttributes } from "react";

export type StaticImageData = {
  src: string;
  height?: number;
  width?: number;
  blurDataURL?: string;
};

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string | StaticImageData;
  width?: number | `${number}`;
  height?: number | `${number}`;
  fill?: boolean;
  priority?: boolean;
  quality?: number | `${number}`;
  sizes?: string;
};

export default function Image({ src, fill: _fill, priority: _priority, quality: _quality, ...props }: ImageProps) {
  const resolvedSrc = typeof src === "string" ? src : src.src;
  return <img src={resolvedSrc} {...props} />;
}
