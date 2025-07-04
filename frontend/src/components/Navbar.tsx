"use client";

import Link from "next/link";
//import { useFirebase } from "@/firebase/FirebaseProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Navbar() {
  //const { auth, user } = useFirebase();
  const user = null; // Placeholder for user state, replace with actual auth logic

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    //signInWithPopup(auth, provider).catch(error => console.error("Sign in error:", error));
  };

  const handleSignOut = () => {
    //auth.signOut();
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white">
                       Playground <span className="text-sky-500">of Tomorrow</span>
                    </span>
                </Link>
                <nav className="flex items-center gap-6">
                     <Link href="/courses" className="text-sm font-semibold text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400 transition-colors">
                        Courses
                    </Link>
                    {user ? (
                        <button onClick={handleSignOut} className="text-sm font-semibold text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400 transition-colors">
                            Sign Out
                        </button>
                    ) : (
                        <button onClick={handleSignIn} className="bg-sky-600 text-white font-semibold px-4 py-1.5 rounded-lg hover:bg-sky-700 transition-colors text-sm shadow-sm">
                            Sign In with Google
                        </button>
                    )}
                </nav>
            </div>
        </div>
    </header>
  );
}