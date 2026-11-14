import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { motion, useScroll, useSpring } from 'framer-motion'
import Loader from './components/Loader.jsx'
import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Arsenal from './components/Arsenal.jsx'
import Projects from './components/Projects.jsx'
import Timeline from './components/Timeline.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const { scrollYProgress } = useScroll()
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })

  useEffect(() => {
    document.body.style.overflow = loaded ? '' : 'hidden'
  }, [loaded])

  // smooth scroll (skipped when the visitor prefers reduced motion)
  useEffect(() => {
    if (!loaded || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: 0.09 })
    window.__lenis = lenis
    let id
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf) }
    id = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(id); lenis.destroy(); window.__lenis = null }
  }, [loaded])

  return (
    <div className="grain">
      <Cursor />
      <Loader onDone={() => setLoaded(true)} />
      <motion.div style={{ scaleX: bar }} className="fixed left-0 top-0 z-[70] h-[2px] w-full origin-left bg-blade" />
      <Nav />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: loaded ? 1 : 0 }} transition={{ duration: 0.8 }}>
        <Hero ready={loaded} />
        <Services />
        <Arsenal />
        <Projects />
        <Timeline />
        <Contact />
      </motion.main>
    </div>
  )
}
