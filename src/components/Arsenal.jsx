import { skillGroups, stackRow1, stackRow2 } from '../data.js'
import { Glass, Reveal, SectionTitle } from './ui.jsx'

function Row({ items, cls }) {
  const list = [...items, ...items]
  return (
    <div className="marquee-wrap overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div className={`flex w-max gap-4 ${cls}`}>
        {list.map(([label, slug], i) => (
          <div key={i} className="glass flex items-center gap-3 rounded-full px-6 py-3 text-sm text-zinc-200 transition hover:border-blade/60">
            <img src={`https://cdn.simpleicons.org/${slug}/ffffff`} alt="" width="22" height="22" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} className="h-[22px] w-[22px]" />
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Arsenal() {
  return (
    <section id="arsenal" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-5"><SectionTitle kanji="02" eyebrow="Tech stack" title="The Arsenal" /></div>
      <Row items={stackRow1} cls="marquee-l" />
      <Row items={stackRow2} cls="marquee-r" />

      <div className="mx-auto mt-20 grid max-w-6xl gap-5 px-5 md:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.1}>
            <Glass className="h-full p-7">
              <h3 className="mb-5 flex items-center gap-3 font-display text-lg font-extrabold uppercase text-white"><span className="h-2 w-2 rounded-full bg-blade shadow-[0_0_10px_#22d3ee]" />{g.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((it) => <li key={it} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300">{it}</li>)}
              </ul>
            </Glass>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
