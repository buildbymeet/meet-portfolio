import { Code2, Smartphone, Layers, Gauge } from 'lucide-react'
import { services } from '../data.js'
import { Glass, Reveal, SectionTitle } from './ui.jsx'

const icons = { code: Code2, phone: Smartphone, layers: Layers, gauge: Gauge }

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-5 py-28 md:py-40">
      <SectionTitle kanji="01" eyebrow="What I do" title="Services" />
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((s, i) => {
          const Icon = icons[s.icon]
          return (
            <Reveal key={s.title} delay={(i % 2) * 0.12}>
              <Glass className="h-full p-8 md:p-10">
                <div className="mb-10 flex items-start justify-between">
                  <span className="font-display text-6xl font-extrabold stroke-text transition group-hover:text-blade/80">{String(i + 1).padStart(2, '0')}</span>
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-blade transition group-hover:bg-blade group-hover:text-white"><Icon size={22} /></span>
                </div>
                <h3 className="mb-3 font-display text-2xl font-extrabold uppercase text-white">{s.title}</h3>
                <p className="leading-relaxed text-zinc-400">{s.text}</p>
              </Glass>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
