
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import brands from '../data/brands'

export default function Brands() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="glass p-6">
        <Swiper modules={[Autoplay]} loop slidesPerView={3} spaceBetween={24}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          breakpoints={{ 640:{slidesPerView:4}, 768:{slidesPerView:5}, 1024:{slidesPerView:6} }}
        >
          {brands.map((b,i) => (
            <SwiperSlide key={i}>
              <div className="h-16 w-full grid place-items-center">
                <img src={b.src} alt={b.alt} loading="lazy" className="h-12 object-contain opacity-80 hover:opacity-100 transition" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
