import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import ParallaxShowcase from './components/ParallaxShowcase'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#262626]">
      <NavBar />
      <main>
        <Hero />
        <Services />
        <ParallaxShowcase />
        <Process />
        <CTA />
      </main>
      <footer className="border-t border-neutral-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-semibold"><span className="text-[#262626]">T S</span><span className="text-[#b65252]">A</span> · Tsebulenko <span className="text-[#b65252]">Agency</span></div>
          <div className="text-sm text-neutral-500">© {new Date().getFullYear()} Скорость — наша суперсила.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
