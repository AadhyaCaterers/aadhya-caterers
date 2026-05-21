import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { FadeUp, GoldDivider } from '../components/animations';
import { VIDEOS } from '../data/videos';
import { YOUTUBE_URL } from '../data/constants';

// Vertical reels card with play overlay; click → modal with embedded YouTube player
function ReelCard({ video, onPlay, index }) {
  return (
    <motion.button
      onClick={() => onPlay(video)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="video-card"
      style={{ background: 'transparent', padding: 0, textAlign: 'left' }}
      aria-label={`Play ${video.title}`}
    >
      {/* Vertical 9:16 thumbnail */}
      <img
        src={video.thumb}
        alt={video.title}
        loading="lazy"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      {/* Gradient + content */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.92) 100%)' }} />

      {/* Play overlay */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(212,160,23,0.95)', color: '#1a0e02', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 22px rgba(212,160,23,0.5)', fontSize: '1.4rem', paddingLeft: 4 }}>
            ▶
        </div>
      </div>

      {/* Top duration pill */}
      <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(26,14,2,0.85)', color: '#d4a017', padding: '4px 10px', fontSize: '0.72rem', borderRadius: 12, fontFamily: '"Lato"', border: '1px solid rgba(212,160,23,0.4)' }}>
        ⏱ {video.duration}
      </div>

      {/* Bottom title block */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 18px 18px' }}>
        <h3 style={{ fontFamily: '"Playfair Display"', color: '#fdf6e3', fontSize: '1.05rem', marginBottom: 6, lineHeight: 1.25 }}>{video.title}</h3>
        <p style={{ fontFamily: '"Lato"', color: 'rgba(253,246,227,0.75)', fontSize: '0.78rem', lineHeight: 1.5 }}>{video.desc}</p>
      </div>
    </motion.button>
  );
}

export default function Videos() {
  const [active, setActive] = useState(null);

  return (
    <>
      <PageBanner
        tagline="Behind The Scenes"
        title="Videos & Reels"
        subtitle="Catering shorts, live counter action and grand wedding setups — straight from our YouTube channel."
        image="/img4.jpg"
      />

      <section className="section-pad" style={{ background: '#1a0e02' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontFamily: '"Great Vibes"', fontSize: '2rem', color: '#d4a017' }}>Watch Aadhya in Action</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: 12 }}>Catering Reels & Shorts</h2>
            <GoldDivider />
            <p style={{ fontFamily: '"Cormorant Garamond"', color: 'rgba(253,246,227,0.8)', maxWidth: 720, margin: '16px auto 0', lineHeight: 1.7 }}>
              Quick vertical clips capturing the magic of our weddings, live counters and traditional Telugu feasts.
            </p>
          </FadeUp>

          {/* Horizontal scroll on mobile, multi-column grid on desktop */}
          <div className="reels-grid">
            {VIDEOS.map((video, i) => (
              <ReelCard key={`${video.id}-${i}`} video={video} index={i} onPlay={setActive} />
            ))}
          </div>

          <FadeUp style={{ textAlign: 'center', marginTop: 50 }}>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ textDecoration: 'none' }}>
              ▶ View All on YouTube
            </a>
          </FadeUp>
        </div>
      </section>

      {/* YouTube embed modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="lightbox"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{ width: 'min(420px, 92vw)', aspectRatio: '9/16', background: '#000', border: '2px solid rgba(212,160,23,0.4)', borderRadius: 8, overflow: 'hidden', position: 'relative' }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${active.id}?autoplay=1&rel=0`}
                title={active.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
              />
            </motion.div>
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              style={{ position: 'absolute', top: 20, right: 24, background: 'rgba(212,160,23,0.95)', border: 'none', color: '#1a0e02', width: 40, height: 40, fontSize: '1.1rem', cursor: 'pointer', borderRadius: '50%', fontWeight: 700 }}
            >✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection
        title="Inspired by What You Saw?"
        subtitle="Let's plan a celebration worth filming. Get in touch with our team today."
      />
    </>
  );
}
