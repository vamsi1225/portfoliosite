// src/app/404.tsx
"use client";

import Link from "next/link";

export default function Custom404() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-background text-foreground">
      <h1 className="text-7xl font-extrabold mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! The page you are looking for doesn’t exist.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
      >
        Go back home
      </Link>
    </main>
  );
}
