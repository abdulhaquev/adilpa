import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import poster from "../assets/hero-poster.jpg"
import heroVideo from "../assets/hero-video.mp4" // 🎥 Add your video file here

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const v = el.querySelector("video")
    if (v) {
      v.play().catch(() => {})
    }
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[80vh] grid place-items-center overflow-hidden"
    >
      {/* 🎥 Background video */}
      <video
        src={heroVideo}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"
        aria-hidden="true"
      />

      {/* Center content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-4 p-4 text-center relative z-10"
      >
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl gradient-text">
          Adil PA
        </h1>
        <p className="mt-3 text-white/80">
          Videographer & Video Editor @{" "}
          <span className="font-semibold">Lume Productions</span>
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#showreel"
            className="btn-gradient px-6 py-3 rounded-xl text-cinematic font-semibold hover:scale-105 transition"
          >
            Watch Reel
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-white/20 hover:shadow-glow transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Social links on left side */}
      <div className="hidden md:flex flex-col gap-3 absolute left-6 top-1/2 -translate-y-1/2 z-10">
        <a
          className="glass p-2"
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          IG
        </a>
        <a
          className="glass p-2"
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube"
        >
          YT
        </a>
        <a
          className="glass p-2"
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          IN
        </a>
      </div>
    </section>
  )
}
