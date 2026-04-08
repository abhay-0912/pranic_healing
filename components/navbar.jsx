"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/button";
import BrandMark from "@/components/brand-mark";
import { publicNav } from "@/lib/site-data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-gold-300/30 bg-ink-950/90 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 sm:px-10 lg:px-[60px]">
        <BrandMark />

        <nav className="hidden items-center gap-8 lg:flex">
          {publicNav.map(([label, href]) => (
            <Link key={label} href={href} className="text-sm tracking-[0.2em] text-ink-300 transition-colors hover:text-gold-100">
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/auth/login" variant="ghost">
            Sign In
          </Button>
          <Button href="/booking">Book Session</Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-gold-300/30 p-3 text-gold-100 lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-gold-300/20 bg-ink-950/98 lg:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 py-8 sm:px-10 lg:px-[60px]">
            <nav className="flex flex-col gap-4">
              {publicNav.map(([label, href]) => (
                <Link key={label} href={href} onClick={() => setOpen(false)} className="font-display text-3xl font-light text-white transition-colors hover:text-gold-100">
                  {label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <Button href="/booking" className="w-full">
                Book Session
              </Button>
              <Button href="/auth/login" variant="outline" className="w-full">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
