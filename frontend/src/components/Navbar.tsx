"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  // temporary local state for login placeholder
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-3 border-b">
      {/* Site title */}
      <Link href="/" className="text-xl font-semibold">
        Playground&nbsp;<span className="text-primary">of&nbsp;Tomorrow</span>
      </Link>

      {/* Right-side auth placeholder */}
      {isLoggedIn ? (
        <button
          className="rounded bg-gray-200 px-3 py-1 text-sm"
          onClick={() => setLoggedIn(false)}
        >
          Sign out
        </button>
      ) : (
        <button
          className="rounded bg-blue-600 px-3 py-1 text-sm text-white"
          onClick={() => setLoggedIn(true)}
        >
          Sign in with Google
        </button>
      )}
    </header>
  );
}
