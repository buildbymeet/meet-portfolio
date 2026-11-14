import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 160, damping: 18, mass: 0.4 })
  const ry = useSpring(y, { stiffness: 160, damping: 18, mass: 0.4 })
  const [big, setBig] = useState(false)
  const [fine] = useState(() => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches)

  useEffect(() => {
    if (!fine) return
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setBig(!!e.target.closest?.('a, button, [data-cursor]'))
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [fine, x, y])

  if (!fine) return null
  return (
    <>
      <motion.div style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[90] -ml-1 -mt-1 h-2 w-2 rounded-full bg-blade" />
      <motion.div
        style={{ x: rx, y: ry }}
        animate={{ scale: big ? 1.8 : 1 }}
        className="pointer-events-none fixed left-0 top-0 z-[90] -ml-5 -mt-5 h-10 w-10 rounded-full border border-blade/70 mix-blend-difference"
      />
    </>
  )
}
