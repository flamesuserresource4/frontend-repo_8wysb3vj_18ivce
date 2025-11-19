import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] pt-24 overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Light gradient veil to match white theme while keeping interactivity */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/95 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl font-black leading-tight text-[#262626]"
            >
              Скорость. Стиль. <span className="text-[#b65252]">Agency</span>.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
              className="mt-6 text-neutral-600 text-lg"
            >
              Tsebulenko Agency (TSA) — веб-студия нового поколения. Мы создаём сайты и продукты с акцентом на скорость и современность.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#contact" className="px-6 py-3 rounded-full bg-[#b65252] text-white font-semibold shadow-sm hover:shadow-md transition-shadow">Запустить проект</a>
              <a href="#work" className="px-6 py-3 rounded-full border border-neutral-200 text-[#262626] font-semibold hover:border-[#b65252] transition-colors">Портфолио</a>
            </motion.div>

            <div className="mt-10 flex items-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#b65252]"/>В разработке от 7 дней</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-neutral-400"/>Фиксированные сроки</div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-8 bg-gradient-to-tr from-[#b65252]/15 to-transparent rounded-3xl blur-2xl" />
            <div className="relative aspect-[4/3] rounded-3xl border border-neutral-200 bg-white/80 backdrop-blur p-6 shadow-xl">
              <div className="h-full w-full rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(182,82,82,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(38,38,38,0.08),transparent_30%)]" />
              <div className="absolute -top-6 -right-6 bg-white border border-neutral-200 shadow-lg px-4 py-2 rounded-full text-sm text-[#262626]"><span className="text-[#b65252] font-semibold">TSA</span> turbo</div>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax floating badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="pointer-events-none"
      >
        <motion.div
          className="hidden md:block absolute top-24 right-8"
          style={{ perspective: 1000 }}
          animate={{ y: [0, -12, 0], rotateZ: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="px-4 py-2 rounded-full bg-white shadow-lg border border-neutral-200 text-sm text-[#262626]"><span className="text-[#b65252] font-semibold">99</span> Lighthouse</div>
        </motion.div>
        <motion.div
          className="absolute bottom-24 left-8"
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="px-4 py-2 rounded-full bg-white shadow-lg border border-neutral-200 text-sm text-[#262626]">Realtime <span className="text-[#b65252]">UX</span></div>
        </motion.div>
      </motion.div>
    </section>
  )
}
