import { motion } from 'framer-motion'
import {
  ArrowLeft, ArrowUpRight, BadgeCheck, Barcode, Coins, FileSpreadsheet, Gem, Lock, Receipt, ShoppingCart, Users, Wallet,
} from 'lucide-react'
import Cursor from './components/Cursor.jsx'
import { Glass, Reveal, SectionTitle } from './components/ui.jsx'
import { profile } from './data.js'

const features = [
  { icon: Coins, title: 'Daily metal rates', text: 'Set the gold and silver rate once a day. Every invoice picks it up automatically.' },
  { icon: Barcode, title: 'Barcode and HUID stock', text: 'Track every piece by barcode and HUID with gross, net and fine weight, purity and location.' },
  { icon: Receipt, title: 'GST sales invoices', text: 'Metal, labour, other material and hallmark charges, discount, GST, old metal and advance in one bill.' },
  { icon: ShoppingCart, title: 'Purchases and suppliers', text: 'Record purchases from suppliers and see stock update right away.' },
  { icon: Users, title: 'Customers and loyalty', text: 'PAN and GST are filled in automatically on invoices, with loyalty points per customer.' },
  { icon: Wallet, title: 'Payments and dues', text: 'Cash, card, online and cheque payments, balance due and reminder dates.' },
  { icon: FileSpreadsheet, title: 'Excel import and CSV export', text: 'Move old sales data in from Excel and export invoice lists to CSV.' },
  { icon: Lock, title: 'Secure by design', text: 'JWT login, role-based access, transactional saves so stock is never double-sold.' },
]

const shots = [
  ['dashboard', 'Dashboard', "Today's sales, stock pieces and live gold rate."],
  ['stock', 'Stock', 'Every piece with barcode, weights, purity and value.'],
  ['sales', 'Sales invoices', 'Filter by date and customer, sort and export.'],
  ['invoice', 'Invoice detail', 'Item lines with rate, labour and hallmark.'],
  ['invoice-payments', 'Totals and dues', 'Discount, GST, advance, payments and balance.'],
  ['customers', 'Customers', 'PAN, GST and loyalty points.'],
]

const stack = ['Java 17', 'Spring Boot 3', 'React 18', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'Flyway', 'Docker']

function BrowserFrame({ src, alt }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-panel shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <img src={src} alt={alt} loading="lazy" className="w-full" />
    </div>
  )
}

export default function ErpApp() {
  return (
    <div className="grain">
      <Cursor />

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
        <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3">
          <a href="./index.html" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-300 transition hover:text-white"><ArrowLeft size={16} /> Portfolio</a>
          <span className="hidden font-display text-sm font-extrabold tracking-wide text-white sm:block">BUILDBYMEET</span>
          <a href={`mailto:${profile.email}`} className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink">Get a demo</a>
        </nav>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-36 md:pt-44">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="aurora -left-[10%] top-0 h-[40vw] w-[40vw] bg-cyan-500" style={{ animation: 'drift1 18s ease-in-out infinite' }} />
          <div className="aurora -right-[8%] top-[10%] h-[36vw] w-[36vw] bg-violet-600" style={{ animation: 'drift2 22s ease-in-out infinite' }} />
          <div className="aurora left-[35%] top-[30%] h-[28vw] w-[28vw] bg-amber-400" style={{ animation: 'drift3 26s ease-in-out infinite', opacity: 0.18 }} />
          <div className="hero-grid absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
        </div>
        <div className="relative mx-auto max-w-6xl text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.25em] text-zinc-300">
            <Gem size={14} className="text-amber-300" /> Software for jewellery shops
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="font-display text-5xl font-extrabold uppercase leading-[0.95] text-white md:text-8xl">
            Run your jewellery shop<br /><span className="grad-text">from one screen</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
            Daily gold and silver rates, barcode stock, GST invoices, customers, purchases and payments. One fast, secure ERP made for how jewellers really work.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#demo" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-4 text-sm font-bold uppercase tracking-widest text-ink transition hover:gap-4">Watch the demo <ArrowUpRight size={18} /></a>
            <a href={`mailto:${profile.email}?subject=Jewellery%20ERP%20demo`} className="glass inline-flex items-center rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:border-cyan-300/60">Book a free walkthrough</a>
          </motion.div>
        </div>
      </section>

      {/* video */}
      <section id="demo" className="relative mx-auto max-w-5xl px-5 pb-28">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-cyan-400/20 to-violet-500/20 p-2 shadow-[0_0_80px_rgba(34,211,238,.18)]">
            <video className="w-full rounded-xl bg-black" controls playsInline preload="metadata" poster="./demo/shots/dashboard.png">
              <source src="./demo/jewellery-erp-demo.webm" type="video/webm" />
              Your browser can't play this video.
            </video>
          </div>
          <p className="mt-4 text-center text-xs text-zinc-500">Product demo recorded with sample data. All names and numbers shown are fictional.</p>
        </Reveal>
      </section>

      {/* stats */}
      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 pb-28 md:grid-cols-4">
        {[['28', 'database tables'], ['11', 'ERP modules'], ['JWT', 'secured login'], ['1 day', 'rate setup, then automatic']].map(([n, l], i) => (
          <Reveal key={l} delay={i * 0.08}>
            <Glass className="p-6 text-center"><p className="grad-text font-display text-4xl font-extrabold">{n}</p><p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-400">{l}</p></Glass>
          </Reveal>
        ))}
      </section>

      {/* features */}
      <section className="mx-auto max-w-6xl px-5 pb-28">
        <SectionTitle kanji="01" eyebrow="Features" title="Everything a shop needs" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 4) * 0.08}>
              <Glass className="h-full p-6">
                <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-ink"><Icon size={20} /></span>
                <h3 className="mb-2 font-display text-lg font-extrabold uppercase text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{text}</p>
              </Glass>
            </Reveal>
          ))}
        </div>
      </section>

      {/* screenshots */}
      <section className="mx-auto max-w-6xl px-5 pb-28">
        <SectionTitle kanji="02" eyebrow="Inside the app" title="Screens" />
        <div className="grid gap-10 md:grid-cols-2">
          {shots.map(([file, title, text], i) => (
            <Reveal key={file} delay={(i % 2) * 0.1}>
              <BrowserFrame src={`./demo/shots/${file}.png`} alt={`${title} screen of the jewellery ERP`} />
              <h3 className="mt-5 font-display text-xl font-extrabold uppercase text-white">{title}</h3>
              <p className="text-sm text-zinc-400">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* tech */}
      <section className="mx-auto max-w-4xl px-5 pb-28 text-center">
        <Reveal>
          <p className="mb-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-cyan-300"><BadgeCheck size={16} /> Built to last</p>
          <h2 className="mb-8 font-display text-3xl font-extrabold uppercase text-white md:text-5xl">Modern, proven technology</h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {stack.map((t) => <li key={t} className="glass rounded-full px-5 py-2 text-sm text-zinc-200">{t}</li>)}
          </ul>
        </Reveal>
      </section>

      {/* cta */}
      <section className="relative overflow-hidden px-5 pb-10 pt-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(139,92,246,.3),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] text-white md:text-7xl">Want this for <span className="grad-text">your shop?</span></h2>
            <p className="mx-auto mt-6 max-w-xl text-zinc-400">I customise the ERP to your workflow and also build billing, inventory and web software for other kinds of business.</p>
            <a href={`mailto:${profile.email}?subject=Jewellery%20ERP%20enquiry`} className="mt-10 inline-flex items-center gap-3 break-all rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-4 text-sm font-bold uppercase tracking-widest text-ink transition hover:shadow-[0_0_40px_rgba(34,211,238,.45)]">{profile.email}</a>
          </Reveal>
          <footer className="mt-24 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.25em] text-zinc-500 md:flex-row">
            <span>© {new Date().getFullYear()} {profile.brand}</span>
            <a href="./index.html" className="text-cyan-300 hover:text-white">Back to portfolio</a>
            <span>{profile.name}</span>
          </footer>
        </div>
      </section>
    </div>
  )
}
