import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="CrediCheck">
      <div className="rounded-md bg-gradient-to-tr from-blue-950 to-blue-700 p-2 shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
          <circle cx="14" cy="8" r="4" className="fill-white opacity-90" />
          <rect x="4" y="14" width="20" height="10" rx="3" className="fill-white opacity-90" />
        </svg>
      </div>
      <div className="hidden flex-col leading-tight md:flex">
        <span className="text-sm font-semibold">CrediCheck</span>
        <span className="text-xs text-gray-500">Análise de crédito</span>
      </div>
    </Link>
  );
}
