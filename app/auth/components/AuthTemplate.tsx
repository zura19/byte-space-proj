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
    <div className="blue-grid relative isolate flex h-dvh max-h-dvh flex-col overflow-hidden px-6 pb-6 sm:px-10 lg:px-12">
      <header className="relative z-10 mx-auto flex h-[72px] w-full max-w-[1080px] shrink-0 items-center">
        <Link
          href="/#home"
          aria-label="ByteSpace Home"
          className="inline-flex transition hover:opacity-90"
        >
          <ByteSpaceMark className="h-8 w-auto" />
        </Link>
      </header>

      <main className="relative z-10 mx-auto grid min-h-0 w-full max-w-[1080px] flex-1 items-center lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:gap-12">
        <section className="hidden min-h-0 w-full max-w-[480px] lg:block">
          <div className="max-w-[440px] pb-6">
            <h2 className="font-heading text-2xl font-semibold leading-tight tracking-tight text-white">
              {heading}
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/80">{subheading}</p>
          </div>

          <div
            className="@container relative aspect-[550/585] w-[min(100%,440px,calc((100dvh-248px)*550/585))]"
            aria-hidden="true"
          >
            <div className="pointer-events-none absolute left-0 top-0 h-[585px] w-[550px] origin-top-left select-none [transform:scale(calc(100cqw/550px))]">
              <div className="absolute left-[25px] top-[89px] z-10 h-[384px] w-[373px]">
                <CourseCard
                  course={courses[1]}
                  starColor="lime"
                  className="border-white/60 shadow-xl [&_h3]:text-xl"
                />
              </div>

              <div className="absolute left-[136px] top-0 z-20 h-[384px] w-[373px]">
                <CourseCard
                  course={courses[2]}
                  starColor="lime"
                  className="border-white/80 shadow-2xl [&_h3]:text-xl"
                />
              </div>

              <div className="absolute left-[251px] top-[435px] z-30 h-[123px] w-[258px] rounded-2xl bg-lime p-4 shadow-xl">
                <p className="text-base font-medium leading-6 text-black">
                  Happy Students
                </p>
                <div className="flex h-4 items-center gap-2 text-[10px] text-black/80">
                  <span>4.5 (240)</span>
                  <span className="text-sm text-brand">★</span>
                </div>
                <div className="mt-2 flex items-center -space-x-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Image
                      key={i}
                      src={`/images/home/avatar-${i}.webp`}
                      width={43}
                      height={43}
                      alt=""
                      className="size-[43px] rounded-full border border-white object-cover"
                    />
                  ))}
                  <span className="relative bg-foreground rounded-full flex size-[43px] items-center justify-center text-xs text-white">
                    2K+
                  </span>
                </div>
              </div>

              <Ornament
                name="spring"
                tone="white"
                className="left-[373px] top-[321px] z-40 w-[175px] -scale-x-100 drop-shadow-xl"
              />
              <Ornament
                name="ring"
                className="left-[54px] top-[15px] z-50 w-[146px] drop-shadow-xl"
              />
              <Ornament
                name="pyramid"
                className="left-0 top-[397px] z-50 w-[188px] drop-shadow-xl"
              />
            </div>
          </div>
        </section>

        <div className="mx-auto flex max-h-full min-h-0 w-full max-w-[480px] flex-col overflow-y-auto rounded-3xl sm:rounded-[32px] [&>div]:shrink-0 [&>div]:p-6 sm:[&>div]:p-8 lg:[&_h1]:text-[32px]">
          {children}
        </div>
      </main>
    </div>
  );
}
