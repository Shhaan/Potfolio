import Image from "next/image";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <div id="top" className="mx-auto max-w-5xl px-8 pb-20 pt-24 sm:pt-32">
      <div className="grid grid-cols-1 items-center gap-14 sm:grid-cols-[1.3fr_0.85fr] sm:gap-16">
        <div>
          <div className="mb-6 flex items-center gap-2.5 font-mono text-sm text-[#6E6D72]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-body" />
            {site.availability}
          </div>
          <h1 className="mb-6 font-serif text-5xl font-medium leading-[1.03] tracking-tight text-ink sm:text-7xl">
            {site.name.split(" ")[0]}
            <br />
            {site.name.split(" ").slice(1).join(" ")}
          </h1>
          <p className="mb-10 max-w-[32ch] text-lg leading-relaxed text-dim sm:text-xl">
            {site.tagline}
          </p>

          <div className="flex border-t border-line">
            {site.heroStats.map((s, i) => (
              <div
                key={i}
                className={`flex-1 pt-4 ${i < site.heroStats.length - 1 ? "border-r border-line pr-5" : "pl-5"}`}
              >
                <div
                  className={
                    s.mono ? "mb-1 font-mono text-lg text-ink" : "mb-1 font-serif text-2xl text-ink"
                  }
                >
                  {s.value}
                </div>
                <div className="text-[0.82rem] leading-snug text-[#6E6D72]">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-3.5">
            <a
              href="#projects"
              className="rounded-sm bg-ink px-6 py-3 text-sm font-medium text-void hover:bg-[#DCDBD6]"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-ghost px-6 py-3 text-sm font-medium text-ink hover:border-dim"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative aspect-[3/4] overflow-hidden rounded border border-line">
          <Image
            src={site.profileImage}
            alt={`Portrait of ${site.name}`}
            fill
            sizes="(max-width: 640px) 100vw, 40vw"
            className="object-cover"
            style={{ filter: "grayscale(0.85) contrast(1.08) brightness(0.94)" }}
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/0 from-45% to-void/55" />
          <div className="absolute bottom-3.5 left-3.5 rounded border border-ink/15 bg-void/60 px-2.5 py-1 font-mono text-xs text-body">
            {site.location}
          </div>
        </div>
      </div>
    </div>
  );
}
