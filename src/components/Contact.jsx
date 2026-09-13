import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_INFO, SOCIAL_LINKS } from "../data/contactData";
import { contactIconMap } from "../data/skillIconMap";

// Replace with your real Formspree endpoint (from https://formspree.io — create a form, copy its endpoint URL).
// This is a public submission URL, not a secret — safe to keep in frontend code.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqpkvaor'

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'sent' | 'error'

    const handleChange = (e) => {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
        setErrors((err) => ({ ...err, [e.target.name]: '' }))
    }

    const validate = () => {
        const next = {}
        if (!form.name.trim()) next.name = 'Name is required.'
        if (!form.email.trim()) {
            next.email = 'Email is required.'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            next.email = 'Enter a valid email address.'
        }
        if (!form.message.trim()) next.message = 'Message is required.'
        setErrors(next)
        return Object.keys(next).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (status === 'sending') return
        if (!validate()) return

        setStatus('sending')
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: new FormData(e.target),
            })

            if (res.ok) {
                setStatus('sent')
                setForm({ name: '', email: '', message: '' })
                setTimeout(() => setStatus('idle'), 4000)
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

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
                        I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* LEFT: Contact form */}
                    <div className="project-card rounded-2xl bg-glass backdrop-blur-xl p-6 sm:p-7">
                        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                            {/* Honeypot field — invisible to real users, bots often fill it in, Formspree drops these */}
                            <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-theme-secondary mb-2">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className={`w-full px-4 py-3 rounded-xl border bg-white/5 text-theme-primary placeholder:text-theme-muted focus:outline-none transition-colors ${errors.name ? 'border-pink-500/70 focus:border-pink-500/70' : 'border-theme focus:border-purple-400/60'
                                        }`}
                                />
                                {errors.name && <p className="text-xs text-pink-400 mt-1.5">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-theme-secondary mb-2">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className={`w-full px-4 py-3 rounded-xl border bg-white/5 text-theme-primary placeholder:text-theme-muted focus:outline-none transition-colors ${errors.email ? 'border-pink-500/70 focus:border-pink-500/70' : 'border-theme focus:border-purple-400/60'
                                        }`}
                                />
                                {errors.email && <p className="text-xs text-pink-400 mt-1.5">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-theme-secondary mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell me your message..."
                                    className={`w-full px-4 py-3 rounded-xl border bg-white/5 text-theme-primary placeholder:text-theme-muted focus:outline-none transition-colors resize-none ${errors.message ? 'border-pink-500/70 focus:border-pink-500/70' : 'border-theme focus:border-purple-400/60'
                                        }`}
                                />
                                {errors.message && <p className="text-xs text-pink-400 mt-1.5">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="self-start flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold
                bg-white/10 backdrop-blur-xl border border-white/20 text-theme-primary
                hover:bg-white/20 hover:border-white/30 transition-all duration-300
                shadow-[0_4px_20px_-4px_rgba(255,255,255,0.15)] disabled:opacity-60"
                            >
                                {contactIconMap.send}
                                {status === 'sending' ? 'Sending…' : 'Send Message'}
                            </button>

                            {status === 'sent' && (
                                <p className="text-sm text-teal-400">Message sent successfully!</p>
                            )}

                            {status === 'error' && (
                                <p className="text-sm text-pink-400">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </div>

                    {/* RIGHT: Let's Connect — unchanged */}
                    <div className="project-card rounded-2xl bg-glass backdrop-blur-xl p-6 sm:p-7 flex flex-col">
                        <h3 className="text-xl font-bold text-theme-primary mb-3">Let's Connect</h3>
                        <p className="text-sm text-theme-secondary leading-relaxed mb-6">
                            Feel free to reach out through the form or connect with me on social media. I respond within 24 hours.
                        </p>

                        <div className="flex flex-col gap-4 mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-teal-400/20 via-purple-500/20 to-pink-500/20 border border-theme flex items-center justify-center text-teal-400">
                                    {contactIconMap.mail}
                                </div>
                                <div>
                                    <p className="text-xs font-semibold tracking-widest text-theme-muted">EMAIL</p>
                                    <p className="text-sm text-theme-primary">{CONTACT_INFO.email}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-teal-400/20 via-purple-500/20 to-pink-500/20 border border-theme flex items-center justify-center text-purple-400">
                                    {contactIconMap.mappin}
                                </div>
                                <div>
                                    <p className="text-xs font-semibold tracking-widest text-theme-muted">LOCATION</p>
                                    <p className="text-sm text-theme-primary">{CONTACT_INFO.location}</p>
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
    )
}

export default Contact;