import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import { FadeUp, FadeIn, GoldDivider } from '../components/animations';
import { SERVICES } from '../data/services';
import { GALLERY_IMAGES } from '../data/gallery';

// Home page = light previews + CTAs that route to full pages
export default function Home() {
  // Show only first N items as preview
  const servicePreview = SERVICES.slice(0, 4);
  const galleryPreview = GALLERY_IMAGES.slice(0, 6);

  return (
    <>
      <Hero />

      {/* ── ABOUT PREVIEW ─────────────────────────────────────────── */}
      <section id="about-preview" className="section-pad pattern-overlay" style={{ background: 'linear-gradient(to bottom, #1a0e02, #2d1a06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>
            <FadeIn x={-40}>
              <div style={{ position: 'relative', paddingBottom: 40 }}>
                <div style={{ position: 'relative', borderRadius: 2, overflow: 'hidden', border: '2px solid rgba(212,160,23,0.3)' }}>
                  <img src="/img6.jpg" alt="Catering service" style={{ width: '100%', height: 420, objectFit: 'cover', filter: 'brightness(0.95) contrast(1.05) saturate(1.1)', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,14,2,0.4), transparent)' }} />
                </div>
                <div style={{ position: 'absolute', bottom: 10, right: -20, width: '55%', border: '3px solid #1a0e02', borderRadius: 2, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}>
                  <img src="/img2.jpg" alt="Buffet setup" style={{ width: '100%', height: 200, objectFit: 'cover', filter: 'brightness(0.95) contrast(1.05)', display: 'block' }} />
                </div>
                <div style={{ position: 'absolute', top: 20, left: -15, background: 'linear-gradient(135deg,#d4a017,#f2cd25)', color: '#1a0e02', padding: '12px 20px', fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: '0.85rem', textAlign: 'center', boxShadow: '0 4px 16px rgba(212,160,23,0.4)' }}>
                  8+ Years<br /><span style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>OF EXCELLENCE</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn x={40} delay={0.2}>
              <p style={{ fontFamily: '"Great Vibes", cursive', fontSize: '2rem', color: '#d4a017', marginBottom: 8 }}>About Us</p>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: 16, lineHeight: 1.3 }}>
                Hyderabad's Most Trusted<br />Catering Partner
              </h2>
              <GoldDivider />
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem', color: 'rgba(253,246,227,0.85)', lineHeight: 1.8, marginTop: 20, marginBottom: 16 }}>
                Aadhya Caterers is a premium catering service based in Hyderabad, dedicated to delivering exceptional culinary experiences for weddings, corporate events, birthday celebrations, house warmings and all special occasions.
              </p>
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem', color: 'rgba(253,246,227,0.75)', lineHeight: 1.8, marginBottom: 24 }}>
                With 8+ years of catering expertise across Hyderabad and Telangana, we specialize in authentic Telugu meals, elaborate buffet setups, live cooking counters and grand wedding feasts.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/about" className="btn-gold" style={{ textDecoration: 'none' }}>Read Full Story →</Link>
                <Link to="/services" className="btn-outline-gold" style={{ textDecoration: 'none' }}>Our Services</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ──────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#1a0e02' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 50 }}>
            <p style={{ fontFamily: '"Great Vibes"', fontSize: '2rem', color: '#d4a017' }}>What We Offer</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: 12 }}>Our Catering Services</h2>
            <GoldDivider />
            <p className="section-subtitle" style={{ maxWidth: 560, margin: '16px auto 0', fontFamily: '"Cormorant Garamond"', fontSize: '1.1rem' }}>
              From intimate gatherings to grand wedding feasts — explore a glimpse of what we bring to every occasion.
            </p>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
            {servicePreview.map((svc, i) => (
              <FadeUp key={svc.title} delay={i * 0.07}>
                <div className="gold-card" style={{ borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ position: 'relative', overflow: 'hidden', height: 200 }}>
                    <img
                      src={svc.img}
                      alt={svc.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.5s', filter: 'brightness(0.8) contrast(1.05) saturate(1.1)', display: 'block' }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,14,2,0.7) 0%, transparent 60%)' }} />
                    <div style={{ position: 'absolute', bottom: 12, left: 16, fontSize: '2rem' }}>{svc.icon}</div>
                  </div>
                  <div style={{ padding: '20px 20px 24px' }}>
                    <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', color: '#d4a017', marginBottom: 8 }}>{svc.title}</h3>
                    <p style={{ fontFamily: '"Lato", sans-serif', fontSize: '0.85rem', color: 'rgba(253,246,227,0.75)', lineHeight: 1.7 }}>{svc.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/services" className="btn-gold" style={{ textDecoration: 'none' }}>View All Services →</Link>
          </FadeUp>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ───────────────────────────────────────── */}
      <section className="section-pad" style={{ background: 'linear-gradient(to bottom, #2d1a06, #1a0e02)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontFamily: '"Great Vibes"', fontSize: '2rem', color: '#d4a017' }}>Moments Captured</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: 12 }}>From Our Gallery</h2>
            <GoldDivider />
          </FadeUp>

          <div className="gallery-grid-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
            {galleryPreview.map((img, i) => {
              const isWide = i === 0 || i === 5;
              return (
                <FadeUp key={i} delay={i * 0.06} style={{ gridColumn: isWide ? 'span 2' : 'span 1', display: 'block' }}>
                  <Link
                    to="/gallery"
                    className={`gallery-item${isWide ? '' : ' gallery-span-none'}`}
                    style={{ borderRadius: 2, border: '1px solid rgba(212,160,23,0.2)', cursor: 'pointer', overflow: 'hidden', display: 'block' }}
                  >
                    <div style={{ position: 'relative' }}>
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className={isWide ? 'gallery-img-tall' : 'gallery-img-short'}
                        style={{ width: '100%', height: isWide ? 360 : 240, objectFit: 'cover', objectPosition: 'center', display: 'block', filter: 'brightness(0.9) contrast(1.05) saturate(1.1)', transition: 'transform 0.4s' }}
                      />
                      <div className="gallery-overlay" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0)', transition: 'background 0.3s' }}>
                        <span className="gallery-zoom-icon" style={{ color: 'white', fontSize: '1.8rem', opacity: 0, transition: 'opacity 0.3s' }}>🔍</span>
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              );
            })}
          </div>

          <FadeUp style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/gallery" className="btn-gold" style={{ textDecoration: 'none' }}>View Full Gallery →</Link>
          </FadeUp>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <Testimonials />

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <CTASection />
    </>
  );
}
