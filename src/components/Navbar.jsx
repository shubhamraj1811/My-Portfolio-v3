import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
   { label: "Home", id: "home" },
   { label: "About", id: "about" },
   { label: "Skills", id: "skills" },
   { label: "Education", id: "education" },
   { label: "Projects", id: "projects" },
   { label: "Certificates", id: "certificates" },
   { label: "Coding Profile", id: "coding-profile" },
   { label: "Contact", id: "contact" },
];

function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const [activeSection, setActiveSection] = useState("home");

   useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   useEffect(() => {
      const sections = NAV_LINKS.map((l) =>
         document.getElementById(l.id),
      ).filter(Boolean);
      const observer = new IntersectionObserver(
         (entries) => {
            const visible = entries
               .filter((e) => e.isIntersecting)
               .sort(
                  (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
               );
            if (visible.length > 0) setActiveSection(visible[0].target.id);
         },
         { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );
      sections.forEach((s) => observer.observe(s));
      return () => observer.disconnect();
   }, []);

   useEffect(() => {
      document.body.style.overflow = isOpen ? "hidden" : "";
      return () => {
         document.body.style.overflow = "";
      };
   }, [isOpen]);

   const scrollToSection = (id) => {
      setIsOpen(false);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
   };

   return (
      <>
         <nav
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl
      rounded-full border backdrop-blur-xl transition-all duration-300
      ${scrolled ? "bg-glass-scrolled shadow-lg shadow-purple-500/10" : "bg-glass"}`}
         >
            <div className="flex items-center justify-between px-6 py-3">
               <span
                  className="text-xl font-bold cursor-pointer text-theme-primary"
                  onClick={() => scrollToSection("home")}
               >
                  Shubham.
               </span>

               <div className="hidden lg:flex items-center gap-1">
                  {NAV_LINKS.map((link) => (
                     <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className="relative px-3 py-2 text-sm text-theme-secondary rounded-full transition-all duration-300 hover:text-white hover:bg-linear-to-r hover:from-teal-400 hover:via-purple-500 hover:to-pink-500"
                     >
                        {link.label}
                        {activeSection === link.id && (
                           <motion.div
                              layoutId="nav-active-underline-desktop"
                              transition={{
                                 type: "spring",
                                 stiffness: 380,
                                 damping: 32,
                              }}
                              className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-linear-to-r from-teal-400 via-purple-500 to-pink-500 shadow-[0_0_6px_1px_rgba(139,92,246,0.5)]"
                           />
                        )}
                     </button>
                  ))}
               </div>

               <div className="hidden lg:flex items-center gap-3">
                  <ThemeToggle />
                  <button
                     onClick={() => scrollToSection("contact")}
                     className="px-5 py-2 text-sm font-semibold rounded-full bg-linear-to-r from-teal-400 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
                  >
                     Hire Me
                  </button>
               </div>

               <button
                  className="lg:hidden text-theme-primary text-2xl"
                  onClick={() => setIsOpen(true)}
                  aria-label="Open menu"
               >
                  ☰
               </button>
            </div>
         </nav>

         <AnimatePresence>
            {isOpen && (
               <>
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.25 }}
                     onClick={() => setIsOpen(false)}
                     className="lg:hidden fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
                  />
                  <motion.div
                     initial={{ x: "100%" }}
                     animate={{ x: 0 }}
                     exit={{ x: "100%" }}
                     transition={{
                        type: "tween",
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                     }}
                     className="lg:hidden fixed top-0 right-0 z-[70] h-[100dvh] w-[80vw] max-w-[320px]
                     bg-glass-scrolled backdrop-blur-2xl border-l border-theme flex flex-col overflow-y-auto"
                  >
                     <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-theme">
                        <span className="text-lg font-bold text-theme-primary">
                           Menu
                        </span>
                        <button
                           onClick={() => setIsOpen(false)}
                           aria-label="Close menu"
                           className="text-theme-secondary hover:text-theme-primary text-xl leading-none"
                        >
                           ✕
                        </button>
                     </div>

                     <div className="flex flex-col gap-1 px-4 py-4">
                        {NAV_LINKS.map((link) => (
                           <button
                              key={link.id}
                              onClick={() => scrollToSection(link.id)}
                              className={`relative text-left px-4 py-3 rounded-xl text-base transition-colors ${
                                 activeSection === link.id
                                    ? "text-theme-primary bg-white/10"
                                    : "text-theme-secondary hover:text-theme-primary hover:bg-white/5"
                              }`}
                           >
                              {link.label}
                              {activeSection === link.id && (
                                 <motion.div
                                    layoutId="nav-active-underline-mobile"
                                    className="absolute left-4 right-4 bottom-1.5 h-[2px] rounded-full bg-linear-to-r from-teal-400 via-purple-500 to-pink-500"
                                 />
                              )}
                           </button>
                        ))}
                     </div>

                     <div className="mt-auto px-5 py-5 border-t border-theme flex items-center justify-between gap-3">
                        <ThemeToggle />
                        <button
                           onClick={() => scrollToSection("contact")}
                           className="flex-1 px-5 py-2.5 text-sm font-semibold rounded-full bg-linear-to-r from-teal-400 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
                        >
                           Hire Me
                        </button>
                     </div>
                  </motion.div>
               </>
            )}
         </AnimatePresence>
      </>
   );
}

export default Navbar;