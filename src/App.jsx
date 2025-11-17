import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Plans from './components/Plans'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-lilac-50 text-fuchsia-900 scroll-smooth">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Plans />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
