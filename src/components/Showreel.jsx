
import React from 'react'
import { motion } from 'framer-motion'

export default function Showreel() {
  return (
    <section id="showreel" className="container mx-auto px-4 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass p-4 md:p-8">
        <div className="aspect-video w-full bg-black/40 rounded-xl grid place-items-center">
          <button className="btn-gradient px-6 py-3 rounded-xl text-cinematic font-semibold">Play Showreel</button>
        </div>
        <div className="mt-4 text-right">
          <a href="/src/assets/hero-poster.jpg" download className="underline hover:text-accent2">Download Showreel (placeholder)</a>
        </div>
      </motion.div>
    </section>
  )
}
