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

function DurationChip({ duration }) {
   return (
      <span className="inline-block mt-2 px-3 py-1 rounded-full border border-pink-400/30 bg-pink-500/10 text-pink-300 text-xs font-medium tracking-wide hover:shadow-[0_0_12px_rgba(236,72,153,0.4)] transition-shadow duration-300">
         {duration}
      </span>
   );
}

function TimelineCard({ item, index, isExpanded, onToggle }) {
   const style = CATEGORY_STYLE[item.category];
   const isLeft = index % 2 === 0;

   return (
      <div
         className={`relative flex items-start w-full mb-12 ${isLeft ? "lg:justify-start" : "lg:justify-end"}`}
      >
         {/* Node */}
         <button
            type="button"
            tabIndex={0}
            aria-label={`${item.title} milestone`}
            className="peer hidden lg:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full border-2 z-10 items-center justify-center
        transition-all duration-300 outline-none
        hover:scale-125 focus-visible:scale-125
        hover:shadow-[0_0_16px_4px_rgba(139,92,246,0.5)] focus-visible:shadow-[0_0_16px_4px_rgba(139,92,246,0.5)]"
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
         </button>

         {/* Connector stub from center line to card */}
         <div
            className={`hidden lg:block absolute top-8 h-px w-[4%] transition-opacity duration-300 opacity-40 peer-hover:opacity-90
        ${isLeft ? "right-1/2" : "left-1/2"}`}
            style={{ backgroundColor: style.color }}
         />

         {/* Card with gradient-border-on-hover wrapper */}
         <motion.div
            layout
            transition={{ layout: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
            className="group relative w-full lg:w-[46%] rounded-2xl"
         >
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-teal-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
            <div
               onClick={onToggle}
               className="relative m-[1.5px] rounded-2xl bg-glass backdrop-blur-xl p-6 cursor-pointer"
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
               <DurationChip duration={item.duration} />

               <AnimatePresence>
                  {isExpanded && (
                     <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                     >
                        <div className="mt-4 pt-4 border-t border-theme space-y-4">
                           {item.description && (
                              <p className="text-sm text-theme-secondary leading-relaxed">
                                 {item.description}
                              </p>
                           )}

                           {item.details?.length > 0 && (
                              <div className="space-y-1">
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
                           )}

                           {item.coursework?.length > 0 && (
                              <div>
                                 <p className="text-xs font-semibold tracking-widest text-teal-400 mb-2">
                                    COURSEWORK
                                 </p>
                                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    {item.coursework.map((c) => (
                                       <span
                                          key={c}
                                          className="px-3 py-1.5 rounded-lg text-xs text-center border border-theme text-theme-secondary"
                                       >
                                          {c}
                                       </span>
                                    ))}
                                 </div>
                              </div>
                           )}

                           {item.techStack?.length > 0 && (
                              <div>
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
                        </div>
                     </motion.div>
                  )}
               </AnimatePresence>

               <button className="mt-4 text-xs text-theme-muted hover:text-theme-primary transition-colors">
                  {isExpanded ? "Collapse ↑" : "View Details →"}
               </button>
            </div>
         </motion.div>
      </div>
   );
}

function CourseworkCard({ course, isExpanded, onToggle }) {
   return (
      <motion.div
         layout
         transition={{ layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
         onClick={onToggle}
         className={`cursor-pointer rounded-xl border border-theme bg-glass backdrop-blur-xl px-4 py-3
      hover:border-purple-400/40 transition-colors duration-300 ${isExpanded ? "col-span-full" : ""}`}
      >
         <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-theme-primary">
               {course.name}
            </span>
            <span className="text-xs text-theme-muted">
               {isExpanded ? "↑" : "→"}
            </span>
         </div>

         <AnimatePresence>
            {isExpanded && (
               <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
               >
                  <div className="mt-3 pt-3 border-t border-theme">
                     <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-theme-secondary">
                           Proficiency
                        </span>
                        <span className="text-xs text-teal-400 font-semibold">
                           {course.proficiency}%
                        </span>
                     </div>
                     <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-3">
                        <div
                           className="h-full rounded-full bg-linear-to-r from-teal-400 via-purple-500 to-pink-500"
                           style={{ width: `${course.proficiency}%` }}
                        />
                     </div>
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

function SemesterShowcase() {
   const values = SEMESTER_MARKS.filter((s) => s.cgpa !== null).map(
      (s) => s.cgpa,
   );
   if (values.length === 0) return null;

   const avg = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2);
   const highest = Math.max(...values).toFixed(2);
   const trend =
      values.length > 1
         ? (values[values.length - 1] - values[values.length - 2]).toFixed(2)
         : "0.00";

   return (
      <motion.div
         initial={{ opacity: 0, y: 10 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5, delay: 0.2 }}
         className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-theme"
      >
         <div className="text-center">
            <p className="text-2xl font-bold bg-linear-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
               {avg}
            </p>
            <p className="text-xs text-theme-muted mt-1">Average CGPA</p>
         </div>
         <div className="text-center">
            <p className="text-2xl font-bold text-theme-primary">{highest}</p>
            <p className="text-xs text-theme-muted mt-1">Highest</p>
         </div>
         <div className="text-center">
            <p
               className={`text-2xl font-bold ${Number(trend) >= 0 ? "text-teal-400" : "text-pink-400"}`}
            >
               {Number(trend) >= 0 ? "+" : ""}
               {trend}
            </p>
            <p className="text-xs text-theme-muted mt-1">Latest Trend</p>
         </div>
      </motion.div>
   );
}

function Education() {
   const [expandedTimelineId, setExpandedTimelineId] = useState(null);
   const [expandedCourseId, setExpandedCourseId] = useState(null);

   const toggleTimeline = (id) =>
      setExpandedTimelineId((curr) => (curr === id ? null : id));
   const toggleCourse = (id) =>
      setExpandedCourseId((curr) => (curr === id ? null : id));

   return (
      <section id="education" className="min-h-screen px-6 lg:px-16 py-24">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
               <p className="text-teal-400 font-medium tracking-widest text-sm mb-3">
                  EDUCATION
               </p>
               <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary">
                  Education & Journey
               </h2>
            </div>

            {/* Timeline */}
            <div className="relative mb-24">
               <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-linear-to-b from-teal-400/40 via-purple-500/40 to-pink-500/40" />
               {TIMELINE.map((item, i) => (
                  <TimelineCard
                     key={item.id}
                     item={item}
                     index={i}
                     isExpanded={expandedTimelineId === item.id}
                     onToggle={() => toggleTimeline(item.id)}
                  />
               ))}
            </div>

            {/* Academic Snapshot */}
            <div className="text-center mb-10">
               <h3 className="text-2xl font-bold text-theme-primary">
                  Academic Snapshot
               </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
               {/* === Academic Profile === */}
               <div className="project-card rounded-2xl border border-theme bg-glass backdrop-blur-xl p-6">
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
                     <span className="text-3xl font-bold bg-linear-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {ACADEMIC_PROFILE.cgpa}
                     </span>
                     <span className="text-sm text-theme-muted">CGPA</span>
                  </div>

                  <p className="text-xs font-semibold tracking-widest text-theme-muted mb-3">
                     COURSEWORK
                  </p>
                  <div
                     className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                     style={{ gridAutoFlow: "dense" }}
                  >
                     {ACADEMIC_PROFILE.coursework.map((c) => (
                        <CourseworkCard
                           key={c.id}
                           course={c}
                           isExpanded={expandedCourseId === c.id}
                           onToggle={() => toggleCourse(c.id)}
                        />
                     ))}
                  </div>
               </div>

               {/* === Semester Performance === */}

               <div className="project-card rounded-2xl border border-theme bg-glass backdrop-blur-xl p-6">
                  <p className="text-xs font-semibold tracking-widest text-purple-400 mb-4">
                     SEMESTER PERFORMANCE
                  </p>
                  <CGPAGraph />
                  <SemesterShowcase />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Education;