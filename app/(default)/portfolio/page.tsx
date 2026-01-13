export const metadata = {
  title: "Consultas — CrediCheck",
  description: "Página de consultas (mock) para análise de crédito.",
};

import { redirect } from "next/navigation";

export default function PortfolioPage() {
  redirect("/consultas");
}
