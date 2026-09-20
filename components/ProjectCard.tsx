import type { Project } from "@/data/projects";
import Gallery from "./Gallery";

export default function ProjectCard({ project, feature = false }: { project: Project; feature?: boolean }) {
  return (
    <div className="overflow-hidden rounded border border-line bg-raise transition-colors hover:border-[#47464B]">
      <Gallery images={project.images} alt={`${project.title} screenshot`} addressBar={project.addressBar} />
      <div className={feature ? "p-7 sm:p-8" : "p-6"}>
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className={feature ? "font-serif text-2xl font-medium text-ink" : "font-serif text-xl font-medium text-ink"}>
            {project.title}
          </h3>
          <span className="whitespace-nowrap rounded-sm border border-ghost px-2 py-0.5 font-mono text-xs text-[#ABAAAF]">
            {project.tag}
          </span>
        </div>
        <p className={`mb-4 text-dim ${feature ? "max-w-[68ch] text-base leading-relaxed" : "text-sm leading-relaxed"}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="rounded-sm bg-[#1A1A1D] px-2.5 py-1 font-mono text-xs text-dim">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
