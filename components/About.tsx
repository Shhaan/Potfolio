import { site } from "@/data/site";

export default function About() {
  return (
    <div id="about" className="border-t border-line-soft">
      <div className="mx-auto max-w-5xl px-8 py-20">
        <h2 className="mb-11 font-serif text-3xl font-medium text-ink sm:text-4xl">About</h2>
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2">
          <div className="space-y-5">
            {site.about.map((p, i) => (
              <p key={i} className="text-[1.05rem] leading-[1.75] text-dim">
                {p}
              </p>
            ))}
          </div>
          <div className="h-fit rounded border border-line bg-surface p-7">
            <div className="mb-4 font-mono text-xs text-dim">WORKING WITH</div>
            <ul>
              {site.workingWith.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 border-t border-line-soft py-2.5 text-[0.92rem] text-[#ABAAAF] first:border-t-0"
                >
                  <span className="text-faint">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
