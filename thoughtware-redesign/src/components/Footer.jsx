import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'

const quickLinks = ['Home', 'About Us', 'Services', 'Our Process', 'Projects', 'Contact']
const serviceLinks = [
  'Software Development',
  'Cloud Solutions',
  'Business Analysis',
  'IT Consulting',
  'Mobile Solutions',
  'Enterprise Integration',
]

const hexClip = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'

export default function Footer() {
  return (
    <footer style={{ background: '#05050f' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 bg-red-600 flex items-center justify-center text-white font-bold text-base"
                style={{ clipPath: hexClip }}
              >
                T
              </div>
              <span className="text-white font-bold text-xl tracking-tight">Thoughtware</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              We turn ideas into digital solutions that drive growth and success.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaFacebookF size={14} />, href: '#' },
                { icon: <FaLinkedinIn size={14} />, href: '#' },
                { icon: <FaTwitter size={14} />, href: '#' },
                { icon: <FaInstagram size={14} />, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-600 hover:bg-red-600/10 transition-all duration-200"
                  aria-label={`Social link ${i + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-500 text-sm hover:text-red-500 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-white font-bold mb-5">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-500 text-sm hover:text-red-500 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiPhone size={15} className="text-red-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+27214567890" className="text-gray-500 text-sm hover:text-white transition-colors">
                  +27 (21) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMail size={15} className="text-red-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@thoughtware.com" className="text-gray-500 text-sm hover:text-white transition-colors">
                  info@thoughtware.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin size={15} className="text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 text-sm">
                  123 Business Ave,<br />
                  Johannesburg, 2000<br />
                  South Africa
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm">
            &copy; 2024 Thoughtware. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms & Conditions'].map((item) => (
              <a key={item} href="#" className="text-gray-600 text-sm hover:text-gray-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
