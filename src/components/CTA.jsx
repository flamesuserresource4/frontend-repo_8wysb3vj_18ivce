import React from 'react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-white">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-black text-[#262626]">Готовы включить скорость?</h2>
        <p className="mt-4 text-neutral-600">Расскажите о своей задаче — предложим быстрый план запуска в течение 24 часов.</p>
        <form onSubmit={(e)=>e.preventDefault()} className="mt-8 grid sm:grid-cols-2 gap-3">
          <input required placeholder="Имя" className="h-12 px-4 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#b65252]/30" />
          <input required type="email" placeholder="Email" className="h-12 px-4 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#b65252]/30" />
          <input required placeholder="Компания / проект" className="sm:col-span-2 h-12 px-4 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#b65252]/30" />
          <textarea rows={4} placeholder="Коротко о задаче" className="sm:col-span-2 p-4 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#b65252]/30" />
          <button className="sm:col-span-2 mt-2 h-12 rounded-xl bg-[#b65252] text-white font-semibold shadow-sm hover:shadow-md transition-shadow">Получить план</button>
        </form>
        <div className="mt-6 text-sm text-neutral-500">Мы отвечаем быстро. Среднее время — 3 часа.</div>
      </div>
    </section>
  )
}
