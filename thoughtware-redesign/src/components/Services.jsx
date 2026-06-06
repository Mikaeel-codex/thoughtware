import { useState } from 'react'
import { FiCode, FiSmartphone, FiLayers, FiArrowRight } from 'react-icons/fi'
import FadeIn from './FadeIn'

const services = [
  {
    Icon: FiCode,
    title: 'Software Applications',
    description: 'Custom software solutions built for performance & scalability.',
    gradient: 'linear-gradient(-45deg, #dc2626 0%, #7f1d1d 100%)',
    hoverText: 'At Thoughtware we understand that your business is unique and therefore we create software that meets your exact business needs and that is adaptable to your ever-changing requirements. Our experienced team has the knowledge and expertise to solve complex integration challenges and when we deliver we understand the importance of flexible, scalable applications, which allow our clients to modify as and when they want.',
  },
  {
    Icon: FiSmartphone,
    title: 'Mobile Applications',
    description: 'Scalable, secure and cost-effective mobile solutions for any platform.',
    gradient: 'linear-gradient(-45deg, #991b1b 0%, #0a0a1a 100%)',
    hoverText: 'Mobile applications and mobile web sites are quickly becoming larger portions of every company’s digital media plan. With more and more smart phones purchased every day, making sure you have a quality presence on a mobile device is not only incredibly important but becoming essential to a successful marketing campaign. Thoughtware can develop a wide variety of Mobile web sites as well as custom Mobile Applications for any device or platform. '
  },
  {
    Icon: FiLayers,
    title: 'Applications & Middleware Services',
    description: 'Seamless middleware integration connecting your systems and data flows.',
    gradient: 'linear-gradient(-45deg, #0a0a1a 0%, #dc2626 100%)',
    hoverText: 'A third-party IT services provider can manage and implement enterprise solutions, allowing internal IT organizations to focus on high-priority and strategic initiatives. Thoughtware’s Enterprise Applications and Middleware Services provide extensive experience and expertise across Oracle and Microsoft products. We deliver custom enterprise solutions that enhance business. '
  },
]

const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'

export default function Services() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="services" className="py-24" style={{ background: '#f8f9fc' }}>
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <p className="text-red-600 font-bold text-xs tracking-[0.25em] uppercase mb-3">
            Our Services
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Solutions That Drive Success
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {services.map(({ Icon, title, description, gradient, hoverText }, i) => {
            const on = hovered === i
            return (
              <FadeIn key={title} delay={i * 0.1}>
                <div
                  className="relative rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    height: 240,
                    background: gradient,
                    transition: `box-shadow 0.6s ${ease}`,
                    boxShadow: on
                      ? '0 10px 30px rgba(220,38,38,0.35)'
                      : '0 4px 16px rgba(0,0,0,0.1)',
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Back face — white, reveals on hover */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: hoverText ? '24px' : 0,
                      background: '#ffffff',
                      transition: `transform 0.6s ${ease}, opacity 0.4s ${ease}`,
                      transform: on ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-45deg)',
                      opacity: on ? 1 : 0,
                    }}
                  >
                    {hoverText ? (
                      <p style={{ margin: 0, fontSize: 13, color: '#4b5563', lineHeight: 1.7 }}>
                        {hoverText}
                      </p>
                    ) : (
                      <Icon size={56} color="#dc2626" />
                    )}
                  </div>

                  {/* Front face — red gradient, visible by default */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: '100%',
                      height: '100%',
                      padding: '28px',
                      boxSizing: 'border-box',
                      background: gradient,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      opacity: on ? 0 : 1,
                      transform: on
                        ? 'translate(-50%, -50%) rotate(-45deg)'
                        : 'translate(-50%, -50%) rotate(0deg)',
                      transition: `all 0.6s ${ease}`,
                    }}
                  >
                    <Icon size={36} color="rgba(255,255,255,0.85)" style={{ marginBottom: 14 }} />
                    <p style={{ margin: 0, fontSize: 17, color: '#ffffff', fontWeight: 700, lineHeight: 1.3 }}>{title}</p>
                    <p style={{ marginTop: 10, fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{description}</p>
                    <p style={{ marginTop: 18, fontSize: 12, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>
                      <span className="hidden md:inline">Hover</span>
                      <span className="md:hidden">Tap</span>
                      {' '}to learn more
                    </p>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
