import { site } from "@/data/site";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const medium = rest.filter((p) => p.size === "medium");
  const small = rest.filter((p) => p.size !== "medium");

  return (
    <div id="projects" className="border-t border-line-soft">
      <div className="mx-auto max-w-5xl px-8 py-20">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl">Selected work</h2>
          <p className="max-w-[40ch] text-sm text-faint">
            Click a screenshot to open the gallery — most projects have more than one image.
          </p>
        </div>

        <div className="space-y-6">
          {featured && <ProjectCard project={featured} feature />}

          {medium.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {medium.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          )}

          {small.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {small.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          )}
        </div>

        <div className="mt-7 rounded border border-dashed border-[#2E2D31] px-6 py-5 text-sm leading-relaxed text-faint">
          <span className="text-dim">Also built:</span> {site.alsoBuilt}
        </div>
      </div>
    </div>
  );
}
