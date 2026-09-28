import Image from "next/image";
import { Header } from "../header/header";
import { Container, SearchIcon } from "@/app/components/ui";
import { Ornament, ProgressCard, StudentsCard } from "@/app/components/visuals";

export function Hero({
  onSearch,
  searchText,
  onSearchText,
}: {
  onSearch: (value: string) => void;
  searchText: string;
  onSearchText: (value: string) => void;
}) {
  return (
    <section
      id="home"
      className="blue-grid relative isolate overflow-hidden text-white"
    >
      <Header />
      <Container className="relative z-10 pt-9 text-center lg:pt-[42px]">
        <h1 className="mx-auto max-w-[970px] font-heading text-[clamp(36px,5vw,72px)] font-semibold leading-[1.2] tracking-[-2px]">
          Get Access to Hundreds
          <br className="hidden sm:block" /> Courses Available
        </h1>
        <p className="mx-auto mt-7 max-w-[850px] text-base leading-relaxed text-white/80 sm:text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <form
          role="search"
          className="mx-auto mt-10 flex max-w-[581px] items-center gap-3 text-foreground sm:mt-[58px]"
          onSubmit={(e) => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            onSearch(String(form.get("search") || ""));
            document
              .getElementById("courses")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="flex h-[52px] min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-4 sm:px-6">
            <span className="shrink-0 text-muted">
              <SearchIcon />
            </span>
            <label htmlFor="course-search" className="sr-only">
              Search courses, topics, or creators
            </label>
            <input
              id="course-search"
              name="search"
              type="search"
              value={searchText}
              onChange={(e) => onSearchText(e.target.value)}
              placeholder="Course, topic, creator"
              className="min-w-0 flex-1 bg-transparent py-2 text-base outline-none placeholder:text-muted sm:text-lg"
            />
          </div>
          <button className="h-[52px] shrink-0 rounded-full bg-lime px-5 font-medium transition hover:bg-lime/80 sm:px-6">
            Search
          </button>
        </form>
      </Container>
      <div className="relative mx-auto mt-4 h-[380px] w-full max-w-[1440px] sm:h-[495px] lg:mt-0 lg:h-[510px]">
        <div className="hero-ring pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full" />
        <Image
          src="/images/home/hero-student.webp"
          alt="A smiling student wearing headphones and learning with a laptop"
          width={578}
          height={541}
          preload
          className="absolute bottom-[-20px] left-1/2 z-10 h-auto w-[410px] max-w-[90%] -translate-x-1/2 sm:w-[578px]"
        />
        <div className="absolute left-[max(4%,calc(50%-316px))] top-[85px] z-20 hidden rounded-xl bg-white px-4 py-3 text-left text-foreground shadow-xl sm:block">
          <p className="font-medium">UI/UX Design</p>
          <p className="mt-1 text-[11px] text-muted">
            200 Courses <span className="px-2">•</span> 1000+ Students
          </p>
        </div>
        <ProgressCard className="absolute right-[max(4%,calc(50%-354px))] top-[133px] z-20 hidden text-left text-foreground md:block" />
        <StudentsCard className="absolute bottom-10 left-[max(4%,calc(50%-392px))] z-20 origin-bottom-left scale-75 text-left text-foreground sm:bottom-[65px] sm:scale-100" />
      </div>
      <Ornament
        name="spring"
        className="-left-28 top-[230px] w-[350px] opacity-80 max-lg:hidden"
      />
      <Ornament
        name="cylinder"
        className="-right-24 top-[215px] w-[340px] max-lg:hidden"
      />
      <Ornament
        name="pyramid"
        tone="white"
        className="right-[12%] top-[460px] w-[180px] max-lg:hidden"
      />
      <Ornament
        name="coil"
        tone="white"
        className="-right-8 bottom-4 w-[320px] max-lg:hidden"
      />
      <Ornament
        name="ring"
        tone="white"
        className="-left-10 bottom-0 w-[330px] max-lg:hidden"
      />
      <Ornament
        name="spring"
        tone="white"
        className="left-[24%] top-[520px] w-[140px] max-lg:hidden"
      />
    </section>
  );
}
