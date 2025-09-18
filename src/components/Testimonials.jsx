
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const t = [
  { name: 'Client A', text: 'Adil captured the vibe perfectly. Fast, professional, cinematic.' },
  { name: 'Client B', text: 'Editing was on point — the neon look made our product pop.' },
  { name: 'Client C', text: 'Super smooth process and great attention to detail.' },
]

export default function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-24">
      <h2 className="font-heading text-3xl md:text-4xl mb-8">Testimonials</h2>
      <div className="glass p-6">
        <Swiper modules={[Autoplay]} loop slidesPerView={1.1} spaceBetween={24}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{ 640:{slidesPerView:1.2}, 768:{slidesPerView:2}, 1024:{slidesPerView:3} }}
        >
          {t.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="p-6 rounded-xl border border-white/10 bg-black/30 h-full">
                <p className="text-white/90">{item.text}</p>
                <div className="mt-4 text-white/60 text-sm">— {item.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
