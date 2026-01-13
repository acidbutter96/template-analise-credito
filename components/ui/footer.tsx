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
              © {new Date().getFullYear()} CrediCheck — Template genérico.
            </div>
          </div>

          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="/">Home</Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="/quem-somos">Quem somos</Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="/consultas">Consultas</Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="/cadastre-se">Cadastre-se</Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="/area-do-cliente">Área do cliente</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-gray-600 transition hover:text-gray-900" href="#0">Política de privacidade</a>
              </li>
              <li>
                <a className="text-gray-600 transition hover:text-gray-900" href="#0">Termos de uso</a>
              </li>
              <li>
                <a className="text-gray-600 transition hover:text-gray-900" href="#0">Segurança & LGPD</a>
              </li>
            </ul>
          </div>

          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-4">
            <h3 className="text-sm font-medium">Contato</h3>
            <p className="text-sm text-gray-600">Template de demonstração para análise de crédito (sem backend).</p>
            <p className="text-sm text-gray-600">Email: <a href="mailto:contato@seudominio.com" className="text-gray-800">contato@seudominio.com</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
