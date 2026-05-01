import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/notes", label: "Notes" },
  { href: "/misc", label: "Misc" },
];

export const metadata: Metadata = {
  title: "Academic Notebook",
  description: "A quiet academic website for research, notes, and a small personal archive.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div>
              <Link href="/" className="site-title">
                Academic Notebook
              </Link>
            </div>
            <nav aria-label="Primary navigation" className="site-nav">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          <main className="site-main">{children}</main>
        </div>
      </body>
    </html>
  );
}
