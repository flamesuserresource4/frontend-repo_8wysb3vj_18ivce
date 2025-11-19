import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b65252]/40 rounded"><Logo size="text-xl sm:text-2xl" /></a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#262626]">
            <a href="#services" className="hover:text-[#b65252] transition-colors">Услуги</a>
            <a href="#work" className="hover:text-[#b65252] transition-colors">Проекты</a>
            <a href="#process" className="hover:text-[#b65252] transition-colors">Процесс</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-[#b65252] text-white shadow-sm hover:shadow-md transition-shadow">Связаться</a>
          </nav>

          <button
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 text-[#262626] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b65252]/40"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-2 text-[#262626] text-sm">
            <a onClick={() => setOpen(false)} href="#services" className="py-2">Услуги</a>
            <a onClick={() => setOpen(false)} href="#work" className="py-2">Проекты</a>
            <a onClick={() => setOpen(false)} href="#process" className="py-2">Процесс</a>
            <a onClick={() => setOpen(false)} href="#contact" className="mt-2 inline-flex justify-center px-4 py-2 rounded-full bg-[#b65252] text-white">Связаться</a>
          </div>
        </div>
      )}
    </header>
  )
}
