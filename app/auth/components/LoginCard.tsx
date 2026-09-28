"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthCard } from "./AuthCard";

export function LoginCard() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${formData.email}\nPassword: ${formData.password}`);
  };

  return (
    <AuthCard
      badge="Sign in"
      title={"Welcome Back"}
      footerText="New user?"
      footerLinkText="Create an account"
      footerLinkHref="/auth/register"
    >
      <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
        <div>
          <label
            htmlFor="login-email"
            className="mb-1 block text-xs font-medium text-foreground sm:text-sm"
          >
            Email
          </label>
          <input
            id="login-email"
            name="email"
            type="email"
            required
            placeholder="designer@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-brand focus:ring-1 focus:ring-brand sm:py-3"
          />
        </div>

        <div>
          <div className="mb-1 flex items-center justify-between">
            <label
              htmlFor="login-password"
              className="text-xs font-medium text-foreground sm:text-sm"
            >
              Password
            </label>
          </div>
          <input
            id="login-password"
            name="password"
            type="password"
            required
            placeholder="••••••••"
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
            className="w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-brand focus:ring-1 focus:ring-brand sm:py-3"
          />
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="rounded-full bg-lime px-8 py-2.5 text-sm font-semibold text-foreground shadow-sm transition hover:bg-lime/80 sm:py-3"
          >
            Sign In
          </button>
        </div>
      </form>
      <div>
        <div className=" grid grid-cols-[1fr_auto_1fr] gap-2 items-center text-center text-xs text-muted sm:mt-7 sm:text-sm">
          <div className="h-[1px] bg-muted/50 w-full"></div>
          <p className="font-thin text-muted">Or</p>
          <div className="h-[1px] bg-muted/50 w-full"></div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4 sm:mt-5">
          <div className="border-[1px] border-muted/50 rounded-xl p-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.6668 19.9999C36.6668 10.7952 29.2049 3.33325 20.0002 3.33325C10.7954 3.33325 3.3335 10.7952 3.3335 19.9999C3.3335 28.3187 9.42826 35.2138 17.396 36.4641V24.8176H13.1642V19.9999H17.396V16.328C17.396 12.151 19.8842 9.84366 23.6912 9.84366C25.5147 9.84366 27.422 10.1692 27.422 10.1692V14.2707H25.3204C23.25 14.2707 22.6043 15.5555 22.6043 16.8735V19.9999H27.2267L26.4878 24.8176H22.6043V36.4641C30.5721 35.2138 36.6668 28.3187 36.6668 19.9999Z"
                fill="black"
              />
            </svg>
          </div>

          <div className="border-[1px] border-muted/50 rounded-xl p-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 33 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.625 17.0417C32.625 15.9444 32.5278 14.9028 32.3611 13.8889H16.6667V20.1528H25.6528C25.25 22.2083 24.0694 23.9444 22.3194 25.125V29.2917H27.6806C30.8194 26.3889 32.625 22.1111 32.625 17.0417Z"
                fill="black"
              />
              <path
                d="M16.6667 6.59722C19.125 6.59722 21.3194 7.44445 23.0556 9.09723L27.8056 4.34722C24.9306 1.65278 21.1667 0 16.6667 0C10.1528 0 4.52778 3.75 1.79167 9.19445L7.31945 13.4861C8.63889 9.52778 12.3194 6.59722 16.6667 6.59722Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6667 33.3333C10.1528 33.3333 4.52778 29.5833 1.79167 24.1389L7.31945 19.8472C8.63889 23.8056 12.3194 26.7361 16.6667 26.7361C18.9167 26.7361 20.8194 26.125 22.3194 25.125L27.6806 29.2917C24.9306 31.8333 21.1667 33.3333 16.6667 33.3333ZM7.31945 13.4861V9.19445H1.79167L7.31945 13.4861Z"
                fill="black"
              />
              <path
                d="M1.79167 19.8472H7.31945C6.97222 18.8472 6.79167 17.7778 6.79167 16.6667C6.79167 15.5556 6.98611 14.4861 7.31945 13.4861L1.79167 9.19445C0.652776 11.4444 0 13.9722 0 16.6667C0 19.3611 0.652776 21.8889 1.79167 24.1389V19.8472Z"
                fill="black"
              />
              <path
                d="M7.31945 19.8472H1.79167V24.1389L7.31945 19.8472Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </AuthCard>
  );
}
