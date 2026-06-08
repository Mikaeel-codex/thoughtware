import { useRef } from 'react'
import { FiArrowRight, FiChevronDown } from 'react-icons/fi'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const sectionRef = useRef(null)

  // Global scroll — background parallax
  const { scrollY } = useScroll()

  // Section scroll progress — content effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Background image: oversized layer moves at ~30% scroll speed
  const bgY = useTransform(scrollY, [0, 1000], [0, 300])

  // Shapes image: scroll parallax only
  const shapesY = useTransform(scrollYProgress, [0, 1], [0, -180])

  // Content fades and shrinks as hero scrolls out
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const contentScale   = useTransform(scrollYProgress, [0, 0.55], [1, 0.88])

  // Scroll hint fades immediately
  const hintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background image — oversized so parallax never gaps ─────────── */}
      <motion.div
        className="absolute inset-x-0 pointer-events-none"
        style={{
          top: '-30%',
          height: '160%',
          background: '#05050f',
          y: bgY,
        }}
      >
        <img
          src="/images/Background.png"
          alt=""
          className="w-full h-full"
          style={{ objectFit: 'cover', transform: 'scale(1)', transformOrigin: 'center center' }}
          draggable={false}
        />
        {/* Dark overlay so text stays readable */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(5,5,15,0.45)' }}
        />
      </motion.div>

      {/* ── Shapes — mobile only, decorative behind text ────────────────── */}
      <motion.img
        src="/images/Shapes.png"
        alt=""
        draggable={false}
        className="lg:hidden absolute select-none pointer-events-none"
        style={{
          width: '100%',
          maxWidth: 'none',
          bottom: '0',
          right: '-25%',
          zIndex: 1,
          y: shapesY,
          opacity: 0.5,
          filter: 'drop-shadow(0 20px 40px rgba(220,38,38,0.25))',
        }}
      />

      {/* ── Content — fades + scales down as you scroll away ────────────── */}
      <motion.div
        style={{ opacity: contentOpacity, scale: contentScale }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24 pb-16"
      >
        {/* Left — text */}
        <div>
          <p className="text-red-500 font-bold text-xs tracking-[0.25em] uppercase mb-5">
            We Turn Ideas Into Impact
          </p>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
            It Starts<br />With an{' '}
            <span style={{ color: '#dc2626' }}>Idea</span>
          </h1>
          <p className="text-gray-300 text-base leading-relaxed mb-10 max-w-md">
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

        {/* Right — Shapes image with scroll + mouse parallax */}
        <div className="hidden lg:flex items-center justify-center">
          <motion.img
            src="/images/Shapes.png"
            alt="Decorative shapes"
            draggable={false}
            className="select-none"
            style={{
              width: '190%',
              maxWidth: 'none',
              y: shapesY,
              filter: 'drop-shadow(0 30px 60px rgba(220,38,38,0.3))',
            }}
          />
        </div>
      </motion.div>

      {/* ── Scroll indicator — fades on first scroll ─────────────────────── */}
      <motion.div
        style={{ opacity: hintOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div
          className="w-8 h-8 rounded-full border flex items-center justify-center animate-bounce"
          style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#9ca3af' }}
        >
          <FiChevronDown size={14} />
        </div>
        <span className="text-gray-500 text-xs tracking-[0.2em] uppercase">Scroll Down</span>
      </motion.div>
    </section>
  )
}
