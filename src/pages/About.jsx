import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { FadeUp, FadeIn, Ornament } from '../components/animations';

// Section heading helper for content blocks
const SectionHeading = ({ kicker, title, center = false }) => (
  <div style={{ textAlign: center ? 'center' : 'left', marginBottom: 22 }}>
    {kicker && <p className="section-kicker">{kicker}</p>}
    <h2 className="section-title" style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)', marginTop: 4, marginBottom: 8, lineHeight: 1.2 }}>
      {title}
    </h2>
    {center
      ? <Ornament />
      : <div className="gold-divider-left" style={{ background: 'linear-gradient(90deg,#8B6B2A,transparent)' }} />
    }
  </div>
);

// Pillars / values cards
const PILLARS = [
  { icon: '🌿', title: 'Hygiene Standards',  desc: 'FSSAI-aligned kitchen practices, gloves, hairnets, sanitised utensils and quality-checked ingredients on every event.' },
  { icon: '👨‍🍳', title: 'Experienced Staff', desc: 'Trained chefs, captains and uniformed servers with 10+ years in large-scale catering and weddings.' },
  { icon: '🌾', title: 'Authentic Telugu',    desc: 'Recipes passed down generations — Pulihora, Gongura Pappu, Bobbatlu — exactly as tradition intended.' },
  { icon: '🍽️', title: 'Royal Buffet Setup',  desc: 'Gold-themed décor, polished chafing dishes, ornate serving counters and a five-star presentation.' },
  { icon: '💍', title: 'Wedding Expertise',   desc: 'Specialists in 500–1500 guest weddings with multi-cuisine menus and live counter coordination.' },
  { icon: '🔥', title: 'Live Counters',       desc: 'Theatrical live cooking — dosas, chaat, pani puri, pasta, biryani — fresh in front of guests.' },
];

export default function About() {
  return (
    <>
      <PageBanner
        tagline="Our Story"
        title="About Aadhya Caterers"
        subtitle="Hyderabad's most trusted name for premium wedding, corporate and traditional Telugu catering for over 8 years."
        image="/img7.jpg"
      />

      {/* ── COMPANY STORY (cream) ─────────────────────────────────── */}
      <section className="section-pad cream-section">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 60, alignItems: 'center' }}>
            <FadeIn x={-40}>
              <div style={{ position: 'relative', paddingBottom: 50 }}>
                <div style={{
                  position: 'relative', borderRadius: 14, overflow: 'hidden',
                  border: '4px solid #FFFBF2', boxShadow: '0 24px 56px rgba(139,107,42,0.25)',
                }}>
                  <img src="/img6.jpg" alt="Aadhya catering team in action" style={{ width: '100%', height: 480, objectFit: 'cover', filter: 'saturate(1.10) contrast(1.04)', display: 'block' }} />
                </div>
                <div style={{
                  position: 'absolute', bottom: 0, right: -28,
                  width: '58%', border: '5px solid #FFFBF2',
                  borderRadius: 12, overflow: 'hidden',
                  boxShadow: '0 18px 40px rgba(139,107,42,0.30)',
                }}>
                  <img src="/img2.jpg" alt="Premium buffet décor" style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block', filter: 'saturate(1.10) contrast(1.04)' }} />
                </div>
                <div style={{
                  position: 'absolute', top: 24, left: -16,
                  background: 'linear-gradient(135deg, #E5C77F 0%, #C9A14A 50%, #8B6B2A 100%)',
                  color: '#3B2A1F', padding: '14px 22px',
                  fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: '0.95rem',
                  textAlign: 'center', boxShadow: '0 12px 26px rgba(139,107,42,0.40)', borderRadius: 4,
                  border: '1px solid rgba(255,251,242,0.6)',
                }}>
                  8+ Years<br /><span style={{ fontSize: '0.66rem', letterSpacing: '0.18em', fontFamily: '"DM Sans"', fontWeight: 700 }}>OF EXCELLENCE</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn x={40} delay={0.15}>
              <SectionHeading kicker="Our Story" title="Catering With Heart Since 2017" />
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1.15rem', lineHeight: 1.85, marginBottom: 16, color: '#3B2A1F' }}>
                Aadhya Caterers was born from a simple belief — that every celebration deserves food that tastes like home, served with the elegance of a five-star kitchen. What began as a family-run kitchen in Kukatpally has grown into one of Hyderabad's most trusted catering teams.
              </p>
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1.06rem', lineHeight: 1.85, marginBottom: 16, color: '#6B5544' }}>
                We have catered over <strong style={{ color: '#8B6B2A' }}>500+ events</strong> across Hyderabad and Telangana — from intimate house warmings to 1500-guest grand weddings — and served more than <strong style={{ color: '#8B6B2A' }}>10,000 happy guests</strong> with authentic Telugu Saapadu, royal buffet feasts and theatrical live counters.
              </p>
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1.02rem', lineHeight: 1.85, marginBottom: 28, color: '#6B5544' }}>
                Our kitchens follow strict FSSAI-aligned hygiene practices, and our service team is trained for events of any scale — anywhere across Hyderabad.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link to="/services" className="btn-gold" style={{ textDecoration: 'none' }}>Explore Services</Link>
                <Link to="/contact" className="btn-outline-gold" style={{ textDecoration: 'none' }}>Plan Your Event</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE STATS BAND (beige) ─────────────────────────── */}
      <section className="beige-section" style={{ borderTop: '1px solid rgba(139,107,42,0.20)', borderBottom: '1px solid rgba(139,107,42,0.20)', padding: '70px 0', position: 'relative' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 30, textAlign: 'center', position: 'relative', zIndex: 1 }}>
          {[
            { num: '500+',  label: 'Events Catered' },
            { num: '10K+',  label: 'Happy Guests' },
            { num: '8+',    label: 'Years of Service' },
            { num: '100+',  label: 'Trained Staff' },
            { num: '50+',   label: 'Menu Items' },
            { num: '100%',  label: 'Hygienic Food' },
          ].map((s) => (
            <FadeUp key={s.label}>
              <div className="stat-number">{s.num}</div>
              <div style={{ fontFamily: '"DM Sans", sans-serif', color: '#6B5544', fontSize: '0.92rem', letterSpacing: '0.16em', marginTop: 8, textTransform: 'uppercase', fontWeight: 700 }}>{s.label}</div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── TRADITIONAL TELUGU CATERING (cream) ───────────────────── */}
      <section className="section-pad cream-section">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 50, alignItems: 'center' }}>
            <FadeIn x={-30}>
              <SectionHeading kicker="Heritage Cuisine" title="Authentic Traditional Telugu Catering" />
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1.12rem', color: '#3B2A1F', lineHeight: 1.85, marginBottom: 16 }}>
                Telugu Saapadu is more than food — it's a cultural ritual. We serve authentic 20+ dish thalis on banana leaves with Pulihora, Gongura Pappu, Tomato Pappu, Pesarattu, Avakaya, Bobbatlu and Payasam, exactly as our grandmothers taught us.
              </p>
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1.04rem', color: '#6B5544', lineHeight: 1.85, marginBottom: 18 }}>
                Whether it's a Gruhapravesham, Pelli or Bharatanatyam Arangetram — we bring the soul of Telangana and Andhra to your event.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontFamily: '"DM Sans", sans-serif', fontSize: '0.95rem', color: '#6B5544' }}>
                {['Banana Leaf Service', 'Andhra Specials', 'Telangana Specials', 'Pulihora', 'Gongura Pappu', 'Bobbatlu', 'Pesarattu', 'Authentic Spices'].map((f) => (
                  <li key={f}><span style={{ color: '#C0392B', marginRight: 8, fontWeight: 700 }}>✦</span>{f}</li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn x={30} delay={0.15}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <img src="/img5.jpg" alt="Traditional Telugu meal"  style={{ width: '100%', height: 240, objectFit: 'cover', border: '4px solid #FFFBF2', borderRadius: 8, boxShadow: '0 12px 26px rgba(139,107,42,0.20)' }} />
                <img src="/img6.jpg" alt="Banana leaf service"        style={{ width: '100%', height: 240, objectFit: 'cover', border: '4px solid #FFFBF2', borderRadius: 8, marginTop: 30, boxShadow: '0 12px 26px rgba(139,107,42,0.20)' }} />
                <img src="/img3.jpg" alt="Live cooking traditional"   style={{ width: '100%', height: 240, objectFit: 'cover', border: '4px solid #FFFBF2', borderRadius: 8, marginTop: -30, boxShadow: '0 12px 26px rgba(139,107,42,0.20)' }} />
                <img src="/img2.jpg" alt="Festival feast layout"      style={{ width: '100%', height: 240, objectFit: 'cover', border: '4px solid #FFFBF2', borderRadius: 8, boxShadow: '0 12px 26px rgba(139,107,42,0.20)' }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── PILLARS (rose-cream) ──────────────────────────────────── */}
      <section className="section-pad rose-section">
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <SectionHeading kicker="What Sets Us Apart" title="The Aadhya Standard" center />
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 26, marginTop: 36 }}>
            {PILLARS.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.06}>
                <div className="cream-card" style={{ padding: '34px 28px', height: '100%' }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FFF7E5, #FBEFD6)',
                    border: '2px solid rgba(201,161,74,0.45)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.7rem', marginBottom: 16,
                  }}>
                    {p.icon}
                  </div>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', color: '#3B2A1F', fontSize: '1.22rem', marginBottom: 10, fontWeight: 700 }}>{p.title}</h3>
                  <div style={{ width: 40, height: 2, background: 'linear-gradient(90deg, #C9A14A, transparent)', marginBottom: 14 }} />
                  <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.94rem', color: '#6B5544', lineHeight: 1.75 }}>{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WEDDING EXPERTISE FEATURE ROW (cream) ─────────────────── */}
      <section className="section-pad cream-section">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 50, alignItems: 'center' }}>
            <FadeIn x={-30}>
              <div style={{ position: 'relative' }}>
                <img src="/img7.jpg" alt="Grand wedding catering" style={{ width: '100%', height: 480, objectFit: 'cover', borderRadius: 14, border: '4px solid #FFFBF2', boxShadow: '0 24px 50px rgba(139,107,42,0.25)', filter: 'saturate(1.10) contrast(1.04)' }} />
                <div style={{
                  position: 'absolute', bottom: 18, left: 18,
                  background: 'rgba(255, 251, 242, 0.96)',
                  padding: '14px 22px',
                  border: '1px solid rgba(139,107,42,0.30)',
                  borderRadius: 8,
                  backdropFilter: 'blur(6px)',
                  boxShadow: '0 12px 28px rgba(139,107,42,0.20)',
                }}>
                  <p style={{ fontFamily: '"Playfair Display"', fontStyle: 'italic', color: '#8B6B2A', fontSize: '1.4rem', lineHeight: 1, fontWeight: 600 }}>Grand Weddings</p>
                  <p style={{ fontFamily: '"DM Sans"', color: '#C0392B', fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 6, fontWeight: 700 }}>500 – 1500 Guests</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn x={30} delay={0.15}>
              <SectionHeading kicker="Our Specialty" title="Wedding Catering Expertise" />
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1.12rem', color: '#3B2A1F', lineHeight: 1.85, marginBottom: 16 }}>
                Weddings are our most loved canvas. From the welcome drinks to the farewell feast, we orchestrate every detail — multi-cuisine buffets, live counters, custom thali services, dessert stations and an army of uniformed captains making sure every guest feels royal.
              </p>
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1.04rem', color: '#6B5544', lineHeight: 1.85, marginBottom: 22 }}>
                Our team works closely with your wedding planner / family from menu tasting to final plating, ensuring your big day flows seamlessly.
              </p>
              <Link to="/services" className="btn-gold" style={{ textDecoration: 'none' }}>See Our Services</Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── BUFFET + LIVE COUNTERS DUAL ROW (beige) ───────────────── */}
      <section className="section-pad beige-section">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 36 }}>
          <FadeUp>
            <div className="cream-card">
              <img src="/img2.jpg" alt="Buffet setup décor" style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block', filter: 'saturate(1.10) contrast(1.04)' }} />
              <div style={{ padding: '32px 32px 30px' }}>
                <h3 style={{ fontFamily: '"Playfair Display", serif', color: '#3B2A1F', fontSize: '1.4rem', marginBottom: 10, fontWeight: 700 }}>Royal Buffet Setup</h3>
                <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg, #C9A14A, transparent)', marginBottom: 14 }} />
                <p style={{ fontFamily: '"DM Sans", sans-serif', color: '#6B5544', fontSize: '0.98rem', lineHeight: 1.78 }}>
                  Gold-themed décor, polished chafing dishes, draped serving counters, ornate centrepieces — every buffet is designed like a five-star showpiece, customised to your venue and theme.
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="cream-card">
              <img src="/img3.jpg" alt="Live counter cooking" style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block', filter: 'saturate(1.10) contrast(1.04)' }} />
              <div style={{ padding: '32px 32px 30px' }}>
                <h3 style={{ fontFamily: '"Playfair Display", serif', color: '#3B2A1F', fontSize: '1.4rem', marginBottom: 10, fontWeight: 700 }}>Live Counters</h3>
                <div style={{ width: 44, height: 2, background: 'linear-gradient(90deg, #C9A14A, transparent)', marginBottom: 14 }} />
                <p style={{ fontFamily: '"DM Sans", sans-serif', color: '#6B5544', fontSize: '0.98rem', lineHeight: 1.78 }}>
                  Live dosa, pani puri, chaat, pasta, dum biryani and dahi bhalla counters prepared right in front of guests — turning your event into a theatrical food experience.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTASection
        title="Experience the Aadhya Difference"
        subtitle="Eight years, five hundred events, ten thousand smiles — let us add your celebration to that list."
      />
    </>
  );
}
