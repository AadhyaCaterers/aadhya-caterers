import React from 'react';
import { Link } from 'react-router-dom';
import { FadeUp } from './animations';
import { WHATSAPP_URL, PHONE_PRIMARY } from '../data/constants';

// Premium CTA banner — deep luxury maroon gradient with gold ornaments
// (rich wedding-invitation feel; NOT black, NOT dull — warm and elegant)
export default function CTASection({
  title = 'Plan Your Perfect Event With Us',
  subtitle = 'From intimate gatherings to grand wedding feasts — let Aadhya Caterers craft an unforgettable culinary experience for your special occasion.',
  primaryLabel = 'Call Now',
  primaryHref = `tel:${PHONE_PRIMARY}`,
  secondaryLabel = 'WhatsApp Us',
  secondaryHref = WHATSAPP_URL,
  showBookLink = true,
}) {
  return (
    <section className="section-pad maroon-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative gold corner ornaments */}
      <div style={{
        position: 'absolute', top: 32, left: 32, width: 60, height: 60,
        borderTop: '2px solid rgba(229,199,127,0.55)',
        borderLeft: '2px solid rgba(229,199,127,0.55)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 32, right: 32, width: 60, height: 60,
        borderTop: '2px solid rgba(229,199,127,0.55)',
        borderRight: '2px solid rgba(229,199,127,0.55)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 32, left: 32, width: 60, height: 60,
        borderBottom: '2px solid rgba(229,199,127,0.55)',
        borderLeft: '2px solid rgba(229,199,127,0.55)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 32, right: 32, width: 60, height: 60,
        borderBottom: '2px solid rgba(229,199,127,0.55)',
        borderRight: '2px solid rgba(229,199,127,0.55)',
        pointerEvents: 'none',
      }} />

      {/* Soft pattern overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(229,199,127,0.06) 60px, rgba(229,199,127,0.06) 120px)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 920,
        margin: '0 auto',
        padding: '0 32px',
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
      }}>
        <FadeUp>
          <p className="section-kicker">Let's Celebrate</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3rem)', marginTop: 4, lineHeight: 1.18 }}>
            {title}
          </h2>
          <div className="ornament-divider" style={{ maxWidth: 280 }}>
            <span className="ornament-symbol">✦ ❀ ✦</span>
          </div>
          <p style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '1.18rem',
            color: 'rgba(255,251,242,0.94)',
            marginTop: 16,
            lineHeight: 1.78,
          }}>
            {subtitle}
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 14,
            flexWrap: 'wrap',
            marginTop: 38,
          }}>
            <a href={primaryHref} className="btn-gold" style={{ textDecoration: 'none' }}>
              <span>📞 &nbsp;{primaryLabel}</span>
            </a>
            <a href={secondaryHref} target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ textDecoration: 'none' }}>
              {secondaryLabel}
            </a>
            {showBookLink && (
              <Link to="/contact" className="btn-outline-gold" style={{ textDecoration: 'none' }}>
                Book Now
              </Link>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
