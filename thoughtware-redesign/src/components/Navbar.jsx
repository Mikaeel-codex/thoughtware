import { useState, useEffect } from 'react'
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(5,5,15,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 30px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 bg-red-600 flex items-center justify-center text-white font-bold text-base"
            style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          >
            T
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Thoughtware</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                className="text-sm font-medium transition-colors duration-200 hover:text-white"
                style={{
                  color: active === link.label ? '#ffffff' : '#9ca3af',
                  borderBottom: active === link.label ? '2px solid #dc2626' : '2px solid transparent',
                  paddingBottom: '4px',
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-red-700"
          style={{ background: '#dc2626' }}
        >
          Let&apos;s Talk <FiArrowRight size={15} />
        </a>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2" style={{ background: 'rgba(5,5,15,0.98)' }}>
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white text-sm font-medium block py-1"
                  onClick={() => { setActive(link.label); setMenuOpen(false) }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full mt-2 bg-red-600 hover:bg-red-700"
                onClick={() => setMenuOpen(false)}
              >
                Let&apos;s Talk <FiArrowRight size={15} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
