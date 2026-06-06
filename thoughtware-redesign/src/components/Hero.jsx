import { FiArrowRight, FiChevronDown } from 'react-icons/fi'

const hexClip = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #05050f 0%, #0d0d1e 60%, #150a0a 100%)' }}
    >
      {/* Background wave SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path
          d="M-100 700 Q200 500 500 620 Q800 740 1100 580 Q1300 480 1500 600 L1500 900 L-100 900 Z"
          fill="url(#waveGrad)"
        />
        <path
          d="M-100 750 Q300 600 600 700 Q900 800 1200 650 Q1350 580 1500 680 L1500 900 L-100 900 Z"
          fill="#dc2626"
          fillOpacity="0.07"
        />
      </svg>

      {/* Scattered hex outlines */}
      {[
        { size: 80, top: '12%', left: '8%', opacity: 0.08 },
        { size: 50, top: '60%', left: '3%', opacity: 0.06 },
        { size: 110, top: '75%', left: '15%', opacity: 0.05 },
        { size: 40, top: '20%', left: '45%', opacity: 0.07 },
        { size: 60, top: '85%', left: '55%', opacity: 0.06 },
      ].map((h, i) => (
        <div
          key={i}
          className="absolute border border-red-500 pointer-events-none"
          style={{
            width: h.size,
            height: h.size,
            top: h.top,
            left: h.left,
            opacity: h.opacity,
            clipPath: hexClip,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24 pb-16">
        {/* Left — text */}
        <div>
          <p className="text-red-500 font-bold text-xs tracking-[0.25em] uppercase mb-5">
            We Turn Ideas Into Impact
          </p>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
            It Starts<br />With an{' '}
            <span style={{ color: '#dc2626' }}>Idea</span>
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-md">
            We help businesses transform ideas into powerful digital solutions
            that drive growth, efficiency and success.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:bg-red-700"
              style={{ background: '#dc2626' }}
            >
              Get Started <FiArrowRight />
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full border transition-all duration-200 hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Explore Services <FiArrowRight />
            </a>
          </div>
        </div>

        {/* Right — geometric composition */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-[460px] h-[460px]">
            {/* Red glow */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 280,
                height: 280,
                top: '10%',
                left: '5%',
                background: 'radial-gradient(circle, rgba(220,38,38,0.25) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />

            {/* T hexagon logo */}
            <div
              className="absolute flex items-center justify-center text-white font-extrabold text-3xl z-30"
              style={{
                width: 100,
                height: 100,
                top: 10,
                right: 40,
                background: 'linear-gradient(160deg, #ef4444, #991b1b)',
                clipPath: hexClip,
                boxShadow: '0 0 30px rgba(220,38,38,0.5)',
              }}
            >
              T
            </div>

            {/* Large red cube */}
            <div
              className="absolute rounded z-10"
              style={{
                width: 190,
                height: 190,
                top: 70,
                left: 10,
                background: 'linear-gradient(145deg, #dc2626, #7f1d1d)',
                transform: 'rotate(8deg)',
                boxShadow: '0 20px 60px rgba(220,38,38,0.35)',
              }}
            />

            {/* White/silver cube */}
            <div
              className="absolute rounded z-20"
              style={{
                width: 150,
                height: 150,
                top: 130,
                left: 110,
                background: 'linear-gradient(145deg, #f1f5f9, #94a3b8)',
                transform: 'rotate(-5deg)',
                boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
              }}
            />

            {/* Small silver cube */}
            <div
              className="absolute rounded z-10"
              style={{
                width: 80,
                height: 80,
                bottom: 100,
                right: 30,
                background: 'linear-gradient(145deg, #e2e8f0, #64748b)',
                transform: 'rotate(15deg)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
              }}
            />

            {/* Tiny red accent cube */}
            <div
              className="absolute rounded z-10"
              style={{
                width: 45,
                height: 45,
                bottom: 130,
                left: 60,
                background: 'linear-gradient(145deg, #f87171, #dc2626)',
                transform: 'rotate(40deg)',
                boxShadow: '0 4px 15px rgba(220,38,38,0.4)',
              }}
            />

            {/* Hex wireframe decorations */}
            <div
              className="absolute border-2 z-5 pointer-events-none"
              style={{
                width: 55,
                height: 55,
                top: 60,
                left: 170,
                borderColor: 'rgba(220,38,38,0.4)',
                clipPath: hexClip,
              }}
            />
            <div
              className="absolute border z-5 pointer-events-none"
              style={{
                width: 35,
                height: 35,
                bottom: 80,
                left: 20,
                borderColor: 'rgba(148,163,184,0.3)',
                clipPath: hexClip,
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div
          className="w-8 h-8 rounded-full border flex items-center justify-center animate-bounce"
          style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#9ca3af' }}
        >
          <FiChevronDown size={14} />
        </div>
        <span className="text-gray-500 text-xs tracking-[0.2em] uppercase">Scroll Down</span>
      </div>
    </section>
  )
}
