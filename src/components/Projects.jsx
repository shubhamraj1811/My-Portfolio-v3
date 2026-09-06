import { PROJECTS } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

function Projects() {
   return (
      <section id="projects" className="min-h-screen px-6 lg:px-16 py-24">
         {/* ===== TITLE ===== */}
         <div className="text-center mb-16">
            <p className="text-teal-400 font-medium tracking-widest text-sm mb-3">
               PROJECTS
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary mb-3">
               My Selected Projects
            </h2>
            <p className="text-theme-muted">
               Real world applications. Clean code. Practical solutions.
            </p>
         </div>

         <div className="flex flex-col gap-10">
            {PROJECTS.map((project, i) => (
               <ProjectCard
                  key={project.id}
                  project={{ ...project, total: PROJECTS.length }}
                  index={i}
               />
            ))}
         </div>
      </section>
   );
}

export default Projects;