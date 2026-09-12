import { useState, useEffect, useMemo } from "react";
import {
   fetchGithubContributions,
   getContributionLevel,
} from "../data/codingProfileData";
import { codingProfileIconMap } from "../data/skillIconMap";

const LEVEL_COLORS = [
   "bg-white/5",
   "bg-teal-500/30",
   "bg-teal-500/55",
   "bg-purple-500/70",
   "bg-pink-500/90",
];

function ContributionGraph() {
   const [year, setYear] = useState(null);
   const [availableYears, setAvailableYears] = useState([]);
   const [days, setDays] = useState(null);
   const [total, setTotal] = useState(0);
   const [yearMenuOpen, setYearMenuOpen] = useState(false);
   const [hovered, setHovered] = useState(null);
   const [status, setStatus] = useState("loading"); // 'loading' | 'ready' | 'error'

   // Discover which years actually have real data, default to the most recent
   useEffect(() => {
      let cancelled = false;
      fetchGithubContributions().then((result) => {
         if (cancelled) return;
         if (!result || result.availableYears.length === 0) {
            setStatus("error");
            return;
         }
         setAvailableYears(result.availableYears);
         setYear(result.availableYears[0]);
      });
      return () => {
         cancelled = true;
      };
   }, []);

   // Fetch the specific year's real data whenever the selected year changes
   useEffect(() => {
      if (year == null) return;
      let cancelled = false;
      setStatus("loading");
      fetchGithubContributions(year).then((result) => {
         if (cancelled) return;
         if (!result) {
            setStatus("error");
            return;
         }
         setDays(result.days);
         setTotal(result.total);
         setStatus("ready");
      });
      return () => {
         cancelled = true;
      };
   }, [year]);

   const weeks = useMemo(() => {
      if (!days || days.length === 0) return [];
      const first = new Date(days[0].date);
      const startPadding = first.getDay();
      const padded = Array(startPadding).fill(null).concat(days);
      const result = [];
      for (let i = 0; i < padded.length; i += 7) {
         result.push(padded.slice(i, i + 7));
      }
      return result;
   }, [days]);

   return (
      <div className="project-card rounded-2xl bg-glass backdrop-blur-xl p-6 sm:p-7">
         <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
               <h3 className="text-lg font-bold text-theme-primary">
                  Coding Activity
               </h3>
               <p className="text-sm text-theme-muted">GitHub contributions</p>
            </div>

            <div className="relative">
               <button
                  onClick={() => setYearMenuOpen((v) => !v)}
                  disabled={availableYears.length === 0}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-theme text-sm text-theme-secondary hover:bg-white/10 transition-colors disabled:opacity-50"
               >
                  {year ?? "—"} {codingProfileIconMap.chevrondown}
               </button>
               {yearMenuOpen && availableYears.length > 0 && (
                  <div className="absolute right-0 mt-2 rounded-xl border border-theme bg-glass-scrolled backdrop-blur-xl overflow-hidden z-10 min-w-[100px]">
                     {availableYears.map((y) => (
                        <button
                           key={y}
                           onClick={() => {
                              setYear(y);
                              setYearMenuOpen(false);
                           }}
                           className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                              y === year
                                 ? "text-teal-400 bg-white/5"
                                 : "text-theme-secondary hover:bg-white/10"
                           }`}
                        >
                           {y}
                        </button>
                     ))}
                  </div>
               )}
            </div>
         </div>

         {status === "error" && (
            <p className="text-sm text-theme-muted italic py-6 text-center">
               Unable to load live GitHub activity right now.
            </p>
         )}

         {status === "loading" && (
            <p className="text-sm text-theme-muted italic py-6 text-center">
               Loading contribution activity…
            </p>
         )}

         {status === "ready" && (
            <>
               <p className="text-sm text-theme-secondary mb-4">
                  <span className="font-semibold text-theme-primary">
                     {total}
                  </span>{" "}
                  contributions in {year}
               </p>

               <div className="overflow-x-auto pb-2">
                  <div className="flex gap-[3px] min-w-max">
                     {weeks.map((week, wi) => (
                        <div key={wi} className="flex flex-col gap-[3px]">
                           {week.map((day, di) => (
                              <div
                                 key={di}
                                 onMouseEnter={() => day && setHovered(day)}
                                 onMouseLeave={() => setHovered(null)}
                                 className={`w-[11px] h-[11px] rounded-[3px] ${
                                    day
                                       ? LEVEL_COLORS[
                                            getContributionLevel(day.count)
                                         ]
                                       : "bg-transparent"
                                 } ${day ? "hover:ring-1 hover:ring-purple-400/60" : ""} transition-all`}
                              />
                           ))}
                        </div>
                     ))}
                  </div>
               </div>

               <div className="flex items-center justify-between mt-4">
                  <p className="text-xs text-theme-muted min-h-[16px]">
                     {hovered
                        ? `${new Date(hovered.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} — ${hovered.count} contribution${hovered.count === 1 ? "" : "s"}`
                        : ""}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-theme-muted">
                     Less
                     {LEVEL_COLORS.map((c, i) => (
                        <span
                           key={i}
                           className={`w-[10px] h-[10px] rounded-[2px] ${c}`}
                        />
                     ))}
                     More
                  </div>
               </div>
            </>
         )}
      </div>
   );
}

export default ContributionGraph;