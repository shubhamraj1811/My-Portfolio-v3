import { motion } from "framer-motion";
import ImageSlideshow from "./ImageSlideshow";
import ProjectTabs from "./ProjectTabs";
import { uiIconMap, TECH_ICON_KEY, skillIconMap } from "../data/skillIconMap";

const METADATA_LABELS = {
   role: "ROLE",
   type: "TYPE",
   duration: "DURATION",
   status: "STATUS",
   platform: "PLATFORM",
   year: "YEAR",
   teamSize: "TEAM SIZE",
};

const METADATA_COLORS = {
   role: "text-teal-400",
   type: "text-purple-400",
   duration: "text-pink-400",
   status: "text-teal-400",
   platform: "text-purple-400",
   year: "text-pink-400",
   teamSize: "text-teal-400",
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
         className="group relative max-w-6xl mx-auto scroll-mt-28 rounded-2xl p-[1.5px] transition-shadow duration-500
      hover:shadow-[0_0_24px_-4px_rgba(139,92,246,0.35)]"
      >
         <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
         <div className="relative rounded-[15px] bg-glass-scrolled backdrop-blur-xl p-5 sm:p-7">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-5">
               <div>
                  <span className="text-xs font-medium tracking-widest text-theme-muted">
                     {String(index + 1).padStart(2, "0")} /{" "}
                     {String(project.total).padStart(2, "0")}
                  </span>

                  <p className="text-sm font-semibold tracking-widest text-teal-400 mt-2 mb-1">
                     {project.category.toUpperCase()}
                  </p>

                  <h3 className="text-3xl sm:text-4xl font-bold text-theme-primary mb-2 leading-tight">
                     {project.title}
                  </h3>

                  <p className="text-base sm:text-lg text-theme-secondary leading-relaxed max-w-xl">
                     {project.tagline}
                  </p>
               </div>

               {project.metadata?.type && (
                  <span className="hidden sm:inline-block shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border border-theme text-theme-secondary">
                     {project.metadata.type}
                  </span>
               )}
            </div>

            {/* Body */}
            <div className="grid lg:grid-cols-2 gap-6 mb-6">
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
               {project.technologies.map((t) => {
                  const iconKey = TECH_ICON_KEY[t];
                  const icon = iconKey ? skillIconMap[iconKey] : null;

                  return (
                     <span
                        key={t}
                        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium border border-theme text-theme-secondary
                bg-white/5 hover:border-purple-400/50 hover:-translate-y-0.5 hover:text-theme-primary transition-all duration-300"
                     >
                        {icon && <span className="text-[15px]">{icon}</span>}
                        {t}
                     </span>
                  );
               })}
            </div>

            {/* Action buttons */}
            {(project.githubUrl || project.liveUrl || project.apkUrl) && (
               <div className="flex flex-wrap gap-3 mb-6">
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
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
                     >
                        {uiIconMap.play} Live Demo ↗
                     </a>
                  )}

                  {project.apkUrl && (
                     <a
                        href={project.apkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
                     >
                        {uiIconMap.platform} APK ↗
                     </a>
                  )}
               </div>
            )}

            {/* Metadata strip */}
            {metadataEntries.length > 0 && (
               <div className="pt-5 border-t border-theme">
                  <div
                     className="grid gap-4 divide-y sm:divide-y-0 sm:divide-x divide-theme"
                     style={{
                        gridTemplateColumns: `repeat(${metadataEntries.length}, minmax(0, 1fr))`,
                     }}
                  >
                     {metadataEntries.map(([key, value]) => (
                        <div
                           key={key}
                           className="flex items-center gap-3 sm:px-4 first:pl-0 pt-3 sm:pt-0"
                        >
                           <span
                              className={
                                 METADATA_COLORS[key] || "text-purple-400"
                              }
                           >
                              {uiIconMap[key] || uiIconMap.type}
                           </span>

                           <div>
                              <p className="text-[10px] font-semibold tracking-widest text-theme-muted">
                                 {METADATA_LABELS[key] || key.toUpperCase()}
                              </p>

                              <p className="text-sm sm:text-base font-semibold text-theme-primary">
                                 {value}
                              </p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            )}
         </div>
      </motion.div>
   );
}

export default ProjectCard;