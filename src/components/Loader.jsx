import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const words = ['BOOTING UP', 'COMPILING IDEAS', 'DEPLOYING PIXELS', 'WELCOME']

export default function Loader({ onDone }) {
  const [n, setN] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    let v = 0
    const t = setInterval(() => {
      v = Math.min(100, v + Math.ceil(Math.random() * 6))
      setN(v)
      if (v >= 100) {
        clearInterval(t)
        setTimeout(() => { setGone(true); onDone() }, 450)
      }
    }, 55)
    return () => clearInterval(t)
  }, [onDone])

  const label = words[Math.min(words.length - 1, Math.floor(n / 26))]

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div className="fixed inset-0 z-[80] flex flex-col justify-between bg-ink p-6 md:p-12" exit={{ y: '-100%' }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}>
          <div className="flex justify-between text-xs uppercase tracking-[0.3em] text-zinc-500">
            <span>Portfolio / 2026</span>
            <span className="text-blade">BuildByMeet</span>
          </div>
          <span aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[24rem] font-extrabold leading-none text-white/[0.03]">&lt;/&gt;</span>
          <div className="relative">
            <p className="mb-2 text-xs uppercase tracking-[0.35em] text-zinc-400">{label}<span className="caret">_</span></p>
            <div className="flex items-end justify-between">
              <span className="font-display text-[26vw] font-extrabold leading-[0.8] text-white md:text-[16rem]">{String(n).padStart(2, '0')}<span className="text-blade">%</span></span>
              <span className="mb-3 hidden text-sm uppercase tracking-[0.3em] text-white/50 md:block">Loading experience</span>
            </div>
            <div className="mt-6 h-px w-full bg-white/10">
              <div className="h-px bg-blade shadow-[0_0_12px_#22d3ee]" style={{ width: `${n}%` }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
