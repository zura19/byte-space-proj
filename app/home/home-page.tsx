"use client";
import { useState } from "react";
import { Hero } from "./components/hero/hero";
import { Partners } from "./components/partners/partners";
import { CreatorCta } from "./components/creator-cta/creator-cta";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("Featured");

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
        <CreatorCta />
      </main>
    </>
  );
}
