import { redirect } from "next/navigation";

// Inline params typing in the page component to avoid mismatches with Next's PageProps generic

export async function generateStaticParams() {
    // Keep in sync with services list in services index
    return [
        { slug: "face-painting" },
        { slug: "henna-tattoos" },
        { slug: "glitter-tattoos" },
        { slug: "murals" },
        { slug: "painting-classes" },
    ];
}

export default function ServicePage(props: any) {
    redirect("/consultas");

    return null;
}
