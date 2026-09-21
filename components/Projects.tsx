import { site } from "@/data/site";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div id="projects" className="border-t border-line-soft">
      <div className="mx-auto max-w-5xl px-8 py-20">
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl">Selected work</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <div className="mt-7 rounded border border-dashed border-[#2E2D31] px-6 py-5 text-sm leading-relaxed text-faint">
          <span className="text-dim">Also built:</span> {site.alsoBuilt}
        </div>
      </div>
    </div>
  );
}
