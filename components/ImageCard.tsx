interface Props {
  src: string;
  fallbackSrc?: string;
  alt?: string;
  objectFit?: string;
}

export const ImageCard: React.FC<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ src, fallbackSrc, alt, className, objectFit }) => (
  <div
    className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 sm:w-72 sm:rounded-2xl 
      ${className}`}
  >
    {fallbackSrc && (
      <img
        src={fallbackSrc}
        alt={alt}
        className={`absolute inset-0 z-0 block h-full w-full object-cover ${objectFit}`}
      />
    )}
    <img
      src={src}
      alt={alt}
      className={`relative z-10 block h-full w-full object-cover ${objectFit}`}
    />
  </div>
);
