import { site } from "@/data/site";

export default function Contact() {
  return (
    <div id="contact" className="border-t border-line-soft">
      <div className="mx-auto max-w-5xl px-8 pb-14 pt-24">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <h2 className="max-w-[14ch] font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Building something? Let&apos;s talk.
          </h2>
          <div className="flex flex-col gap-1">
            {site.contact.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener" : undefined}
                className="flex justify-between gap-10 border-b border-line-soft py-2.5 text-base text-[#ABAAAF] hover:text-ink"
              >
                {c.label}
                <span className="font-mono text-[0.82rem] text-faint">{c.value}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-wrap justify-between gap-2.5 border-t border-line-soft pt-6 text-xs text-faint">
          <span>
            {site.name} — {site.role}
          </span>
          <span>Built with Django, React, and a fair amount of coffee.</span>
        </div>
      </div>
    </div>
  );
}
