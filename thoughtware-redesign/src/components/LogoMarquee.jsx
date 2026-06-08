import './LogoMarquee.css'

export default function LogoMarquee({ logos = [] }) {
  if (logos.length === 0) return null
  // Duplicate the list so the CSS loop is seamless
  const doubled = [...logos, ...logos]

  return (
    <div className="lm-track">
      <div className="lm-inner">
        {doubled.map((logo, i) => (
          <div key={i} className="lm-item">
            <img src={logo.src} alt={logo.alt} draggable={false} />
          </div>
        ))}
      </div>
    </div>
  )
}
