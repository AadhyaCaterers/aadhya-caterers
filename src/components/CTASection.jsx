import React from 'react';
import { Link } from 'react-router-dom';
import { FadeUp, GoldDivider } from './animations';
import { WHATSAPP_URL, PHONE_PRIMARY } from '../data/constants';

// Reusable Call-To-Action section — used on Home + most sub-pages
export default function CTASection({
  title = 'Plan Your Perfect Event With Us',
  subtitle = 'From intimate gatherings to grand wedding feasts — let Aadhya Caterers craft an unforgettable culinary experience for your special occasion.',
  primaryLabel = '📞 Call Now',
  primaryHref = `tel:${PHONE_PRIMARY}`,
  secondaryLabel = '💬 WhatsApp Us',
  secondaryHref = WHATSAPP_URL,
  showBookLink = true,
}) {
  return (
    <section
      className="section-pad pattern-overlay"
      style={{ background: 'linear-gradient(135deg, #1a0e02 0%, #2d1a06 100%)', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/img2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }} />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <FadeUp>
          <p style={{ fontFamily: '"Great Vibes"', fontSize: '2rem', color: '#d4a017', marginBottom: 6 }}>Let's Celebrate</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: 14 }}>{title}</h2>
          <GoldDivider />
          <p style={{ fontFamily: '"Cormorant Garamond"', fontSize: '1.1rem', color: 'rgba(253,246,227,0.8)', marginTop: 20, lineHeight: 1.7 }}>
            {subtitle}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap', marginTop: 28 }}>
            <a href={primaryHref} className="btn-gold" style={{ textDecoration: 'none' }}>{primaryLabel}</a>
            <a href={secondaryHref} target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ textDecoration: 'none' }}>{secondaryLabel}</a>
            {showBookLink && (
              <Link to="/contact" className="btn-outline-gold" style={{ textDecoration: 'none' }}>📝 Book Now</Link>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
