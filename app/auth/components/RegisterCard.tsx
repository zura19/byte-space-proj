"use client";

import { useState } from "react";
import { AuthCard } from "./AuthCard";

export function RegisterCard() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nPassword: ${formData.password}`,
    );
  };

  return (
    <AuthCard
      badge="Create an Account"
      title={
        <>
          Welcome to
          <br />
          ByteSpace
        </>
      }
      footerText="Already have an account?"
      footerLinkText="Login"
      footerLinkHref="/auth/login"
    >
      <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="mb-1 block text-xs font-medium text-foreground sm:text-sm"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Jamie Davis"
            value={formData.fullName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, fullName: e.target.value }))
            }
            className="w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-brand focus:ring-1 focus:ring-brand sm:py-3"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-xs font-medium text-foreground sm:text-sm"
          >
            Email
          </label>
          <input
            id="email"
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
          <label
            htmlFor="password"
            className="mb-1 block text-xs font-medium text-foreground sm:text-sm"
          >
            Password
          </label>
          <input
            id="password"
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
            Continue
          </button>
        </div>
      </form>
    </AuthCard>
  );
}
