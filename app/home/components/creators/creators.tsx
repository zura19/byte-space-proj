import Image from "next/image";
import { Container, SectionHeading } from "@/app/components/ui";
import { Ornament, StudentsCard } from "@/app/components/visuals";
export function Creators() {
  return (
    <section
      id="creators"
      className="relative overflow-hidden bg-[#fcfff2] pb-20 pt-4 lg:pb-[120px] lg:pt-7"
    >
      {/* Ambient background glows using globals.css tokens */}
      <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-brand/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-lime/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-80 w-80 rounded-full bg-lime/15 blur-3xl" />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] bg-[radial-gradient(circle_at_100%_100%,rgba(0,59,226,0.14),rgba(96,165,250,0.1)_40%,transparent_70%)] sm:h-[600px] sm:w-[600px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -right-16 h-[350px] w-[350px] rounded-full bg-gradient-to-tl from-brand/15 via-sky-400/10 to-transparent blur-3xl sm:h-[500px] sm:w-[500px]"
        aria-hidden="true"
      />
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 mx-auto h-[540px] w-full max-w-[560px] lg:order-1 lg:h-[600px]">
          {/* Top-Left Blue Card: Total Revenue */}
          <div className="absolute left-0 top-10 z-0 w-[170px] rounded-2xl bg-brand p-4 text-white shadow-xl shadow-brand/25 sm:left-4 sm:top-14 sm:w-[190px]">
            <p className="text-xs font-medium text-white/80">Total Revenue</p>
            <p className="mt-0.5 text-[10px] text-white/60">July 1–28</p>
            <p className="mt-2 font-heading text-xl font-bold tracking-tight sm:text-2xl">
              $120.29
            </p>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-[65%] rounded-full bg-lime" />
            </div>
          </div>

          {/* Middle-Left Blue Card: Year to Date */}
          <div className="absolute left-0 top-[220px] z-0 w-[145px] rounded-2xl bg-brand p-4 text-white shadow-xl shadow-brand/25 sm:left-6 sm:top-[240px] sm:w-[165px]">
            <p className="text-xs font-medium text-white/80">Year to Date</p>
            <p className="text-[10px] text-white/60">2023</p>
            <p className="mt-1.5 font-heading text-lg font-bold tracking-tight sm:text-xl">
              $1,200.38
            </p>
            <span className="mt-2 inline-block rounded-full bg-lime px-2 py-0.5 text-[10px] font-bold text-black">
              +12$
            </span>
          </div>

          {/* Female Creator Image */}
          <Image
            src="/images/home/creator.webp"
            alt="A course creator holding her tablet"
            width={435}
            height={596}
            quality={100}
            unoptimized
            className="person-shadow absolute bottom-0 left-1/2 z-10 h-full w-auto max-w-none -translate-x-1/2 object-contain"
          />

          {/* Lime Spring Ornament - Mid-right, tucked close to creator's waist/arm */}
          <Ornament
            name="spring"
            className="absolute right-2 top-[200px] z-0 w-36 drop-shadow-lg sm:right-6 sm:top-[220px] sm:w-44"
          />

          {/* Happy Students Card - Bottom-right, overlapping creator's vest */}
          <StudentsCard className="absolute bottom-6 right-0 z-20 origin-bottom-right scale-90 sm:bottom-8 sm:right-4 sm:scale-100" />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading className="font-bold">
            Create &amp; Manage
            <br className="hidden sm:block" /> Courses Easily.
          </SectionHeading>
          <p className="mt-6 max-w-[480px] text-sm leading-relaxed text-muted sm:mt-8 sm:text-base">
            <strong className="font-semibold text-foreground">ByteSpace</strong>{" "}
            supports individuals or entities in the creation, publication, and
            administration of educational courses.
          </p>
          <ul className="mt-8 space-y-3.5 sm:space-y-4">
            {[
              "Share Your Expertise",
              "Monetize Your Passion",
              "Flexibility and Autonomy",
              "Build a Community",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-medium text-foreground sm:text-base"
              >
                <span
                  className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-sm sm:size-6"
                  aria-hidden="true"
                >
                  <svg
                    className="size-3 sm:size-3.5"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 6.5L4.5 8.5L9.5 3.5" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
