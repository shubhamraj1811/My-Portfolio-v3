import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
   fetchLeetCodeStats,
   fetchGithubProfile,
   fetchGithubContributions,
   getContributionLevel,
   LEETCODE_PROFILE_URL,
   GITHUB_PROFILE_URL,
   KNOWN_ACHIEVEMENTS,
} from "../data/codingProfileData";
import { codingProfileIconMap } from "../data/skillIconMap";
import ContributionGraph from "./ContributionGraph";

function StatCard({ icon, value, label, sublabel }) {
   return (
      <div className="project-card rounded-2xl bg-glass backdrop-blur-xl p-5 flex items-center gap-4">
         <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-teal-400/20 via-purple-500/20 to-pink-500/20 border border-theme flex items-center justify-center">
            {icon}
         </div>
         <div>
            <p className="text-lg font-bold text-theme-primary leading-tight">
               {value}
            </p>
            <p className="text-xs text-theme-muted">{label}</p>
            {sublabel && (
               <p className="text-[11px] text-teal-400 mt-0.5">{sublabel}</p>
            )}
         </div>
      </div>
   );
}

function DifficultyBar({ label, solved, total, color }) {
   const pct = total ? Math.round((solved / total) * 100) : 0;
   return (
      <div>
         <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-theme-secondary font-medium">{label}</span>
            <span className="text-theme-muted">{solved}</span>
         </div>
         <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
               className="h-full rounded-full transition-all duration-500"
               style={{ width: `${pct}%`, backgroundColor: color }}
            />
         </div>
      </div>
   );
}

function LeetCodeCard() {
   const [stats, setStats] = useState(null);
   const [status, setStatus] = useState("loading");

   useEffect(() => {
      let cancelled = false;

      fetchLeetCodeStats().then((result) => {
         if (cancelled) return;

         if (!result) {
            setStatus("error");
            return;
         }

         setStats(result);

         setStatus("ready");
      });

      return () => {
         cancelled = true;
      };
   }, []);

   const circumference = 2 * Math.PI * 42;

   const solvedRatio = stats
      ? Math.min(stats.totalSolved / (stats.totalQuestions || 300), 1)
      : 0;

   const dashOffset = circumference * (1 - solvedRatio);

   return (
      <div className="project-card rounded-2xl bg-glass backdrop-blur-xl p-6 sm:p-7 flex flex-col">
         <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">{codingProfileIconMap.leetcode}</span>

            <h3 className="text-lg font-bold text-theme-primary">LeetCode</h3>
         </div>

         <p className="text-sm text-theme-muted mb-6">
            Problem Solving • Algorithm & DSA
         </p>

         {status === "loading" && (
            <p className="text-sm text-theme-muted italic py-6 text-center flex-1">
               Loading live stats…
            </p>
         )}

         {status === "error" && (
            <p className="text-sm text-theme-muted italic py-6 text-center flex-1">
               Unable to load live stats right now.
            </p>
         )}

         {status === "ready" && (
            <>
               <div className="flex items-center gap-6 mb-6">
                  <div className="relative w-24 h-24 shrink-0">
                     <svg className="w-24 h-24 -rotate-90">
                        <circle
                           cx="48"
                           cy="48"
                           r="42"
                           fill="none"
                           stroke="rgba(255,255,255,0.08)"
                           strokeWidth="8"
                        />

                        <circle
                           cx="48"
                           cy="48"
                           r="42"
                           fill="none"
                           stroke="url(#leetcode-ring-gradient)"
                           strokeWidth="8"
                           strokeLinecap="round"
                           strokeDasharray={circumference}
                           strokeDashoffset={dashOffset}
                           style={{ transition: "stroke-dashoffset 0.8s ease" }}
                        />
                        <defs>
                           <linearGradient
                              id="leetcode-ring-gradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                           >
                              <stop offset="0%" stopColor="#2dd4bf" />
                              <stop offset="50%" stopColor="#8b5cf6" />
                              <stop offset="100%" stopColor="#ec4899" />
                           </linearGradient>
                        </defs>
                     </svg>

                     <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-lg font-bold text-theme-primary">
                           {stats.totalSolved}+
                        </span>
                     </div>
                  </div>

                  <div className="flex-1 space-y-3">
                     <DifficultyBar
                        label="Easy"
                        solved={stats.easy}
                        total={stats.totalQuestions}
                        color="#2dd4bf"
                     />

                     <DifficultyBar
                        label="Medium"
                        solved={stats.medium}
                        total={stats.totalQuestions}
                        color="#facc15"
                     />

                     <DifficultyBar
                        label="Hard"
                        solved={stats.hard}
                        total={stats.totalQuestions}
                        color="#ec4899"
                     />
                  </div>
               </div>

               <p className="text-sm text-theme-secondary mb-5 flex-1">
                  {KNOWN_ACHIEVEMENTS.daysChallenge} challenge completed • DSA
                  progress: {KNOWN_ACHIEVEMENTS.dsaLevel}
               </p>
            </>
         )}

         <a
            href={LEETCODE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
         >
            View LeetCode ↗
         </a>
      </div>
   );
}

function GitHubCard() {
   const [repositories, setRepositories] = useState(null);
   const [miniDays, setMiniDays] = useState(null);
   const [totalThisYear, setTotalThisYear] = useState(null);
   const [status, setStatus] = useState("loading");

   useEffect(() => {
      let cancelled = false;
      Promise.all([
         fetchGithubProfile(),
         fetchGithubContributions(new Date().getFullYear()),
      ]).then(([profile, contrib]) => {
         if (cancelled) return;
         if (!profile || !contrib) {
            setStatus("error");
            return;
         }
         setRepositories(profile.repositories);
         setTotalThisYear(contrib.total);
         setMiniDays(contrib.days.slice(-35));
         setStatus("ready");
      });
      return () => {
         cancelled = true;
      };
   }, []);

   return (
      <div className="project-card rounded-2xl bg-glass backdrop-blur-xl p-6 sm:p-7 flex flex-col">
         <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">{codingProfileIconMap.github}</span>
            <h3 className="text-lg font-bold text-theme-primary">GitHub</h3>
         </div>
         <p className="text-sm text-theme-muted mb-6">
            Projects • Contributions • Open Source
         </p>

         {status === "loading" && (
            <p className="text-sm text-theme-muted italic py-6 text-center flex-1">
               Loading live stats…
            </p>
         )}

         {status === "error" && (
            <p className="text-sm text-theme-muted italic py-6 text-center flex-1">
               Unable to load live stats right now.
            </p>
         )}

         {status === "ready" && (
            <>
               <p className="text-xs font-semibold tracking-widest text-purple-400 mb-2">
                  CONTRIBUTION ACTIVITY
               </p>
               <div className="grid grid-cols-7 gap-1 mb-6 max-w-[180px]">
                  {miniDays.map((d, i) => (
                     <span
                        key={i}
                        className={`w-4 h-4 rounded-[3px] ${
                           [
                              "bg-white/5",
                              "bg-teal-500/30",
                              "bg-teal-500/55",
                              "bg-purple-500/70",
                              "bg-pink-500/90",
                           ][getContributionLevel(d.count)]
                        }`}
                     />
                  ))}
               </div>

               <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                     <span className="text-purple-400">
                        {codingProfileIconMap.branch}
                     </span>
                     <div>
                        <p className="text-lg font-bold text-theme-primary leading-tight">
                           {repositories}
                        </p>
                        <p className="text-xs text-theme-muted">Repositories</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <span className="text-teal-400">
                        {codingProfileIconMap.activity}
                     </span>
                     <div>
                        <p className="text-lg font-bold text-theme-primary leading-tight">
                           {totalThisYear}
                        </p>
                        <p className="text-xs text-theme-muted">
                           Contributions
                        </p>
                     </div>
                  </div>
               </div>
            </>
         )}

         <div className="flex-1" />

         <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-theme text-theme-secondary hover:bg-white/10 transition-colors"
         >
            View GitHub ↗
         </a>
      </div>
   );
}

function CodingProfile() {
   return (
      <section id="coding-profile" className="min-h-screen px-6 lg:px-16 py-24">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
               <p className="text-teal-400 font-medium tracking-widest text-sm mb-3">
                  CODING PROFILE
               </p>
               <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary">
                  Proof of Work
               </h2>
            </div>

            {/* Stats strip */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="grid sm:grid-cols-3 gap-4 mb-8"
            >
               <StatCard
                  icon={codingProfileIconMap.trophy}
                  value="Live"
                  label="Problems Solved (see card below)"
                  sublabel="LeetCode"
               />
               <StatCard
                  icon={codingProfileIconMap.trending}
                  value={KNOWN_ACHIEVEMENTS.daysChallenge}
                  label="Challenge Completed"
                  sublabel="LeetCode"
               />
               <StatCard
                  icon={codingProfileIconMap.activity}
                  value="DSA Progress"
                  label={KNOWN_ACHIEVEMENTS.dsaLevel}
               />
            </motion.div>

            {/* Platform cards */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="grid lg:grid-cols-2 gap-6 mb-8"
            >
               <LeetCodeCard />
               <GitHubCard />
            </motion.div>

            {/* Coding activity */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
            >
               <ContributionGraph />
            </motion.div>
         </div>
      </section>
   );
}

export default CodingProfile;