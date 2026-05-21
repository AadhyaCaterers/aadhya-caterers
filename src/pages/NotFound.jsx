import React from 'react';
import { Link } from 'react-router-dom';

// Friendly 404 page rendered for any unknown route
export default function NotFound() {
  return (
    <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1a0e02', padding: '120px 24px 60px', textAlign: 'center' }}>
      <div style={{ maxWidth: 560 }}>
        <p style={{ fontFamily: '"Great Vibes"', fontSize: '2.4rem', color: '#d4a017' }}>Oops!</p>
        <h1 style={{ fontFamily: '"Playfair Display"', color: '#fdf6e3', fontSize: 'clamp(2.2rem, 6vw, 4rem)', margin: '8px 0 12px' }}>404 — Page Not Found</h1>
        <div className="gold-divider" style={{ margin: '0 auto 22px' }} />
        <p style={{ fontFamily: '"Cormorant Garamond"', color: 'rgba(253,246,227,0.78)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 28 }}>
          The page you were looking for doesn't exist or has been moved. Let's get you back to the feast.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-gold" style={{ textDecoration: 'none' }}>← Back to Home</Link>
          <Link to="/contact" className="btn-outline-gold" style={{ textDecoration: 'none' }}>Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
