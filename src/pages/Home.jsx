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
import MenuChoiceCards from '../components/MenuChoiceCards';

// Reusable ornamental divider
const Ornament = ({ symbol = '✦ ❀ ✦', maxWidth = 280 }) => (
  <div className="ornament-divider" style={{ maxWidth }}>
    <span className="ornament-symbol">{symbol}</span>
  </div>
);

// Why-choose feature row
const FEATURES = [
  { icon: '👨‍🍳', title: 'Master Chefs',         desc: 'Skilled culinary artisans crafting each dish with traditional Telugu mastery.' },
  { icon: '🌿', title: 'Farm-Fresh Ingredients',  desc: 'Premium, locally-sourced ingredients to deliver authentic flavors every time.' },
  { icon: '✨', title: 'Royal Presentation',      desc: 'Elegant gold-themed buffet décor and uniformed staff for a five-star feel.' },
  { icon: '💎', title: 'Hygiene Promise',         desc: '100% hygienic preparation with strict food-safety standards across every event.' },
];

export default function Home() {
  const servicePreview = SERVICES.slice(0, 6);
  const galleryPreview = GALLERY_IMAGES.slice(0, 6);
  const videoPreview   = VIDEOS.slice(0, 4);

  return (
    <>
      <Hero />

      {/* ── ABOUT PREVIEW (cream) ─────────────────────────────────── */}
      <section id="about-preview" className="section-pad cream-section">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 70, alignItems: 'center' }}>
            <FadeIn x={-40}>
              <div style={{ position: 'relative', paddingBottom: 50 }}>
                <div style={{
                  position: 'relative', borderRadius: 14, overflow: 'hidden',
                  border: '4px solid #FFFBF2',
                  boxShadow: '0 24px 56px rgba(139,107,42,0.25)',
                }}>
                  <img src="/img6.jpg" alt="Aadhya catering team in action" style={{
                    width: '100%', height: 480, objectFit: 'cover',
                    filter: 'saturate(1.10) contrast(1.04)', display: 'block',
                  }} />
                </div>
                {/* Floating second image */}
                <div style={{
                  position: 'absolute', bottom: 0, right: -28,
                  width: '58%',
                  border: '5px solid #FFFBF2',
                  borderRadius: 12,
                  overflow: 'hidden',
                  boxShadow: '0 18px 40px rgba(139,107,42,0.30)',
                }}>
                  <img src="/img2.jpg" alt="Premium buffet setup" style={{
                    width: '100%', height: 230, objectFit: 'cover', display: 'block',
                    filter: 'saturate(1.10) contrast(1.04)',
                  }} />
                </div>
                {/* Gold "8+ Years" ribbon */}
                <div style={{
                  position: 'absolute', top: 28, left: -16,
                  background: 'linear-gradient(135deg, #E5C77F 0%, #C9A14A 50%, #8B6B2A 100%)',
                  color: '#3B2A1F',
                  padding: '14px 22px',
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textAlign: 'center',
                  boxShadow: '0 12px 26px rgba(139,107,42,0.40)',
                  borderRadius: 4,
                  border: '1px solid rgba(255,251,242,0.6)',
                }}>
                  8+ Years
                  <br />
                  <span style={{ fontSize: '0.66rem', letterSpacing: '0.18em', fontFamily: '"DM Sans"', fontWeight: 700 }}>OF EXCELLENCE</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn x={40} delay={0.15}>
              <p className="section-kicker">Our Story</p>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', marginTop: 6, marginBottom: 6 }}>
                Hyderabad's Most Trusted<br />
                <span style={{
                  background: 'linear-gradient(135deg, #B8923D 0%, #C9A14A 50%, #8B6B2A 100%)',
                  WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  fontStyle: 'italic',
                }}>Catering Partner</span>
              </h2>
              <Ornament maxWidth={240} />

              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1.12rem', lineHeight: 1.85, marginBottom: 18, color: '#3B2A1F' }}>
                Aadhya Caterers is a premium catering brand based in Hyderabad, dedicated to crafting exceptional culinary experiences for weddings, corporate events, birthday celebrations, house warmings and every special occasion.
              </p>
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1.02rem', lineHeight: 1.85, marginBottom: 30, color: '#6B5544' }}>
                With <strong style={{ color: '#8B6B2A' }}>8+ years</strong> of expertise across Hyderabad and Telangana, we specialize in authentic Telugu meals, elaborate buffet setups, live cooking counters and grand wedding feasts.
              </p>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link to="/about" className="btn-gold" style={{ textDecoration: 'none' }}>Read Our Story</Link>
                <Link to="/services" className="btn-outline-gold" style={{ textDecoration: 'none' }}>Our Services</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW (beige) ──────────────────────────────── */}
      <section className="section-pad beige-section">
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 60 }}>
            <p className="section-kicker">What We Offer</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', marginTop: 4 }}>
              Our <span style={{
                background: 'linear-gradient(135deg, #B8923D, #C9A14A, #8B6B2A)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                fontStyle: 'italic',
              }}>Catering</span> Services
            </h2>
            <Ornament />
            <p className="section-subtitle" style={{ maxWidth: 660, margin: '14px auto 0', fontSize: '1.12rem' }}>
              From intimate gatherings to grand wedding feasts — explore the signature experiences we craft for every occasion.
            </p>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 28 }}>
            {servicePreview.map((svc, i) => (
              <FadeUp key={svc.title} delay={(i % 3) * 0.07}>
                <div className="cream-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', overflow: 'hidden', height: 220 }}>
                    <img
                      src={svc.img}
                      alt={svc.title}
                      loading="lazy"
                      style={{
                        width: '100%', height: '100%', objectFit: 'cover',
                        objectPosition: 'center',
                        transition: 'transform 0.6s',
                        filter: 'saturate(1.10) contrast(1.04)',
                        display: 'block',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.10)')}
                      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    {/* Soft gradient at the top — premium */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '40%',
                      background: 'linear-gradient(to bottom, rgba(255,251,242,0.28) 0%, transparent 100%)',
                      pointerEvents: 'none',
                    }} />
                    {/* Icon badge */}
                    <div style={{
                      position: 'absolute', bottom: -24, left: 24,
                      width: 56, height: 56,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #E5C77F 0%, #C9A14A 50%, #8B6B2A 100%)',
                      border: '3px solid #FFFFFF',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.6rem',
                      boxShadow: '0 10px 22px rgba(139,107,42,0.35)',
                      zIndex: 2,
                    }}>
                      {svc.icon}
                    </div>
                  </div>
                  <div style={{ padding: '38px 26px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: '1.32rem',
                      color: '#3B2A1F',
                      marginBottom: 12,
                      fontWeight: 700,
                    }}>
                      {svc.title}
                    </h3>
                    <p style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.92rem',
                      color: '#6B5544',
                      lineHeight: 1.75,
                      marginBottom: 22,
                    }}>
                      {svc.desc}
                    </p>
                    <Link
                      to="/services"
                      style={{
                        marginTop: 'auto',
                        fontFamily: '"DM Sans"',
                        color: '#C0392B',
                        textDecoration: 'none',
                        fontSize: '0.78rem',
                        letterSpacing: '0.20em',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                      }}
                    >
                      Learn More <span>→</span>
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp style={{ textAlign: 'center', marginTop: 56 }}>
            <Link to="/services" className="btn-gold" style={{ textDecoration: 'none' }}>Explore All Services</Link>
          </FadeUp>
        </div>
      </section>

      {/* ── WHY CHOOSE US (ivory cream) ───────────────────────────── */}
      <section className="section-pad cream-section">
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="section-kicker">The Aadhya Promise</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', marginTop: 4 }}>
              Why Families <span style={{
                background: 'linear-gradient(135deg, #B8923D, #C9A14A, #8B6B2A)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                fontStyle: 'italic',
              }}>Choose Us</span>
            </h2>
            <Ornament />
            <p className="section-subtitle" style={{ maxWidth: 640, margin: '14px auto 0', fontSize: '1.1rem' }}>
              Four pillars that define the Aadhya catering experience — from kitchen to celebration.
            </p>
          </FadeUp>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24,
          }}>
            {FEATURES.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.08}>
                <div className="cream-card" style={{
                  padding: '36px 28px',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                  <div style={{
                    width: 78, height: 78,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FFF7E5 0%, #FBEFD6 100%)',
                    border: '2px solid rgba(201,161,74,0.45)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2rem',
                    marginBottom: 18,
                    boxShadow: 'inset 0 2px 6px rgba(139,107,42,0.10)',
                  }}>
                    {f.icon}
                  </div>
                  <h3 style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: '1.18rem',
                    color: '#3B2A1F',
                    marginBottom: 10,
                    fontWeight: 700,
                  }}>
                    {f.title}
                  </h3>
                  <p style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.92rem',
                    color: '#6B5544',
                    lineHeight: 1.7,
                  }}>
                    {f.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENU PREVIEW (beige) ──────────────────────────────────── */}
     {/* ── MENU PREVIEW (beige) ──────────────────────────────────── */}
<section id="menu-preview" className="section-pad beige-section">
  <div
    style={{
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 24px',
      position: 'relative',
      zIndex: 1,
    }}
  >
    <FadeUp style={{ textAlign: 'center', marginBottom: 56 }}>
      <p className="section-kicker">
        Premium Vegetarian Catering
      </p>

      <h2
        className="section-title"
        style={{
          fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)',
          marginTop: 4,
          lineHeight: 1.2,
        }}
      >
        <span
          style={{
            color: '#234B2C',
            fontWeight: 800,
          }}
        >
          Veg
        </span>

        <span
          style={{
            margin: '0 10px',
            color: '#5C4634',
          }}
        >
          &
        </span>

        <span
          style={{
            background:
              'linear-gradient(135deg, #B8923D, #C9A14A, #8B6B2A)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontStyle: 'italic',
            fontSize: '0.82em',
            fontWeight: 500,
          }}
        >
          Non-Veg Menus
        </span>
      </h2>

      <Ornament />

      <p
        className="section-subtitle"
        style={{
          maxWidth: 680,
          margin: '14px auto 0',
          fontSize: '1.08rem',
        }}
      >
        Specialists in pure vegetarian feasts — with elegant
        Non-Veg catering options for weddings, receptions and
        family celebrations.
      </p>
    </FadeUp>

    <MenuChoiceCards />

    <FadeUp style={{ textAlign: 'center', marginTop: 50 }}>
      <Link
        to="/menu"
        className="btn-outline-gold"
        style={{ textDecoration: 'none' }}
      >
        View Full Menu Overview
      </Link>
    </FadeUp>
  </div>
</section>

      {/* ── GALLERY PREVIEW (rose-cream) ──────────────────────────── */}
      <section className="section-pad rose-section">
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 50 }}>
            <p className="section-kicker">Moments Captured</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', marginTop: 4 }}>
              From Our <span style={{
                background: 'linear-gradient(135deg, #B8923D, #C9A14A, #8B6B2A)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                fontStyle: 'italic',
              }}>Gallery</span>
            </h2>
            <Ornament />
            <p className="section-subtitle" style={{ maxWidth: 620, margin: '14px auto 0', fontSize: '1.08rem' }}>
              A glimpse of our recent weddings, traditional feasts and grand celebrations across Hyderabad.
            </p>
          </FadeUp>

          <div className="gallery-grid-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {galleryPreview.map((img, i) => {
              const isWide = i === 0 || i === 5;
              return (
                <FadeUp key={i} delay={i * 0.06} style={{ gridColumn: isWide ? 'span 2' : 'span 1', display: 'block' }}>
                  <Link
                    to="/gallery"
                    className={`gallery-item${isWide ? '' : ' gallery-span-none'}`}
                    style={{
                      borderRadius: 12,
                      border: '3px solid #FFFBF2',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      display: 'block',
                      boxShadow: '0 14px 32px rgba(139,107,42,0.18)',
                    }}
                  >
                    <div style={{ position: 'relative' }}>
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className={isWide ? 'gallery-img-tall' : 'gallery-img-short'}
                        style={{
                          width: '100%',
                          height: isWide ? 400 : 260,
                          objectFit: 'cover',
                          objectPosition: 'center',
                          display: 'block',
                          filter: 'saturate(1.10) contrast(1.04)',
                          transition: 'transform 0.6s',
                        }}
                      />
                      <div className="gallery-overlay" style={{
                        position: 'absolute', inset: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(0,0,0,0)', transition: 'background 0.4s',
                      }}>
                        <span className="gallery-zoom-icon" style={{
                          color: '#FFFBF2', fontSize: '2rem', opacity: 0,
                          transition: 'opacity 0.4s, transform 0.4s',
                          border: '2px solid #FFFBF2',
                          width: 64, height: 64,
                          borderRadius: '50%',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: 'rgba(192,57,43,0.85)',
                          backdropFilter: 'blur(4px)',
                        }}>+</span>
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              );
            })}
          </div>

          <FadeUp style={{ textAlign: 'center', marginTop: 56 }}>
            <Link to="/gallery" className="btn-gold" style={{ textDecoration: 'none' }}>View Full Gallery</Link>
          </FadeUp>
        </div>
      </section>

      {/* ── REELS / VIDEOS (beige) ────────────────────────────────── */}
      <section className="section-pad beige-section">
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 50 }}>
            <p className="section-kicker">Watch Aadhya in Action</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', marginTop: 4 }}>
              Reels &amp; <span style={{
                background: 'linear-gradient(135deg, #B8923D, #C9A14A, #8B6B2A)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                fontStyle: 'italic',
              }}>Catering Shorts</span>
            </h2>
            <Ornament />
            <p className="section-subtitle" style={{ maxWidth: 660, margin: '14px auto 0', fontSize: '1.1rem' }}>
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
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(180deg, rgba(255,251,242,0) 0%, rgba(59,42,31,0.20) 50%, rgba(59,42,31,0.85) 100%)',
                  }} />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{
                      width: 68, height: 68,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #E5C77F, #C9A14A, #8B6B2A)',
                      color: '#FFFBF2',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(139,107,42,0.55)',
                      fontSize: '1.4rem',
                      paddingLeft: 5,
                      border: '3px solid rgba(255,251,242,0.85)',
                    }}>▶</div>
                  </div>
                  <div style={{
                    position: 'absolute', top: 12, right: 12,
                    background: 'rgba(255,251,242,0.94)',
                    color: '#8B6B2A',
                    padding: '4px 12px',
                    fontSize: '0.74rem',
                    borderRadius: 12,
                    fontFamily: '"DM Sans"',
                    border: '1px solid rgba(139,107,42,0.30)',
                    fontWeight: 700,
                  }}>⏱ {v.duration}</div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '22px 18px 18px' }}>
                    <h3 style={{
                      fontFamily: '"Playfair Display"',
                      color: '#FFFBF2',
                      fontSize: '1.05rem',
                      marginBottom: 4,
                      lineHeight: 1.25,
                      fontWeight: 700,
                    }}>{v.title}</h3>
                    <p style={{ fontFamily: '"DM Sans"', color: 'rgba(255,251,242,0.85)', fontSize: '0.76rem', fontWeight: 500 }}>
                      Tap to watch
                    </p>
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
  );<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-10797028884">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-10797028884');
</script>
}
