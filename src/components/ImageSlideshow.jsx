import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { uiIconMap } from "../data/skillIconMap";

function Lightbox({ images, index, onClose, onPrev, onNext }) {
   return (
      <div
         className="fixed inset-0 z-200 bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
         onClick={onClose}
         role="dialog"
         aria-modal="true"
         aria-label="Image preview"
      >
         <button
            onClick={onClose}
            aria-label="Close preview"
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
         >
            {uiIconMap.x}
         </button>

         <button
            onClick={(e) => {
               e.stopPropagation();
               onPrev();
            }}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
         >
            {uiIconMap.chevronleft}
         </button>

         <div
            className="max-w-3xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
         >
            <div className="w-full aspect-4/3 rounded-xl bg-linear-to-br from-teal-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center text-white/60">
               {images[index].src ? (
                  <img
                     src={images[index].src}
                     alt={images[index].alt}
                     className="w-full h-full object-contain rounded-xl"
                  />
               ) : (
                  <span>{images[index].alt}</span>
               )}
            </div>
         </div>

         <button
            onClick={(e) => {
               e.stopPropagation();
               onNext();
            }}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
         >
            {uiIconMap.chevronright}
         </button>
      </div>
   );
}

function ImageSlideshow({ images, projectTitle }) {
   const [index, setIndex] = useState(0);
   const [lightboxOpen, setLightboxOpen] = useState(false);

   const goPrev = useCallback(
      () => setIndex((i) => (i - 1 + images.length) % images.length),
      [images.length],
   );
   const goNext = useCallback(
      () => setIndex((i) => (i + 1) % images.length),
      [images.length],
   );

   const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
   };

   return (
      <>
         <div
            className="relative rounded-xl overflow-hidden border border-theme group/slide"
            tabIndex={0}
            onKeyDown={onKeyDown}
            role="group"
            aria-label={`${projectTitle} screenshots`}
         >
            <div
               onClick={() => setLightboxOpen(true)}
               className="relative aspect-4/3 cursor-zoom-in overflow-hidden"
            >
               <AnimatePresence mode="wait">
                  <motion.div
                     key={index}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.35 }}
                     className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-teal-500/15 via-purple-500/15 to-pink-500/15
              transition-transform duration-500 group-hover/slide:scale-[1.03]"
                  >
                     {images[index].src ? (
                        <img
                           src={images[index].src}
                           alt={images[index].alt}
                           className="w-full h-full object-cover"
                        />
                     ) : (
                        <span className="text-theme-muted text-sm px-4 text-center">
                           {images[index].alt}
                        </span>
                     )}
                  </motion.div>
               </AnimatePresence>
            </div>

            {images.length > 1 && (
               <>
                  <button
                     onClick={(e) => {
                        e.stopPropagation();
                        goPrev();
                     }}
                     aria-label="Previous screenshot"
                     className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full
              bg-black/40 text-white opacity-70 group-hover/slide:opacity-100 hover:bg-black/60 transition-all"
                  >
                     {uiIconMap.chevronleft}
                  </button>
                  <button
                     onClick={(e) => {
                        e.stopPropagation();
                        goNext();
                     }}
                     aria-label="Next screenshot"
                     className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full
              bg-black/40 text-white opacity-70 group-hover/slide:opacity-100 hover:bg-black/60 transition-all"
                  >
                     {uiIconMap.chevronright}
                  </button>
               </>
            )}
         </div>

         {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-3">
               {images.map((_, i) => (
                  <button
                     key={i}
                     onClick={() => setIndex(i)}
                     aria-label={`Go to screenshot ${i + 1}`}
                     className={`h-2 rounded-full transition-all duration-300 ${
                        i === index
                           ? "w-6 bg-linear-to-r from-teal-400 via-purple-500 to-pink-500"
                           : "w-2 bg-white/20"
                     }`}
                  />
               ))}
            </div>
         )}

         <AnimatePresence>
            {lightboxOpen && (
               <Lightbox
                  images={images}
                  index={index}
                  onClose={() => setLightboxOpen(false)}
                  onPrev={goPrev}
                  onNext={goNext}
               />
            )}
         </AnimatePresence>
      </>
   );
}

export default ImageSlideshow;