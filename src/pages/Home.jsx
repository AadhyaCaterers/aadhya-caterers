import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import { FadeUp, FadeIn } from '../components/animations';
import { SERVICES } from '../data/services';
import { GALLERY_IMAGES } from '../data/gallery';
import { VIDEOS } from '../data/videos';
import { YOUTUBE_URL } from '../data/constants';

// Reusable ornamental divider — line ✦ ❀ ✦ line
const Ornament = ({ symbol = '✦ ❀ ✦', maxWidth = 280 }) => (
  <div className="ornament-divider" style={{ maxWidth }}>
    <span className="ornament-symbol">{symbol}</span>
  </div>
);

// Home page = light previews + CTAs that route to full pages
export default function Home() {
  // Show only first N items as preview
  const servicePreview = SERVICES.slice(0, 6);
  const galleryPreview = GALLERY_IMAGES.slice(0, 6);
  const videoPreview   = VIDEOS.slice(0, 4);

  return (
    <>
      <Hero />

      {/* ── ABOUT PREVIEW (cream / light luxury) ─────────────────── */}
      <section id="about-preview" className="section-pad cream-section">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 60, alignItems: 'center' }}>
            <FadeIn x={-40}>
              <div style={{ position: 'relative', paddingBottom: 40 }}>
                <div style={{ position: 'relative', borderRadius: 4, overflow: 'hidden', border: '3px solid rgba(201,168,87,0.5)', boxShadow: '0 16px 40px rgba(42,36,36,0.18)' }}>
                  <img src="/img6.jpg" alt="Aadhya catering team in action" style={{ width: '100%', height: 460, objectFit: 'cover', filter: 'brightness(0.98) contrast(1.05) saturate(1.1)', display: 'block' }} />
                </div>
                <div style={{ position: 'absolute', bottom: 10, right: -20, width: '55%', border: '4px solid #FFFBEC', borderRadius: 4, overflow: 'hidden', boxShadow: '0 14px 32px rgba(42,36,36,0.25)' }}>
                  <img src="/img2.jpg" alt="Premium buffet setup" style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{
                  position: 'absolute', top: 24, left: -16,
                  background: 'linear-gradient(135deg,#B8923D,#C9A857,#E0C68A)',
                  color: '#221F1F',
                  padding: '14px 22px',
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textAlign: 'center',
                  boxShadow: '0 8px 22px rgba(139,107,42,0.35)',
                  borderRadius: 2,
                }}>
                  8+ Years
                  <br />
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em' }}>OF EXCELLENCE</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn x={40} delay={0.15}>
              <p className="section-kicker">Our Story</p>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', marginTop: 6, marginBottom: 6, lineHeight: 1.2, fontWeight: 700 }}>
                Hyderabad's Most Trusted<br />Catering Partner
              </h2>
              <Ornament maxWidth={220} />

              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: 16 }}>
                Aadhya Caterers is a premium catering service based in Hyderabad, dedicated to delivering exceptional culinary experiences for weddings, corporate events, birthday celebrations, house warmings and all special occasions.
              </p>
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 26 }}>
                With <strong style={{ color: '#8B6B2A' }}>8+ years</strong> of catering expertise across Hyderabad and Telangana, we specialize in authentic Telugu meals, elaborate buffet setups, live cooking counters and grand wedding feasts.
              </p>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link to="/about" className="btn-gold" style={{ textDecoration: 'none' }}>Read Our Story</Link>
                <Link to="/services" className="btn-outline-gold" style={{ textDecoration: 'none' }}>Our Services</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW (dark luxury) ───────────────────────── */}
      <section className="section-pad" style={{ background: 'linear-gradient(to bottom, #221F1F, #1A1717 60%, #221F1F)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px' }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="section-kicker">What We Offer</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', marginTop: 4, marginBottom: 4 }}>Our Catering Services</h2>
            <Ornament />
            <p className="section-subtitle" style={{ maxWidth: 620, margin: '14px auto 0', fontFamily: '"DM Sans"', fontSize: '1.1rem' }}>
              From intimate gatherings to grand wedding feasts — explore the signature experiences we craft for every occasion.
            </p>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 26 }}>
            {servicePreview.map((svc, i) => (
              <FadeUp key={svc.title} delay={(i % 3) * 0.07}>
                <div className="gold-card" style={{ borderRadius: 4, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', overflow: 'hidden', height: 220 }}>
                    <img
                      src={svc.img}
                      alt={svc.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.6s', filter: 'brightness(0.85) contrast(1.05) saturate(1.1)', display: 'block' }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(34,31,31,0.85) 0%, transparent 55%)' }} />
                    <div style={{ position: 'absolute', bottom: 14, left: 18, fontSize: '2rem', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.6))' }}>{svc.icon}</div>
                  </div>
                  <div style={{ padding: '24px 24px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.18rem', color: '#C9A857', marginBottom: 10 }}>{svc.title}</h3>
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.88rem', color: 'rgba(255,247,229,0.78)', lineHeight: 1.7, marginBottom: 18 }}>
                      {svc.desc}
                    </p>
                    <Link
                      to="/services"
                      style={{
                        marginTop: 'auto',
                        fontFamily: '"DM Sans"',
                        color: '#C9A857',
                        textDecoration: 'none',
                        fontSize: '0.78rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                      }}
                    >
                      Learn More <span style={{ transition: 'transform 0.3s' }}>→</span>
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp style={{ textAlign: 'center', marginTop: 50 }}>
            <Link to="/services" className="btn-gold" style={{ textDecoration: 'none' }}>Explore All Services</Link>
          </FadeUp>
        </div>
      </section>

      {/* ── GALLERY PREVIEW (cream) ──────────────────────────────── */}
      <section className="section-pad cream-section">
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 50 }}>
            <p className="section-kicker">Moments Captured</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', marginTop: 4, marginBottom: 4 }}>From Our Gallery</h2>
            <Ornament />
            <p style={{ fontFamily: '"DM Sans"', fontSize: '1.05rem', maxWidth: 600, margin: '14px auto 0', lineHeight: 1.7 }}>
              A glimpse of our recent weddings, traditional feasts and grand celebrations across Hyderabad.
            </p>
          </FadeUp>

          <div className="gallery-grid-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
            {galleryPreview.map((img, i) => {
              const isWide = i === 0 || i === 5;
              return (
                <FadeUp key={i} delay={i * 0.06} style={{ gridColumn: isWide ? 'span 2' : 'span 1', display: 'block' }}>
                  <Link
                    to="/gallery"
                    className={`gallery-item${isWide ? '' : ' gallery-span-none'}`}
                    style={{
                      borderRadius: 4,
                      border: '2px solid rgba(201,168,87,0.35)',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      display: 'block',
                      boxShadow: '0 10px 24px rgba(42,36,36,0.12)',
                    }}
                  >
                    <div style={{ position: 'relative' }}>
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className={isWide ? 'gallery-img-tall' : 'gallery-img-short'}
                        style={{ width: '100%', height: isWide ? 380 : 250, objectFit: 'cover', objectPosition: 'center', display: 'block', filter: 'brightness(0.95) contrast(1.05) saturate(1.1)', transition: 'transform 0.5s' }}
                      />
                      <div className="gallery-overlay" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0)', transition: 'background 0.35s' }}>
                        <span className="gallery-zoom-icon" style={{ color: '#C9A857', fontSize: '2rem', opacity: 0, transition: 'opacity 0.35s, transform 0.35s', border: '2px solid #C9A857', width: 56, height: 56, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</span>
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              );
            })}
          </div>

          <FadeUp style={{ textAlign: 'center', marginTop: 50 }}>
            <Link to="/gallery" className="btn-gold" style={{ textDecoration: 'none' }}>View Full Gallery</Link>
          </FadeUp>
        </div>
      </section>

      {/* ── VIDEO / REELS PREVIEW (dark) ─────────────────────────── */}
      <section className="section-pad" style={{ background: 'linear-gradient(to bottom, #221F1F 0%, #1A1717 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/img4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.06 }} />

        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 50 }}>
            <p className="section-kicker">Watch Aadhya in Action</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', marginTop: 4, marginBottom: 4 }}>Reels &amp; Catering Shorts</h2>
            <Ornament />
            <p className="section-subtitle" style={{ maxWidth: 620, margin: '14px auto 0', fontFamily: '"DM Sans"', fontSize: '1.1rem' }}>
              Quick vertical clips capturing the magic of our weddings, live counters and traditional feasts.
            </p>
          </FadeUp>

          <div className="reels-grid">
            {videoPreview.map((v, i) => (
              <FadeUp key={`${v.id}-${i}`} delay={i * 0.07}>
                <Link to="/videos" className="video-card" style={{ display: 'block', textDecoration: 'none' }}>
                  <img
                    src={v.thumb}
                    alt={v.title}
                    loading="lazy"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.92) 100%)' }} />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(201,168,87,0.95)', color: '#221F1F', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 22px rgba(201,168,87,0.5)', fontSize: '1.3rem', paddingLeft: 4 }}>▶</div>
                  </div>
                  <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(34,31,31,0.85)', color: '#C9A857', padding: '4px 10px', fontSize: '0.72rem', borderRadius: 12, fontFamily: '"DM Sans"', border: '1px solid rgba(201,168,87,0.4)' }}>⏱ {v.duration}</div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 18px 18px' }}>
                    <h3 style={{ fontFamily: '"Playfair Display"', color: '#FFF7E5', fontSize: '1.05rem', marginBottom: 4, lineHeight: 1.25 }}>{v.title}</h3>
                    <p style={{ fontFamily: '"DM Sans"', color: 'rgba(255,247,229,0.7)', fontSize: '0.75rem' }}>Tap to watch</p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          <FadeUp style={{ textAlign: 'center', marginTop: 50, display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/videos" className="btn-gold" style={{ textDecoration: 'none' }}>View All Reels</Link>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ textDecoration: 'none' }}>YouTube Channel</a>
          </FadeUp>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <Testimonials />

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <CTASection />
    </>
  );
}
