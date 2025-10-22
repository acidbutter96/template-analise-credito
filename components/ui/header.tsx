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
          className="relative h-14 rounded-2xl px-3 transition-all duration-200 ease-linear"
          style={{
            display: bgOpacity === 0 ? "none" : "flex",
            alignItems: "center",
            justifyContent: "space-between",
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

          {/* Navigation */}
          <nav>
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
                <Link className="text-gray-700 hover:text-gray-900" href="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-gray-900" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-gray-900" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
