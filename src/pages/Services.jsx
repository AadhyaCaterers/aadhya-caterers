import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { FadeUp, FadeIn, GoldDivider } from '../components/animations';
import { SERVICES } from '../data/services';
import { WHATSAPP_URL, PHONE_PRIMARY } from '../data/constants';

// Dedicated Services page — alternating richly detailed service blocks
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
      <section style={{ background: '#1a0e02', padding: '70px 0 30px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <FadeUp>
            <p style={{ fontFamily: '"Great Vibes"', fontSize: '2rem', color: '#d4a017', marginBottom: 4 }}>Crafted For Every Occasion</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: 12 }}>Eight Signature Services</h2>
            <GoldDivider />
            <p style={{ fontFamily: '"Cormorant Garamond"', fontSize: '1.1rem', color: 'rgba(253,246,227,0.8)', marginTop: 18, lineHeight: 1.7 }}>
              Each Aadhya service comes with menu design, on-site setup, uniformed staff and complete clean-up — so you only worry about enjoying your event.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Service cards grid */}
      <section className="section-pad" style={{ background: '#1a0e02', paddingTop: 30 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
            {SERVICES.map((svc, i) => (
              <FadeUp key={svc.title} delay={(i % 3) * 0.06}>
                <div className="gold-card" style={{ borderRadius: 4, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ position: 'relative', overflow: 'hidden', height: 220 }}>
                    <img
                      src={svc.img}
                      alt={svc.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.6s', filter: 'brightness(0.85) contrast(1.05) saturate(1.1)', display: 'block' }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,14,2,0.8) 0%, transparent 60%)' }} />
                    <div style={{ position: 'absolute', top: 14, left: 14, background: 'linear-gradient(135deg,#d4a017,#f2cd25)', color: '#1a0e02', padding: '6px 14px', fontFamily: '"Lato"', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      Service {String(i + 1).padStart(2, '0')}
                    </div>
                    <div style={{ position: 'absolute', bottom: 12, left: 16, fontSize: '2rem' }}>{svc.icon}</div>
                  </div>

                  <div style={{ padding: '24px 24px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', color: '#d4a017', marginBottom: 10 }}>{svc.title}</h3>
                    <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1rem', color: 'rgba(253,246,227,0.85)', lineHeight: 1.7, marginBottom: 14 }}>
                      {svc.long || svc.desc}
                    </p>

                    {svc.features && (
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                        {svc.features.map((f) => (
                          <li key={f} style={{ fontFamily: '"Lato"', fontSize: '0.82rem', color: 'rgba(253,246,227,0.7)' }}>
                            <span style={{ color: '#d4a017', marginRight: 6 }}>✦</span>{f}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div style={{ marginTop: 'auto', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      <Link to="/contact" className="btn-gold" style={{ textDecoration: 'none', fontSize: '0.72rem', padding: '10px 22px' }}>Book This Service</Link>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ textDecoration: 'none', fontSize: '0.72rem', padding: '9px 20px' }}>💬 Enquire</a>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process band */}
      <section className="section-pad" style={{ background: 'linear-gradient(to bottom, #2d1a06, #1a0e02)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontFamily: '"Great Vibes"', fontSize: '2rem', color: '#d4a017' }}>How We Work</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: 12 }}>A Seamless 4-Step Experience</h2>
            <GoldDivider />
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { step: '01', title: 'Consultation',  desc: 'Tell us your event date, headcount, venue and food preferences over a quick call.' },
              { step: '02', title: 'Custom Menu',   desc: 'We design a menu — starters to desserts — tailored to your theme and budget.' },
              { step: '03', title: 'Setup & Serve', desc: 'Our captains arrive early, set up the buffet, and serve with five-star hospitality.' },
              { step: '04', title: 'Clean Wrap-Up', desc: 'Once the celebration ends, we clean up the entire setup so you can simply relax.' },
            ].map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.08} x={20}>
                <div style={{ position: 'relative', padding: '32px 24px 28px', border: '1px solid rgba(212,160,23,0.3)', background: 'linear-gradient(135deg, rgba(45,26,6,0.95), rgba(26,14,2,0.98))', borderRadius: 4 }}>
                  <div style={{ position: 'absolute', top: -18, left: 22, background: 'linear-gradient(135deg,#d4a017,#f2cd25)', color: '#1a0e02', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Playfair Display"', fontWeight: 700, fontSize: '0.9rem', borderRadius: '50%' }}>
                    {s.step}
                  </div>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', color: '#d4a017', fontSize: '1.15rem', marginBottom: 8, marginTop: 10 }}>{s.title}</h3>
                  <p style={{ fontFamily: '"Lato", sans-serif', fontSize: '0.88rem', color: 'rgba(253,246,227,0.75)', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Plan Your Event?"
        subtitle="Talk to our team for a free menu consultation, sample tasting and on-site visit."
        primaryLabel="📞 Call Us"
        primaryHref={`tel:${PHONE_PRIMARY}`}
      />
    </>
  );
}
