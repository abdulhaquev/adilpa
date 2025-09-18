
import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { title: 'Cinematic Shoots', desc: 'High-end cinematography with dynamic lighting and movement.' },
  { title: 'Editing & Color', desc: 'Rhythmic edits with bold color grades for neon vibes.' },
  { title: 'Social Reels', desc: 'Fast, engaging vertical videos optimized for reach.' },
  { title: 'Client Ad Spots', desc: 'Product-focused ads with crisp storytelling.' },
]

export default function Services() {
  return (
    <section id="services" className="container mx-auto px-4 py-24">
      <h2 className="font-heading text-3xl md:text-4xl mb-8">Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <motion.div key={it.title} whileHover={{ scale: 1.03, y: -6 }} transition={{ duration: 0.2 }}
            className="glass p-6 card-hover flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-xl">{it.title}</h3>
              <p className="mt-2 text-white/80">{it.desc}</p>
            </div>
            <a href="#portfolio" className="mt-6 inline-block underline hover:text-accent2">See examples →</a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
