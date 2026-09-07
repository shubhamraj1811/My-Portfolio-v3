import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
      const sections = NAV_LINKS.map((link) =>
         document.getElementById(link.id),
      ).filter(Boolean);

      const observer = new IntersectionObserver(
         (entries) => {
            // pick the entry closest to the top among those currently intersecting
            const visible = entries
               .filter((e) => e.isIntersecting)
               .sort(
                  (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
               );

            if (visible.length > 0) {
               setActiveSection(visible[0].target.id);
            }
         },
         {
            // treat the section as "active" once it occupies the middle band of the viewport
            rootMargin: "-40% 0px -50% 0px",
            threshold: 0,
         },
      );

      sections.forEach((section) => observer.observe(section));
      return () => observer.disconnect();
   }, []);

   const scrollToSection = (id) => {
      setIsOpen(false);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
   };

   return (
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

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
               {NAV_LINKS.map((link) => (
                  <button
                     key={link.id}
                     onClick={() => scrollToSection(link.id)}
                     className="px-3 py-2 text-sm text-theme-secondary rounded-full transition-all duration-300 hover:text-white hover:bg-linear-to-r hover:from-teal-400 hover:via-purple-500 hover:to-pink-500"
                  >
                     {link.label}
                  </button>
               ))}
            </div>

            {/* Hire Me Button */}
            <div className="hidden lg:flex items-center gap-3">
               <ThemeToggle />
               <button
                  onClick={() => scrollToSection("contact")}
                  className="px-5 py-2 text-sm font-semibold rounded-full bg-linear-to-r from-teal-400 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
               >
                  Hire Me
               </button>
            </div>

            {/* Mobile Menu Button */}
            <button
               className="lg:hidden text-theme-primary text-2xl"
               onClick={() => setIsOpen(!isOpen)}
            >
               {isOpen ? "✕" : "☰"}
            </button>
         </div>

         {isOpen && (
            <div className="lg:hidden flex flex-col items-center gap-1 pb-4 px-4">
               <div className="mb-2">
                  <ThemeToggle />
               </div>
               {NAV_LINKS.map((link) => (
                  <button
                     key={link.id}
                     onClick={() => scrollToSection(link.id)}
                     className="relative w-full py-2 text-theme-secondary hover:text-theme-primary hover:bg-white/10 rounded-full transition-colors"
                  >
                     {link.label}
                     {activeSection === link.id && (
                        <motion.div
                           layoutId="nav-active-underline"
                           transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 32,
                           }}
                           className="absolute left-3 right-3 -bottom-0.5 h-2px rounded-full
                  bg-linear-to-r from-teal-400 via-purple-500 to-pink-500
                  shadow-[0_0_6px_1px_rgba(139,92,246,0.5)]"
                        />
                     )}
                  </button>
               ))}
            </div>
         )}
      </nav>
   );
}

export default Navbar;
