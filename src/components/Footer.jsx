import { FOOTER_LINKS, SOCIAL_LINKS } from "../data/contactData";
import { contactIconMap } from "../data/skillIconMap";

function Footer() {
   const year = new Date().getFullYear();

   const scrollToSection = (id) => {
      const el = document.getElementById(id);

      if (el) el.scrollIntoView({ behavior: "smooth" });
   };

   return (
      <footer className="footer-surface border-t border-theme backdrop-blur-xl px-6 lg:px-16 py-14">
         <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-10 mb-10">
               {/* Brand */}

               <div>
                  <span className="text-xl font-bold text-theme-primary">
                     Shubham.
                  </span>

                  <p className="text-sm text-theme-muted mt-3 max-w-xs">
                     CS student and Android developer building practical,
                     user-focused apps.
                  </p>
               </div>

               {/* Quick Links */}

               <div>
                  <p className="text-xs font-semibold tracking-widest text-teal-400 mb-4">
                     QUICK LINKS
                  </p>

                  {/* ==== QUICK LINKS ==== */}
                  <div className="flex flex-col gap-2">
                     {FOOTER_LINKS.map((link) => (
                        <button
                           key={link.id}
                           onClick={() => scrollToSection(link.id)}
                           className="text-left text-sm text-theme-secondary transition-all duration-300 w-fit inline-block hover:scale-[1.02]"
                        >
                           <span
                              className="hover:bg-gradient-to-r hover:from-teal-400 hover:via-purple-400 hover:to-pink-400
                              hover:bg-clip-text hover:text-transparent"
                           >
                              {link.label}
                           </span>
                        </button>
                     ))}
                  </div>
               </div>

               {/* Connect */}

               <div>
                  <p className="text-xs font-semibold tracking-widest text-purple-400 mb-4">
                     CONNECT
                  </p>

                  {/* ==== CONNECT ==== */}
                  <div className="flex flex-col gap-2">
                     {SOCIAL_LINKS.filter((s) => s.url).map((s) => (
                        <a
                           key={s.id}
                           href={s.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="group flex items-center gap-2 text-sm text-theme-secondary transition-all duration-300 w-fit hover:scale-[1.02]"
                        >
                           {/* ICON */}
                           <span
                              className="transition-all duration-300
            group-hover:text-purple-400
            group-hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.45)]"
                           >
                              {contactIconMap[s.icon]}
                           </span>

                           {/* TEXT */}
                           <span
                              className="transition-all duration-300
            group-hover:bg-gradient-to-r
            group-hover:from-teal-400
            group-hover:via-purple-400
            group-hover:to-pink-400
            group-hover:bg-clip-text
            group-hover:text-transparent
            group-hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.35)]"
                           >
                              {s.label}
                           </span>
                        </a>
                     ))}
                  </div>
               </div>
            </div>

            <div className="border-t border-theme pt-6 text-center">
               <p className="text-sm text-theme-muted">
                  © {year} Shubham. All rights reserved.
               </p>

               <p className="text-xs text-theme-muted mt-1">
                  Made with ❤️ and Tea ☕
               </p>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
