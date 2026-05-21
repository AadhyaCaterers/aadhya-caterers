import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/testimonials';
import { FadeUp, StarRating } from './animations';

const Ornament = ({ maxWidth = 280 }) => (
  <div className="ornament-divider" style={{ maxWidth }}>
    <span className="ornament-symbol">✦ ❀ ✦</span>
  </div>
);

// Auto-rotating client testimonials — bright rose-cream background, white luxury card
export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-pad rose-section" id="testimonials">
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <FadeUp style={{ textAlign: 'center', marginBottom: 50 }}>
          <p className="section-kicker">Happy Clients</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', marginTop: 4 }}>
            What Our <span style={{
              background: 'linear-gradient(135deg, #B8923D, #C9A14A, #8B6B2A)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
              fontStyle: 'italic',
            }}>Clients</span> Say
          </h2>
          <Ornament />
        </FadeUp>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.55 }}
            className="testimonial-card"
            style={{ textAlign: 'center' }}
          >
            <div style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: '5.5rem',
              color: '#C9A14A',
              marginBottom: 4,
              opacity: 0.45,
              lineHeight: 0.6,
            }}>"</div>
            <p style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '1.22rem',
              color: '#3B2A1F',
              lineHeight: 1.85,
              marginBottom: 28,
              fontStyle: 'italic',
              fontWeight: 400,
            }}>
              {TESTIMONIALS[current].text}
            </p>
            <StarRating count={TESTIMONIALS[current].rating} />
            <div style={{ marginTop: 20 }}>
              <p style={{
                fontFamily: '"Playfair Display", serif',
                color: '#3B2A1F',
                fontSize: '1.15rem',
                fontWeight: 700,
              }}>
                {TESTIMONIALS[current].name}
              </p>
              <p style={{
                fontFamily: '"DM Sans", sans-serif',
                color: '#C0392B',
                fontSize: '0.78rem',
                letterSpacing: '0.20em',
                marginTop: 6,
                textTransform: 'uppercase',
                fontWeight: 700,
              }}>
                {TESTIMONIALS[current].event}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 32 }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Show testimonial ${i + 1}`}
              style={{
                width: i === current ? 36 : 10,
                height: 10,
                borderRadius: 5,
                background: i === current
                  ? 'linear-gradient(90deg, #C9A14A, #8B6B2A)'
                  : 'rgba(139,107,42,0.30)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
