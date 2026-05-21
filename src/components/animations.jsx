import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Gold horizontal accent line — used under section titles
export const GoldDivider = () => <div className="gold-divider my-4" />;

// Star rating row used in testimonials
export const StarRating = ({ count = 5 }) => (
  <div style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} style={{ color: '#d4a017' }}>★</span>
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
