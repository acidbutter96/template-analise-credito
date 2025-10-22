import Image from "next/image";

type Props = {
  images?: { src: string; alt?: string; title?: string }[];
};

export default function ServiceGallery({ images }: Props) {
  const items = images ?? Array.from({ length: 6 }).map((_, i) => ({ src: `/images/placeholder-${(i % 3) + 1}.jpg`, alt: `Artwork ${i + 1}`, title: `Untitled ${i + 1}` }));

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((img, i) => (
          <div key={i} className="rounded-lg bg-white p-4 shadow">
            <div className="aspect-[4/3] rounded-md overflow-hidden bg-gray-100">
              {/* Use next/image when real images are added; using plain img for flexible public paths */}
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-3 text-lg font-medium">{img.title}</h3>
            <p className="text-sm text-gray-500">Oil on canvas — 2024</p>
          </div>
        ))}
      </div>
    </div>
  );
}
