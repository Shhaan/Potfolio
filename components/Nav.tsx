import { site } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" }
];

export default function Nav() {
  return (
    <div className="sticky top-0 z-40 border-b border-line-soft bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-8 py-5">
        <a href="#top" className="font-serif text-lg font-medium text-ink">
          {site.name}
        </a>
        <div className="hidden gap-8 sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-dim transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
