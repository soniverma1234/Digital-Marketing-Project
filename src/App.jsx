import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Hero from './components/Hero.jsx'
import Portfolio from './components/Portfolio.jsx'
import Services from './components/Services.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './layout/Footer.jsx'
import Navbar from './layout/Navbar.jsx'
import WhatsAppButton from './layout/WhatsAppButton.jsx'

function App() {
  return (
    <main className="page-shell" id="home">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

export default App