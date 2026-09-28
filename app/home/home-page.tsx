"use client";
import { useState } from "react";
import { Hero } from "./components/hero/hero";
import { Partners } from "./components/partners/partners";
import { CreatorCta } from "./components/creator-cta/creator-cta";
import { Footer } from "./components/footer/footer";
import { Categories } from "./components/categories/categories";
import { Courses } from "./components/courses/courses";
import { Testimonials } from "./components/testimonials/testimonials";
import { Creators } from "./components/creators/creators";
import { Learning } from "./components/learning/learning";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("Featured");

  const reset = () => {
    setQuery("");
    setSearchText("");
    setCategory("Featured");
  };

  return (
    <>
      <a
        href="#courses"
        className="sr-only z-50 rounded-lg bg-white p-4 text-brand focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to courses
      </a>
      <main>
        <Hero
          searchText={searchText}
          onSearchText={setSearchText}
          onSearch={(value) => {
            setQuery(value);
            setCategory("Featured");
          }}
        />
        <Partners />
        <Courses
          query={query}
          category={category}
          onCategory={setCategory}
          onClear={reset}
        />
        <Categories onSelect={setCategory} />
        <Learning />
        <Creators />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
