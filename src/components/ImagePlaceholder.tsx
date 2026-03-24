export default function ImagePlaceholder({
  label,
  className = "",
  aspect = "16/9",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-brand-light text-brand-dark ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <span className="px-4 text-center text-sm font-medium">{label}</span>
    </div>
  );
}
