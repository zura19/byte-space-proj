import Image from "next/image";
import { Container, SectionHeading } from "../shared/ui";
import { Ornament, ProgressCard } from "../shared/visuals";
import { CourseCard } from "../courses/course-card";
import { courses } from "../courses/course-data";

export function Learning() {
  return (
    <section
      id="learning"
      className="relative overflow-hidden bg-[#fcfff2] py-16 lg:py-20"
    >
      {/* Ambient background glows using globals.css tokens */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-lime/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 -top-16 h-80 w-80 rounded-full bg-lime/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-10 h-96 w-96 rounded-full bg-lime/20 blur-3xl" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
        <div className="relative z-10">
          <SectionHeading className="max-w-[500px] font-bold">
            Your Path to Professional <br className="hidden sm:inline" />
            Growth Starts Here!
          </SectionHeading>
          <p className="mt-6 max-w-[480px] text-sm leading-relaxed text-muted sm:mt-8 sm:text-base">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>
          <dl className="mt-10 flex gap-10 sm:mt-12 sm:gap-14">
            {[
              ["12K", "Students"],
              ["70+", "Courses"],
              ["16", "Creators"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-heading text-3xl font-bold text-brand sm:text-4xl">
                  {value}
                </dt>
                <dd className="mt-1 text-xs text-muted sm:text-sm">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual Container */}
        <div className="relative mx-auto h-[480px] w-full max-w-[560px] sm:h-[550px]">
          <div className="lime-glow absolute inset-0" />

          {/* Course Card - Upper-left behind student */}
          <div className="absolute left-0 top-4 z-0 w-[270px] sm:left-4 sm:top-6 sm:w-[305px]">
            <CourseCard course={courses[0]} />
          </div>

          {/* Student Image */}
          <Image
            src="/images/home/hero-student.webp"
            alt="A student developing new skills online"
            width={578}
            height={541}
            quality={100}
            unoptimized
            className="person-shadow absolute bottom-0 right-[-2%] z-10 w-[88%] sm:w-[90%]"
          />

          {/* Lime Spring Ornament - Upper-right, tucked close to student's head */}
          <Ornament
            name="spring"
            className="absolute right-2 top-6 z-0 w-32 drop-shadow-lg sm:right-6 sm:top-10 sm:w-36"
          />

          {/* Progress Card - Moved further down over the arm / laptop area */}
          <ProgressCard className="absolute right-0 top-[240px] z-20 w-[185px] origin-bottom-right scale-90 sm:right-4 sm:top-[265px] sm:w-[205px] sm:scale-100" />
        </div>
      </Container>
    </section>
  );
}
