"use client";

import { useMemo, useState } from "react";

type ResultadoConsulta = {
  documento: string;
  tipo: string;
  score: number;
  risco: "Baixo" | "Médio" | "Alto";
  observacoes: string[];
};

function normalizeDoc(value: string) {
  return value.replace(/\D/g, "");
}

export default function ConsultasClient() {
  const [documento, setDocumento] = useState("");
  const [tipo, setTipo] = useState("CPF");
  const [consentimento, setConsentimento] = useState(false);
  const [resultado, setResultado] = useState<ResultadoConsulta | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const docLimpo = useMemo(() => normalizeDoc(documento), [documento]);

  function gerarResultadoMock(doc: string, tipoConsulta: string): ResultadoConsulta {
    const base = doc.split("").reduce((acc, n) => acc + Number(n || 0), 0);
    const score = 400 + (base * 17) % 551; // 400..950
    const risco: ResultadoConsulta["risco"] = score >= 750 ? "Baixo" : score >= 600 ? "Médio" : "Alto";

    const observacoes = [
      "Resultado demonstrativo (template).",
      "Conecte aqui sua API de consulta/score.",
      "Inclua trilha de auditoria e consentimento (LGPD).",
    ];

    return {
      documento: doc,
      tipo: tipoConsulta,
      score,
      risco,
      observacoes,
    };
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);
    setResultado(null);

    if (!consentimento) {
      setErro("Confirme o consentimento para realizar a consulta (mock).");
      return;
    }

    if (!docLimpo) {
      setErro("Informe um CPF/CNPJ.");
      return;
    }

    setResultado(gerarResultadoMock(docLimpo, tipo));
  }

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 pt-32 pb-20">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Consultas</h1>
        <p className="mt-3 text-gray-700">
          Faça uma consulta simulada de CPF/CNPJ e visualize um resultado de exemplo.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        <section className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Nova consulta</h2>

          <form className="mt-4 space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="tipo">
                Tipo
              </label>
              <select
                id="tipo"
                className="form-input w-full py-2"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              >
                <option value="CPF">CPF</option>
                <option value="CNPJ">CNPJ</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="documento">
                {tipo}
              </label>
              <input
                id="documento"
                className="form-input w-full py-2"
                inputMode="numeric"
                placeholder={tipo === "CPF" ? "000.000.000-00" : "00.000.000/0000-00"}
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
              />
              <p className="mt-1 text-xs text-gray-500">Dica: você pode digitar com ou sem pontuação.</p>
            </div>

            <label className="flex items-start gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="mt-1"
                checked={consentimento}
                onChange={(e) => setConsentimento(e.target.checked)}
              />
              <span>Confirmo que tenho base legal/consentimento para realizar esta consulta (mock).</span>
            </label>

            {erro && (
              <div className="rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">
                {erro}
              </div>
            )}

            <button className="btn w-full bg-linear-to-t from-blue-950 to-blue-800 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
              Consultar (mock)
            </button>
          </form>
        </section>

        <section className="lg:col-span-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Resultado</h2>

          {!resultado ? (
            <div className="mt-4 rounded-lg border border-dashed border-gray-200 p-6 text-gray-600">
              Preencha o formulário e clique em “Consultar (mock)”.
            </div>
          ) : (
            <div className="mt-4 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 p-4">
                  <div className="text-xs font-medium text-gray-500">Documento</div>
                  <div className="mt-1 font-semibold text-gray-900">{resultado.documento}</div>
                  <div className="mt-1 text-sm text-gray-600">Tipo: {resultado.tipo}</div>
                </div>
                <div className="rounded-xl border border-gray-200 p-4">
                  <div className="text-xs font-medium text-gray-500">Score (mock)</div>
                  <div className="mt-1 text-3xl font-bold text-gray-900">{resultado.score}</div>
                  <div className="mt-1 text-sm text-gray-600">Risco: {resultado.risco}</div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 p-4">
                <div className="text-xs font-medium text-gray-500">Observações</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                  {resultado.observacoes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
                Próximo passo: substituir este mock pela chamada a um endpoint (ex: `POST /api/consultas`).
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
