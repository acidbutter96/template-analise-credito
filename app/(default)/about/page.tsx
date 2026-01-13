export const metadata = {
  title: "Quem somos — CrediCheck",
  description: "Saiba mais sobre a plataforma (template) de análise de crédito.",
};

import { redirect } from "next/navigation";

export default function AboutPage() {
  redirect("/quem-somos");
}
