import { FiCheckCircle, FiArrowRight, FiPlay } from 'react-icons/fi'

const points = [
  'Client-Centric Approach',
  'Innovative & Scalable Solutions',
  'Commitment to Excellence',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — video thumbnail */}
        <div className="relative">
          {/* Dot grid decoration */}
          <div
            className="absolute -left-6 -top-6 w-32 h-32 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #dc2626 1px, transparent 1px)',
              backgroundSize: '14px 14px',
              opacity: 0.35,
            }}
          />

          <div
            className="relative rounded-2xl overflow-hidden aspect-video flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a0505 100%)' }}
          >
            {/* Simulated meeting room silhouette */}
            <div className="absolute inset-0 flex items-end justify-center pb-8">
              <div className="flex gap-4 items-end opacity-30">
                {[60, 75, 55, 70].map((h, i) => (
                  <div
                    key={i}
                    className="rounded-full bg-gray-400"
                    style={{ width: 36, height: h, borderRadius: '50% 50% 0 0' }}
                  />
                ))}
              </div>
            </div>
            {/* Warm overlay */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(180,60,0,0.3), transparent)' }}
            />
            {/* Play button */}
            <button
              className="relative z-10 w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-200 hover:scale-105"
              style={{ boxShadow: '0 0 0 12px rgba(220,38,38,0.2)' }}
            >
              <FiPlay size={22} style={{ marginLeft: 3 }} />
            </button>
          </div>

          {/* Bottom-right dot grid */}
          <div
            className="absolute -right-4 -bottom-4 w-24 h-24 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #dc2626 1px, transparent 1px)',
              backgroundSize: '12px 12px',
              opacity: 0.25,
            }}
          />
        </div>

        {/* Right — text */}
        <div>
          <p className="text-red-600 font-bold text-xs tracking-[0.25em] uppercase mb-4">
            Who We Are
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-5">
            Transforming Ideas<br />Into Real Impact
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            At Thoughtware, we help businesses navigate challenges and unlock
            opportunities through technology, strategy and innovation.
          </p>
          <ul className="space-y-4 mb-10">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-gray-700 font-medium">
                <FiCheckCircle size={18} style={{ color: '#dc2626', flexShrink: 0 }} />
                {point}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:bg-red-700"
            style={{ background: '#dc2626' }}
          >
            Learn More About Us <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
