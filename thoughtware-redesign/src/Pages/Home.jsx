import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import Services from '../components/Services'
import Process from '../components/Process'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}
