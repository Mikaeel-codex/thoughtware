import { FiArrowRight } from 'react-icons/fi'
import FadeIn from './FadeIn'

const hexClip = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)' }}
    >
      {/* Hex decorations */}
      {[
        { size: 140, top: '-10%', left: '-3%', opacity: 0.15 },
        { size: 90, bottom: '-5%', left: '8%', opacity: 0.12 },
        { size: 100, top: '-5%', right: '10%', opacity: 0.1 },
        { size: 70, bottom: '-10%', right: '3%', opacity: 0.13 },
        { size: 50, top: '30%', right: '25%', opacity: 0.08 },
      ].map((h, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            width: h.size,
            height: h.size,
            top: h.top,
            bottom: h.bottom,
            left: h.left,
            right: h.right,
            opacity: h.opacity,
            clipPath: hexClip,
            background: 'rgba(255,255,255,0.3)',
          }}
        />
      ))}

      <FadeIn className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight">
            Ready To Bring Your<br />Idea To Life?
          </h2>
          <p className="text-red-200 text-base max-w-md">
            Let&apos;s build something great together. Get in touch and let our
            experts help you get started.
          </p>
        </div>
        <a
          href="mailto:info@thoughtware.com"
          className="flex-shrink-0 inline-flex items-center gap-2 bg-white font-semibold px-8 py-4 rounded-full text-base hover:bg-red-50 transition-colors duration-200"
          style={{ color: '#dc2626' }}
        >
          Schedule a Consultation <FiArrowRight />
        </a>
      </FadeIn>
    </section>
  )
}
