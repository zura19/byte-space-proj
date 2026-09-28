import Image from "next/image";

export function ProgressCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white/60 bg-white/95 p-4 shadow-xl backdrop-blur-sm ${className}`}
    >
      <p className="text-xs sm:text-sm font-medium text-foreground/80">
        Learning Progress
      </p>
      <div className="my-1.5 flex items-center justify-between">
        <span className="font-heading text-3xl sm:text-4xl font-bold text-black">
          55%
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-surface">
        <div className="h-full w-[55%] rounded-full bg-lime" />
      </div>
    </div>
  );
}
export function StudentsCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white/60 bg-white/95 p-4 shadow-xl backdrop-blur-sm ${className}`}
    >
      <p className="text-xs sm:text-sm font-semibold text-foreground">
        Happy Students
      </p>
      <div className="mb-2 mt-0.5 flex items-center gap-1.5 text-xs text-muted">
        <span>4.9 (240)</span>
        <svg
          className="size-3.5 fill-amber-400 text-amber-400"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
      <div className="flex items-center -space-x-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <Image
            key={i}
            src={`/images/home/avatar-${i}.webp`}
            width={34}
            height={34}
            alt=""
            className="size-7 sm:size-8 rounded-full border-2 border-white object-cover"
          />
        ))}
        <span className="relative flex size-7 sm:size-8 items-center justify-center rounded-full border-2 border-white bg-lime text-[10px] font-bold text-black">
          2K+
        </span>
      </div>
    </div>
  );
}
export function Ornament({
  name,
  tone = "lime",
  className = "",
}: {
  name: string;
  tone?: "lime" | "white";
  className?: string;
}) {
  return (
    <Image
      src={`/images/home/ornament-${name}.webp`}
      width={380}
      height={380}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${tone === "white" ? "grayscale brightness-[1.65]" : ""} ${className}`}
    />
  );
}
