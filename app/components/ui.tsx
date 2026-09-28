import Image from "next/image";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`page-container ${className}`}>{children}</div>;
}
export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h2 className={`section-heading ${className}`}>{children}</h2>;
}
export function Logo({ tone = "dark" }: { tone?: "light" | "dark" }) {
  return (
    <a
      href="#home"
      aria-label="ByteSpace home"
      className="inline-flex shrink-0"
    >
      <Image
        src={
          tone === "light"
            ? "/images/home/byte-space-logo.svg"
            : "/images/home/byte-space-logo-dark.svg"
        }
        width={171}
        height={37}
        alt="ByteSpace"
        className="h-[37px] w-[171px]"
      />
    </a>
  );
}
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}
export function SearchIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}
export function ActionLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-lime px-6 font-medium text-foreground transition hover:bg-white hover:shadow-md ${className}`}
    >
      {children}
    </a>
  );
}
