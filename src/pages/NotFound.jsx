import React from 'react';
import { Link } from 'react-router-dom';
import { Ornament } from '../components/animations';

// Friendly 404 page rendered for any unknown route
export default function NotFound() {
  return (
    <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom, #221F1F, #1A1717)', padding: '160px 24px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/img7.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.07 }} />

      <div style={{ maxWidth: 600, position: 'relative', zIndex: 1 }}>
        <p style={{ fontFamily: '"Playfair Display"', fontStyle: 'italic', fontSize: '1.6rem', color: '#B62121', lineHeight: 1, fontWeight: 500 }}>Oops!</p>
        <h1 style={{ fontFamily: '"Playfair Display"', color: '#FFF7E5', fontSize: 'clamp(2.4rem, 7vw, 4.4rem)', margin: '8px 0 8px', fontWeight: 700, lineHeight: 1.1 }}>
          404 — Page Not Found
        </h1>
        <Ornament />
        <p style={{ fontFamily: '"DM Sans"', color: 'rgba(255,247,229,0.82)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: 32, marginTop: 6 }}>
          The page you were looking for doesn't exist or has been moved.
          <br />
          Let's get you back to the feast.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-gold" style={{ textDecoration: 'none' }}>Back to Home</Link>
          <Link to="/contact" className="btn-outline-gold" style={{ textDecoration: 'none' }}>Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
