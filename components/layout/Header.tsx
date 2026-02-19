"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/portfolio", label: "Projects" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Right side */}
        <div className="flex items-center gap-1">
          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-1 mr-2">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  pathname === href ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <ThemeToggle />

          {/* Mobile hamburger button */}
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            aria-label={menuOpen ? "Menü schliessen" : "Menü öffnen"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile nav – inline dropdown, no portal */}
      {menuOpen && (
        <nav className="sm:hidden flex flex-col gap-1 pt-4 pb-2">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                pathname === href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}

      <Separator className="mt-4" />
    </header>
  );
}
