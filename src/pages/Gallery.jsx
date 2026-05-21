import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { FadeUp, Ornament } from '../components/animations';
import { GALLERY_IMAGES } from '../data/gallery';

// Bright cream Gallery page — category filter, masonry grid, lightbox (lightbox stays dark for proper image viewing)
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
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prevImg = useCallback((e) => { e?.stopPropagation(); setLightboxIdx((i) => (i - 1 + filtered.length) % filtered.length); }, [filtered.length]);
  const nextImg = useCallback((e) => { e?.stopPropagation(); setLightboxIdx((i) => (i + 1) % filtered.length); }, [filtered.length]);

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
  }, [lightboxIdx, filtered.length, prevImg, nextImg, closeLightbox]);

  return (
    <>
      <PageBanner
        tagline="Moments Captured"
        title="Our Gallery"
        subtitle="Glimpses from our recent weddings, corporate events, traditional feasts and live counter celebrations across Hyderabad."
        image="/img1.jpg"
      />

      {/* ── FILTER BAR (cream) ────────────────────────────────────── */}
      <section className="cream-section" style={{ padding: '80px 0 30px', position: 'relative' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 36 }}>
            <p className="section-kicker">Browse Our Best</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', marginTop: 4 }}>
              Catering <span style={{
                background: 'linear-gradient(135deg, #B8923D, #C9A14A, #8B6B2A)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                fontStyle: 'italic',
              }}>Moments</span>
            </h2>
            <Ornament />
          </FadeUp>

          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`menu-tab${filter === cat ? ' active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── MASONRY GRID (cream) ──────────────────────────────────── */}
      <section className="cream-section" style={{ paddingBottom: 100, position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
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
                  style={{
                    cursor: 'pointer',
                    border: '4px solid #FFFBF2',
                    borderRadius: 10,
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 12px 26px rgba(139,107,42,0.18)',
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    style={{
                      width: '100%',
                      display: 'block',
                      objectFit: 'cover',
                      filter: 'saturate(1.10) contrast(1.04)',
                      transition: 'transform 0.6s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div className="gallery-overlay" style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(0,0,0,0)',
                    transition: 'background 0.4s',
                  }}>
                    <span className="gallery-zoom-icon" style={{
                      color: '#FFFBF2',
                      fontSize: '1.6rem',
                      opacity: 0,
                      border: '2px solid #FFFBF2',
                      width: 60, height: 60,
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(192,57,43,0.85)',
                      backdropFilter: 'blur(4px)',
                    }}>+</span>
                  </div>
                  {img.category && (
                    <div style={{
                      position: 'absolute', top: 12, left: 12,
                      background: 'rgba(255,251,242,0.94)',
                      color: '#8B6B2A',
                      padding: '4px 12px',
                      fontSize: '0.7rem',
                      fontFamily: '"DM Sans"',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      border: '1px solid rgba(139,107,42,0.30)',
                      borderRadius: 12,
                      fontWeight: 700,
                    }}>
                      {img.category}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox stays dark for proper image viewing — common pattern */}
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
              style={{
                maxWidth: '88vw', maxHeight: '82vh', objectFit: 'contain',
                borderRadius: 8,
                border: '3px solid rgba(229,199,127,0.5)',
              }}
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={closeLightbox} aria-label="Close" style={{
              position: 'absolute', top: 20, right: 24,
              background: 'linear-gradient(135deg, #E5C77F, #C9A14A)',
              border: 'none', color: '#3B2A1F',
              width: 44, height: 44, fontSize: '1.1rem', cursor: 'pointer',
              borderRadius: '50%', fontWeight: 700,
              boxShadow: '0 6px 18px rgba(0,0,0,0.4)',
            }}>✕</button>
            <button onClick={prevImg} aria-label="Previous" style={{
              position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(229,199,127,0.20)',
              border: '1px solid rgba(229,199,127,0.5)',
              color: '#E5C77F', width: 48, height: 48, fontSize: '1.4rem',
              cursor: 'pointer', borderRadius: '50%',
            }}>‹</button>
            <button onClick={nextImg} aria-label="Next" style={{
              position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(229,199,127,0.20)',
              border: '1px solid rgba(229,199,127,0.5)',
              color: '#E5C77F', width: 48, height: 48, fontSize: '1.4rem',
              cursor: 'pointer', borderRadius: '50%',
            }}>›</button>

            <div style={{
              position: 'absolute', bottom: 22, left: '50%', transform: 'translateX(-50%)',
              textAlign: 'center', color: 'rgba(255,251,242,0.75)',
            }}>
              <p style={{ fontFamily: '"DM Sans"', fontSize: '0.95rem' }}>{filtered[lightboxIdx].alt}</p>
              <p style={{ fontFamily: '"DM Sans"', fontSize: '0.72rem', letterSpacing: '0.18em', marginTop: 4 }}>
                {lightboxIdx + 1} / {filtered.length}
              </p>
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
