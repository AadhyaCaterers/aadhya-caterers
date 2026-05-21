import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { FadeUp, FadeIn, Ornament } from '../components/animations';
import { SERVICES } from '../data/services';
import { WHATSAPP_URL, PHONE_PRIMARY } from '../data/constants';

// Dedicated Services page — bright cream/beige luxury aesthetic
export default function Services() {
  return (
    <>
      <PageBanner
        tagline="What We Offer"
        title="Our Catering Services"
        subtitle="From intimate gatherings to grand wedding feasts — explore our complete range of premium catering services across Hyderabad."
        image="/img2.jpg"
      />

      {/* ── INTRO (cream) ─────────────────────────────────────────── */}
      <section className="cream-section" style={{ padding: '90px 0 30px', position: 'relative' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <p className="section-kicker">Crafted For Every Occasion</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.7rem)', marginTop: 4 }}>
              Eight <span style={{
                background: 'linear-gradient(135deg, #B8923D, #C9A14A, #8B6B2A)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                fontStyle: 'italic',
              }}>Signature</span> Services
            </h2>
            <Ornament />
            <p style={{ fontFamily: '"DM Sans"', fontSize: '1.12rem', color: '#6B5544', marginTop: 16, lineHeight: 1.78 }}>
              Each Aadhya service comes with menu design, on-site setup, uniformed staff and complete clean-up — so you only worry about enjoying your event.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── SERVICE CARDS GRID (cream) ────────────────────────────── */}
      <section className="cream-section" style={{ padding: '30px 0 100px', position: 'relative' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
            {SERVICES.map((svc, i) => (
              <FadeUp key={svc.title} delay={(i % 3) * 0.06}>
                <div className="cream-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ position: 'relative', overflow: 'hidden', height: 240 }}>
                    <img
                      src={svc.img}
                      alt={svc.title}
                      loading="lazy"
                      style={{
                        width: '100%', height: '100%', objectFit: 'cover',
                        objectPosition: 'center',
                        transition: 'transform 0.7s',
                        filter: 'saturate(1.10) contrast(1.04)',
                        display: 'block',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.10)')}
                      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '50%',
                      background: 'linear-gradient(to bottom, rgba(255,251,242,0.30) 0%, transparent 100%)',
                      pointerEvents: 'none',
                    }} />
                    <div style={{
                      position: 'absolute', top: 14, left: 14,
                      background: 'linear-gradient(135deg, #E5C77F, #C9A14A, #8B6B2A)',
                      color: '#3B2A1F',
                      padding: '6px 14px',
                      fontFamily: '"DM Sans"',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      borderRadius: 4,
                      boxShadow: '0 6px 14px rgba(139,107,42,0.25)',
                    }}>
                      Service {String(i + 1).padStart(2, '0')}
                    </div>
                    <div style={{
                      position: 'absolute', bottom: -22, right: 22,
                      width: 56, height: 56, borderRadius: '50%',
                      background: 'linear-gradient(135deg, #E5C77F, #C9A14A, #8B6B2A)',
                      border: '3px solid #FFFFFF',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.6rem',
                      boxShadow: '0 10px 22px rgba(139,107,42,0.35)',
                    }}>
                      {svc.icon}
                    </div>
                  </div>

                  <div style={{ padding: '36px 28px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.35rem', color: '#3B2A1F', marginBottom: 10, fontWeight: 700 }}>{svc.title}</h3>
                    <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg, #C9A14A, transparent)', marginBottom: 16 }} />
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.98rem', color: '#6B5544', lineHeight: 1.78, marginBottom: 16 }}>
                      {svc.long || svc.desc}
                    </p>

                    {svc.features && (
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                        {svc.features.map((f) => (
                          <li key={f} style={{ fontFamily: '"DM Sans"', fontSize: '0.84rem', color: '#6B5544' }}>
                            <span style={{ color: '#C0392B', marginRight: 8, fontWeight: 700 }}>✦</span>{f}
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

      {/* ── HOW WE WORK BAND (beige) ──────────────────────────────── */}
      <section className="section-pad beige-section">
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 60 }}>
            <p className="section-kicker">How We Work</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.7rem)', marginTop: 4 }}>
              A Seamless <span style={{
                background: 'linear-gradient(135deg, #B8923D, #C9A14A, #8B6B2A)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                fontStyle: 'italic',
              }}>4-Step</span> Experience
            </h2>
            <Ornament />
            <p style={{ fontFamily: '"DM Sans"', fontSize: '1.08rem', maxWidth: 680, margin: '14px auto 0', lineHeight: 1.78, color: '#6B5544' }}>
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
                <div className="cream-card" style={{ position: 'relative', padding: '46px 28px 28px' }}>
                  <div style={{
                    position: 'absolute', top: -22, left: 22,
                    background: 'linear-gradient(135deg, #E5C77F, #C9A14A, #8B6B2A)',
                    color: '#3B2A1F',
                    width: 48, height: 48,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: '"Playfair Display"',
                    fontWeight: 700, fontSize: '1rem',
                    borderRadius: '50%',
                    boxShadow: '0 8px 18px rgba(139,107,42,0.40)',
                    border: '3px solid #FFFFFF',
                  }}>
                    {s.step}
                  </div>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', color: '#3B2A1F', fontSize: '1.22rem', marginBottom: 8, fontWeight: 700 }}>{s.title}</h3>
                  <div style={{ width: 36, height: 2, background: 'linear-gradient(90deg, #C9A14A, transparent)', marginBottom: 14 }} />
                  <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.94rem', color: '#6B5544', lineHeight: 1.75 }}>{s.desc}</p>
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
