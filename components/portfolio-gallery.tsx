"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

type ImagesResponse = { images: string[] };

export default function PortfolioGallery() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/api/portfolio")
      .then((res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return res.json() as Promise<ImagesResponse>;
      })
      .then((data) => {
        if (mounted) setImages(data.images || []);
      })
      .catch((err) => {
        console.error(err);
        if (mounted) setError("Failed to load images");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  // Generate a simple SVG color placeholder based on the filename
  const makeBlurDataURL = useCallback((src: string) => {
    try {
      // derive a hue from the filename
      let h = 0;
      for (let i = 0; i < src.length; i++) h = (h * 31 + src.charCodeAt(i)) % 360;
      const s = 60;
      const l = 80;
      const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='20' viewBox='0 0 32 20'><rect width='100%' height='100%' fill='hsl(${h} ${s}% ${l}%)'/></svg>`;
      // btoa can throw on unicode; use encodeURIComponent trick
      // @ts-ignore - btoa exists in browser runtime (this is a client component)
      return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
    } catch (e) {
      return undefined;
    }
  }, []);

  // Keyboard navigation for the lightbox
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (openIndex === null) return;
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, images.length]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (openIndex !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return;
  }, [openIndex]);

  if (loading) return <p>Loading portfolio…</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (images.length === 0) return <p>No images found.</p>;

  const openPrev = () => setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const openNext = () => setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <div key={i} className="rounded-lg bg-white p-4 shadow">
            <button
              onClick={() => setOpenIndex(i)}
              className="block w-full text-left"
              aria-label={`Open image ${i + 1}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-gray-100 relative">
                <Image
                  src={src}
                  alt={`Portfolio ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={i === 0}
                  placeholder="blur"
                  blurDataURL={makeBlurDataURL(src)}
                />
              </div>
              <h3 className="mt-3 text-lg font-medium">Untitled {i + 1}</h3>
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIndex(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpenIndex(null)}
              className="absolute top-2 right-2 z-50 rounded bg-black/40 p-2 text-white"
              aria-label="Close gallery"
            >
              ✕
            </button>

            <button
              onClick={openPrev}
              className="absolute left-2 top-1/2 z-40 -translate-y-1/2 rounded bg-black/40 p-2 text-white"
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              onClick={openNext}
              className="absolute right-2 top-1/2 z-40 -translate-y-1/2 rounded bg-black/40 p-2 text-white"
              aria-label="Next image"
            >
              ›
            </button>

            <div className="w-full bg-gray-900">
              <div className="relative aspect-[4/3] w-full bg-black">
                <Image
                  src={images[openIndex]}
                  alt={`Portfolio ${openIndex + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="100vw"
                  priority
                  placeholder="blur"
                  blurDataURL={makeBlurDataURL(images[openIndex])}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
