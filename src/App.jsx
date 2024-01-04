import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import TopButton from './components/TopButton'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <AboutMe />
      <Experience />
      <Testimonials />
      <ContactMe />
      <Footer />
      <TopButton />
    </>
  )
}

export default App
