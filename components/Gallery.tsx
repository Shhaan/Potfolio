"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Gallery({
  images,
  alt,
  addressBar
}: {
  images: string[];
  alt: string;
  addressBar: string;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, images.length]);

  return (
    <>
      {/* cover: fake browser chrome + first image */}
      <div className="flex items-center gap-1.5 border-b border-line bg-chrome px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#2D2D30]" />
        <span className="h-2 w-2 rounded-full bg-[#2D2D30]" />
        <span className="h-2 w-2 rounded-full bg-[#2D2D30]" />
        <div className="ml-2 flex-grow rounded bg-[#1B1B1E] px-2 py-0.5">
          <span className="font-mono text-[0.68rem] text-faint">{addressBar}</span>
        </div>
        {hasMultiple && (
          <span className="font-mono text-[0.64rem] text-faint">1 / {images.length}</span>
        )}
      </div>
      <button
        type="button"
        onClick={() => {
          setIndex(0);
          setOpen(true);
        }}
        aria-label={`View ${alt} larger`}
        className="group relative block w-full overflow-hidden bg-raise"
      >
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-void/30 via-transparent via-20% to-void/40 to-80% mix-blend-multiply" />
        <Image
          src={images[0]}
          alt={alt}
          width={1280}
          height={720}
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <span className="absolute right-3 top-3 z-[2] flex h-7 w-7 items-center justify-center rounded-full border border-ink/20 bg-void/55 opacity-0 transition-opacity group-hover:opacity-100">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F2F1EE" strokeWidth="2">
            <path d="M9 3H3v6M15 3h6v6M3 15v6h6M21 15v6h-6" />
          </svg>
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[500] flex items-center justify-center bg-[#060607]/95 p-6 sm:p-12"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-ghost bg-surface text-body hover:border-[#47464B] hover:text-ink"
          >
            &#10005;
          </button>

          <div
            className="relative flex max-h-[88vh] max-w-[92vw] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {hasMultiple && (
              <button
                type="button"
                aria-label="Previous image"
                onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
                className="absolute left-0 z-10 -translate-x-full pr-4 text-dim hover:text-ink sm:pr-6"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

            <Image
              src={images[index]}
              alt={`${alt} — image ${index + 1} of ${images.length}`}
              width={1600}
              height={1000}
              className="max-h-[88vh] w-auto rounded border border-line-soft object-contain shadow-2xl"
            />

            {hasMultiple && (
              <button
                type="button"
                aria-label="Next image"
                onClick={() => setIndex((i) => (i + 1) % images.length)}
                className="absolute right-0 z-10 translate-x-full pl-4 text-dim hover:text-ink sm:pl-6"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}
          </div>

          {hasMultiple && (
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to image ${i + 1}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-ink" : "w-1.5 bg-ghost hover:bg-dim"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
