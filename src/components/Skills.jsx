import { useState, useEffect, useRef } from "react";
import { SKILLS, CATEGORIES, getProficiencyInfo } from "../data/skillsData";

function SkillCard({ skill, onOpen }) {
   const prof = getProficiencyInfo(skill.proficiency);
   return (
      <button
         onClick={() => onOpen(skill)}
         className="text-left rounded-2xl border border-theme bg-glass backdrop-blur-xl p-5
      hover:border-purple-400/50 hover:-translate-y-1 transition-all duration-300 group"
      >
         <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{skill.icon}</span>
            <span className="font-semibold text-theme-primary">
               {skill.name}
            </span>
         </div>

         <div className="flex items-center gap-2 mb-2">
            <span>{prof.dot}</span>

            <span
               className="text-xs font-semibold tracking-wide"
               style={{ color: prof.color }}
            >
               {prof.label.toUpperCase()}
            </span>
         </div>

         <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-4">
            <div
               className="h-full rounded-full transition-all duration-500"
               style={{
                  width: `${skill.proficiency}%`,
                  backgroundColor: prof.color,
               }}
            />
         </div>

         <span className="text-sm text-theme-muted group-hover:text-theme-primary transition-colors flex items-center gap-1">
            View Details{" "}
            <span className="group-hover:translate-x-1 transition-transform">
               →
            </span>
         </span>
      </button>
   );
}

function SkillModal({ skill, onClose }) {
   useEffect(() => {
      const onKey = (e) => e.key === "Escape" && onClose();

      window.addEventListener("keydown", onKey);

      return () => window.removeEventListener("keydown", onKey);
   }, [onClose]);

   if (!skill) return null;

   const prof = getProficiencyInfo(skill.proficiency);

   return (
      <div
         className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
         onClick={onClose}
      >
         <div
            className="w-full max-w-md rounded-2xl border border-theme bg-glass-scrolled backdrop-blur-2xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
         >
            <div className="flex items-start justify-between mb-4">
               <div className="flex items-center gap-3">
                  <span className="text-3xl">{skill.icon}</span>

                  <h3 className="text-xl font-bold text-theme-primary">
                     {skill.name}
                  </h3>
               </div>

               <button
                  onClick={onClose}
                  className="text-theme-muted hover:text-theme-primary text-xl leading-none"
               >
                  ✕
               </button>
            </div>

            <div className="flex items-center gap-2 mb-4">
               <span>{prof.dot}</span>

               <span
                  className="text-xs font-semibold tracking-wide"
                  style={{ color: prof.color }}
               >
                  {prof.label.toUpperCase()}
               </span>
            </div>

            <p className="text-theme-secondary leading-relaxed mb-5">
               {skill.description}
            </p>

            {skill.knowledge?.length > 0 && (
               <div className="mb-5">
                  <p className="text-xs font-semibold tracking-widest text-theme-muted mb-2">
                     KNOWLEDGE
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

            {skill.usedIn?.length > 0 && (
               <div className="mb-5">
                  <p className="text-xs font-semibold tracking-widest text-theme-muted mb-2">
                     USED IN
                  </p>

                  <ul className="space-y-1">
                     {skill.usedIn.map((p) => (
                        <li
                           key={p}
                           className="text-sm text-theme-secondary flex items-center gap-2"
                        >
                           <span className="text-purple-400">→</span> {p}
                        </li>
                     ))}
                  </ul>
               </div>
            )}

            {skill.projectLink && (
               <a
                  href={skill.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center px-5 py-2.5 rounded-full font-semibold

                bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
               >
                  View Project →
               </a>
            )}
         </div>
      </div>
   );
}

function Skills() {
   const [activeCategory, setActiveCategory] = useState("All");

   const [query, setQuery] = useState("");

   const [selectedSkill, setSelectedSkill] = useState(null);

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

            {/* Search + filters */}

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
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300

                ${
                   activeCategory === cat
                      ? "bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 text-white border-transparent"
                      : "border-theme text-theme-secondary hover:text-theme-primary hover:bg-white/10"
                }`}
                     >
                        {cat.toUpperCase()}
                     </button>
                  ))}
               </div>
            </div>

            {/* Cards */}

            {filtered.length > 0 ? (
               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((skill) => (
                     <SkillCard
                        key={skill.id}
                        skill={skill}
                        onOpen={setSelectedSkill}
                     />
                  ))}
               </div>
            ) : (
               <div className="rounded-2xl border border-theme bg-glass backdrop-blur-xl p-8 text-center text-theme-muted">
                  No skill found matching "{query}"
               </div>
            )}
         </div>

         <SkillModal
            skill={selectedSkill}
            onClose={() => setSelectedSkill(null)}
         />
      </section>
   );
}

export default Skills;
