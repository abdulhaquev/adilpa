
import React from 'react'
import { motion } from 'framer-motion'
import bw from '../assets/bw-placeholder.png'

const skills = ['Cinematography', 'Color Grading', 'Video Editing', 'Motion Graphics', 'Sound Design', 'Lighting']
const tools = ['DaVinci Resolve', 'Premiere Pro', 'After Effects', 'Cinema4D', 'Audition']

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="relative overflow-hidden rounded-2xl shadow-lg card-hover">
            <img src={bw} alt="Adil PA black and white portrait" className="w-full h-[520px] object-cover" loading="lazy"/>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass p-8">
          <h2 className="font-heading text-3xl md:text-4xl">About Adil PA</h2>
          <p className="mt-3 text-white/80">Founder & Lead Videographer at <strong>Lume Productions</strong>. I create cinematic stories with a neon aesthetic and emotional rhythm.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map(s => (
              <span key={s} className="px-4 py-2 rounded-full border border-white/15 hover:shadow-glow transition">{s}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 items-center">
            {tools.map(t => (
              <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
