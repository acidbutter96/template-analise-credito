import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent">
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
