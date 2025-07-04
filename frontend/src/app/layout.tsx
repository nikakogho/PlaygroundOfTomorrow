import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";

export const metadata = {
  title: "Playground of Tomorrow",
};

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
