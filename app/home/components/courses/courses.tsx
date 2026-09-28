import { useState } from "react";
import { Container, SectionHeading } from "@/app/components/ui";
import { CourseCard } from "@/app/components/course-card";
import { courseCategories, courses } from "./course-data";

export function Courses({
  query,
  category,
  onCategory,
  onClear,
}: {
  query: string;
  category: string;
  onCategory: (category: string) => void;
  onClear: () => void;
}) {
  const [more, setMore] = useState(false);
  const filtered = courses.filter(
    (c) =>
      (category === "Featured" || c.categories.includes(category)) &&
      `${c.title} ${c.categories.join(" ")} purepearl studio`
        .toLowerCase()
        .includes(query.toLowerCase().trim()),
  );
  return (
    <section id="courses" className="pb-16 pt-5 lg:pb-[72px] lg:pt-[72px]">
      <Container>
        <div className="mx-auto max-w-[917px] text-center">
          <SectionHeading className="mx-auto max-w-[650px]">
            Discover Your Passion,
            <br className="hidden sm:block" /> Build Your Skills
          </SectionHeading>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>
        <div
          id="course-filters"
          className="mx-auto mt-10 flex max-w-[1110px] flex-wrap justify-center gap-3 sm:gap-4"
          aria-label="Filter courses by category"
        >
          {[
            ...courseCategories,
            ...(more ? ["Business", "Finance", "Photography"] : []),
          ].map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => onCategory(item)}
              className={`rounded-full px-4 py-3 text-sm font-medium transition sm:text-base ${category === item ? "bg-lime text-foreground" : "bg-surface text-foreground/80 hover:bg-lime/35"}`}
            >
              {item}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setMore(!more)}
            className="rounded-full bg-surface px-4 py-3 text-sm sm:text-base"
            aria-expanded={more}
          >
            {more ? "− Less" : "+ More"}
          </button>
        </div>
        {query && (
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            <p role="status">
              Search results for <strong>“{query}”</strong>
            </p>
            <button
              onClick={onClear}
              className="text-brand underline underline-offset-4"
            >
              Clear search
            </button>
          </div>
        )}
        <div
          className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-[76px] lg:grid-cols-3 lg:gap-10"
          aria-live="polite"
        >
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-line py-16 text-center">
            <h3 className="font-heading text-xl">
              More learning paths are on the way
            </h3>
            <p className="mt-3 text-muted">
              No featured courses match this selection yet.
            </p>
            <button
              onClick={onClear}
              className="mt-5 rounded-lg bg-lime px-5 py-3 font-medium"
            >
              Explore all courses
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
