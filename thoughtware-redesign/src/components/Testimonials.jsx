import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
  {
    quote:
      "Thoughtware delivered beyond our expectations. Their professionalism, expertise and dedication made a huge difference to our project.",
    name: 'John Smith',
    role: 'CEO, FinEdge Solutions',
    initials: 'JS',
    color: '#dc2626',
  },
  {
    quote:
      "Working with Thoughtware was an absolute pleasure. They transformed our vision into a scalable product that our users love.",
    name: 'Sarah Johnson',
    role: 'CTO, MediCare Tech',
    initials: 'SJ',
    color: '#7c3aed',
  },
  {
    quote:
      "The team at Thoughtware brought fresh ideas and technical excellence. Our platform performance improved by 300% after their work.",
    name: 'David Okafor',
    role: 'Founder, LogiTrack Africa',
    initials: 'DO',
    color: '#0ea5e9',
  },
  {
    quote:
      "Exceptional quality, on-time delivery, and genuine care for the client. Thoughtware is the partner every business needs.",
    name: 'Amina Patel',
    role: 'VP Engineering, ShopNow',
    initials: 'AP',
    color: '#22c55e',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  const t = testimonials[index]

  return (
    <section
      id="testimonials"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #05050f 0%, #0d0d1e 100%)' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left label */}
          <div className="lg:w-64 flex-shrink-0">
            <p className="text-red-500 font-bold text-xs tracking-[0.25em] uppercase mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl font-extrabold text-white leading-tight">
              What Our Clients Say
            </h2>
          </div>

          {/* Quote card */}
          <div className="flex-1 relative">
            {/* Large quote mark */}
            <div
              className="absolute -top-4 left-0 font-serif leading-none select-none pointer-events-none"
              style={{ fontSize: 120, color: '#dc2626', opacity: 0.15, lineHeight: 1 }}
            >
              &ldquo;
            </div>

            <div className="relative pl-6">
              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-10">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === index ? 24 : 8,
                  height: 8,
                  background: i === index ? '#dc2626' : 'rgba(255,255,255,0.2)',
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border flex items-center justify-center text-gray-400 hover:text-white hover:border-red-600 transition-all"
              style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border flex items-center justify-center text-gray-400 hover:text-white hover:border-red-600 transition-all"
              style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              aria-label="Next testimonial"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
