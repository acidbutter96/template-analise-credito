"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  // opacity for the background (1 = fully visible, 0 = fully transparent)
  const [bgOpacity, setBgOpacity] = useState(1);
  // distance (px) after which the background becomes fully transparent
  const THRESHOLD = 180;

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const y = window.scrollY || 0;
      const t = Math.min(y / THRESHOLD, 1);
      const next = Math.max(0, 1 - t);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setBgOpacity(next);
          ticking = false;
        });
        ticking = true;
      }
    };

    // set initial based on current scroll position (important on navigation)
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundColor = `rgba(255,255,255,${0.9 * bgOpacity})`;
  const boxShadow = bgOpacity > 0 ? `0 10px 15px rgba(0,0,0,${0.03 * bgOpacity})` : "none";
  const borderColor = `rgba(0,0,0,${0.03 * bgOpacity})`;
  const backdropFilter = bgOpacity > 0 ? "blur(4px)" : "none";

  return (
    <header className="fixed top-2 z-30 w-full md:top-6 pointer-events-none">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative h-auto md:h-14 rounded-2xl px-3 transition-all duration-200 ease-linear flex flex-row flex-wrap items-center justify-between gap-3"
          style={{
            display: bgOpacity === 0 ? "none" : "flex",
            gap: "0.75rem",
            backgroundColor,
            boxShadow,
            borderColor,
            WebkitBackdropFilter: backdropFilter,
            backdropFilter,
            // allow links/buttons to be clickable while header itself stays fixed
            pointerEvents: bgOpacity === 0 ? "none" : "auto",
          }}
        >
          {/* Site branding */}
          <div className="flex items-center gap-4">
            <Logo />
          </div>

          {/* Navigation - desktop */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-4 text-sm">
              <li>
                <Link className="text-gray-700 hover:text-gray-900" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-gray-900" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-gray-900" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-gray-900" href="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-gray-900" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile hamburger — menu will expand inline below when open */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full md:hidden">
      <div className="flex items-center justify-center w-full pointer-events-auto">
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 bg-white/0 hover:bg-gray-50"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="mt-3 w-full rounded-b-2xl bg-white/90 shadow-sm backdrop-blur-sm">
          <div className="px-3 py-2 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-800">Menu</h3>
          </div>
          <ul className="flex flex-col p-2">
            <li>
              <Link onClick={() => setOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded" href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded" href="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded" href="/contact">
                Contact
              </Link>
            </li>
            <li className="mt-2 px-2">
              <button
                onClick={() => setOpen(false)}
                className="w-full rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200"
              >
                Close menu
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
