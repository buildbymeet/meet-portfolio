// ============================================================
//  EDIT THIS FILE to change anything on the site.
//  Items marked "PLACEHOLDER" are sample text: replace with real details.
// ============================================================

export const profile = {
  name: 'Meet Dodiya',
  brand: 'BuildByMeet',
  first: 'MEET',
  last: 'DODIYA',
  role: 'Software Developer',
  location: 'India',
  email: 'buildbymeet@gmail.com',
  github: 'https://github.com/buildbymeet',
  linkedin: '', // PLACEHOLDER: e.g. 'https://www.linkedin.com/in/yourname' (hidden while empty)
  instagram: '', // PLACEHOLDER: e.g. 'https://instagram.com/buildbymeet' (hidden while empty)
  // Replace these two files in /public/avatars with your own images (keep names, or change here)
  avatars: ['./avatars/avatar-1.svg', './avatars/avatar-2.svg'],
  roles: [
    'Software Developer',
    'Java & Spring Boot Engineer',
    'React Frontend Builder',
    'ERP & Billing Specialist',
    'Software for Any Business',
  ],
}

export const services = [
  {
    icon: 'layers',
    title: 'Custom ERP & Billing',
    text: 'Inventory, sales, purchase, accounts and GST-ready billing systems tailored to retail, jewellery, clinics, schools and more.',
  },
  {
    icon: 'code',
    title: 'Web Apps & Dashboards',
    text: 'Fast, secure web applications with React frontends, Spring Boot APIs, JWT login, roles and live reports.',
  },
  {
    icon: 'phone',
    title: 'Websites & Landing Pages',
    text: 'Responsive, SEO-friendly business websites that load quickly and turn visitors into customers.',
  },
  {
    icon: 'gauge',
    title: 'Deploy, Support & Scale',
    text: 'Docker, PostgreSQL and Redis setups, cloud deployment, backups and ongoing improvements after launch.',
  },
]

// slug = simple-icons name. If a logo is missing the label is still shown.
export const stackRow1 = [
  ['Java', 'openjdk'], ['Spring Boot', 'springboot'], ['React', 'react'], ['JavaScript', 'javascript'],
  ['PostgreSQL', 'postgresql'], ['Redis', 'redis'], ['Tailwind CSS', 'tailwindcss'], ['Vite', 'vite'],
  ['HTML5', 'html5'], ['CSS3', 'css'],
]
export const stackRow2 = [
  ['Docker', 'docker'], ['Git', 'git'], ['GitHub', 'github'], ['Maven', 'apachemaven'],
  ['Flyway', 'flyway'], ['npm', 'npm'], ['Node.js', 'nodedotjs'], ['Nginx', 'nginx'],
  ['MySQL', 'mysql'], ['Figma', 'figma'],
]

export const skillGroups = [
  {
    title: 'What I build',
    items: [
      'ERP Systems', 'Billing & POS', 'Inventory Management', 'Sales & Purchase Modules', 'Accounting & Ledgers',
      'Role-Based Access', 'Dashboards & Reports', 'Business Websites', 'REST APIs',
    ],
  },
  { title: 'Technology', items: ['Java 17', 'Spring Boot 3', 'Spring Security (JWT)', 'JPA / Hibernate', 'React 18', 'Tailwind CSS', 'Vite'] },
  { title: 'Data & Tools', items: ['PostgreSQL', 'Redis caching', 'Flyway migrations', 'Docker Compose', 'Git & GitHub', 'Maven', 'npm'] },
]

// Jay Jewellers ERP is a real project. Others are PLACEHOLDERS: replace with your own work.
export const projects = [
  {
    no: '01', category: 'ERP · Retail · Jewellery', title: 'Jay Jewellers ERP',
    text: 'Full retail ERP for a jewellery business: items, barcodes, stock, daily metal rates, purchase, sales invoices, payments and ledgers.',
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Redis', 'Docker'], image: './projects/p1.svg', link: 'https://github.com/buildbymeet',
  },
  {
    no: '02', category: 'Billing · Small Business', title: 'Quick Bill POS',
    text: 'PLACEHOLDER: A lightweight billing and inventory app for shops, with barcode scanning and printable invoices.',
    tags: ['React', 'Spring Boot', 'PostgreSQL'], image: './projects/p2.svg', link: '#',
  },
  {
    no: '03', category: 'Website · Service Business', title: 'Business Website Kit',
    text: 'PLACEHOLDER: A fast, SEO-ready website template for clinics, salons and local services with enquiry forms.',
    tags: ['React', 'Tailwind', 'SEO'], image: './projects/p3.svg', link: '#',
  },
]

// PLACEHOLDER timeline: replace with your real journey
export const experience = [
  { place: 'BuildByMeet', role: 'Founder & Software Developer', date: '2025 - Present', text: 'Designing and building custom ERP, billing and web software for small and mid-size businesses.' },
  { place: 'Freelance Projects', role: 'Full-Stack Developer', date: '2023 - 2025', text: 'PLACEHOLDER: Delivered Java Spring Boot and React applications for retail clients.' },
]
export const education = [
  { place: 'University / College Name', role: 'Degree, Field of Study', date: 'Year - Year', text: 'PLACEHOLDER: Add your real education details here.' },
  { place: 'Self-learning', role: 'Java, Spring Boot, React, PostgreSQL', date: 'Ongoing', text: 'Building real projects, reading docs and shipping software end to end.' },
]
