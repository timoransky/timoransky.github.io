import Image from "next/image";

interface Props {
  src: string;
  alt?: string;
  objectFit?: string;
}

export const ImageCard: React.FC<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ src, alt, className, objectFit }) => (
  <div
    className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl 
      ${className}`}
  >
    <img
      src={src}
      alt={alt}
      className={`block h-full w-full object-cover ${objectFit}`}
    />
  </div>
);
