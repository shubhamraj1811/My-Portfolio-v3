import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import useTypewriter from '../hooks/useTypewriter'

// ===== HERO SECTION =====
const ROLES = [
    'Android Developer',
    'Software Engineer',
    'CS Student',
    'Problem Solver',
]

// ===== SKILLS CARD =====
const SKILLS_CARD = {
    role: 'Full-Stack Developer',
    languages: ['Kotlin', 'Python', 'C++'],
    frameworks: ['React'],
    tools: ['Git', 'Android Studio', 'VS Code'],
    currentlyLearning: 'MVVM Architecture, Jetpack Compose',
}

function Hero() {
    const roleText = useTypewriter(ROLES)

    return (
        <section
            id="home"
            className="min-h-screen flex items-center px-6 lg:px-16 pt-32 pb-16"
        >
            <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
                {/* LEFT SIDE */}
                <div>
                    {/* ===== HERO TEXT ===== */}
                    <p className="text-teal-400 font-medium mb-2">Hi, Myself</p>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">
                        Shubham
                    </h1>

                    {/* ===== ROLE TEXT ===== */}
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-6 h-10">
                        <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {roleText}
                        </span>
                        <span className="animate-pulse">|</span>
                    </h2>

                    {/* ===== ABOUT TEXT ===== */}
                    <p className="text-gray-400 text-lg mb-8 max-w-lg">
                        I'm Shubham Raj, a software developer passionate about building Android applications and exploring modern web technologies. I enjoy solving real-world problems through clean, scalable software and am constantly learning to become a better engineer.
                    </p>

                    {/* ===== BUTTONS ===== */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        <button
                            onClick={() =>
                                document
                                    .getElementById('projects')
                                    ?.scrollIntoView({ behavior: 'smooth' })
                            }
                            className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
                        >
                            View Projects
                        </button>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/10 transition-colors"
                        >
                            Download Resume
                        </a>
                    </div>

                    {/* ===== SOCIAL LINKS ===== */}
                    <div className="flex gap-5 text-2xl text-gray-400">

                        {/* ===== GITHUB ===== */}
                        <a
                            href="https://github.com/shubhamraj1811"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <FaGithub />
                        </a>

                        {/* ===== LINKEDIN ===== */}
                        <a
                            href="https://www.linkedin.com/in/shubham1811"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="mailto:ershubhcsofficial@gmail.com"
                            className="hover:text-white transition-colors"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE - Code Editor Card */}
                <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl shadow-purple-500/10 overflow-hidden">
                    {/* Title Bar */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>

                        <span className="ml-3 text-xs text-gray-400 font-mono">
                            shubham.kt
                        </span>
                    </div>

                    {/* Code Block */}
                    <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto">
                        <code>
                            <span className="text-purple-400">const</span>{' '}
                            <span className="text-teal-300">Shubham</span>{' '}
                            <span className="text-gray-400">=</span> {'{'}
                            {'\n'}

                            {Object.entries(SKILLS_CARD).map(([key, value]) => (
                                <div key={key} className="pl-4">
                                    <span className="text-blue-300">{key}</span>
                                    <span className="text-gray-400">: </span>

                                    {Array.isArray(value) ? (
                                        <span className="text-pink-300">
                                            [{value.map((v) => `'${v}'`).join(', ')}]
                                        </span>
                                    ) : (
                                        <span className="text-pink-300">'{value}'</span>
                                    )}

                                    <span className="text-gray-400">,</span>
                                </div>
                            ))}

                            {'}'}
                            <span className="text-gray-400">;</span>
                        </code>
                    </pre>
                </div>
            </div>
        </section>
    )
}

export default Hero