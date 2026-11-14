import { motion } from 'framer-motion'
import { useRef } from 'react'

export const scrollTo = (target) => {
  if (window.__lenis) window.__lenis.scrollTo(target, { offset: -20 })
  else document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
}

export function Reveal({ children, delay = 0, y = 40, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionTitle({ kanji, eyebrow, title }) {
  return (
    <div className="relative mb-14 md:mb-20">
      <span aria-hidden className="pointer-events-none absolute -top-10 right-0 select-none font-display text-[9rem] font-extrabold leading-none text-white/[0.035] md:text-[13rem]">
        {kanji}
      </span>
      <Reveal>
        <p className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-blade">
          <span className="h-px w-10 bg-blade" /> {eyebrow}
        </p>
        <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] text-white md:text-7xl">{title}</h2>
      </Reveal>
    </div>
  )
}

// glass card with a red spotlight that follows the mouse
export function Glass({ children, className = '' }) {
  const ref = useRef(null)
  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--x', `${e.clientX - r.left}px`)
    ref.current.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  return (
    <div
      ref={ref}
      onMouseMove={move}
      className={`glass group relative overflow-hidden rounded-2xl transition-colors duration-500 hover:border-blade/50 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: 'radial-gradient(380px circle at var(--x,50%) var(--y,50%), rgba(34,211,238,.16), transparent 60%)' }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
