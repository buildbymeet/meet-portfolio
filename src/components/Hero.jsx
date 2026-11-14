import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Database, Server, Sparkles } from 'lucide-react'
import { profile } from '../data.js'
import { scrollTo } from './ui.jsx'

function useTypewriter(words, active) {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)
  useEffect(() => {
    if (!active) return
    const word = words[i % words.length]
    const t = setTimeout(() => {
      if (!del) {
        setText(word.slice(0, text.length + 1))
        if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1300)
      } else {
        setText(word.slice(0, text.length - 1))
        if (text.length - 1 === 0) { setDel(false); setI(i + 1) }
      }
    }, del ? 35 : 80)
    return () => clearTimeout(t)
  }, [text, del, i, words, active])
  return text
}

const Line = ({ children, delay, ready, className = '' }) => (
  <span className="block overflow-hidden pb-[0.1em]">
    <motion.span className={`block ${className}`} initial={{ y: '110%' }} animate={{ y: ready ? 0 : '110%' }} transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.span>
  </span>
)

const Float = ({ className, y, children }) => (
  <motion.div style={{ y }} className={`glass absolute hidden rounded-2xl p-4 shadow-2xl xl:block ${className}`}>
    <div className="floaty">{children}</div>
  </motion.div>
)

export default function Hero({ ready }) {
  const role = useTypewriter(profile.roles, ready)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 800], [0, -120])
  const y2 = useTransform(scrollY, [0, 800], [0, -60])
  const y3 = useTransform(scrollY, [0, 800], [0, -170])

  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-28">
      {/* aurora background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="aurora -left-[10%] top-[5%] h-[45vw] w-[45vw] bg-cyan-500" style={{ animation: 'drift1 18s ease-in-out infinite' }} />
        <div className="aurora -right-[8%] top-[10%] h-[40vw] w-[40vw] bg-violet-600" style={{ animation: 'drift2 22s ease-in-out infinite' }} />
        <div className="aurora bottom-[-15%] left-[30%] h-[35vw] w-[35vw] bg-amber-400" style={{ animation: 'drift3 26s ease-in-out infinite', opacity: 0.25 }} />
        <div className="hero-grid absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
        <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2">
          <div className="orbit h-[34rem] w-[34rem] rounded-full border border-white/[0.07] md:h-[52rem] md:w-[52rem]"><span className="absolute -top-1.5 left-1/2 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_#22d3ee]" /></div>
          <div className="orbit-rev absolute inset-10 rounded-full border border-dashed border-white/[0.07] md:inset-20"><span className="absolute -bottom-1.5 left-1/2 h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_20px_#8b5cf6]" /></div>
        </div>
      </div>

      {/* floating glass cards */}
      <Float y={y1} className="left-[4%] top-[66%] w-52">
        <p className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-zinc-400"><Server size={14} className="text-cyan-300" /> api / status</p>
        <p className="font-mono text-xs leading-relaxed text-zinc-300"><span className="text-violet-300">GET</span> /api/sales<br /><span className="text-emerald-300">200 OK</span> · 18ms</p>
      </Float>
      <Float y={y2} className="right-[4%] top-[15%] w-52">
        <p className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-zinc-400"><Sparkles size={14} className="text-amber-300" /> shipped</p>
        <p className="font-display text-xl font-extrabold text-white">ERP<span className="text-cyan-300">+</span>Billing</p>
        <p className="text-xs text-zinc-400">for real shops</p>
      </Float>
      <Float y={y3} className="bottom-[10%] right-[4%] w-52">
        <p className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-zinc-400"><Database size={14} className="text-violet-300" /> database</p>
        <p className="font-mono text-xs text-zinc-300">PostgreSQL · Redis<br /><span className="text-zinc-500">28 tables, indexed</span></p>
      </Float>

      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: ready ? 1 : 0, y: 0 }} transition={{ delay: 0.3 }}
        className="glass relative z-10 mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.25em] text-zinc-300">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Available for new projects
      </motion.p>

      <h1 className="relative z-10 text-center font-display text-[17vw] font-extrabold uppercase leading-[0.88] tracking-tight text-white md:text-[8.5rem]">
        <Line delay={0.2} ready={ready}>Build by</Line>
        <Line delay={0.4} ready={ready} className="grad-text">Meet</Line>
      </h1>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: ready ? 1 : 0 }} transition={{ delay: 0.9 }} className="relative z-10 mt-6 text-center text-sm uppercase tracking-[0.3em] text-zinc-400">
        {profile.name} &nbsp;·&nbsp; {profile.location}
      </motion.p>

      <p className="relative z-10 mt-5 h-8 text-center font-mono text-lg text-zinc-200 md:text-2xl">
        <span className="text-zinc-500">{'< '}</span>{role}<span className="caret text-cyan-300">|</span><span className="text-zinc-500">{' />'}</span>
      </p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: ready ? 1 : 0, y: 0 }} transition={{ delay: 1.1 }} className="relative z-10 mt-10 flex flex-wrap justify-center gap-4">
        <a href="#work" onClick={(e) => { e.preventDefault(); scrollTo('#work') }} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-4 text-sm font-bold uppercase tracking-widest text-ink transition hover:gap-4 hover:shadow-[0_0_40px_rgba(34,211,238,.45)]">
          View my work <ArrowUpRight size={18} />
        </a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }} className="glass inline-flex items-center rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:border-cyan-300/60">
          Let&apos;s talk
        </a>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-zinc-500">
        Scroll
        <span className="relative block h-12 w-px overflow-hidden bg-white/15">
          <motion.span className="absolute left-0 top-0 block h-5 w-px bg-cyan-300" animate={{ y: [-20, 48] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }} />
        </span>
      </div>
    </section>
  )
}
