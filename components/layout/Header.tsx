"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";

const NAV_LINKS = [
  { href: "/portfolio", label: "Projects" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/portfolio" className="hover:opacity-80 transition-opacity">
            <h1 className="text-xl font-semibold tracking-tight">lab.pixelfreund</h1>
          </Link>
          <p className="text-xs text-muted-foreground mt-0.5">by Ralph Hutter</p>
        </div>

        {/* Desktop Nav + Controls */}
        <div className="flex items-center gap-1">
          {/* Desktop links */}
          <nav className="hidden sm:flex items-center gap-1 mr-2">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  pathname === href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <div className="sm:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
      <Separator className="mt-4" />
    </header>
  );
}
