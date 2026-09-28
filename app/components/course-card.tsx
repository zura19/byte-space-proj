import Image from "next/image";
import { CourseStudents } from "@/app/home/components/courses/course-students";
import type { Course } from "@/app/home/components/courses/course-data";

const defaultDetails = ["17 Lessons", "2 hours 16 mins", "59 Comments"];

const starColorClasses: Record<string, string> = {
  gray: "fill-gray-400 text-gray-400",
  grey: "fill-gray-400 text-gray-400",
  lime: "fill-lime text-lime",
  amber: "fill-amber-400 text-amber-400",
  yellow: "fill-yellow-400 text-yellow-400",
};

export interface CourseCardProps {
  course: Course;
  className?: string;
  details?: string[];
  instructor?: string;
  level?: string;
  price?: string;
  pricePeriod?: string;
  rating?: number | string | null;
  showRating?: boolean;
  starColor?: string;
  compact?: boolean;
}

export function CourseCard({
  course,
  className = "",
  details = defaultDetails,
  instructor = "by purepearl studio",
  level = "Beginner",
  price = "$25",
  pricePeriod = "/lifetime",
  rating = 4.5,
  showRating = true,
  starColor = "gray",
  compact = false,
}: CourseCardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl border ${
        className.includes("border-") ? "" : "border-line"
      } bg-white ${compact ? "p-3 sm:p-3.5" : "p-4 pb-5"} ${className}`}
    >
      <div className="@container relative overflow-hidden rounded-xl">
        <Image
          src={`/images/home/${course.image}.webp`}
          alt={course.title}
          width={682}
          height={390}
          sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 1023px) 45vw, 341px"
          className="aspect-[341/195] w-full object-cover"
        />
        <ul className="absolute inset-x-2.5 bottom-2.5 flex items-center justify-between gap-1 sm:inset-x-3 sm:bottom-4 sm:gap-1.5">
          {details.map((detail) => (
            <li
              key={detail}
              className="whitespace-nowrap rounded-full bg-surface/80 px-2 py-0.5 text-[9px] font-medium leading-[13px] text-foreground backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-[10px] @min-[330px]:px-3 @min-[330px]:text-xs"
            >
              {detail}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`${
          compact ? "mt-3" : "mt-4 sm:mt-5"
        } flex items-start justify-between gap-2`}
      >
        <div className="min-w-0">
          <h3
            className={`font-heading font-semibold leading-tight text-black ${
              compact ? "text-sm sm:text-base" : "text-base sm:text-xl"
            }`}
          >
            {course.title}
          </h3>
          <p className="mt-0.5 text-xs text-brand sm:text-sm">{instructor}</p>
        </div>
        {showRating && rating !== null && rating !== undefined && (
          <span
            className="flex shrink-0 items-center gap-1 text-sm font-semibold text-foreground sm:text-base"
            aria-label={`Rated ${rating} out of 5`}
          >
            {rating}
            <svg
              className={`size-4 ${
                starColorClasses[starColor.toLowerCase()] || starColor
              }`}
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
        )}
      </div>
      <div
        className={`${
          compact ? "mt-2.5" : "mt-3.5"
        } flex flex-wrap items-center gap-2.5 sm:gap-3`}
      >
        <span className="inline-flex h-7 items-center gap-1 rounded-full bg-surface px-2.5 text-[11px] font-medium text-foreground/80 sm:h-8 sm:px-3 sm:text-xs">
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M3 13h3v4H3zM8.5 9h3v8h-3zM14 4h3v13h-3z" />
          </svg>
          {level}
        </span>
        <CourseStudents size={compact ? "sm" : "md"} />
      </div>
      <p
        className={`${compact ? "mt-2.5" : "mt-3 sm:mt-4"} flex items-baseline`}
      >
        <span className="font-heading text-lg font-semibold text-brand sm:text-xl">
          {price}
        </span>
        <span className="text-xs text-foreground/80">{pricePeriod}</span>
      </p>
    </article>
  );
}
