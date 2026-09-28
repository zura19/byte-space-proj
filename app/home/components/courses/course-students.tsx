import Image from "next/image";

interface CourseStudentsProps {
  size?: "sm" | "md";
  className?: string;
}

export function CourseStudents({
  size = "md",
  className = "",
}: CourseStudentsProps) {
  const itemSize = size === "sm" ? "size-6 sm:size-7" : "size-8";
  const badgeText = size === "sm" ? "text-[10px]" : "text-xs";

  return (
    <div
      className={`flex -space-x-2 ${className}`}
      aria-label="More than 26 students"
    >
      {[1, 2, 3, 4].map((student) => (
        <Image
          key={student}
          src={`/images/home/course-student-${student}.webp`}
          width={32}
          height={32}
          alt=""
          className={`${itemSize} rounded-full border border-white object-cover`}
        />
      ))}
      <span
        className={`relative flex ${itemSize} items-center justify-center rounded-full bg-lime ${badgeText} font-medium text-foreground`}
      >
        26+
      </span>
    </div>
  );
}
