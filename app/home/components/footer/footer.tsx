"use client";
import { useState } from "react";
import { Container, Logo } from "@/app/components/ui";
import Link from "next/link";

export function Footer() {
  const [message, setMessage] = useState("");
  return (
    <footer className="border-t border-line py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1.5fr] lg:gap-24">
          <div id="newsletter">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setMessage(
                  "Thanks for your interest! Newsletter signups are not open yet. Please check back soon.",
                );
              }}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                className="min-w-0 flex-1 rounded-full border border-line bg-white px-5 py-3 text-sm outline-none placeholder:text-muted transition focus:border-brand"
                type="email"
                id="newsletter-email"
                name="email"
                autoComplete="email"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-lime px-6 py-3 text-sm font-medium text-foreground transition hover:bg-lime/70"
              >
                Subscribe
              </button>
            </form>
            <p role="status" className="mt-3 text-sm text-brand">
              {message}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <ul className="space-y-4 text-sm text-muted">
                {[
                  ["Featured Courses", "#courses"],
                  ["Featured Categories", "#categories"],
                  ["Business", "#categories"],
                  ["IT", "#categories"],
                  ["Design", "#categories"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="hover:text-brand">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-4 text-sm text-muted">
                {[
                  "Development",
                  "Marketing",
                  "Photography",
                  "Finance",
                  "Sport",
                ].map((label) => (
                  <li key={label}>
                    <a href="#categories" className="hover:text-brand">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-4 text-sm text-muted">
                {[
                  ["Become a Creator", "#join"],
                  ["Affiliate Program", "#join"],
                  ["Contact", "#newsletter"],
                  ["Help", "#courses"],
                  ["About", "#learning"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="hover:text-brand">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-5 border-t border-line pt-6 text-xs text-foreground sm:flex-row">
          <p>© 2026 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 text-foreground">
            <Link
              href="/privacy-policy"
              className="text-foreground transition hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-foreground transition hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies-settings"
              className="text-foreground transition hover:underline"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
