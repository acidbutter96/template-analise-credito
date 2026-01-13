"use client";

import Link from "next/link";
import { useState } from "react";

export default function CadastreSeClient() {
  const [enviado, setEnviado] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Cadastre-se</h1>
        <p className="mt-2 text-gray-600">Formulário demonstrativo. Conecte com seu backend de cadastro.</p>
      </div>

      {enviado && (
        <div className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
          Cadastro enviado (mock). Agora você pode acessar a Área do cliente.
        </div>
      )}

      <form onSubmit={onSubmit}>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="nome">
              Nome completo
            </label>
            <input id="nome" className="form-input w-full py-2" type="text" placeholder="Seu nome" required />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input id="email" className="form-input w-full py-2" type="email" placeholder="seuemail@exemplo.com" required />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="cpf">
              CPF
            </label>
            <input id="cpf" className="form-input w-full py-2" type="text" placeholder="000.000.000-00" required />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="senha">
              Senha
            </label>
            <input id="senha" className="form-input w-full py-2" type="password" autoComplete="on" placeholder="••••••••" required />
          </div>

          <label className="flex items-start gap-2 text-sm text-gray-700">
            <input type="checkbox" className="mt-1" required />
            <span>
              Li e aceito os <a className="font-medium underline hover:no-underline" href="#0">Termos</a> e a{" "}
              <a className="font-medium underline hover:no-underline" href="#0">Política de privacidade</a>.
            </span>
          </label>
        </div>

        <div className="mt-6 space-y-3">
          <button className="btn w-full bg-linear-to-t from-blue-950 to-blue-800 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
            Criar conta (mock)
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Já tem conta?{" "}
          <Link className="font-medium text-gray-800 underline hover:no-underline" href="/area-do-cliente">
            Acessar Área do cliente
          </Link>
        </p>
      </div>
    </>
  );
}
