import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_INFO, SOCIAL_LINKS } from "../data/contactData";
import { contactIconMap } from "../data/skillIconMap";

function Contact() {
   const [form, setForm] = useState({ name: "", email: "", message: "" });

   const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'sent'

   const handleChange = (e) =>
      setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

   const handleSubmit = (e) => {
      e.preventDefault();

      // Backend/email sending will be wired up separately — this is a UI-only stub for now.

      setStatus("sending");

      setTimeout(() => {
         setStatus("sent");

         setForm({ name: "", email: "", message: "" });

         setTimeout(() => setStatus("idle"), 3000);
      }, 900);
   };

   return (
      <section id="contact" className="min-h-screen px-6 lg:px-16 py-24">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
               <div className="mb-3">
                  <span className="inline-block px-4 py-1.5 rounded-full border border-theme bg-glass">
                     <span className="text-sm font-semibold tracking-widest bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        CONTACT
                     </span>
                  </span>
               </div>

               <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary mb-4">
                  Get In Touch
               </h2>

               <p className="text-theme-muted max-w-xl mx-auto">
                  I'm always open to discussing new opportunities,
                  collaborations, or just having a chat about technology.
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
               {/* LEFT: Contact form */}

               <div className="project-card rounded-2xl bg-glass backdrop-blur-xl p-6 sm:p-7">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                     <div>
                        <label
                           htmlFor="name"
                           className="block text-sm font-medium text-theme-secondary mb-2"
                        >
                           Name
                        </label>

                        <input
                           id="name"
                           name="name"
                           type="text"
                           required
                           value={form.name}
                           onChange={handleChange}
                           placeholder="Your name"
                           className="w-full px-4 py-3 rounded-xl border border-theme bg-white/5 text-theme-primary placeholder:text-theme-muted focus:outline-none focus:border-purple-400/60 transition-colors"
                        />
                     </div>

                     <div>
                        <label
                           htmlFor="email"
                           className="block text-sm font-medium text-theme-secondary mb-2"
                        >
                           Email
                        </label>

                        <input
                           id="email"
                           name="email"
                           type="email"
                           required
                           value={form.email}
                           onChange={handleChange}
                           placeholder="you@example.com"
                           className="w-full px-4 py-3 rounded-xl border border-theme bg-white/5 text-theme-primary placeholder:text-theme-muted focus:outline-none focus:border-purple-400/60 transition-colors"
                        />
                     </div>

                     <div>
                        <label
                           htmlFor="message"
                           className="block text-sm font-medium text-theme-secondary mb-2"
                        >
                           Message
                        </label>

                        <textarea
                           id="message"
                           name="message"
                           required
                           rows={5}
                           value={form.message}
                           onChange={handleChange}
                           placeholder="Tell me your message..."
                           className="w-full px-4 py-3 rounded-xl border border-theme bg-white/5 text-theme-primary placeholder:text-theme-muted focus:outline-none focus:border-purple-400/60 transition-colors resize-none"
                        />
                     </div>

                     <button
                        type="submit"
                        disabled={status === "sending"}
                        className="self-start flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold
                bg-white/10 backdrop-blur-xl border border-white/20 text-theme-primary
                hover:bg-white/20 hover:border-white/30 transition-all duration-300
                shadow-[0_4px_20px_-4px_rgba(255,255,255,0.15)] disabled:opacity-60"
                     >
                        {contactIconMap.send}

                        {status === "sending"
                           ? "Sending…"
                           : status === "sent"
                             ? "Message Sent ✓"
                             : "Send Message"}
                     </button>
                  </form>
               </div>

               {/* RIGHT: Let's Connect */}

               <div className="project-card rounded-2xl bg-glass backdrop-blur-xl p-6 sm:p-7 flex flex-col">
                  <h3 className="text-xl font-bold text-theme-primary mb-3">
                     Let's Connect
                  </h3>

                  <p className="text-sm text-theme-secondary leading-relaxed mb-6">
                     Feel free to reach out through the form or connect with me
                     on social media. I respond within 24 hours.
                  </p>

                  <div className="flex flex-col gap-4 mb-6">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-teal-400/20 via-purple-500/20 to-pink-500/20 border border-theme flex items-center justify-center text-teal-400">
                           {contactIconMap.mail}
                        </div>

                        <div>
                           <p className="text-xs font-semibold tracking-widest text-theme-muted">
                              EMAIL
                           </p>

                           <p className="text-sm text-theme-primary">
                              {CONTACT_INFO.email}
                           </p>
                        </div>
                     </div>

                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-teal-400/20 via-purple-500/20 to-pink-500/20 border border-theme flex items-center justify-center text-purple-400">
                           {contactIconMap.mappin}
                        </div>

                        <div>
                           <p className="text-xs font-semibold tracking-widest text-theme-muted">
                              LOCATION
                           </p>

                           <p className="text-sm text-theme-primary">
                              {CONTACT_INFO.location}
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                     {SOCIAL_LINKS.filter((s) => s.url).map((s) => (
                        <a
                           key={s.id}
                           href={s.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label={s.label}
                           className="w-10 h-10 flex items-center justify-center rounded-full border border-theme text-theme-secondary transition-all duration-300 hover:text-white hover:bg-gradient-to-r hover:from-teal-400 hover:via-purple-500 hover:to-pink-500 hover:border-transparent"
                        >
                           {contactIconMap[s.icon]}
                        </a>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Contact;
