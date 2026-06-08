import { useRef, useEffect, useState } from 'react';
import './CurvedLoop.css';

// Desktop constants
const D_LOGO_W  = 400;
const D_LOGO_H  = 140;
const D_SPACING = 460;
const D_VB_W    = 1440;

// Mobile constants (< 768px) — smaller viewBox so logos fill more of the screen
const M_LOGO_W  = 420;
const M_LOGO_H  = 150;
const M_SPACING = 340;
const M_VB_W    = 700;

const CurvedLoop = ({
  logos       = [],
  speed       = 2,
  curveAmount = 200,
  direction   = 'left',
  interactive = true,
}) => {
  const pathRef      = useRef(null);
  const containerRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  const [slots, setSlots]           = useState([]);
  const [vbWidth, setVbWidth]       = useState(D_VB_W);

  const isMobile = vbWidth === M_VB_W;
  const LOGO_W   = isMobile ? M_LOGO_W  : D_LOGO_W;
  const LOGO_H   = isMobile ? M_LOGO_H  : D_LOGO_H;
  const SPACING  = isMobile ? M_SPACING : D_SPACING;

  const pathD = `M-100,40 Q${vbWidth / 2},${40 + curveAmount} ${vbWidth + 100},40`;
  const VB_H  = 40 + curveAmount / 2 + LOGO_H + 30;

  const offsetRef = useRef(0);
  const speedRef  = useRef(direction === 'right' ? -speed : speed);
  const dragRef   = useRef(false);
  const lastXRef  = useRef(0);
  const velRef    = useRef(0);
  const animRef   = useRef(null);

  const n = logos.length;

  // Track screen width and switch viewBox breakpoint
  useEffect(() => {
    const update = () => setVbWidth(window.innerWidth < 768 ? M_VB_W : D_VB_W);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Re-measure path whenever the viewBox (and therefore pathD) changes
  useEffect(() => {
    if (pathRef.current) setPathLength(pathRef.current.getTotalLength());
  }, [vbWidth]);

  // Animation loop — restarts when pathLength or logo count changes
  useEffect(() => {
    if (!pathLength || n === 0) return;

    const step = () => {
      if (!dragRef.current) offsetRef.current += speedRef.current;

      const off    = offsetRef.current;
      const kFirst = Math.floor(off / SPACING) - 1;
      const kLast  = Math.ceil((off + pathLength) / SPACING) + 1;

      const next = [];
      for (let k = kFirst; k <= kLast; k++) {
        const dist = k * SPACING - off;
        if (dist < 0 || dist > pathLength) continue;
        const pt      = pathRef.current.getPointAtLength(dist);
        const logoIdx = ((k % n) + n) % n;
        next.push({ x: pt.x, y: pt.y, logoIdx, key: k });
      }

      setSlots(next);
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [pathLength, n, SPACING]);

  const toSVG = () => {
    const w = containerRef.current?.getBoundingClientRect().width || vbWidth;
    return vbWidth / w;
  };

  const onPointerDown = e => {
    if (!interactive) return;
    dragRef.current  = true;
    lastXRef.current = e.clientX;
    velRef.current   = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = e => {
    if (!interactive || !dragRef.current) return;
    const dx         = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current   = dx;
    offsetRef.current -= dx * toSVG();
  };

  const endDrag = () => {
    if (!interactive || !dragRef.current) return;
    dragRef.current = false;
    if (velRef.current !== 0)
      speedRef.current = velRef.current > 0 ? -Math.abs(speed) : Math.abs(speed);
  };

  return (
    <div
      ref={containerRef}
      className="curved-loop-jacket"
      style={{ cursor: interactive ? 'grab' : 'auto' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg className="curved-loop-svg" viewBox={`0 0 ${vbWidth} ${VB_H}`}>
        <defs>
          <path ref={pathRef} d={pathD} fill="none" stroke="none" />
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
              className="cl-logo"
            />
          ) : null
        )}
      </svg>
    </div>
  );
};

export default CurvedLoop;
