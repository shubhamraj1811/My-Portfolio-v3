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
import Contact from './components/Contact'
import Footer from './components/Footer'
import GoToTop from './components/GoToTop'


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
            <Contact />
            <Footer />
            <GoToTop />



        </div>
    )
}

export default App