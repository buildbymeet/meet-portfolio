import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data.js'
import { Glass, Reveal, SectionTitle } from './ui.jsx'

export default function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-5 py-28 md:py-40">
      <SectionTitle kanji="03" eyebrow="Selected work" title="Projects" />
      <div className="space-y-8">
        {projects.map((p) => (
          <Reveal key={p.no}>
            <Glass>
              <div className="grid md:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img src={p.image} alt={`${p.title} preview`} loading="lazy" className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 md:h-full md:min-h-[22rem]" />
                  <span className="absolute left-5 top-5 font-display text-5xl font-extrabold text-white/90">{p.no}</span>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <p className="mb-3 text-xs uppercase tracking-[0.3em] text-blade">{p.category}</p>
                  <h3 className="mb-4 font-display text-4xl font-extrabold uppercase text-white md:text-5xl">{p.title}</h3>
                  <p className="mb-6 leading-relaxed text-zinc-400">{p.text}</p>
                  <ul className="mb-8 flex flex-wrap gap-2">
                    {p.tags.map((t) => <li key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">{t}</li>)}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <a href={p.demo || p.link} className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-bold uppercase tracking-widest text-ink transition hover:gap-4 hover:shadow-[0_0_30px_rgba(34,211,238,.5)]">
                      {p.demo ? 'Watch Demo' : 'Discover Case'} <ArrowUpRight size={18} />
                    </a>
                    {p.demo && p.link && p.link !== '#' && (
                      <a href={p.link} target="_blank" rel="noreferrer" className="glass inline-flex w-fit items-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:border-cyan-300/60">GitHub</a>
                    )}
                  </div>
                </div>
              </div>
            </Glass>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
