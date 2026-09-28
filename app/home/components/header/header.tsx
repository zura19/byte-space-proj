"use client";
import { useState } from "react";
import { Container, Logo } from "@/app/components/ui";
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
            href="/auth/login"
            className="flex items-center gap-3 text-white/85 hover:text-lime"
          >
            Sign In
          </Link>

          <Link
            href="/auth/register"
            className="flex items-center gap-3 text-white/85 hover:text-lime"
          >
            Join Us
          </Link>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
              fill="#f5f5f6cf"
            />
          </svg>
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
            ["Sign In", "/auth/login"],
            ["Join Us", "/auth/register"],
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
