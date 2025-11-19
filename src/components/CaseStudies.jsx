import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function CaseStudies() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const yLeft = useTransform(scrollYProgress, [0, 1], [40, -40])
  const yRight = useTransform(scrollYProgress, [0, 1], [-20, 60])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return (
    <section ref={ref} className="relative py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-[#262626]">Кейсы</h2>
          <p className="mt-3 text-neutral-600">Подход к продукту, похожий на топовые студии</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.article style={{ y: yLeft, opacity }} className="group relative overflow-hidden rounded-3xl border border-neutral-200 shadow-sm bg-white">
            <div className="absolute inset-0 bg-gradient-to-t from-[#262626]/10 via-transparent to-transparent pointer-events-none" />
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 120, damping: 12 }} className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop')" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#262626]">B2B платформа</h3>
              <p className="mt-2 text-neutral-600">Скоростной сайт с CRM-интеграцией, рост конверсии на 38%.</p>
              <div className="mt-4 inline-flex items-center text-[#b65252] font-medium">Смотреть проект →</div>
            </div>
          </motion.article>

          <motion.article style={{ y: yRight, opacity }} className="group relative overflow-hidden rounded-3xl border border-neutral-200 shadow-sm bg-white">
            <div className="absolute inset-0 bg-gradient-to-t from-[#262626]/10 via-transparent to-transparent pointer-events-none" />
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 120, damping: 12 }} className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop')" }} />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#262626]">E-commerce</h3>
              <p className="mt-2 text-neutral-600">Редизайн каталога, улучшение CLS, рост выручки на 24%.</p>
              <div className="mt-4 inline-flex items-center text-[#b65252] font-medium">Смотреть проект →</div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
