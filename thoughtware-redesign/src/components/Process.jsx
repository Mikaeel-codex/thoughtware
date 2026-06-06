import { FiSearch, FiClipboard, FiCode, FiPackage } from 'react-icons/fi'
import FadeIn from './FadeIn'

const steps = [
  {
    number: '01',
    icon: <FiSearch size={22} />,
    title: 'Discover',
    description: 'We understand your goals, challenges and requirements.',
  },
  {
    number: '02',
    icon: <FiClipboard size={22} />,
    title: 'Plan',
    description: 'We create a strategic roadmap tailored to your needs.',
  },
  {
    number: '03',
    icon: <FiCode size={22} />,
    title: 'Develop',
    description: 'Our team builds, tests and refines with precision.',
  },
  {
    number: '04',
    icon: <FiPackage size={22} />,
    title: 'Deliver',
    description: 'We deliver solutions that drive real and measurable results.',
  },
]

const hexClip = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #05050f 0%, #0d0d1e 100%)' }}
    >
      {/* Background hex decorations */}
      {[
        { size: 120, top: '5%', left: '-2%', opacity: 0.06 },
        { size: 80, bottom: '8%', right: '2%', opacity: 0.07 },
        { size: 60, top: '50%', right: '15%', opacity: 0.05 },
      ].map((h, i) => (
        <div
          key={i}
          className="absolute border border-red-500 pointer-events-none"
          style={{
            width: h.size,
            height: h.size,
            top: h.top,
            bottom: h.bottom,
            left: h.left,
            right: h.right,
            opacity: h.opacity,
            clipPath: hexClip,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-red-500 font-bold text-xs tracking-[0.25em] uppercase mb-3">
            Our Process
          </p>
          <h2 className="text-4xl font-extrabold text-white">
            A Proven Process for Excellence
          </h2>
        </FadeIn>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px pointer-events-none"
            style={{ background: 'linear-gradient(to right, transparent, rgba(220,38,38,0.4), transparent)' }}
          />

          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.12}>
            <div className="flex flex-col items-center text-center">
              <div
                className="relative w-20 h-20 rounded-full flex flex-col items-center justify-center mb-6 z-10"
                style={{ background: 'linear-gradient(145deg, #dc2626, #991b1b)', boxShadow: '0 0 0 6px rgba(220,38,38,0.15)' }}
              >
                <span className="text-white font-extrabold text-xs">{step.number}</span>
                <div className="text-white mt-0.5">{step.icon}</div>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">{step.description}</p>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
