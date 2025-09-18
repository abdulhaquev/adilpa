
import React from 'react'
import logo from '../assets/logo-placeholder.png'

export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="glass container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} className="w-8 h-8 rounded-full" alt="Lume Productions logo" loading="lazy"/>
          <div className="leading-tight">
            <div className="font-heading">Lume Productions</div>
            <div className="text-xs text-white/60">Adil PA</div>
          </div>
        </div>
        <div className="text-white/60 text-sm">© {new Date().getFullYear()} Adil PA • Lume Productions. All rights reserved.</div>
      </div>
    </footer>
  )
}
