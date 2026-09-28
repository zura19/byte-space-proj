"use client";
import { useState } from "react";
import { Container, Logo } from "../shared/ui";
import Link from "next/link";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-30 text-white">
      <Container className=" flex h-24 items-center justify-between gap-6 lg:h-[120px]">
        <Logo tone="light" />
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 md:flex"
        >
          <a href="#home" className="font-bold" aria-current="page">
            Home
          </a>
          <a href="#courses" className="text-white/80 hover:text-lime">
            Courses
          </a>
          <a href="#creators" className="text-white/80 hover:text-lime">
            Creators
          </a>
        </nav>
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/login"
            className="flex items-center gap-3 text-white/85 hover:text-lime"
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className="flex items-center gap-3 text-white/85 hover:text-lime"
          >
            Join Us
          </Link>
        </div>
        <button
          type="button"
          className="rounded-lg border border-white/30 px-3 py-2 md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </Container>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="absolute inset-x-4 top-20 grid gap-4 rounded-xl bg-white p-6 text-foreground shadow-xl md:hidden"
        >
          {[
            ["Home", "#home"],
            ["Courses", "#courses"],
            ["Creators", "#creators"],
            ["Sign In", "/login"],
            ["Join Us", "/register"],
          ].map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
