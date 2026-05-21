import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/testimonials';
import { FadeUp, StarRating } from './animations';

// Reusable ornamental divider
const Ornament = ({ maxWidth = 280 }) => (
  <div className="ornament-divider" style={{ maxWidth }}>
    <span className="ornament-symbol">✦ ❀ ✦</span>
  </div>
);

// Auto-rotating client testimonials carousel
export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-pad" id="testimonials" style={{ background: '#1a0e02', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/img2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.05 }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <FadeUp style={{ textAlign: 'center', marginBottom: 50 }}>
          <p className="section-kicker">Happy Clients</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', marginTop: 4, marginBottom: 4 }}>What Our Clients Say</h2>
          <Ornament />
        </FadeUp>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.55 }}
            className="testimonial-card"
            style={{ borderRadius: 4, textAlign: 'center' }}
          >
            <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '4.5rem', color: '#d4a017', marginBottom: 8, opacity: 0.35, lineHeight: 0.6 }}>“</div>
            <p style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.2rem', color: 'rgba(253,246,227,0.92)', lineHeight: 1.85, marginBottom: 26, fontStyle: 'italic' }}>
              {TESTIMONIALS[current].text}
            </p>
            <StarRating count={TESTIMONIALS[current].rating} />
            <div style={{ marginTop: 18 }}>
              <p style={{ fontFamily: '"Playfair Display",serif', color: '#d4a017', fontSize: '1.05rem', fontWeight: 600 }}>{TESTIMONIALS[current].name}</p>
              <p style={{ fontFamily: '"Lato",sans-serif', color: 'rgba(253,246,227,0.6)', fontSize: '0.78rem', letterSpacing: '0.18em', marginTop: 4, textTransform: 'uppercase' }}>
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
              style={{ width: i === current ? 32 : 10, height: 10, borderRadius: 5, background: i === current ? '#d4a017' : 'rgba(212,160,23,0.3)', border: 'none', cursor: 'pointer', transition: 'all 0.35s' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
