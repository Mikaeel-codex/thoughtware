import { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi'

const projects = [
  {
    title: 'Financial Dashboard',
    category: 'Business Analytics',
    color: '#0f172a',
    accent: '#3b82f6',
    preview: (
      <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="160" fill="#0f172a" />
        <rect x="12" y="12" width="256" height="20" rx="4" fill="#1e293b" />
        <rect x="20" y="18" width="60" height="8" rx="2" fill="#3b82f6" fillOpacity="0.7" />
        <rect x="12" y="42" width="80" height="60" rx="6" fill="#1e293b" />
        <rect x="12" y="46" width="80" height="4" rx="2" fill="#3b82f6" fillOpacity="0.5" />
        <polyline points="20,90 35,70 50,80 65,58 80,65" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <rect x="100" y="42" width="80" height="60" rx="6" fill="#1e293b" />
        <polyline points="108,90 120,72 135,82 150,65 168,75" fill="none" stroke="#22c55e" strokeWidth="2" />
        <rect x="188" y="42" width="80" height="60" rx="6" fill="#1e293b" />
        <rect x="196" y="72" width="12" height="22" rx="2" fill="#dc2626" fillOpacity="0.8" />
        <rect x="214" y="60" width="12" height="34" rx="2" fill="#3b82f6" fillOpacity="0.8" />
        <rect x="232" y="66" width="12" height="28" rx="2" fill="#22c55e" fillOpacity="0.8" />
        <rect x="12" y="112" width="256" height="36" rx="6" fill="#1e293b" />
        <rect x="20" y="118" width="50" height="6" rx="2" fill="#475569" />
        <rect x="20" y="128" width="70" height="6" rx="2" fill="#334155" />
      </svg>
    ),
  },
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    color: '#0a0a1a',
    accent: '#dc2626',
    preview: (
      <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="160" fill="#0a0a1a" />
        <rect x="80" y="0" width="200" height="160" fill="#ffffff" />
        <rect x="80" y="0" width="200" height="32" fill="#dc2626" />
        <rect x="88" y="8" width="40" height="16" rx="3" fill="white" fillOpacity="0.9" />
        <rect x="200" y="10" width="70" height="12" rx="6" fill="white" fillOpacity="0.3" />
        <rect x="88" y="40" width="184" height="50" rx="6" fill="#f1f5f9" />
        <rect x="96" y="48" width="70" height="8" rx="2" fill="#cbd5e1" />
        <rect x="96" y="62" width="100" height="6" rx="2" fill="#e2e8f0" />
        <rect x="96" y="74" width="60" height="10" rx="5" fill="#dc2626" fillOpacity="0.8" />
        <rect x="88" y="100" width="55" height="50" rx="6" fill="#f8fafc" />
        <rect x="95" y="106" width="42" height="28" rx="3" fill="#e2e8f0" />
        <rect x="95" y="138" width="28" height="6" rx="2" fill="#cbd5e1" />
        <rect x="150" y="100" width="55" height="50" rx="6" fill="#f8fafc" />
        <rect x="157" y="106" width="42" height="28" rx="3" fill="#e2e8f0" />
        <rect x="157" y="138" width="28" height="6" rx="2" fill="#cbd5e1" />
        <rect x="212" y="100" width="55" height="50" rx="6" fill="#f8fafc" />
        <rect x="219" y="106" width="42" height="28" rx="3" fill="#e2e8f0" />
        <rect x="219" y="138" width="28" height="6" rx="2" fill="#cbd5e1" />
      </svg>
    ),
  },
  {
    title: 'Healthcare Portal',
    category: 'Cloud Solutions',
    color: '#f0f9ff',
    accent: '#0ea5e9',
    preview: (
      <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="160" fill="#f0f9ff" />
        <rect x="0" y="0" width="280" height="36" fill="#0ea5e9" />
        <rect x="12" y="10" width="60" height="16" rx="3" fill="white" fillOpacity="0.9" />
        <rect x="180" y="12" width="88" height="12" rx="6" fill="white" fillOpacity="0.3" />
        <rect x="12" y="46" width="80" height="104" rx="6" fill="white" />
        <circle cx="52" cy="72" r="18" fill="#bae6fd" />
        <rect x="48" y="64" width="8" height="16" rx="2" fill="#0ea5e9" />
        <rect x="44" y="68" width="16" height="8" rx="2" fill="#0ea5e9" />
        <rect x="20" y="96" width="56" height="6" rx="2" fill="#e0f2fe" />
        <rect x="20" y="108" width="40" height="6" rx="2" fill="#e0f2fe" />
        <rect x="100" y="46" width="168" height="46" rx="6" fill="white" />
        <rect x="110" y="56" width="60" height="6" rx="2" fill="#bae6fd" />
        <rect x="110" y="68" width="80" height="6" rx="2" fill="#e0f2fe" />
        <rect x="110" y="80" width="50" height="6" rx="2" fill="#e0f2fe" />
        <rect x="100" y="100" width="80" height="50" rx="6" fill="white" />
        <rect x="188" y="100" width="80" height="50" rx="6" fill="white" />
        <polyline points="108,140 118,128 128,134 140,120 152,126" fill="none" stroke="#0ea5e9" strokeWidth="2" />
        <polyline points="196,140 206,128 220,132 232,122 248,130" fill="none" stroke="#22c55e" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Logistics Tracker',
    category: 'Enterprise Integration',
    color: '#0f1a0f',
    accent: '#22c55e',
    preview: (
      <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="160" fill="#0f1a0f" />
        <rect x="12" y="12" width="256" height="136" rx="8" fill="#111b11" />
        <circle cx="140" cy="80" r="50" fill="none" stroke="#22c55e" strokeWidth="0.5" strokeOpacity="0.3" />
        <circle cx="140" cy="80" r="35" fill="none" stroke="#22c55e" strokeWidth="0.5" strokeOpacity="0.4" />
        <circle cx="140" cy="80" r="20" fill="none" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="140" cy="80" r="4" fill="#22c55e" />
        <circle cx="110" cy="65" r="3" fill="#22c55e" fillOpacity="0.7" />
        <circle cx="162" cy="92" r="3" fill="#22c55e" fillOpacity="0.7" />
        <circle cx="125" cy="105" r="3" fill="#22c55e" fillOpacity="0.7" />
        <line x1="140" y1="80" x2="110" y2="65" stroke="#22c55e" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="140" y1="80" x2="162" y2="92" stroke="#22c55e" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="140" y1="80" x2="125" y2="105" stroke="#22c55e" strokeWidth="0.8" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    title: 'HR Management',
    category: 'Business Analytics',
    color: '#1a0a2e',
    accent: '#a855f7',
    preview: (
      <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="160" fill="#1a0a2e" />
        <rect x="0" y="0" width="70" height="160" fill="#130820" />
        <rect x="10" y="20" width="50" height="8" rx="4" fill="#a855f7" fillOpacity="0.6" />
        <rect x="10" y="38" width="50" height="6" rx="3" fill="#7c3aed" fillOpacity="0.4" />
        <rect x="10" y="52" width="50" height="6" rx="3" fill="#7c3aed" fillOpacity="0.4" />
        <rect x="10" y="66" width="50" height="6" rx="3" fill="#7c3aed" fillOpacity="0.4" />
        <rect x="78" y="12" width="192" height="60" rx="6" fill="#1f0f3a" />
        <rect x="88" y="22" width="80" height="6" rx="2" fill="#a855f7" fillOpacity="0.5" />
        <circle cx="100" cy="54" r="12" fill="#a855f7" fillOpacity="0.3" />
        <circle cx="130" cy="54" r="12" fill="#7c3aed" fillOpacity="0.3" />
        <circle cx="160" cy="54" r="12" fill="#a855f7" fillOpacity="0.3" />
        <rect x="78" y="82" width="192" height="70" rx="6" fill="#1f0f3a" />
        <rect x="88" y="92" width="50" height="5" rx="2" fill="#a855f7" fillOpacity="0.4" />
        <rect x="88" y="104" width="160" height="5" rx="2" fill="#4c1d95" fillOpacity="0.6" />
        <rect x="88" y="104" width="100" height="5" rx="2" fill="#a855f7" fillOpacity="0.5" />
        <rect x="88" y="116" width="160" height="5" rx="2" fill="#4c1d95" fillOpacity="0.6" />
        <rect x="88" y="116" width="130" height="5" rx="2" fill="#7c3aed" fillOpacity="0.5" />
        <rect x="88" y="128" width="160" height="5" rx="2" fill="#4c1d95" fillOpacity="0.6" />
        <rect x="88" y="128" width="80" height="5" rx="2" fill="#a855f7" fillOpacity="0.5" />
      </svg>
    ),
  },
]

export default function Projects() {
  const [index, setIndex] = useState(0)
  const visible = 3
  const max = projects.length - visible

  const prev = () => setIndex((i) => Math.max(i - 1, 0))
  const next = () => setIndex((i) => Math.min(i + 1, max))

  const dots = Array.from({ length: max + 1 })

  return (
    <section id="projects" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-red-600 font-bold text-xs tracking-[0.25em] uppercase mb-3">
            Featured Projects
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">Some Of Our Work</h2>
        </div>

        <div className="relative">
          {/* Prev arrow */}
          <button
            onClick={prev}
            disabled={index === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Previous"
          >
            <FiChevronLeft size={20} />
          </button>

          {/* Cards */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(calc(-${index * (100 / visible)}% - ${index * 8}px))` }}
            >
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="flex-shrink-0 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
                  style={{ width: `calc((100% - 32px) / 3)` }}
                >
                  <div className="aspect-video overflow-hidden" style={{ background: project.color }}>
                    {project.preview}
                  </div>
                  <div className="p-6 bg-white">
                    <p className="text-red-600 text-xs font-semibold uppercase tracking-wide mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-gray-900 font-bold text-lg mb-4">{project.title}</h3>
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors group-hover:gap-2.5"
                    >
                      View Case Study <FiArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            disabled={index === max}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Next"
          >
            <FiChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {dots.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === index ? 24 : 8,
                height: 8,
                background: i === index ? '#dc2626' : '#e5e7eb',
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
