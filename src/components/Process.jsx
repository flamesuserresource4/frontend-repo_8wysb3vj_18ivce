import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { n: '01', title: 'Диагностика', text: 'Понимаем цель, аудиторию и KPI. Быстрый созвон и чек-лист.' },
  { n: '02', title: 'Дизайн-спринт', text: 'От прототипов к UI с анимациями. Всё наглядно и быстро.' },
  { n: '03', title: 'Разработка', text: 'Вёрстка, интеграции, адаптив. Прозрачный трекинг задач.' },
  { n: '04', title: 'Запуск', text: 'Оптимизация скорости, SEO-минимум, релиз и поддержка.' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-[#262626]">Как мы работаем</h2>
          <p className="mt-3 text-neutral-600">Минимум бюрократии — максимум скорости</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm overflow-hidden"
            >
              <div className="absolute -inset-1 opacity-0 hover:opacity-100 transition-opacity bg-[radial-gradient(400px_160px_at_20%_20%,rgba(182,82,82,0.10),transparent),radial-gradient(400px_160px_at_80%_80%,rgba(38,38,38,0.05),transparent)]" />
              <div className="relative">
                <div className="text-sm font-mono text-neutral-400">{s.n}</div>
                <h3 className="mt-1 font-semibold text-[#262626]">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
