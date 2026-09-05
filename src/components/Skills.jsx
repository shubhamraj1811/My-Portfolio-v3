import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS, CATEGORIES, getProficiencyInfo } from "../data/skillsData";
import { SkillIcon } from "../data/skillIconMap";

function SkillCard({ skill, isExpanded, onToggle }) {
   const prof = getProficiencyInfo(skill.proficiency);

   return (
      // ========== Skill Card ==========
      <motion.div
         layout
         transition={{ layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
         onClick={onToggle}
         className={`cursor-pointer rounded-2xl border border-theme bg-glass backdrop-blur-xl p-5 overflow-hidden
      hover:border-purple-400/50 transition-colors duration-300
      ${isExpanded ? "col-span-full lg:col-span-2 lg:row-span-2" : ""}`}
      >
         <motion.div layout="position" className="flex items-center gap-3 mb-4">
            <SkillIcon iconKey={skill.icon} size={24} />
            <span className="font-semibold text-theme-primary text-lg">
               {skill.name}
            </span>
         </motion.div>

         {/* === Proficiency === */}
         <motion.div layout="position" className="flex items-center gap-2 mb-2">
            <span>{prof.dot}</span>
            <span
               className="text-xs font-semibold tracking-wide"
               style={{ color: prof.color }}
            >
               {prof.label.toUpperCase()}
            </span>
         </motion.div>

         <motion.div
            layout="position"
            className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-4"
         >
            <div
               className="h-full rounded-full transition-all duration-500"
               style={{
                  width: `${skill.proficiency}%`,
                  backgroundColor: prof.color,
               }}
            />
         </motion.div>

         {/* ========== Expanded Details ========== */}
         <AnimatePresence>
            {isExpanded && (
               <motion.div
                  key="details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
               >
                  <p className="text-theme-secondary text-sm leading-relaxed mb-5 pt-1">
                     {skill.description}
                  </p>

                  {/* === Knowledge === */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-5">
                     {skill.knowledge?.length > 0 && (
                        <div>
                           <p className="text-xs font-semibold tracking-widest text-teal-400 mb-2">
                              KEY KNOWLEDGE
                           </p>

                           <ul className="space-y-1">
                              {skill.knowledge.map((k) => (
                                 <li
                                    key={k}
                                    className="text-sm text-theme-secondary flex items-center gap-2"
                                 >
                                    <span className="text-teal-400">•</span> {k}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     )}

                     {/* === Projects === */}

                     {/* ================================ */}
                     
                     {skill.projects?.length > 0 && (
                        <div>
                           <p className="text-xs font-semibold tracking-widest text-purple-400 mb-2">
                              USED IN PROJECTS
                           </p>
                           <div className="space-y-2">
                              {skill.projects.map((p) => (
                                 <button
                                    key={p.id}
                                    onClick={(e) => {
                                       e.stopPropagation()
                                       const el = document.querySelector(p.link)
                                       if (el) el.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                    className="w-full flex items-center justify-between rounded-lg border border-theme px-3 py-2 text-sm text-theme-primary hover:bg-white/10 transition-colors"
                                 >
                                    <span className="flex items-center gap-2">
                                       <SkillIcon iconKey={p.icon} size={16} /> {p.name}
                                    </span>
                                    <span className="text-purple-400">→</span>
                                 </button>
                              ))}
                           </div>
                        </div>
                     )}

                     {/* =========================================================== */}

                  </div>

                  {/* ========== DOCUMENTATION ========== */}

                  {/* ===================================== */}
                  
                  {skill.documentation?.url && (
                     <a
                        href={skill.documentation.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-block px-4 py-2 rounded-full text-sm font-semibold border border-theme text-theme-secondary hover:bg-white/10 transition-colors"
                     >
                        {skill.documentation.label} ↗
                     </a>
                  )}

                  {/* ===================================== */}

               </motion.div>
            )}
         </AnimatePresence>

         {/* ========== Toggle Button ========== */}
         <motion.button
            layout="position"
            onClick={(e) => {
               e.stopPropagation();
               onToggle();
            }}
            className="text-sm text-theme-muted hover:text-theme-primary transition-colors flex items-center gap-1 mt-3"
         >
            {isExpanded ? (
               <>
                  Collapse <span>↑</span>
               </>
            ) : (
               <>
                  View Details <span>→</span>
               </>
            )}
         </motion.button>
      </motion.div>
   );
}

// ========= Skills Component ==========
function Skills() {
   const [activeCategory, setActiveCategory] = useState("All");
   const [query, setQuery] = useState("");
   const [expandedId, setExpandedId] = useState(null);
   const searchRef = useRef(null);

   useEffect(() => {
      const onKey = (e) => {
         const isTyping = ["INPUT", "TEXTAREA"].includes(
            document.activeElement?.tagName,
         );

         if (e.key === "/" && !isTyping) {
            e.preventDefault();
            searchRef.current?.focus();
         }
      };

      window.addEventListener("keydown", onKey);

      return () => window.removeEventListener("keydown", onKey);
   }, []);

   const filtered = SKILLS.filter((s) => {
      const matchesCategory =
         activeCategory === "All" || s.category === activeCategory;

      const matchesQuery = s.name.toLowerCase().includes(query.toLowerCase());

      return matchesCategory && matchesQuery;
   });

   const toggleExpand = (id) =>
      setExpandedId((curr) => (curr === id ? null : id));

   // ======== Render ==========
   return (
      <section id="skills" className="min-h-screen px-6 lg:px-16 py-24">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
               <p className="text-teal-400 font-medium tracking-widest text-sm mb-3">
                  SKILLS
               </p>

               <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary">
                  My Technical Stack & Current Proficiency
               </h2>
            </div>

            <div className="flex flex-col gap-4 mb-10">
               <div className="relative max-w-md mx-auto w-full">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-theme-muted">
                     🔍
                  </span>

                  <input
                     ref={searchRef}
                     type="text"
                     value={query}
                     onChange={(e) => setQuery(e.target.value)}
                     placeholder="Search skills... (press /)"
                     className="w-full pl-11 pr-4 py-3 rounded-full border border-theme bg-glass backdrop-blur-xl
              text-theme-primary placeholder:text-theme-muted focus:outline-none focus:border-purple-400/60"
                  />
               </div>

               <div className="flex flex-wrap justify-center gap-2">
                  {CATEGORIES.map((cat) => (
                     <button
                        key={cat}
                        onClick={() => {
                           setActiveCategory(cat);
                           setExpandedId(null);
                        }}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300
                ${
                   activeCategory === cat
                      ? "bg-linear-to-r from-teal-400 via-purple-500 to-pink-500 text-white border-transparent"
                      : "border-theme text-theme-secondary hover:text-theme-primary hover:bg-white/10"
                }`}
                     >
                        {cat.toUpperCase()}
                     </button>
                  ))}
               </div>
            </div>

            {filtered.length > 0 ? (
               <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  style={{ gridAutoFlow: "dense" }}
               >
                  {filtered.map((skill) => (
                     <SkillCard
                        key={skill.id}
                        skill={skill}
                        isExpanded={expandedId === skill.id}
                        onToggle={() => toggleExpand(skill.id)}
                     />
                  ))}
               </div>
            ) : (
               <div className="rounded-2xl border border-theme bg-glass backdrop-blur-xl p-8 text-center text-theme-muted">
                  No skill found matching "{query}"
               </div>
            )}
         </div>
      </section>
   );
}

export default Skills;
