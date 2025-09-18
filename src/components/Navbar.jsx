
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo-placeholder.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggleTheme = () => {
    const root = document.documentElement
    const isLight = root.classList.contains('light')
    if (isLight) {
      root.classList.remove('light')
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass container mx-auto mt-4 px-4 py-3 flex items-center justify-between" aria-label="Main">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Lume Productions logo" className="w-9 h-9 rounded-full" loading="lazy"/>
          <div className="leading-tight">
            <div className="font-heading text-white/90">Lume Productions</div>
            <div className="text-xs text-white/60">Adil PA</div>
          </div>
        </a>

        <button className="md:hidden p-2 rounded-lg border border-white/10" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span className="sr-only">Menu</span>
          <div className="w-5 h-0.5 bg-white my-1" />
          <div className="w-5 h-0.5 bg-white my-1" />
          <div className="w-5 h-0.5 bg-white my-1" />
        </button>

        <ul className="hidden md:flex gap-6 text-sm">
          <li><a className="hover:text-accent2" href="#home">Home</a></li>
          <li><a className="hover:text-accent2" href="#about">About</a></li>
          <li><a className="hover:text-accent2" href="#portfolio">Portfolio</a></li>
          <li><a className="hover:text-accent2" href="#services">Services</a></li>
          <li><a className="hover:text-accent2" href="#contact">Contact</a></li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={toggleTheme} aria-label="Toggle dark mode" className="p-2 rounded-lg border border-white/10 hover:shadow-glow">
            <span role="img" aria-label="theme">🌗</span>
          </button>
          <a href="#contact" className="btn-gradient px-4 py-2 rounded-xl font-semibold text-cinematic hover:scale-105 transition">Hire Me</a>
        </div>
      </nav>

      {open && (
        <motion.aside
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 200, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-full w-72 glass p-6"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="font-heading">Lume Productions</div>
            <button onClick={() => setOpen(false)} aria-label="Close menu">✕</button>
          </div>
          <ul className="space-y-4">
            <li><a onClick={() => setOpen(false)} href="#home">Home</a></li>
            <li><a onClick={() => setOpen(false)} href="#about">About</a></li>
            <li><a onClick={() => setOpen(false)} href="#portfolio">Portfolio</a></li>
            <li><a onClick={() => setOpen(false)} href="#services">Services</a></li>
            <li><a onClick={() => setOpen(false)} href="#contact">Contact</a></li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <button onClick={() => {toggleTheme()}} className="px-3 py-2 rounded-lg border border-white/10">Toggle Theme</button>
            <a href="#contact" className="btn-gradient px-4 py-2 rounded-xl text-cinematic font-semibold">Hire Me</a>
          </div>
        </motion.aside>
      )}
    </header>
  )
}
