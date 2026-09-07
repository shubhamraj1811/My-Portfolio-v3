import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectIconMap } from "../data/skillIconMap";

const TABS = ["Overview", "Architecture", "Metrics"];

function ProjectTabs({ project }) {
   const [active, setActive] = useState("Overview");

   return (
      <div className="flex flex-col h-full">
         <div
            role="tablist"
            className="flex items-center gap-6 border-b border-theme mb-4"
         >
            {TABS.map((tab) => (
               <button
                  key={tab}
                  role="tab"
                  aria-selected={active === tab}
                  onClick={() => setActive(tab)}
                  className={`relative pb-3 text-base font-medium transition-colors ${
                     active === tab
                        ? "text-theme-primary"
                        : "text-theme-muted hover:text-theme-secondary"
                  }`}
               >
                  {tab}
                  {active === tab && (
                     <motion.div
                        layoutId={`tab-underline-${project.id}`}
                        className="absolute left-0 right-0 -bottom-px h-0.5 bg-linear-to-r from-teal-400 via-purple-500 to-pink-500 rounded-full"
                     />
                  )}
               </button>
            ))}
         </div>

         <div className="relative min-h-240px sm:min-h-260px">
            <AnimatePresence mode="wait">
               <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  role="tabpanel"
                  className="absolute inset-0"
               >
                  {active === "Overview" && (
                     <div>
                        <p className="text-base text-theme-secondary leading-relaxed mb-5">
                           {project.tagline}
                        </p>
                        <p className="text-xs font-semibold tracking-widest text-teal-400 mb-3">
                           KEY FEATURES
                        </p>
                        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                           {project.features.map((f) => (
                              <div
                                 key={f.text}
                                 className="flex items-center gap-2 text-sm sm:text-base text-theme-secondary"
                              >
                                 <span className="text-teal-400 shrink-0">
                                    {projectIconMap[f.icon]}
                                 </span>
                                 {f.text}
                              </div>
                           ))}
                        </div>
                     </div>
                  )}

                  {active === "Architecture" && (
                     <div>
                        <p className="text-xs font-semibold tracking-widest text-purple-400 mb-3">
                           DATA FLOW
                        </p>
                        <div className="flex flex-col items-start gap-1 mb-6">
                           {project.architecture.flow.map((step, i) => (
                              <div
                                 key={step}
                                 className="flex flex-col items-start"
                              >
                                 <span className="px-3 py-1.5 rounded-lg border border-theme text-sm sm:text-base text-theme-primary bg-white/5">
                                    {step}
                                 </span>
                                 {i < project.architecture.flow.length - 1 && (
                                    <span className="text-theme-muted pl-4 my-0.5">
                                       ↓
                                    </span>
                                 )}
                              </div>
                           ))}
                        </div>
                        <p className="text-xs font-semibold tracking-widest text-teal-400 mb-3">
                           TECHNOLOGIES
                        </p>
                        <div className="flex flex-wrap gap-2">
                           {project.architecture.technologies.map((t) => (
                              <span
                                 key={t}
                                 className="px-3 py-1.5 rounded-full text-sm border border-theme text-theme-secondary"
                              >
                                 {t}
                              </span>
                           ))}
                        </div>
                     </div>
                  )}

                  {active === "Metrics" && (
                     <div>
                        {project.metrics?.length > 0 ? (
                           <div className="grid grid-cols-2 gap-3">
                              {project.metrics.map((m) => (
                                 <div
                                    key={m}
                                    className="rounded-lg border border-theme px-4 py-3.5 text-center"
                                 >
                                    <span className="text-sm sm:text-base font-semibold text-theme-primary">
                                       {m}
                                    </span>
                                 </div>
                              ))}
                           </div>
                        ) : (
                           <p className="text-sm text-theme-muted italic">
                              Detailed metrics for this project are coming soon.
                           </p>
                        )}
                     </div>
                  )}
               </motion.div>
            </AnimatePresence>
         </div>
      </div>
   );
}

export default ProjectTabs;
