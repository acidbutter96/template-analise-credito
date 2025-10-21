import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? 'border-t' : ''}`}>
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <Logo />
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Mel Davis — All rights reserved.
            </div>
          </div>

          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Navigate</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="/about">About</Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="/services">Services</Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Follow</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-gray-600 transition hover:text-gray-900" href="#">Instagram</a>
              </li>
              <li>
                <a className="text-gray-600 transition hover:text-gray-900" href="#">Twitter</a>
              </li>
              <li>
                <a className="text-gray-600 transition hover:text-gray-900" href="#">Email</a>
              </li>
            </ul>
          </div>

          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-4">
            <h3 className="text-sm font-medium">Contact</h3>
            <p className="text-sm text-gray-600">Based in New Orleans — Available for commissions and exhibitions.</p>
            <p className="text-sm text-gray-600">Email: <a href="mailto:hello@meldavis.art" className="text-gray-800">hello@meldavis.art</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
