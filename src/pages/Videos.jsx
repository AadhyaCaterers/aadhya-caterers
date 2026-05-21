import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { FadeUp, Ornament } from '../components/animations';
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
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.94) 100%)' }} />

      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 68, height: 68, borderRadius: '50%', background: 'rgba(201,168,87,0.96)', color: '#221F1F', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 26px rgba(201,168,87,0.55)', fontSize: '1.4rem', paddingLeft: 4 }}>
          ▶
        </div>
      </div>

      <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(34,31,31,0.85)', color: '#C9A857', padding: '4px 10px', fontSize: '0.72rem', borderRadius: 12, fontFamily: '"DM Sans"', border: '1px solid rgba(201,168,87,0.4)' }}>
        ⏱ {video.duration}
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '22px 18px 18px' }}>
        <h3 style={{ fontFamily: '"Playfair Display"', color: '#FFF7E5', fontSize: '1.05rem', marginBottom: 6, lineHeight: 1.25 }}>{video.title}</h3>
        <p style={{ fontFamily: '"DM Sans"', color: 'rgba(255,247,229,0.78)', fontSize: '0.78rem', lineHeight: 1.5 }}>{video.desc}</p>
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

      <section className="section-pad" style={{ background: '#221F1F', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/img7.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.05 }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 50 }}>
            <p className="section-kicker">Watch Aadhya in Action</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', marginTop: 4, marginBottom: 4 }}>Catering Reels &amp; Shorts</h2>
            <Ornament />
            <p style={{ fontFamily: '"DM Sans"', color: 'rgba(255,247,229,0.85)', fontSize: '1.1rem', maxWidth: 720, margin: '14px auto 0', lineHeight: 1.7 }}>
              Quick vertical clips capturing the magic of our weddings, live counters and traditional Telugu feasts.
            </p>
          </FadeUp>

          <div className="reels-grid">
            {VIDEOS.map((video, i) => (
              <ReelCard key={`${video.id}-${i}`} video={video} index={i} onPlay={setActive} />
            ))}
          </div>

          <FadeUp style={{ textAlign: 'center', marginTop: 56 }}>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ textDecoration: 'none' }}>
              View All on YouTube
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
              style={{ width: 'min(420px, 92vw)', aspectRatio: '9/16', background: '#000', border: '2px solid rgba(201,168,87,0.4)', borderRadius: 8, overflow: 'hidden', position: 'relative' }}
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
              style={{ position: 'absolute', top: 20, right: 24, background: 'rgba(201,168,87,0.95)', border: 'none', color: '#221F1F', width: 42, height: 42, fontSize: '1.1rem', cursor: 'pointer', borderRadius: '50%', fontWeight: 700 }}
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
