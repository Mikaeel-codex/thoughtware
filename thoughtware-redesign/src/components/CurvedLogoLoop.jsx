import { useRef, useEffect, useState } from 'react'
import './CurvedLogoLoop.css'

const VB_W    = 1440
const CURVE   = 90
const PATH_D  = `M-100,50 Q${VB_W / 2},${50 + CURVE} ${VB_W + 100},50`
const LOGO_W  = 220
const LOGO_H  = 80
const SPACING = 300
// Approximate max y on curve: 50 + CURVE/2 (quadratic bezier midpoint)
const VB_H    = 50 + CURVE / 2 + LOGO_H + 30

export default function CurvedLogoLoop({ logos = [], speed = 1.5 }) {
  const pathRef      = useRef(null)
  const containerRef = useRef(null)
  const [pathLength, setPathLength] = useState(0)
  const [slots, setSlots]           = useState([])

  const offsetRef = useRef(0)
  const speedRef  = useRef(speed)
  const dragRef   = useRef(false)
  const lastXRef  = useRef(0)
  const velRef    = useRef(0)
  const animRef   = useRef(null)

  const n = logos.length

  // Measure path once it's in the DOM
  useEffect(() => {
    if (pathRef.current) setPathLength(pathRef.current.getTotalLength())
  }, [])

  // Animation loop
  useEffect(() => {
    if (!pathLength || n === 0) return

    const step = () => {
      if (!dragRef.current) offsetRef.current += speedRef.current

      const off    = offsetRef.current
      const kFirst = Math.floor(off / SPACING) - 1
      const kLast  = Math.ceil((off + pathLength) / SPACING) + 1

      const next = []
      for (let k = kFirst; k <= kLast; k++) {
        const dist = k * SPACING - off
        if (dist < 0 || dist > pathLength) continue
        const pt      = pathRef.current.getPointAtLength(dist)
        const logoIdx = ((k % n) + n) % n
        next.push({ x: pt.x, y: pt.y, logoIdx, key: k })
      }

      setSlots(next)
      animRef.current = requestAnimationFrame(step)
    }

    animRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animRef.current)
  }, [pathLength, n])

  // Map screen-pixel drag distance to SVG units
  const toSVG = () => {
    const w = containerRef.current?.getBoundingClientRect().width || VB_W
    return VB_W / w
  }

  const onPointerDown = e => {
    dragRef.current = true
    lastXRef.current = e.clientX
    velRef.current   = 0
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = e => {
    if (!dragRef.current) return
    const dx       = e.clientX - lastXRef.current
    lastXRef.current = e.clientX
    velRef.current   = dx
    offsetRef.current -= dx * toSVG()
  }

  const endDrag = () => {
    if (!dragRef.current) return
    dragRef.current = false
    // Flip scroll direction to match the last drag gesture
    if (velRef.current !== 0)
      speedRef.current = velRef.current > 0 ? -Math.abs(speed) : Math.abs(speed)
  }

  return (
    <div
      ref={containerRef}
      className="cll-wrapper"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="cll-svg">
        {/* Hidden path used only for length measurement and getPointAtLength */}
        <defs>
          <path ref={pathRef} d={PATH_D} fill="none" stroke="none" />
        </defs>

        {slots.map(({ x, y, logoIdx, key }) =>
          logos[logoIdx] ? (
            <image
              key={key}
              href={logos[logoIdx].src}
              x={x - LOGO_W / 2}
              y={y - LOGO_H / 2}
              width={LOGO_W}
              height={LOGO_H}
              preserveAspectRatio="xMidYMid meet"
              className="cll-logo"
            />
          ) : null
        )}
      </svg>
    </div>
  )
}
