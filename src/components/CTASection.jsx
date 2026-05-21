import React from 'react';
import { Link } from 'react-router-dom';
import { FadeUp } from './animations';
import { WHATSAPP_URL, PHONE_PRIMARY } from '../data/constants';

// Reusable Call-To-Action banner — used on Home + most sub-pages
export default function CTASection({
  title = 'Plan Your Perfect Event With Us',
  subtitle = 'From intimate gatherings to grand wedding feasts — let Aadhya Caterers craft an unforgettable culinary experience for your special occasion.',
  primaryLabel = 'Call Now',
  primaryHref = `tel:${PHONE_PRIMARY}`,
  secondaryLabel = 'WhatsApp Us',
  secondaryHref = WHATSAPP_URL,
  showBookLink = true,
  image = '/img2.jpg',
}) {
  return (
    <section
      className="section-pad pattern-overlay"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Background image with heavy dark overlay (luxury catering feel) */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.35) contrast(1.1)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(34,31,31,0.92), rgba(42,36,36,0.85), rgba(34,31,31,0.95))' }} />
      {/* Gold border ornament */}
      <div style={{ position: 'absolute', inset: 30, border: '1px solid rgba(201,168,87,0.25)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <FadeUp>
          <p className="section-kicker">Let's Celebrate</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,3.4vw,2.8rem)', marginTop: 4, marginBottom: 4, lineHeight: 1.2 }}>{title}</h2>
          <div className="ornament-divider" style={{ maxWidth: 260 }}>
            <span className="ornament-symbol">✦ ❀ ✦</span>
          </div>
          <p style={{ fontFamily: '"DM Sans"', fontSize: '1.15rem', color: 'rgba(255,247,229,0.88)', marginTop: 14, lineHeight: 1.75 }}>
            {subtitle}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap', marginTop: 32 }}>
            <a href={primaryHref} className="btn-gold" style={{ textDecoration: 'none' }}>{primaryLabel}</a>
            <a href={secondaryHref} target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ textDecoration: 'none' }}>{secondaryLabel}</a>
            {showBookLink && (
              <Link to="/contact" className="btn-outline-gold" style={{ textDecoration: 'none' }}>Book Now</Link>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
