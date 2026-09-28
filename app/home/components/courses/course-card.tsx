import Image from "next/image";
import { CourseStudents } from "./course-students";
import type { Course } from "./course-data";

const courseDetails = ["17 Lessons", "2 hours 16 mins", "59 Comments"];

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-4 pb-5">
      <div className="@container relative overflow-hidden rounded-xl">
        <Image
          src={`/images/home/${course.image}.webp`}
          alt={course.title}
          width={682}
          height={390}
          sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 1023px) 45vw, 341px"
          className="aspect-[341/195] w-full object-cover"
        />
        <ul className="absolute inset-x-3 bottom-5 flex items-center justify-between gap-1.5">
          {courseDetails.map((detail) => (
            <li
              key={detail}
              className="whitespace-nowrap rounded-full bg-surface/60 px-2 py-1.5 text-[10px] font-medium leading-[14px] text-foreground backdrop-blur-sm @min-[330px]:px-3 @min-[330px]:text-xs"
            >
              {detail}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-heading text-xl font-semibold leading-6 text-black">
            {course.title}
          </h3>
          <p className="mt-1 text-xs leading-[19px] text-foreground/80">
            by <span className="font-medium text-brand">purepearl studio</span>
          </p>
        </div>
        <span
          className="flex shrink-0 items-center gap-1 text-lg font-medium leading-7 text-foreground/80"
          aria-label="Rated 4.5 out of 5"
        >
          4.5
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
          </svg>
        </span>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="inline-flex h-8 items-center gap-1 rounded-full bg-surface px-3 text-xs font-medium text-foreground/80">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M3 13h3v4H3z" />
            <path d="M8.5 9h3v8h-3zM14 4h3v13h-3z" opacity=".25" />
          </svg>
          Beginner
        </span>
        <CourseStudents />
      </div>
      <p className="mt-4 flex items-baseline">
        <span className="font-heading text-xl font-semibold leading-6 text-brand">
          $25
        </span>
        <span className="text-xs text-foreground/80">/lifetime</span>
      </p>
    </article>
  );
}
