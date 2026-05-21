import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { FadeUp, Ornament } from '../components/animations';
import { GALLERY_IMAGES } from '../data/gallery';

// Dedicated Gallery page — category filter, masonry grid, hover zoom, lightbox
export default function Gallery() {
  const categories = useMemo(() => {
    const set = new Set(GALLERY_IMAGES.map((i) => i.category).filter(Boolean));
    return ['All', ...Array.from(set)];
  }, []);

  const [filter, setFilter] = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const filtered = useMemo(
    () => (filter === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((i) => i.category === filter)),
    [filter]
  );

  const openLightbox  = (idx) => setLightboxIdx(idx);
  const closeLightbox = ()    => setLightboxIdx(null);
  const prevImg = (e) => { e?.stopPropagation(); setLightboxIdx((i) => (i - 1 + filtered.length) % filtered.length); };
  const nextImg = (e) => { e?.stopPropagation(); setLightboxIdx((i) => (i + 1) % filtered.length); };

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e) => {
      if (e.key === 'ArrowLeft')  prevImg();
      if (e.key === 'ArrowRight') nextImg();
      if (e.key === 'Escape')     closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIdx, filtered.length]);

  return (
    <>
      <PageBanner
        tagline="Moments Captured"
        title="Our Gallery"
        subtitle="Glimpses from our recent weddings, corporate events, traditional feasts and live counter celebrations across Hyderabad."
        image="/img1.jpg"
      />

      {/* Filter bar */}
      <section style={{ background: '#221F1F', padding: '70px 0 30px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 36 }}>
            <p className="section-kicker">Browse Our Best</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem,2.8vw,2.2rem)', marginTop: 4, marginBottom: 4 }}>Catering Moments</h2>
            <Ornament />
          </FadeUp>

          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`menu-tab${filter === cat ? ' active' : ''}`}
                style={{ borderRadius: 999, padding: '10px 24px', fontSize: '0.78rem' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry grid using CSS columns — true masonry effect */}
      <section style={{ background: '#221F1F', paddingBottom: 90 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div className="masonry-grid">
            <AnimatePresence>
              {filtered.map((img, idx) => (
                <motion.div
                  key={`${img.src}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="masonry-item gallery-item"
                  onClick={() => openLightbox(idx)}
                  style={{ cursor: 'pointer', border: '1px solid rgba(201,168,87,0.25)', borderRadius: 4, overflow: 'hidden', position: 'relative' }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    style={{ width: '100%', display: 'block', objectFit: 'cover', filter: 'brightness(0.92) contrast(1.05) saturate(1.1)', transition: 'transform 0.6s' }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.07)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div className="gallery-overlay" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0)', transition: 'background 0.35s' }}>
                    <span className="gallery-zoom-icon" style={{ color: '#C9A857', fontSize: '1.6rem', opacity: 0, border: '2px solid #C9A857', width: 56, height: 56, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</span>
                  </div>
                  {img.category && (
                    <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(34,31,31,0.85)', color: '#C9A857', padding: '4px 10px', fontSize: '0.7rem', fontFamily: '"DM Sans"', letterSpacing: '0.12em', textTransform: 'uppercase', border: '1px solid rgba(201,168,87,0.35)' }}>
                      {img.category}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && filtered[lightboxIdx] && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="lightbox"
            onClick={closeLightbox}
          >
            <motion.img
              key={filtered[lightboxIdx].src + lightboxIdx}
              initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
              src={filtered[lightboxIdx].src}
              alt={filtered[lightboxIdx].alt}
              style={{ maxWidth: '88vw', maxHeight: '82vh', objectFit: 'contain', borderRadius: 4, border: '2px solid rgba(201,168,87,0.4)' }}
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={closeLightbox}  aria-label="Close" style={{ position: 'absolute', top: 20, right: 24, background: 'rgba(201,168,87,0.95)', border: 'none', color: '#221F1F', width: 42, height: 42, fontSize: '1.1rem', cursor: 'pointer', borderRadius: '50%', fontWeight: 700 }}>✕</button>
            <button onClick={prevImg}  aria-label="Previous" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(201,168,87,0.15)', border: '1px solid rgba(201,168,87,0.4)', color: '#C9A857', width: 46, height: 46, fontSize: '1.3rem', cursor: 'pointer', borderRadius: '50%' }}>‹</button>
            <button onClick={nextImg}  aria-label="Next" style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(201,168,87,0.15)', border: '1px solid rgba(201,168,87,0.4)', color: '#C9A857', width: 46, height: 46, fontSize: '1.3rem', cursor: 'pointer', borderRadius: '50%' }}>›</button>

            <div style={{ position: 'absolute', bottom: 22, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'rgba(255,247,229,0.65)' }}>
              <p style={{ fontFamily: '"DM Sans"', fontSize: '0.95rem' }}>{filtered[lightboxIdx].alt}</p>
              <p style={{ fontFamily: '"DM Sans"', fontSize: '0.72rem', letterSpacing: '0.18em', marginTop: 4 }}>{lightboxIdx + 1} / {filtered.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection
        title="Like What You See?"
        subtitle="Let's create the next set of beautiful catering moments — at your event."
      />
    </>
  );
}
