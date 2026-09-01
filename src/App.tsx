import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandIntro from './components/BrandIntro'
import WhatWeTeach from './components/WhatWeTeach'
import Courses from './components/Courses'
import WhyUs from './components/WhyUs'
import ComingSoon from './components/ComingSoon'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleField from './components/ParticleField'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleField />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <BrandIntro />
          <WhatWeTeach />
          <Courses />
          <WhyUs />
          <ComingSoon />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
