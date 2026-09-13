import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { contactIconMap } from "../data/skillIconMap";

function GoToTop() {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      const onScroll = () => setVisible(window.scrollY > 500);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

   return (
      <AnimatePresence>
         {visible && (
            <motion.button
               onClick={scrollToTop}
               aria-label="Go to top"
               initial={{ opacity: 0, y: 12 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: 12 }}
               transition={{ duration: 0.3 }}
               className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-12 h-12 flex items-center justify-center rounded-full
          bg-white/10 backdrop-blur-xl border border-white/20 text-theme-primary
          shadow-[0_4px_20px_-4px_rgba(255,255,255,0.15)]
          hover:bg-white/20 hover:border-white/30 hover:shadow-[0_0_20px_-2px_rgba(139,92,246,0.4)]
          transition-all duration-300"
            >
               {contactIconMap.arrowup}
            </motion.button>
         )}
      </AnimatePresence>
   );
}

export default GoToTop;
