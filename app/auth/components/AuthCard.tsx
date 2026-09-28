import Link from "next/link";
import type { ReactNode } from "react";

interface AuthCardProps {
  badge?: string;
  title: ReactNode;
  children: ReactNode;
  footerText?: string;
  footerLinkText?: string;
  footerLinkHref?: string;
}

export function AuthCard({
  badge,
  title,
  children,
  footerText,
  footerLinkText,
  footerLinkHref,
}: AuthCardProps) {
  return (
    <div className="w-full max-w-[480px] rounded-3xl border border-white/60 bg-white p-6 shadow-2xl sm:rounded-[32px] sm:p-8 lg:p-10">
      {badge && (
        <p className="text-xs font-medium text-brand sm:text-sm">{badge}</p>
      )}
      <h1 className="mt-1.5 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[38px] lg:leading-[1.15]">
        {title}
      </h1>
      <div className="mt-6 sm:mt-7">{children}</div>
      {footerText && footerLinkHref && (
        <div className="mt-6 text-center text-xs text-muted sm:mt-8 sm:text-sm">
          {footerText}{" "}
          <Link
            href={footerLinkHref}
            className="font-medium text-brand transition hover:underline"
          >
            {footerLinkText}
          </Link>
        </div>
      )}
    </div>
  );
}
