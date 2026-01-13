"use client";

import Link from "next/link";
import { useState } from "react";

export default function AreaDoClienteClient() {
  const [logado, setLogado] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLogado(true);
  }

  if (logado) {
    return (
      <>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Área do cliente</h1>
          <p className="mt-2 text-gray-600">Dashboard demonstrativo (mock).</p>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-xs font-medium text-gray-500">Plano</div>
              <div className="mt-1 text-lg font-semibold text-gray-900">Starter (mock)</div>
              <div className="mt-1 text-sm text-gray-600">Consultas inclusas: 50/mês</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-xs font-medium text-gray-500">Status</div>
              <div className="mt-1 text-lg font-semibold text-gray-900">Ativo</div>
              <div className="mt-1 text-sm text-gray-600">Último acesso: hoje</div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold text-gray-900">Ações rápidas</h2>
              <button
                className="text-sm font-medium text-gray-700 underline hover:no-underline"
                onClick={() => setLogado(false)}
              >
                Sair
              </button>
            </div>
            <div className="mt-3 flex flex-col gap-3">
              <Link
                className="btn w-full bg-linear-to-t from-blue-950 to-blue-800 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
                href="/consultas"
              >
                Nova consulta
              </Link>
              <button className="btn w-full bg-gray-100 text-gray-800 shadow-sm hover:bg-gray-200">
                Baixar relatório (mock)
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <h2 className="text-lg font-semibold text-gray-900">Histórico recente (mock)</h2>
            <div className="mt-3 overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-left text-gray-600">
                  <tr>
                    <th className="px-3 py-2">Data</th>
                    <th className="px-3 py-2">Documento</th>
                    <th className="px-3 py-2">Tipo</th>
                    <th className="px-3 py-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-3 py-2">Hoje</td>
                    <td className="px-3 py-2">00000000000</td>
                    <td className="px-3 py-2">CPF</td>
                    <td className="px-3 py-2">Concluída</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">Ontem</td>
                    <td className="px-3 py-2">00000000000000</td>
                    <td className="px-3 py-2">CNPJ</td>
                    <td className="px-3 py-2">Concluída</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Área do cliente</h1>
        <p className="mt-2 text-gray-600">Login demonstrativo (mock).</p>
      </div>

      <form onSubmit={onSubmit}>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input id="email" className="form-input w-full py-2" type="email" placeholder="seuemail@exemplo.com" required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="senha">
              Senha
            </label>
            <input id="senha" className="form-input w-full py-2" type="password" autoComplete="on" placeholder="••••••••" required />
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <button className="btn w-full bg-linear-to-t from-blue-950 to-blue-800 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
            Entrar (mock)
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <Link className="text-sm text-gray-700 underline hover:no-underline" href="/reset-password">
          Esqueci minha senha
        </Link>
        <p className="mt-2 text-sm text-gray-600">
          Não tem conta?{" "}
          <Link className="font-medium text-gray-800 underline hover:no-underline" href="/cadastre-se">
            Cadastre-se
          </Link>
        </p>
      </div>
    </>
  );
}
