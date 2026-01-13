export const metadata = {
  title: "Área do cliente — CrediCheck",
  description: "Redirecionamento para a área do cliente.",
};

import { redirect } from "next/navigation";

export default function SignIn() {
  redirect("/area-do-cliente");
}
