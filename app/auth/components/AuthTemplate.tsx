import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Ornament } from "@/app/components/visuals";
import { CourseCard } from "@/app/components/course-card";
import { courses } from "@/app/home/components/courses/course-data";
import ByteSpaceMark from "@/app/components/ByteSpaceMark";

interface AuthTemplateProps {
  children: ReactNode;
  heading?: string;
  subheading?: string;
}

export function AuthTemplate({
  children,
  heading = "Sign up and come in",
  subheading = "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
}: AuthTemplateProps) {
  return (
    <div className="blue-grid relative isolate flex h-[100dvh] max-h-[100dvh] flex-col justify-between overflow-hidden px-6 py-4 sm:px-10 sm:py-6 lg:px-14 lg:py-6">
      <header className="relative z-10 w-full shrink-0">
        <Link
          href="/#home"
          aria-label="ByteSpace Home"
          className="inline-flex items-center gap-2 transition hover:opacity-90"
        >
          <ByteSpaceMark className="h-8 w-auto" />
        </Link>
      </header>

      <main className="relative z-10 mx-auto my-auto grid w-full max-w-7xl flex-1 items-center gap-8 py-2 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div className="flex max-w-xl flex-col justify-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-2 max-w-md text-xs leading-relaxed text-white/80 sm:mt-3 sm:text-sm">
            {subheading}
          </p>

          <div className="relative mt-6 h-[390px] w-full max-w-[480px] sm:h-[430px] sm:max-w-[500px]">
            <Ornament
              name="ring"
              className="absolute -left-2 top-8 z-40 w-24 drop-shadow-xl sm:top-10 sm:w-28"
            />

            <Ornament
              name="pyramid"
              className="absolute -bottom-2 -left-3 z-40 w-28 drop-shadow-xl sm:w-32"
            />

            <div className="absolute left-0 top-12 z-10 w-[240px] sm:top-14 sm:w-[265px]">
              <CourseCard
                course={courses[1]}
                details={["17 Lessons"]}
                showRating={false}
                compact
                starColor="lime"
                className="pointer-events-none select-none border-white/60 shadow-xl"
              />
            </div>

            <div className="absolute left-16 top-0 z-20 w-[270px] sm:left-22 sm:w-[310px]">
              <CourseCard
                course={courses[2]}
                starColor="lime"
                className="border-white/80 shadow-2xl"
              />
            </div>

            <Ornament
              name="spring"
              tone="white"
              className="absolute -right-1 bottom-18 z-35 w-24 rotate-12 drop-shadow-xl sm:bottom-20 sm:right-2 sm:w-28"
            />

            <div className="absolute bottom-2 right-0 z-30 w-[205px] rounded-2xl bg-lime p-3.5 shadow-xl sm:bottom-4 sm:right-2 sm:w-[225px]">
              <p className="text-xs font-bold text-black sm:text-sm">
                Happy Students
              </p>
              <div className="my-1 flex items-center gap-1 text-[11px] font-semibold text-black/80">
                <span>4.5 (240)</span>
                <span className="text-brand">★</span>
              </div>
              <div className="mt-2 flex items-center -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src={`/images/home/avatar-${i}.webp`}
                    width={28}
                    height={28}
                    alt=""
                    className="size-7 rounded-full border-2 border-white object-cover"
                  />
                ))}
                <span className="flex size-7 items-center justify-center rounded-full border-2 border-white bg-black text-[10px] font-bold text-white">
                  2K+
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">{children}</div>
      </main>

      <footer className="relative z-10 shrink-0" />
    </div>
  );
}
