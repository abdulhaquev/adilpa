
import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Showreel from './components/Showreel'
const Portfolio = lazy(() => import('./components/Portfolio'))
import Brands from './components/Brands'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cinematic text-white font-body">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Showreel />
        <Suspense fallback={<div className="p-8 text-center">Loading portfolio...</div>}>
          <Portfolio />
        </Suspense>
        <Brands />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
