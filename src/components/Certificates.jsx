import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ITEMS, TYPE_LABELS, TYPE_COLORS } from "../data/certificatesData";
import { certIconMap, certUiIconMap } from "../data/skillIconMap";
import CertificateLightbox from "./CertificateLightbox";

const FILTERS = ["All", "Certificates", "Achievements"];

function TypeChip({ type, featured }) {
   const c = TYPE_COLORS[type];
   return (
      <div className="flex items-center gap-2">
         <span
            className={`px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest border ${c.border} ${c.bg} ${c.text}`}
         >
            {TYPE_LABELS[type]}
         </span>
         {featured && (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest border border-pink-400/40 bg-pink-500/10 text-pink-300">
               {certUiIconMap.award} FEATURED
            </span>
         )}
      </div>
   );
}

function ShowcaseCard({ item, index, total }) {
   const [flipped, setFlipped] = useState(false);
   const [lightboxOpen, setLightboxOpen] = useState(false);
   const isCert = item.type === "certificate";
   const backImage = isCert ? item.image : item.proofImage;
   const ctaLabel = isCert
      ? "Show Certificate"
      : item.proofUrl
        ? "View Proof"
        : "View Achievement";

   return (
      <>
         <div className="[perspective:1600px]">
            <AnimatePresence mode="wait">
               <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
               >
                  <motion.div
                     animate={{ rotateY: flipped ? 180 : 0 }}
                     transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                     style={{ transformStyle: "preserve-3d" }}
                     className="relative w-full min-h-440px"
                  >
                     {/* FRONT */}
                     <div
                        style={{ backfaceVisibility: "hidden" }}
                        className="absolute inset-0 project-card rounded-2xl bg-glass-scrolled backdrop-blur-xl p-6 sm:p-7 flex flex-col"
                     >
                        <div className="flex items-center justify-between mb-5">
                           <TypeChip
                              type={item.type}
                              featured={item.featured}
                           />
                           <span className="text-xs text-theme-muted">
                              {String(index + 1).padStart(2, "0")} /{" "}
                              {String(total).padStart(2, "0")}
                           </span>
                        </div>

                        <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-teal-400/20 via-purple-500/20 to-pink-500/20 border border-theme flex items-center justify-center text-3xl mb-5">
                           {certIconMap[item.icon]}
                        </div>

                        {!isCert && item.metric && (
                           <p className="text-3xl font-bold bg-linear-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                              {item.metric}
                           </p>
                        )}

                        <h3 className="text-xl sm:text-2xl font-bold text-theme-primary mb-3">
                           {item.title}
                        </h3>

                        <div className="flex items-center gap-2 mb-4">
                           <span className="px-3 py-1 rounded-full text-xs border border-theme text-theme-secondary">
                              {item.organization}
                           </span>
                           <span className="px-3 py-1 rounded-full text-xs border border-theme text-theme-secondary">
                              {item.year}
                           </span>
                        </div>

                        <p className="text-sm text-theme-secondary leading-relaxed mb-6 flex-1">
                           {item.description}
                        </p>

                        <button
                           onClick={() => setFlipped(true)}
                           className="self-start flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-teal-400 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
                        >
                           {ctaLabel} ↗
                        </button>
                     </div>

                     {/* BACK */}
                     <div
                        style={{
                           backfaceVisibility: "hidden",
                           transform: "rotateY(180deg)",
                        }}
                        className="absolute inset-0 project-card rounded-2xl bg-glass-scrolled backdrop-blur-xl p-6 sm:p-7 flex flex-col"
                     >
                        <button
                           onClick={() => setFlipped(false)}
                           className="self-start flex items-center gap-2 text-sm text-theme-muted hover:text-theme-primary transition-colors mb-4"
                        >
                           {certUiIconMap.arrowleft} Back to Details
                        </button>

                        {isCert ? (
                           <>
                              <div
                                 onClick={() =>
                                    backImage && setLightboxOpen(true)
                                 }
                                 className={`flex-1 rounded-xl border border-theme bg-white/5 flex items-center justify-center overflow-hidden mb-4 ${backImage ? "cursor-zoom-in" : ""}`}
                              >
                                 {backImage ? (
                                    <img
                                       src={backImage}
                                       alt={`${item.title} certificate`}
                                       className="w-full h-full object-contain"
                                    />
                                 ) : (
                                    <span className="text-theme-muted text-sm px-4 text-center">
                                       Certificate image coming soon
                                    </span>
                                 )}
                              </div>
                              {backImage && (
                                 <button
                                    onClick={() => setLightboxOpen(true)}
                                    className="self-start flex items-center gap-2 text-sm text-theme-secondary hover:text-theme-primary transition-colors"
                                 >
                                    {certUiIconMap.maximize} View Full Size ↗
                                 </button>
                              )}
                           </>
                        ) : (
                           <>
                              {item.metric && (
                                 <div className="text-center mb-4">
                                    <p className="text-4xl font-bold bg-linear-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                       {item.metric}
                                    </p>
                                    <p className="text-xs tracking-widest text-theme-muted mt-1">
                                       {item.organization.toUpperCase()}
                                    </p>
                                 </div>
                              )}

                              <p className="text-sm text-theme-secondary leading-relaxed mb-4">
                                 {item.description}
                              </p>

                              {item.skills?.length > 0 && (
                                 <div className="flex flex-wrap gap-2 mb-4">
                                    {item.skills.map((s) => (
                                       <span
                                          key={s}
                                          className="px-3 py-1 rounded-full text-xs border border-theme text-theme-secondary"
                                       >
                                          {s}
                                       </span>
                                    ))}
                                 </div>
                              )}

                              {backImage && (
                                 <div
                                    onClick={() => setLightboxOpen(true)}
                                    className="rounded-xl border border-theme bg-white/5 flex items-center justify-center overflow-hidden mb-4 h-32 cursor-zoom-in"
                                 >
                                    <img
                                       src={backImage}
                                       alt={`${item.title} proof`}
                                       className="w-full h-full object-contain"
                                    />
                                 </div>
                              )}

                              {item.proofUrl && (
                                 <a
                                    href={item.proofUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="self-start flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-theme text-theme-secondary hover:bg-white/10 transition-colors mt-auto"
                                 >
                                    {certUiIconMap.externallink} View{" "}
                                    {item.organization} ↗
                                 </a>
                              )}
                           </>
                        )}
                     </div>
                  </motion.div>
               </motion.div>
            </AnimatePresence>
         </div>

         <AnimatePresence>
            {lightboxOpen && (
               <CertificateLightbox
                  image={backImage}
                  alt={`${item.title} full size`}
                  onClose={() => setLightboxOpen(false)}
               />
            )}
         </AnimatePresence>
      </>
   );
}

function LibraryItem({ item, isActive, onClick }) {
   const c = TYPE_COLORS[item.type];
   return (
      <button
         onClick={onClick}
         aria-current={isActive}
         className={`w-full text-left rounded-xl border p-4 transition-all duration-300 ${
            isActive
               ? "border-purple-400/50 bg-white/10 shadow-[0_0_16px_-4px_rgba(139,92,246,0.4)] scale-[1.01]"
               : "border-theme bg-glass hover:bg-white/5"
         }`}
      >
         <span
            className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest border ${c.border} ${c.bg} ${c.text} mb-2`}
         >
            {TYPE_LABELS[item.type]}
         </span>
         <div className="flex items-center justify-between">
            <div>
               <p className="font-semibold text-theme-primary">{item.title}</p>
               <p className="text-sm text-theme-muted">
                  {item.organization} • {item.year}
               </p>
            </div>
            <span className="text-theme-muted">↗</span>
         </div>
      </button>
   );
}

function Certificates() {
   const [filter, setFilter] = useState("All");
   const [selectedId, setSelectedId] = useState(
      ITEMS.find((i) => i.featured)?.id || ITEMS[0]?.id,
   );
   const [fadeTop, setFadeTop] = useState(false);
   const [fadeBottom, setFadeBottom] = useState(false);

   const scrollContainerRef = useRef(null);
   const itemRefs = useRef({});

   const filtered = ITEMS.filter((i) => {
      if (filter === "All") return true;
      if (filter === "Certificates") return i.type === "certificate";
      return i.type === "achievement";
   });

   const selected = ITEMS.find((i) => i.id === selectedId) || filtered[0];
   const selectedIndex = ITEMS.findIndex((i) => i.id === selected?.id);

   const updateFades = useCallback(() => {
      const el = scrollContainerRef.current;
      if (!el) return;
      setFadeTop(el.scrollTop > 4);
      setFadeBottom(el.scrollTop + el.clientHeight < el.scrollHeight - 4);
   }, []);

   useEffect(() => {
      updateFades();
   }, [filtered, updateFades]);

   const handleFilter = (f) => {
      setFilter(f);
      const nextList = ITEMS.filter((i) => {
         if (f === "All") return true;
         if (f === "Certificates") return i.type === "certificate";
         return i.type === "achievement";
      });
      if (!nextList.find((i) => i.id === selectedId) && nextList.length > 0) {
         setSelectedId(nextList[0].id);
      }
   };

   const handleSelect = (id) => {
      setSelectedId(id);
      itemRefs.current[id]?.scrollIntoView({
         behavior: "smooth",
         block: "nearest",
      });
   };

   return (
      <section id="certificates" className="min-h-screen px-6 lg:px-16 py-24">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
               <p className="text-teal-400 font-medium tracking-widest text-sm mb-3">
                  ACHIEVEMENTS
               </p>
               <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary">
                  Certifications & Achievements
               </h2>
            </div>

            <div className="flex justify-center gap-2 mb-10">
               {FILTERS.map((f) => (
                  <button
                     key={f}
                     onClick={() => handleFilter(f)}
                     className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300
              ${
                 filter === f
                    ? "bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 text-white border-transparent"
                    : "border-theme text-theme-secondary hover:text-theme-primary hover:bg-white/10"
              }`}
                  >
                     {f.toUpperCase()}
                  </button>
               ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
               {/* LEFT: Showcase */}
               <div>
                  {selected ? (
                     <ShowcaseCard
                        item={selected}
                        index={selectedIndex}
                        total={ITEMS.length}
                     />
                  ) : (
                     <div className="rounded-2xl border border-theme bg-glass p-8 text-center text-theme-muted">
                        No items in this filter yet.
                     </div>
                  )}
               </div>

               {/* RIGHT: Library */}
               <div>
                  <div className="flex items-center justify-between mb-4">
                     <p className="text-xs font-semibold tracking-widest text-theme-muted">
                        CERTIFICATIONS & ACHIEVEMENTS
                     </p>
                     <span className="text-xs text-theme-muted">
                        {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                        {String(ITEMS.length).padStart(2, "0")}
                     </span>
                  </div>

                  <div className="relative">
                     <div
                        className={`library-fade-top ${fadeTop ? "visible" : ""}`}
                     />

                     <AnimatePresence mode="popLayout">
                        <motion.div
                           key={filter}
                           ref={scrollContainerRef}
                           onScroll={updateFades}
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.3 }}
                           className="library-scroll flex flex-col gap-3 h-[300px] sm:h-[420px] lg:h-[480px] overflow-y-auto overflow-x-hidden pr-2"
                        >
                           {filtered.map((item) => (
                              <div
                                 key={item.id}
                                 ref={(el) => (itemRefs.current[item.id] = el)}
                              >
                                 <LibraryItem
                                    item={item}
                                    isActive={item.id === selectedId}
                                    onClick={() => handleSelect(item.id)}
                                 />
                              </div>
                           ))}
                        </motion.div>
                     </AnimatePresence>

                     <div
                        className={`library-fade-bottom ${fadeBottom ? "visible" : ""}`}
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Certificates;
