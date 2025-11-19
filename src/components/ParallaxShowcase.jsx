import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 90])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section ref={ref} id="work" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y: y3 }} className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-[#b65252]/10 blur-3xl" />
        <motion.div style={{ y: y2 }} className="absolute top-1/2 -right-16 w-72 h-72 rounded-full bg-neutral-200/60 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-[#262626]">Проекты со скоростью TSA</h2>
          <p className="mt-3 text-neutral-600">Параллакс-галерея демонстрирует наш ритм и динамику</p>
        </div>

        <div className="relative grid lg:grid-cols-3 gap-6">
          <motion.div style={{ y: y1 }} className="h-80 rounded-2xl bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center shadow-lg border border-neutral-200" />
          <motion.div style={{ y: y2 }} className="h-96 rounded-2xl bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center shadow-lg border border-neutral-200" />
          <motion.div style={{ y: y3 }} className="h-80 rounded-2xl bg-[url('https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center shadow-lg border border-neutral-200" />
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#262627] text-white font-semibold shadow-sm hover:shadow-md transition-shadow">
            Заказать подобный проект
          </a>
        </div>
      </div>
    </section>
  )
}
