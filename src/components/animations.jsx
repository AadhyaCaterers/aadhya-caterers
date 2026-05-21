import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Gold horizontal accent line — used under section titles (legacy)
export const GoldDivider = () => <div className="gold-divider my-4" />;

// Ornamental filigree-style divider: thin line ✦ ❀ ✦ thin line — premium catering brochure feel
export const Ornament = ({ symbol = '✦ ❀ ✦', maxWidth = 280, className = '' }) => (
  <div className={`ornament-divider ${className}`} style={{ maxWidth }}>
    <span className="ornament-symbol">{symbol}</span>
  </div>
);

// Star rating row used in testimonials
export const StarRating = ({ count = 5 }) => (
  <div style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} style={{ color: '#C9A857', fontSize: '1.1rem' }}>★</span>
    ))}
  </div>
);

// Reusable fade-up wrapper triggered on scroll into view
export function FadeUp({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Reusable fade-from-side wrapper
export function FadeIn({ children, delay = 0, x = 0, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      style={style}
    >
      {children}
    </motion.div>
  );
}
