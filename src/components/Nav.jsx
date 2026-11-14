import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { scrollTo } from './ui.jsx'

const links = [
  ['#services', 'Services', '01'],
  ['#arsenal', 'Arsenal', '02'],
  ['#work', 'Work', '03'],
  ['#journey', 'Journey', '04'],
  ['#contact', 'Contact', '05'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const go = (e, h) => { e.preventDefault(); setOpen(false); scrollTo(h) }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3">
        <a href="#top" onClick={(e) => go(e, 'body')} className="flex items-center gap-2 font-display text-sm font-extrabold tracking-wide text-white">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-xs font-black text-ink">&lt;/&gt;</span> BUILDBYMEET
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(([h, l, k]) => (
            <li key={h}>
              <a href={h} onClick={(e) => go(e, h)} className="group relative text-xs uppercase tracking-[0.2em] text-zinc-400 transition hover:text-white">
                {l}<span className="absolute -top-3 left-1/2 -translate-x-1/2 font-jp text-[10px] text-blade opacity-0 transition group-hover:opacity-100">{k}</span>
              </a>
            </li>
          ))}
        </ul>
        <button className="text-white md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-6 md:hidden">
            {links.map(([h, l, k]) => (
              <li key={h}><a href={h} onClick={(e) => go(e, h)} className="flex items-center justify-between border-b border-white/5 py-3 text-sm uppercase tracking-widest text-zinc-300">{l}<span className="font-jp text-blade">{k}</span></a></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
