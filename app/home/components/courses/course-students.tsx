import Image from "next/image";

export function CourseStudents() {
  return (
    <div className="flex -space-x-2" aria-label="More than 26 students">
      {[1, 2, 3, 4].map((student) => (
        <Image
          key={student}
          src={`/images/home/course-student-${student}.webp`}
          width={32}
          height={32}
          alt=""
          className="size-8 rounded-full border border-white object-cover"
        />
      ))}
      <span className="relative flex size-8 items-center justify-center rounded-full bg-lime text-xs font-medium text-foreground">
        26+
      </span>
    </div>
  );
}
