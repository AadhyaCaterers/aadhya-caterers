import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { FadeUp, GoldDivider } from '../components/animations';
import { GALLERY_IMAGES } from '../data/gallery';

// Dedicated Gallery page — category filter, masonry-style grid, hover zoom, lightbox
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
      <section style={{ background: '#1a0e02', padding: '60px 0 30px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 30 }}>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.4rem,2.6vw,2rem)', marginBottom: 12 }}>Browse Our Best Moments</h2>
            <GoldDivider />
          </FadeUp>

          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 8 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`menu-tab${filter === cat ? ' active' : ''}`}
                style={{ borderRadius: 999, padding: '9px 22px', fontSize: '0.78rem' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry grid using CSS columns — true masonry effect */}
      <section style={{ background: '#1a0e02', paddingBottom: 80 }}>
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
                  style={{ cursor: 'pointer', border: '1px solid rgba(212,160,23,0.2)', borderRadius: 4, overflow: 'hidden', position: 'relative' }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    style={{ width: '100%', display: 'block', objectFit: 'cover', filter: 'brightness(0.92) contrast(1.05) saturate(1.1)', transition: 'transform 0.5s' }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div className="gallery-overlay" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0)', transition: 'background 0.3s' }}>
                    <span className="gallery-zoom-icon" style={{ color: 'white', fontSize: '1.8rem', opacity: 0, transition: 'opacity 0.3s' }}>🔍</span>
                  </div>
                  {img.category && (
                    <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(26,14,2,0.85)', color: '#d4a017', padding: '4px 10px', fontSize: '0.7rem', fontFamily: '"Lato"', letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid rgba(212,160,23,0.3)' }}>
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
              style={{ maxWidth: '88vw', maxHeight: '82vh', objectFit: 'contain', borderRadius: 4, border: '2px solid rgba(212,160,23,0.4)' }}
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={closeLightbox}  aria-label="Close" style={{ position: 'absolute', top: 20, right: 24, background: 'rgba(212,160,23,0.9)', border: 'none', color: '#1a0e02', width: 40, height: 40, fontSize: '1.1rem', cursor: 'pointer', borderRadius: '50%', fontWeight: 700 }}>✕</button>
            <button onClick={prevImg}        aria-label="Previous" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.4)', color: '#d4a017', width: 44, height: 44, fontSize: '1.3rem', cursor: 'pointer', borderRadius: '50%' }}>‹</button>
            <button onClick={nextImg}        aria-label="Next"     style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.4)', color: '#d4a017', width: 44, height: 44, fontSize: '1.3rem', cursor: 'pointer', borderRadius: '50%' }}>›</button>

            <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'rgba(253,246,227,0.65)' }}>
              <p style={{ fontFamily: '"Cormorant Garamond"', fontSize: '0.95rem' }}>{filtered[lightboxIdx].alt}</p>
              <p style={{ fontFamily: '"Lato"', fontSize: '0.72rem', letterSpacing: '0.12em', marginTop: 4 }}>{lightboxIdx + 1} / {filtered.length}</p>
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
