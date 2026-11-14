import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data.js'
import { Reveal } from './ui.jsx'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 pb-10 pt-28 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(34,211,238,.25),transparent_60%)]" />
      <span aria-hidden className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 select-none font-display text-[26rem] font-extrabold leading-none text-white/[0.03]">@</span>
      <div className="relative mx-auto max-w-6xl text-center">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-blade">Contact</p>
          <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.95] text-white md:text-8xl">
            Let&apos;s create<br /><span className="grad-text">something bold</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <a href={`mailto:${profile.email}`} className="mt-12 inline-flex items-center gap-3 break-all rounded-full border border-white/15 px-6 py-4 text-base text-white transition hover:border-blade hover:bg-blade/10 hover:shadow-[0_0_40px_rgba(34,211,238,.35)] md:text-2xl">
            <Mail className="shrink-0 text-blade" /> {profile.email}
          </a>
          <p className="mx-auto mt-8 max-w-lg text-zinc-400">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open for new projects: ERP, billing, web apps and websites for any kind of business. Based in {profile.location}.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            {profile.github && <a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:border-blade hover:text-blade"><Github size={20} /></a>}
            {profile.instagram && <a aria-label="Instagram" href={profile.instagram} target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:border-blade hover:text-blade"><Instagram size={20} /></a>}
            {profile.linkedin && <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:border-blade hover:text-blade"><Linkedin size={20} /></a>}
          </div>
        </Reveal>
        <footer className="mt-28 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.25em] text-zinc-500 md:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="text-blade">BuildByMeet</span>
          <span>Designed &amp; built in {profile.location.split(',')[0]}</span>
        </footer>
      </div>
    </section>
  )
}
