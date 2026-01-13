export const metadata = {
  title: "Suporte — CrediCheck",
  description: "Página de suporte (template) para análise de crédito.",
};

import Hero from "@/components/hero-home";
import Cta from "@/components/cta";

export default function ContactPage() {
  return (
    <>
      <Hero title={<span>Suporte</span>} description={<span>Dúvidas sobre consultas, cadastro ou acesso? Fale com a gente.</span>} />
      <main className="mx-auto max-w-2xl px-4 sm:px-6 py-28">
        <p className="mb-6 text-gray-700">Este formulário é um mock. Conecte em um serviço de e-mail ou backend.</p>

        <div className="mb-6">
          <p className="text-sm text-gray-600">Email</p>
          <a className="text-lg text-gray-800" href="mailto:contato@seudominio.com">contato@seudominio.com</a>
        </div>

        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-600">Quick message</p>
          <textarea className="mt-2 w-full rounded-md border-gray-200 p-2" rows={5} placeholder="Escreva uma mensagem curta sobre sua dúvida" />
          <div className="mt-3">
            <button className="btn bg-blue-950 text-white hover:bg-blue-900">Enviar</button>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-500">Dica: para produção, adicione reCAPTCHA e rate limit.</p>
      </main>
      <Cta />
    </>
  );
}
