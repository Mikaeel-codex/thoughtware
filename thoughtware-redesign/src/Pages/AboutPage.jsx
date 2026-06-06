import { Link } from 'react-router-dom'
import {
  FiArrowRight, FiChevronRight,
  FiMonitor, FiZap, FiFileText,
  FiRefreshCw, FiUploadCloud, FiGlobe,
  FiMessageCircle, FiUsers,
} from 'react-icons/fi'
import { FaFire } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'

const hexClip = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'

const capabilities = [
  {
    icon: FiMonitor,
    title: 'Cross Platform Development',
    desc: 'Build applications that run seamlessly across web, mobile and desktop from a single, maintainable codebase.',
  },
  {
    icon: FiZap,
    title: 'API Integration',
    desc: 'Connect your systems with powerful, reliable APIs that scale alongside your business and open new data flows.',
  },
  {
    icon: FiFileText,
    title: 'Content Management Systems',
    desc: 'Custom CMS solutions that give your team full control over every digital touchpoint without developer dependency.',
  },
  {
    icon: FiRefreshCw,
    title: 'Legacy Systems Modernization',
    desc: 'Upgrade outdated infrastructure to modern, maintainable and high-performance architectures with minimal disruption.',
  },
  {
    icon: FiUploadCloud,
    title: 'Application Migration',
    desc: 'Seamless migration to new environments using zero-downtime strategies with full data integrity throughout.',
  },
  {
    icon: FiGlobe,
    title: 'EAI / EDI / B2B Services',
    desc: 'Enterprise application integration and B2B data exchange solutions for complex, multi-system business ecosystems.',
  },
]

const values = [
  {
    icon: FaFire,
    title: 'WHAT MAKES US UNIQUE?',
    desc: 'Our Philosophy is simple: we create at our own risk, and our clients pay us when we deliver. This unique approach has allowed us to build a steadfast and long-lasting relationship with our clients. Allowing them to focus on what they do best, while we work on delivery of complex Solutions.',
  },
  {
    icon: FiMessageCircle,
    title: 'WE HAVE A SOUND METHODOLOGY',
    desc: 'Our unique agile approach is focused on rapid, evolutionary and periodic delivery of testing on all levels of business requirements. This approach allows for immediate feedback to ensure the process continually delivers business value.',
  },
  {
    icon: FiUsers,
    title: 'Collaborative Partnership',
    desc: 'We embed ourselves in your team, not just as vendors but as invested partners in your success.',
  },
]

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '50+',  label: 'Enterprise Clients' },
  { value: '18+',  label: 'Years Experience' },
  { value: '95%',  label: 'Client Retention' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────
          No flex centering — pt-36 gives clean clearance below the fixed nav */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #05050f 0%, #0d0d1e 60%, #150a0a 100%)' }}
      >
        {/* Decorative hex outlines */}
        {[
          { size: 100, top: '18%',  right: '6%',  opacity: 0.07 },
          { size: 55,  top: '60%',  right: '18%', opacity: 0.05 },
          { size: 130, bottom: '8%',left: '4%',   opacity: 0.04 },
        ].map((h, i) => (
          <div
            key={i}
            className="absolute border border-red-500 pointer-events-none"
            style={{
              width: h.size, height: h.size,
              top: h.top, right: h.right,
              bottom: h.bottom, left: h.left,
              opacity: h.opacity, clipPath: hexClip,
            }}
          />
        ))}

        {/* Ambient red glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 600, height: 600,
            top: '-15%', right: '-8%',
            background: 'radial-gradient(circle, rgba(220,38,38,0.1) 0%, transparent 65%)',
            borderRadius: '50%',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24">
          {/* Breadcrumb */}
          <FadeIn>
            <div className="flex items-center gap-2 text-gray-500 text-xs tracking-wide mb-10">
              <Link to="/" className="hover:text-red-500 transition-colors duration-200">
                Home
              </Link>
              <FiChevronRight size={12} />
              <span className="text-gray-400">About Us</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-red-500 font-bold text-xs tracking-[0.3em] uppercase mb-5">
              Who We Are
            </p>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-8 max-w-2xl">
              We <span style={{ color: '#dc2626' }}>think</span><br />for you.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Thoughtware is a technology partner dedicated to turning complex business
              challenges into elegant, scalable digital solutions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────────────────────────── */}
      <section style={{ background: '#dc2626' }}>
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08}>
              <div className="text-center">
                <p className="text-white font-extrabold text-4xl lg:text-5xl mb-2">{s.value}</p>
                <p className="text-red-100 text-sm font-medium tracking-wide">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Mission ───────────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left — text */}
          <FadeIn><div>
            <p className="text-red-600 font-bold text-xs tracking-[0.25em] uppercase mb-3">
              Our Mission
            </p>
            <div className="w-12 h-0.5 bg-red-600 mb-8" />
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug mb-8">
              At Thoughtware our mission is simple:{' '}
              <span className="text-red-600">we think for you.</span>
            </h2>
            <div className="space-y-5 text-gray-500 text-sm leading-7">
              <p>
                We create, innovate and deliver complex solutions that integrate seamlessly
                with your core business systems — creating and revolutionizing experiences
                using the latest technology, which drives our success with your clients.
              </p>
              <p>
                To meet business needs, leaders must align with an application development
                services partner that possesses a proven track record, a quality approach to
                delivering consistent results and the expertise required to drive successful
                outcomes.
              </p>
              <p>
                We believe in using the latest innovative technology trends, such as
                Microsoft® DotNet, mobile applications and other technologies such as ASPX,
                Mainframe, Python, React, Android and iOS to build dynamic applications.
              </p>
            </div>
          </div></FadeIn>

          {/* Right — tech stack card (contained, no bleeds) */}
          <FadeIn delay={0.15}><div
            className="rounded-2xl p-10 overflow-hidden relative"
            style={{ background: 'linear-gradient(135deg, #05050f 0%, #1a0505 100%)' }}
          >
            {/* Decorative hex — inside the card */}
            <div
              className="absolute top-6 right-6 border border-red-600 pointer-events-none"
              style={{ width: 60, height: 60, clipPath: hexClip, opacity: 0.15 }}
            />
            {/* Dot grid — inside the card, contained by overflow-hidden */}
            <div
              className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(220,38,38,0.4) 1px, transparent 1px)',
                backgroundSize: '12px 12px',
                opacity: 0.3,
              }}
            />

            <p className="text-red-500 font-bold text-xs tracking-[0.25em] uppercase mb-6">
              Technology Stack
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['.NET', 'React', 'Python', 'iOS', 'Android', 'ASPX', 'Mainframe', 'Azure', 'SQL', 'REST APIs'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold text-gray-300"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div
              className="pt-6"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="text-gray-400 text-sm leading-relaxed italic">
                "We partner with industry-leading platforms to deliver solutions that are
                future-proof, maintainable and built for growth."
              </p>
            </div>
          </div></FadeIn>

        </div>
      </section>

      {/* ── Capabilities ──────────────────────────────────────────────────── */}
      <section
        className="py-28"
        style={{ background: 'linear-gradient(135deg, #05050f 0%, #0d0d1e 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-red-500 font-bold text-xs tracking-[0.3em] uppercase mb-4">
              What We Do
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-5">
              Our Capabilities
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              Six core disciplines that let us handle the full spectrum of your
              technology needs under one roof.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.07}>
              <div
                key={cap.title}
                className="rounded-2xl p-8 group cursor-default transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(220,38,38,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-red-600"
                  style={{ background: 'rgba(220,38,38,0.12)' }}
                >
                  <cap.icon size={20} className="text-red-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="w-6 h-0.5 bg-red-600 mb-4 transition-all duration-300 group-hover:w-10" />
                <h3 className="text-white font-bold text-base mb-3">{cap.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-red-600 font-bold text-xs tracking-[0.3em] uppercase mb-4">
              What Drives Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
              Our Core Values
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
              <div
                key={v.title}
                className="text-center p-10 rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300 group-hover:bg-red-600"
                  style={{ background: '#fff0f0' }}
                >
                  <v.icon size={22} className="text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-4">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ background: '#dc2626' }} className="py-24">
        <FadeIn className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-5">
            Ready to Build Something Great?
          </h2>
          <p className="text-red-100 mb-12 max-w-xl mx-auto text-sm leading-relaxed">
            Let&apos;s talk about your project and how Thoughtware can turn your ideas
            into powerful digital solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-white text-red-600 font-semibold px-8 py-4 rounded-full hover:bg-red-50 transition-colors duration-200"
            >
              Get In Touch <FiArrowRight />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.4)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              Back to Home
            </Link>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  )
}
