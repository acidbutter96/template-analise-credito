export const metadata = {
  title: "Quem somos — CrediCheck",
  description: "Conheça a proposta do template de análise de crédito.",
};

import Hero from "@/components/hero-home";

export default function QuemSomosPage() {
  return (
    <>
      <Hero
        title={<span>Quem somos</span>}
        description={
          <>
            Somos um modelo de site (template) para uma plataforma de análise de
            crédito. Aqui você encontra uma estrutura pronta de navegação,
            páginas e UI para consultas, cadastro e área do cliente.
          </>
        }
      />

      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-28">
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Nossa missão</h2>
            <p className="mt-3 text-lg text-gray-700">
              Ajudar times a validarem rapidamente um fluxo de análise de crédito
              e evoluírem para produção conectando o front-end a um backend,
              APIs e regras de negócio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">O que este template inclui</h2>
            <ul className="mt-3 list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li>Home com proposta e CTA</li>
              <li>Página de Consultas (mock) com resultado simulado</li>
              <li>Cadastre-se (mock) com formulário</li>
              <li>Área do cliente (mock) com login e dashboard</li>
            </ul>
          </section>

          <section className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">Importante</h3>
            <p className="mt-2 text-gray-700">
              Este projeto é um template. Não realiza consultas reais e não
              armazena dados. Para uso real, conecte a um serviço de consulta,
              implemente autenticação e trate LGPD/consentimento.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
