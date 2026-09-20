import { site } from "@/data/site";

export default function Skills() {
  return (
    <div id="skills" className="border-t border-line-soft">
      <div className="mx-auto max-w-5xl px-8 py-20">
        <h2 className="mb-11 font-serif text-3xl font-medium text-ink sm:text-4xl">Skills</h2>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded border border-line-soft bg-line-soft sm:grid-cols-3">
          {site.skills.map((group) => (
            <div key={group.title} className="bg-raise p-7">
              <div className="mb-4 font-mono text-xs uppercase tracking-wide text-dim">{group.title}</div>
              <div className="space-y-2 text-[0.92rem] leading-relaxed text-[#ABAAAF]">
                {group.items.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
