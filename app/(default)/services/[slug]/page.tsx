import Hero from "@/components/hero-home";
import Cta from "@/components/cta";
import ServiceGallery from "@/components/service-gallery";

type Props = { params: { slug: string } };

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

const serviceMeta: Record<string, { title: string; description: string }> = {
    "face-painting": { title: "Face Painting", description: "Colorful, event-friendly designs for festivals, parties, and family events." },
    "henna-tattoos": { title: "Henna Tattoos", description: "Traditional henna designs for ceremonies and celebrations (natural, semi-permanent)." },
    "glitter-tattoos": { title: "Glitter Tattoos", description: "Sparkling, quick-apply glitter art perfect for kids' parties and promotional events." },
    murals: { title: "Murals", description: "Site-specific murals for homes, businesses, and public spaces. Full design and installation available." },
    "painting-classes": { title: "Painting Classes", description: "Group and private lessons for all levels, focusing on acrylic and mixed-media techniques." },
};

export default function ServicePage({ params }: Props) {
    const meta = serviceMeta[params.slug] ?? { title: params.slug, description: "" };

    // Example placeholder images per service — later these will be real assets or fetched data
    const sampleImages = Array.from({ length: 6 }).map((_, i) => ({ src: `/images/${params.slug || "generic"}-${(i % 3) + 1}.jpg`, alt: `${meta.title} ${i + 1}`, title: `${meta.title} ${i + 1}` }));

    return (
        <>
            <Hero title={<span>{meta.title}</span>} description={<span>{meta.description}</span>} />
            <main className="mx-auto max-w-6xl px-4 sm:px-6 py-28">
                <p className="mb-6 text-gray-700">A gallery showing examples of {meta.title.toLowerCase()} work. Click an image to view details.</p>
                <ServiceGallery images={sampleImages} />
            </main>
        </>
    );
}
