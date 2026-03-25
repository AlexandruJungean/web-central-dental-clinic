interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export function ImagePlaceholder({
  label,
  aspectRatio = "aspect-[4/3]",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-gray-separator bg-gray-bg text-center text-sm text-gray-subtle ${aspectRatio} ${className}`}
    >
      <span className="max-w-[80%] leading-relaxed">{label}</span>
    </div>
  );
}
