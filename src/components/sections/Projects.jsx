import projectData from "../../data/projects.json";
import { Project } from "../Project";
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20  light:text-stone-800 light:bg-neutral-200"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.map((project, index) => (
            <Project
              title={project.title}
              description={project.description}
              tech={project.tech}
              details={project.details}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
