import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { FadeUp, FadeIn, Ornament } from '../components/animations';
import { SERVICES } from '../data/services';
import { WHATSAPP_URL, PHONE_PRIMARY } from '../data/constants';

// Dedicated Services page — premium card grid + how-we-work band
export default function Services() {
  return (
    <>
      <PageBanner
        tagline="What We Offer"
        title="Our Catering Services"
        subtitle="From intimate gatherings to grand wedding feasts — explore our complete range of premium catering services across Hyderabad."
        image="/img2.jpg"
      />

      {/* Intro / hook */}
      <section style={{ background: '#1a0e02', padding: '80px 0 30px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <FadeUp>
            <p className="section-kicker">Crafted For Every Occasion</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', marginTop: 4, marginBottom: 4 }}>Eight Signature Services</h2>
            <Ornament />
            <p style={{ fontFamily: '"Cormorant Garamond"', fontSize: '1.12rem', color: 'rgba(253,246,227,0.8)', marginTop: 16, lineHeight: 1.75 }}>
              Each Aadhya service comes with menu design, on-site setup, uniformed staff and complete clean-up — so you only worry about enjoying your event.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Service cards grid */}
      <section className="section-pad" style={{ background: '#1a0e02', paddingTop: 30 }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
            {SERVICES.map((svc, i) => (
              <FadeUp key={svc.title} delay={(i % 3) * 0.06}>
                <div className="gold-card" style={{ borderRadius: 4, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ position: 'relative', overflow: 'hidden', height: 230 }}>
                    <img
                      src={svc.img}
                      alt={svc.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.7s', filter: 'brightness(0.85) contrast(1.05) saturate(1.1)', display: 'block' }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,14,2,0.9) 0%, transparent 60%)' }} />
                    <div style={{
                      position: 'absolute', top: 14, left: 14,
                      background: 'linear-gradient(135deg,#b8860b,#d4a017,#f2cd25)',
                      color: '#1a0e02',
                      padding: '6px 14px',
                      fontFamily: '"Lato"',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                    }}>
                      Service {String(i + 1).padStart(2, '0')}
                    </div>
                    <div style={{ position: 'absolute', bottom: 14, left: 18, fontSize: '2.2rem', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.6))' }}>{svc.icon}</div>
                  </div>

                  <div style={{ padding: '26px 26px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.3rem', color: '#d4a017', marginBottom: 10 }}>{svc.title}</h3>
                    <div style={{ width: 40, height: 1, background: 'rgba(212,160,23,0.5)', marginBottom: 14 }} />
                    <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.02rem', color: 'rgba(253,246,227,0.85)', lineHeight: 1.75, marginBottom: 14 }}>
                      {svc.long || svc.desc}
                    </p>

                    {svc.features && (
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                        {svc.features.map((f) => (
                          <li key={f} style={{ fontFamily: '"Lato"', fontSize: '0.82rem', color: 'rgba(253,246,227,0.72)' }}>
                            <span style={{ color: '#d4a017', marginRight: 6 }}>✦</span>{f}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div style={{ marginTop: 'auto', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      <Link to="/contact" className="btn-gold" style={{ textDecoration: 'none', fontSize: '0.72rem', padding: '11px 22px' }}>Book Now</Link>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ textDecoration: 'none', fontSize: '0.72rem', padding: '10px 20px' }}>Enquire</a>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work band — cream section for contrast */}
      <section className="section-pad cream-section">
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 50 }}>
            <p className="section-kicker">How We Work</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', marginTop: 4, marginBottom: 4 }}>A Seamless 4-Step Experience</h2>
            <Ornament />
            <p style={{ fontFamily: '"Cormorant Garamond"', fontSize: '1.05rem', maxWidth: 680, margin: '14px auto 0', lineHeight: 1.7 }}>
              From the first call to the final farewell — our process is designed to keep you stress-free.
            </p>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 28 }}>
            {[
              { step: '01', title: 'Consultation',  desc: 'Tell us your event date, headcount, venue and food preferences over a quick call.' },
              { step: '02', title: 'Custom Menu',   desc: 'We design a menu — starters to desserts — tailored to your theme and budget.' },
              { step: '03', title: 'Setup & Serve', desc: 'Our captains arrive early, set up the buffet, and serve with five-star hospitality.' },
              { step: '04', title: 'Clean Wrap-Up', desc: 'Once the celebration ends, we clean up the entire setup so you can simply relax.' },
            ].map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.08} x={20}>
                <div className="cream-card" style={{ position: 'relative', padding: '40px 26px 28px', borderRadius: 4 }}>
                  <div style={{
                    position: 'absolute', top: -22, left: 22,
                    background: 'linear-gradient(135deg,#b8860b,#d4a017,#f2cd25)',
                    color: '#1a0e02',
                    width: 44, height: 44,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: '"Playfair Display"',
                    fontWeight: 700, fontSize: '0.95rem',
                    borderRadius: '50%',
                    boxShadow: '0 6px 16px rgba(138,101,8,0.35)',
                  }}>
                    {s.step}
                  </div>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', color: '#8a6508', fontSize: '1.18rem', marginBottom: 8 }}>{s.title}</h3>
                  <div style={{ width: 36, height: 1, background: 'rgba(138,101,8,0.4)', marginBottom: 12 }} />
                  <p style={{ fontFamily: '"Lato", sans-serif', fontSize: '0.9rem', color: 'rgba(58,36,6,0.78)', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Plan Your Event?"
        subtitle="Talk to our team for a free menu consultation, sample tasting and on-site visit."
        primaryLabel="Call Us"
        primaryHref={`tel:${PHONE_PRIMARY}`}
      />
    </>
  );
}
