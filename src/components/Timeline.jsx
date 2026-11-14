import { education, experience } from '../data.js'
import { Glass, Reveal, SectionTitle } from './ui.jsx'

function Column({ title, kanji, items }) {
  return (
    <div>
      <h3 className="mb-8 flex items-center gap-3 font-display text-2xl font-extrabold uppercase text-white"><span className="font-jp text-blade">{kanji}</span>{title}</h3>
      <div className="relative space-y-6 border-l border-white/10 pl-8">
        {items.map((it, i) => (
          <Reveal key={it.place} delay={i * 0.1}>
            <div className="relative">
              <span className="absolute -left-[37px] top-6 h-3 w-3 rounded-full bg-blade shadow-[0_0_14px_#22d3ee]" />
              <Glass className="p-6">
                <p className="mb-1 text-xs uppercase tracking-[0.25em] text-blade">{it.date}</p>
                <h4 className="font-display text-xl font-extrabold text-white">{it.place}</h4>
                <p className="mb-3 text-sm text-zinc-300">{it.role}</p>
                <p className="text-sm leading-relaxed text-zinc-400">{it.text}</p>
              </Glass>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="journey" className="relative mx-auto max-w-6xl px-5 py-28 md:py-40">
      <SectionTitle kanji="04" eyebrow="The path so far" title="Experience & Education" />
      <div className="grid gap-14 md:grid-cols-2">
        <Column title="Experience" kanji="▸" items={experience} />
        <Column title="Education" kanji="▸" items={education} />
      </div>
    </section>
  )
}
