import GradientBackground from './components/GradientBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import CursorFollower from './components/CursorFollower'

const sections = [
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education Timeline' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'coding-profile', label: 'Coding Profile' },
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

            {/* {sections.map((s) => (
                <section
                    key={s.id}
                    id={s.id}
                    className="min-h-screen flex items-center justify-center"
                >
                    <h2 className="text-3xl font-bold">{s.label} section</h2>
                </section>
            ))} */}
        </div>
    )
}

export default App