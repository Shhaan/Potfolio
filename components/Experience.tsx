import { site } from "@/data/site";

export default function Experience() {
  return (
    <div id="experience" className="border-t border-line-soft">
      <div className="mx-auto max-w-5xl px-8 py-20">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl">Experience</h2>
          <p className="max-w-[34ch] text-sm text-faint">
            Two roles, a training program, and a running list of freelance work.
          </p>
        </div>

        <div className="relative pl-8">
          <div className="absolute bottom-1.5 left-1 top-1.5 w-px bg-gradient-to-b from-[#47464B] to-line-soft" />

          {site.experience.map((job, i) => (
            <div key={i} className={`relative ${i < site.experience.length - 1 ? "pb-11" : ""}`}>
              <div className="absolute -left-8 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-body bg-void" />
              <div className="mb-2 font-mono text-xs text-faint">{job.date}</div>
              <div className="mb-3 flex flex-wrap items-baseline gap-2.5">
                <h3 className="font-serif text-xl font-medium text-ink">{job.role}</h3>
                <span className="text-sm text-dim">{job.org}</span>
              </div>
              {job.points.length > 1 ? (
                <ul className="max-w-[62ch] list-disc space-y-1.5 pl-[18px] text-[0.95rem] leading-relaxed text-dim">
                  {job.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              ) : (
                <p className="max-w-[62ch] text-[0.95rem] leading-relaxed text-dim">{job.points[0]}</p>
              )}
              {job.stack.length > 0 && (
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span key={s} className="rounded-sm border border-line px-2.5 py-1 font-mono text-xs text-[#6E6D72]">
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
