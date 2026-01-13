export const metadata = {
  title: "Cadastre-se — CrediCheck",
  description: "Redirecionamento para a página de cadastro.",
};

import { redirect } from "next/navigation";

export default function SignUp() {
  redirect("/cadastre-se");
}
