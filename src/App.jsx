import GradientBackground from './components/GradientBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import CursorFollower from './components/CursorFollower'
import Education from './components/Education'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import CodingProfile from './components/CodingProfile'

const sections = [
    { id: 'contact', label: 'Contact Me' },
]

function App() {
    return (
        <div className="min-h-screen text-white">
            <GradientBackground />
            <CursorFollower />
            <Navbar />
            <Hero />
            <AboutMe />
            <Skills />
            <Education />
            <Projects />
            <Certificates />
            <CodingProfile />

            {sections.map((s) => (
                <section
                    key={s.id}
                    id={s.id}
                    className="min-h-screen flex items-center justify-center"
                >
                    <h2 className="text-3xl font-bold">{s.label} section</h2>
                </section>
            ))}
        </div>
    )
}

export default App