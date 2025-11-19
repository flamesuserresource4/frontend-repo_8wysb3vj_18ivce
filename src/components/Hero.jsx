import React, { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const rightY = useTransform(scrollYProgress, [0, 1], [0, -40])
  const veilOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.25])

  return (
    <section ref={ref} className="relative min-h-[88vh] pt-24 overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Clean veil to keep background subtle, no texts */}
      <motion.div style={{ opacity: veilOpacity }} className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/95 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16">
          <motion.div style={{ y: titleY }}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
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
          </motion.div>

          <motion.div style={{ y: rightY }} className="relative hidden lg:block">
            <div className="absolute -inset-8 bg-gradient-to-tr from-[#b65252]/15 to-transparent rounded-3xl blur-2xl" />
            <div className="relative aspect-[4/3] rounded-3xl border border-neutral-200 bg-white/80 backdrop-blur p-6 shadow-xl">
              <div className="h-full w-full rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(182,82,82,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(38,38,38,0.08),transparent_30%)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
