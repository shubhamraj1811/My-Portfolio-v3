import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
   LineChart,
   Line,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
} from "recharts";

import {
   TIMELINE,
   ACADEMIC_PROFILE,
   SEMESTER_MARKS,
   CATEGORY_STYLE,
} from "../data/educationData";

import { categoryIconMap } from "../data/skillIconMap";

function TimelineCard({ item, index }) {
   const [expanded, setExpanded] = useState(false);
   const style = CATEGORY_STYLE[item.category];
   const isLeft = index % 2 === 0;

   return (
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.3 }}
         transition={{ duration: 0.5 }}
         className={`relative flex items-center w-full mb-10
      lg:justify-${isLeft ? "start" : "end"}`}
      >
         {/* node on the center line (desktop only) */}
         <div
            className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10"
            style={{
               borderColor: style.color,
               backgroundColor: item.current ? style.color : "var(--color-bg)",
            }}
         >
            {item.current && (
               <span
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ backgroundColor: style.color, opacity: 0.6 }}
               />
            )}
         </div>

         <motion.div
            layout
            onClick={() => setExpanded((v) => !v)}
            transition={{ layout: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
            className={`cursor-pointer w-full lg:w-[46%] rounded-2xl border border-theme bg-glass backdrop-blur-xl p-6
        hover:border-purple-400/40 transition-colors duration-300`}
         >
            <div className="flex items-center gap-2 mb-3">
               <span style={{ color: style.color }}>
                  {categoryIconMap[style.icon]}
               </span>
               <span
                  className="text-xs font-semibold tracking-widest"
                  style={{ color: style.color }}
               >
                  {item.category.toUpperCase()}
               </span>
               {item.current && (
                  <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full border border-theme text-theme-muted">
                     CURRENT
                  </span>
               )}
            </div>

            <h3 className="text-lg font-bold text-theme-primary mb-1">
               {item.title}
            </h3>
            {item.meta.map((m) => (
               <p key={m} className="text-sm text-theme-muted">
                  {m}
               </p>
            ))}

            <AnimatePresence>
               {expanded && (
                  <motion.div
                     initial={{ opacity: 0, height: 0 }}
                     animate={{ opacity: 1, height: "auto" }}
                     exit={{ opacity: 0, height: 0 }}
                     transition={{ duration: 0.3 }}
                     className="overflow-hidden"
                  >
                     <div className="mt-4 pt-4 border-t border-theme space-y-2">
                        {item.details.map((d) => (
                           <p
                              key={d.label}
                              className="text-sm text-theme-secondary"
                           >
                              <span className="text-theme-primary font-semibold">
                                 {d.label}:{" "}
                              </span>
                              {d.value}
                           </p>
                        ))}
                     </div>

                     {item.coursework?.length > 0 && (
                        <div className="mt-4">
                           <p className="text-xs font-semibold tracking-widest text-teal-400 mb-2">
                              COURSEWORK
                           </p>
                           <div className="flex flex-wrap gap-2">
                              {item.coursework.map((c) => (
                                 <span
                                    key={c}
                                    className="px-3 py-1 rounded-full text-xs border border-theme text-theme-secondary"
                                 >
                                    {c}
                                 </span>
                              ))}
                           </div>
                        </div>
                     )}

                     {item.techStack?.length > 0 && (
                        <div className="mt-4">
                           <p className="text-xs font-semibold tracking-widest text-purple-400 mb-2">
                              TECHNOLOGIES
                           </p>
                           <div className="flex flex-wrap gap-2">
                              {item.techStack.map((t) => (
                                 <span
                                    key={t}
                                    className="px-3 py-1 rounded-full text-xs border border-theme text-theme-secondary"
                                 >
                                    {t}
                                 </span>
                              ))}
                           </div>
                        </div>
                     )}
                  </motion.div>
               )}
            </AnimatePresence>

            <button className="mt-4 text-xs text-theme-muted hover:text-theme-primary transition-colors">
               {expanded ? "Collapse ↑" : "View Details →"}
            </button>
         </motion.div>
      </motion.div>
   );
}

// ================ COURSEWORK CHIP =================
function CourseworkChip({ course }) {
   const [expanded, setExpanded] = useState(false);

   return (
      <motion.div
         layout
         transition={{ layout: { duration: 0.35 } }}
         className="w-full"
      >
         <button
            onClick={() => setExpanded((v) => !v)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300
        ${
           expanded
              ? "bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 text-white border-transparent"
              : "border-theme text-theme-secondary hover:bg-white/10"
        }`}
         >
            {course.name}
         </button>

         <AnimatePresence>
            {expanded && (
               <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
               >
                  <div className="mt-3 mb-2 rounded-xl border border-theme bg-glass p-4">
                     <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-theme-primary">
                           Proficiency
                        </span>
                        <span className="text-sm text-teal-400 font-semibold">
                           {course.proficiency}%
                        </span>
                     </div>
                     <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-4">
                        <div
                           className="h-full rounded-full bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500"
                           style={{ width: `${course.proficiency}%` }}
                        />
                     </div>
                     <p className="text-xs font-semibold tracking-widest text-theme-muted mb-2">
                        TOPICS
                     </p>
                     <div className="flex flex-wrap gap-2">
                        {course.topics.map((t) => (
                           <span
                              key={t}
                              className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-theme-secondary"
                           >
                              {t}
                           </span>
                        ))}
                     </div>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.div>
   );
}

// ================ CGPA GRAPH =================
function CGPAGraph() {
   const plottable = SEMESTER_MARKS.filter((s) => s.cgpa !== null);

   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
         className="w-full h-56"
      >
         <ResponsiveContainer width="100%" height="100%">
            <LineChart
               data={plottable}
               margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
               <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.08)"
               />
               <XAxis dataKey="sem" stroke="var(--text-muted)" fontSize={12} />
               <YAxis
                  domain={[6, 9]}
                  stroke="var(--text-muted)"
                  fontSize={12}
               />
               <Tooltip
                  contentStyle={{
                     background: "#0d0d12",
                     border: "1px solid rgba(255,255,255,0.1)",
                     borderRadius: 8,
                  }}
                  labelStyle={{ color: "#fff" }}
               />
               <Line
                  type="monotone"
                  dataKey="cgpa"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  dot={{ r: 5, fill: "#2dd4bf" }}
                  activeDot={{ r: 7 }}
                  isAnimationActive
                  animationDuration={1200}
               />
            </LineChart>
         </ResponsiveContainer>
      </motion.div>
   );
}

// ================ EDUCATION COMPONENT =================
function Education() {
   return (
      <section id="education" className="min-h-screen px-6 lg:px-16 py-24">
         {/* === Education === */}
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
               <p className="text-teal-400 font-medium tracking-widest text-sm mb-3">
                  EDUCATION
               </p>
               <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary">
                  Education & Journey
               </h2>
            </div>

            {/* === Timeline === */}
            <div className="relative mb-24">
               <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400/40 via-purple-500/40 to-pink-500/40" />
               {TIMELINE.map((item, i) => (
                  <TimelineCard key={item.id} item={item} index={i} />
               ))}
            </div>

            {/* === Academic Snapshot === */}
            <div className="text-center mb-10">
               <h3 className="text-2xl font-bold text-theme-primary">
                  Academic Snapshot
               </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
               {/* === Academic Profile === */}
               <div className="rounded-2xl border border-theme bg-glass backdrop-blur-xl p-6">
                  <p className="text-xs font-semibold tracking-widest text-teal-400 mb-4">
                     ACADEMIC PROFILE
                  </p>
                  <h4 className="text-lg font-bold text-theme-primary">
                     {ACADEMIC_PROFILE.degree}
                  </h4>
                  <p className="text-theme-muted mb-1">
                     {ACADEMIC_PROFILE.institution}
                  </p>
                  <p className="text-theme-muted mb-4">
                     {ACADEMIC_PROFILE.duration}
                  </p>

                  <div className="flex items-baseline gap-2 mb-6">
                     <span className="text-3xl font-bold bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {ACADEMIC_PROFILE.cgpa}
                     </span>
                     <span className="text-sm text-theme-muted">CGPA</span>
                  </div>

                  <p className="text-xs font-semibold tracking-widest text-theme-muted mb-3">
                     COURSEWORK
                  </p>
                  <div className="flex flex-wrap gap-2">
                     {ACADEMIC_PROFILE.coursework.map((c) => (
                        <CourseworkChip key={c.id} course={c} />
                     ))}
                  </div>
               </div>

               {/* Semester Performance */}
               <div className="rounded-2xl border border-theme bg-glass backdrop-blur-xl p-6">
                  <p className="text-xs font-semibold tracking-widest text-purple-400 mb-4">
                     SEMESTER PERFORMANCE
                  </p>
                  <CGPAGraph />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Education;
