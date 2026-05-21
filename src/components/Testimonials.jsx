import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/testimonials';
import { FadeUp, GoldDivider, StarRating } from './animations';

// Auto-rotating client testimonials carousel
export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % TESTIMONIALS.length), 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-pad" id="testimonials" style={{ background: '#1a0e02' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
        <FadeUp style={{ textAlign: 'center', marginBottom: 50 }}>
          <p style={{ fontFamily: '"Great Vibes"', fontSize: '2rem', color: '#d4a017' }}>Happy Clients</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: 12 }}>What Our Clients Say</h2>
          <GoldDivider />
        </FadeUp>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="testimonial-card"
            style={{ borderRadius: 2, textAlign: 'center' }}
          >
            <div style={{ fontSize: '3rem', color: '#d4a017', marginBottom: 16, opacity: 0.4 }}>"</div>
            <p style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.15rem', color: 'rgba(253,246,227,0.9)', lineHeight: 1.8, marginBottom: 24, fontStyle: 'italic' }}>
              {TESTIMONIALS[current].text}
            </p>
            <StarRating count={TESTIMONIALS[current].rating} />
            <div style={{ marginTop: 16 }}>
              <p style={{ fontFamily: '"Playfair Display",serif', color: '#d4a017', fontSize: '1rem', fontWeight: 600 }}>{TESTIMONIALS[current].name}</p>
              <p style={{ fontFamily: '"Lato",sans-serif', color: 'rgba(253,246,227,0.6)', fontSize: '0.8rem', letterSpacing: '0.05em', marginTop: 4 }}>{TESTIMONIALS[current].event}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 28 }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Show testimonial ${i + 1}`}
              style={{ width: i === current ? 28 : 10, height: 10, borderRadius: 5, background: i === current ? '#d4a017' : 'rgba(212,160,23,0.3)', border: 'none', cursor: 'pointer', transition: 'all 0.3s' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
