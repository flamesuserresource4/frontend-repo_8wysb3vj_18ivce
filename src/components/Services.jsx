import React from 'react'
import { Rocket, Sparkles, GaugeCircle, Wand2 } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'Запуск за 7-21 дней',
    desc: 'От идеи до релиза — быстро, прозрачно и без потери качества.'
  },
  {
    icon: GaugeCircle,
    title: 'Скоростные интерфейсы',
    desc: 'Молниеносная загрузка, анимации и оптимизация производительности.'
  },
  {
    icon: Sparkles,
    title: 'Айдентика и визуал',
    desc: 'Цельный визуальный стиль, который запоминается и усиливает бренд.'
  },
  {
    icon: Wand2,
    title: 'No-code/Low-code',
    desc: 'Соберём MVP без перегруза — рационально и эффективно.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-[#b65252]/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-[#262626]">Что мы делаем</h2>
          <p className="mt-3 text-neutral-600">Ударный набор услуг для быстрого роста</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 bg-[radial-gradient(300px_120px_at_20%_20%,rgba(182,82,82,0.12),transparent),radial-gradient(300px_120px_at_80%_80%,rgba(38,38,38,0.06),transparent)] transition-opacity" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-[#b65252]/10 text-[#b65252] flex items-center justify-center mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-[#262626] mb-1">{title}</h3>
                <p className="text-sm text-neutral-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
