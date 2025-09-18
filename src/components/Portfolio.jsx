import React, { useMemo, useState, Suspense } from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import data from "../data/projects"

const Lightbox = React.lazy(() => import("./VideoLightbox"))

// Filters in desired order
const filters = ["Instagram Reels", "YouTube", "Client Ads", "Personal Projects"]

// Helper: extract YouTube video ID
function getYouTubeId(url) {
  try {
    const parsed = new URL(url)
    if (parsed.hostname === "youtu.be") return parsed.pathname.slice(1)
    if (parsed.searchParams.has("v")) return parsed.searchParams.get("v")
    const paths = parsed.pathname.split("/")
    const last = paths[paths.length - 1]
    if (last.length === 11) return last
  } catch {}
  return null
}

export default function Portfolio() {
  const [active, setActive] = useState(filters[0])
  const projects = useMemo(() => data[active] || [], [active])
  const [modal, setModal] = useState({ open: false, project: null })

  return (
    <section id="portfolio" className="container mx-auto px-4 py-24">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-2 rounded-full border card-hover ${
              active === f
                ? "btn-gradient text-cinematic font-semibold"
                : "border-white/15 hover:shadow-glow"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Swiper projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Swiper
          modules={[Autoplay]}
          loop
          spaceBetween={24}
          slidesPerView={1.2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={600}
          breakpoints={{
            640: { slidesPerView: 1.6 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((p) => {
            const ytId = p.type === "youtube" ? getYouTubeId(p.url) : null
            const thumb = ytId
              ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`
              : p.thumb

            return (
              <SwiperSlide key={p.id}>
                <button
                  onClick={() => setModal({ open: true, project: p })}
                  className="block w-full"
                >
                  <img
                    src={thumb}
                    alt={p.title}
                    loading="lazy"
                    className="w-full rounded-xl border border-white/10"
                  />
                  <div className="mt-2 text-left">
                    <div className="font-semibold">{p.title}</div>
                    <div className="text-sm text-white/70">{p.caption}</div>
                  </div>
                </button>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </motion.div>

      {/* Lazy-loaded Lightbox */}
      <Suspense fallback={null}>
        {modal.open && (
          <Lightbox
            project={modal.project}
            onClose={() => setModal({ open: false, project: null })}
          />
        )}
      </Suspense>
    </section>
  )
}
