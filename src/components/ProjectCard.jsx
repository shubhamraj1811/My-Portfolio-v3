import { motion } from "framer-motion";
import ImageSlideshow from "./ImageSlideshow";
import ProjectTabs from "./ProjectTabs";
import { uiIconMap } from "../data/skillIconMap";

const METADATA_LABELS = {
   role: "ROLE",
   type: "TYPE",
   duration: "DURATION",
   status: "STATUS",
   platform: "PLATFORM",
   year: "YEAR",
   teamSize: "TEAM SIZE",
};

function ProjectCard({ project, index }) {
   const metadataEntries = Object.entries(project.metadata || {}).filter(
      ([, v]) => v,
   );

   return (
      <motion.div
         id={project.id}
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.15 }}
         transition={{ duration: 0.5 }}
         className="group relative max-w-6xl mx-auto scroll-mt-28"
      >
         <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-teal-400/70 via-purple-500/70 to-pink-500/70 opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500" />
         <div className="relative m-[1.5px] rounded-2xl bg-glass backdrop-blur-xl p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
               <div>
                  <span className="text-xs font-semibold tracking-widest text-theme-muted">
                     {String(index + 1).padStart(2, "0")} /{" "}
                     {String(project.total).padStart(2, "0")}
                  </span>

                  <div className="flex items-center gap-3 mt-2 mb-1">
                     <span className="text-xs font-semibold tracking-widest text-teal-400">
                        {project.category.toUpperCase()}
                     </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-theme-primary mb-2">
                     {project.title}
                  </h3>

                  <p className="text-sm text-theme-secondary max-w-xl">
                     {project.tagline}
                  </p>
               </div>

               {project.metadata?.type && (
                  <span className="hidden sm:inline-block shrink-0 px-4 py-1.5 rounded-full text-xs font-medium border border-theme text-theme-secondary">
                     {project.metadata.type}
                  </span>
               )}
            </div>

            {/* Body */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
               <div>
                  <ImageSlideshow
                     images={project.images}
                     projectTitle={project.title}
                  />
               </div>

               <div>
                  <ProjectTabs project={project} />
               </div>
            </div>

            {/* Tech stack */}
            <p className="text-xs font-semibold tracking-widest text-theme-muted mb-3">
               BUILT WITH
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
               {project.technologies.map((t) => (
                  <span
                     key={t}
                     className="px-3 py-1.5 rounded-full text-xs border border-theme text-theme-secondary hover:bg-white/10 transition-colors"
                  >
                     {t}
                  </span>
               ))}
            </div>

            {/* Action buttons */}
            {(project.githubUrl || project.liveUrl || project.apkUrl) && (
               <div className="flex flex-wrap gap-3 mb-8">
                  {project.githubUrl && (
                     <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-theme text-theme-secondary hover:bg-white/10 transition-colors"
                     >
                        {uiIconMap.github} GitHub ↗
                     </a>
                  )}

                  {project.liveUrl && (
                     <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-teal-400 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
                     >
                        {uiIconMap.play} Live Demo ↗
                     </a>
                  )}

                  {project.apkUrl && (
                     <a
                        href={project.apkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-teal-400 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
                     >
                        {uiIconMap.platform} APK ↗
                     </a>
                  )}
               </div>
            )}

            {/* Metadata strip */}
            {metadataEntries.length > 0 && (
               <div className="flex flex-wrap gap-8 pt-6 border-t border-theme">
                  {metadataEntries.map(([key, value]) => (
                     <div key={key} className="flex items-center gap-3">
                        <span className="text-purple-400">
                           {uiIconMap[key] || uiIconMap.type}
                        </span>

                        <div>
                           <p className="text-[10px] font-semibold tracking-widest text-theme-muted">
                              {METADATA_LABELS[key] || key.toUpperCase()}
                           </p>

                           <p className="text-sm text-theme-primary">{value}</p>
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>
      </motion.div>
   );
}

export default ProjectCard;