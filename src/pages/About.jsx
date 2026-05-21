import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { FadeUp, FadeIn, GoldDivider } from '../components/animations';

// Reusable label/heading for content blocks below
const SectionHeading = ({ kicker, title, center = false }) => (
  <div style={{ textAlign: center ? 'center' : 'left', marginBottom: 24 }}>
    {kicker && (
      <p style={{ fontFamily: '"Great Vibes", cursive', fontSize: '1.7rem', color: '#d4a017', marginBottom: 4 }}>{kicker}</p>
    )}
    <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: 12, lineHeight: 1.25 }}>{title}</h2>
    {center
      ? <div className="gold-divider" style={{ margin: '0 auto' }} />
      : <div className="gold-divider-left" />
    }
  </div>
);

// Pillars / values cards
const PILLARS = [
  { icon: '🌿', title: 'Hygiene Standards', desc: 'FSSAI-aligned kitchen practices, gloves, hairnets, sanitised utensils and quality-checked ingredients on every event.' },
  { icon: '👨‍🍳', title: 'Experienced Staff',  desc: 'Trained chefs, captains and uniformed servers with 10+ years in large-scale catering and weddings.' },
  { icon: '🌾', title: 'Authentic Telugu',   desc: 'Recipes passed down generations — Pulihora, Gongura Pappu, Bobbatlu — exactly as tradition intended.' },
  { icon: '🍽️', title: 'Royal Buffet Setup', desc: 'Gold-themed décor, polished chafing dishes, ornate serving counters and a five-star presentation.' },
  { icon: '💍', title: 'Wedding Expertise',  desc: 'Specialists in 500–1500 guest weddings with multi-cuisine menus and live counter coordination.' },
  { icon: '🔥', title: 'Live Counters',      desc: 'Theatrical live cooking — dosas, chaat, pani puri, pasta, biryani — fresh in front of guests.' },
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

      {/* ── COMPANY STORY ─────────────────────────────────────────── */}
      <section className="section-pad pattern-overlay" style={{ background: 'linear-gradient(to bottom, #1a0e02, #2d1a06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 60, alignItems: 'center' }}>
            <FadeIn x={-40}>
              <div style={{ position: 'relative', paddingBottom: 40 }}>
                <div style={{ position: 'relative', borderRadius: 2, overflow: 'hidden', border: '2px solid rgba(212,160,23,0.3)' }}>
                  <img src="/img6.jpg" alt="Aadhya catering team in action" style={{ width: '100%', height: 460, objectFit: 'cover', filter: 'brightness(0.95) contrast(1.05) saturate(1.1)', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,14,2,0.4), transparent)' }} />
                </div>
                <div style={{ position: 'absolute', bottom: 10, right: -20, width: '55%', border: '3px solid #1a0e02', borderRadius: 2, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}>
                  <img src="/img2.jpg" alt="Premium buffet décor" style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ position: 'absolute', top: 20, left: -15, background: 'linear-gradient(135deg,#d4a017,#f2cd25)', color: '#1a0e02', padding: '12px 20px', fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: '0.85rem', textAlign: 'center', boxShadow: '0 4px 16px rgba(212,160,23,0.4)' }}>
                  8+ Years<br /><span style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>OF EXCELLENCE</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn x={40} delay={0.15}>
              <SectionHeading kicker="Our Story" title="Catering With Heart Since 2017" />
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem', color: 'rgba(253,246,227,0.85)', lineHeight: 1.8, marginBottom: 16 }}>
                Aadhya Caterers was born from a simple belief — that every celebration deserves food that tastes like home, served with the elegance of a five-star kitchen. What began as a family-run kitchen in Kukatpally has grown into one of Hyderabad's most trusted catering teams.
              </p>
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem', color: 'rgba(253,246,227,0.75)', lineHeight: 1.8, marginBottom: 16 }}>
                We have catered over <strong style={{ color: '#d4a017' }}>500+ events</strong> across Hyderabad and Telangana — from intimate house warmings to 1500-guest grand weddings — and served more than <strong style={{ color: '#d4a017' }}>10,000 happy guests</strong> with authentic Telugu Saapadu, royal buffet feasts and theatrical live counters.
              </p>
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.05rem', color: 'rgba(253,246,227,0.75)', lineHeight: 1.8, marginBottom: 24 }}>
                Our kitchens follow strict FSSAI-aligned hygiene practices, and our service team is trained for events of any scale — anywhere across Hyderabad.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/services" className="btn-gold" style={{ textDecoration: 'none' }}>Explore Services</Link>
                <Link to="/contact" className="btn-outline-gold" style={{ textDecoration: 'none' }}>Plan Your Event</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE STATS BAND ─────────────────────────────────── */}
      <section style={{ background: '#0e0700', borderTop: '1px solid rgba(212,160,23,0.15)', borderBottom: '1px solid rgba(212,160,23,0.15)', padding: '60px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 30, textAlign: 'center' }}>
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
              <div style={{ fontFamily: '"Cormorant Garamond", serif', color: 'rgba(253,246,227,0.7)', fontSize: '0.95rem', letterSpacing: '0.1em', marginTop: 6 }}>{s.label}</div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── TRADITIONAL TELUGU CATERING ───────────────────────────── */}
      <section className="section-pad" style={{ background: '#1a0e02' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 50, alignItems: 'center' }}>
            <FadeIn x={-30}>
              <SectionHeading kicker="Heritage Cuisine" title="Authentic Traditional Telugu Catering" />
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem', color: 'rgba(253,246,227,0.85)', lineHeight: 1.8, marginBottom: 16 }}>
                Telugu Saapadu is more than food — it's a cultural ritual. We serve authentic 20+ dish thalis on banana leaves with Pulihora, Gongura Pappu, Tomato Pappu, Pesarattu, Avakaya, Bobbatlu and Payasam, exactly as our grandmothers taught us.
              </p>
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.05rem', color: 'rgba(253,246,227,0.75)', lineHeight: 1.8, marginBottom: 18 }}>
                Whether it's a Gruhapravesham, Pelli or Bharatanatyam Arangetram — we bring the soul of Telangana and Andhra to your event.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontFamily: '"Lato", sans-serif', fontSize: '0.9rem', color: 'rgba(253,246,227,0.8)' }}>
                {['Banana Leaf Service', 'Andhra Specials', 'Telangana Specials', 'Pulihora', 'Gongura Pappu', 'Bobbatlu', 'Pesarattu', 'Authentic Spices'].map((f) => (
                  <li key={f}><span style={{ color: '#d4a017', marginRight: 6 }}>✦</span>{f}</li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn x={30} delay={0.15}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <img src="/img5.jpg" alt="Traditional Telugu meal" style={{ width: '100%', height: 220, objectFit: 'cover', border: '1px solid rgba(212,160,23,0.3)', borderRadius: 2 }} />
                <img src="/img6.jpg" alt="Banana leaf service" style={{ width: '100%', height: 220, objectFit: 'cover', border: '1px solid rgba(212,160,23,0.3)', borderRadius: 2, marginTop: 24 }} />
                <img src="/img3.jpg" alt="Live cooking traditional" style={{ width: '100%', height: 220, objectFit: 'cover', border: '1px solid rgba(212,160,23,0.3)', borderRadius: 2, marginTop: -24 }} />
                <img src="/img2.jpg" alt="Festival feast layout" style={{ width: '100%', height: 220, objectFit: 'cover', border: '1px solid rgba(212,160,23,0.3)', borderRadius: 2 }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── HYGIENE / BUFFET / WEDDING / LIVE / STAFF — pillars ───── */}
      <section className="section-pad" style={{ background: 'linear-gradient(to bottom, #2d1a06, #1a0e02)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <FadeUp>
            <SectionHeading kicker="What Sets Us Apart" title="The Aadhya Standard" center />
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24, marginTop: 30 }}>
            {PILLARS.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.06}>
                <div className="gold-card" style={{ padding: '32px 26px', borderRadius: 4, height: '100%' }}>
                  <div style={{ fontSize: '2.2rem', marginBottom: 14 }}>{p.icon}</div>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', color: '#d4a017', fontSize: '1.15rem', marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ fontFamily: '"Lato", sans-serif', fontSize: '0.9rem', color: 'rgba(253,246,227,0.75)', lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WEDDING EXPERTISE FEATURE ROW ─────────────────────────── */}
      <section className="section-pad" style={{ background: '#1a0e02', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 50, alignItems: 'center' }}>
            <FadeIn x={-30}>
              <div style={{ position: 'relative' }}>
                <img src="/img7.jpg" alt="Grand wedding catering" style={{ width: '100%', height: 460, objectFit: 'cover', borderRadius: 2, border: '2px solid rgba(212,160,23,0.3)' }} />
                <div style={{ position: 'absolute', bottom: 16, left: 16, background: 'rgba(26,14,2,0.85)', backdropFilter: 'blur(6px)', padding: '14px 22px', border: '1px solid rgba(212,160,23,0.3)', borderRadius: 2 }}>
                  <p style={{ fontFamily: '"Great Vibes"', color: '#d4a017', fontSize: '1.4rem' }}>Grand Weddings</p>
                  <p style={{ fontFamily: '"Lato"', color: 'rgba(253,246,227,0.7)', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>500 – 1500 Guests</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn x={30} delay={0.15}>
              <SectionHeading kicker="Our Specialty" title="Wedding Catering Expertise" />
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem', color: 'rgba(253,246,227,0.85)', lineHeight: 1.8, marginBottom: 16 }}>
                Weddings are our most loved canvas. From the welcome drinks to the farewell feast, we orchestrate every detail — multi-cuisine buffets, live counters, custom thali services, dessert stations and an army of uniformed captains making sure every guest feels royal.
              </p>
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.05rem', color: 'rgba(253,246,227,0.75)', lineHeight: 1.8, marginBottom: 22 }}>
                Our team works closely with your wedding planner / family from menu tasting to final plating, ensuring your big day flows seamlessly.
              </p>
              <Link to="/services" className="btn-gold" style={{ textDecoration: 'none' }}>See Our Services →</Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── BUFFET + LIVE COUNTERS DUAL ROW ───────────────────────── */}
      <section className="section-pad" style={{ background: 'linear-gradient(to bottom, #1a0e02, #2d1a06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 36 }}>
          <FadeUp>
            <div className="gold-card" style={{ padding: 0, borderRadius: 4, overflow: 'hidden' }}>
              <img src="/img2.jpg" alt="Buffet setup décor" style={{ width: '100%', height: 240, objectFit: 'cover' }} />
              <div style={{ padding: '26px 28px' }}>
                <h3 style={{ fontFamily: '"Playfair Display", serif', color: '#d4a017', fontSize: '1.3rem', marginBottom: 10 }}>🍽️ Royal Buffet Setup</h3>
                <p style={{ fontFamily: '"Lato", sans-serif', color: 'rgba(253,246,227,0.8)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Gold-themed décor, polished chafing dishes, draped serving counters, ornate centrepieces — every buffet is designed like a five-star showpiece, customised to your venue and theme.
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="gold-card" style={{ padding: 0, borderRadius: 4, overflow: 'hidden' }}>
              <img src="/img3.jpg" alt="Live counter cooking" style={{ width: '100%', height: 240, objectFit: 'cover' }} />
              <div style={{ padding: '26px 28px' }}>
                <h3 style={{ fontFamily: '"Playfair Display", serif', color: '#d4a017', fontSize: '1.3rem', marginBottom: 10 }}>🔥 Live Counters</h3>
                <p style={{ fontFamily: '"Lato", sans-serif', color: 'rgba(253,246,227,0.8)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Live dosa, pani puri, chaat, pasta, dum biryani and dahi bhalla counters prepared right in front of guests — turning your event into a theatrical food experience.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── STAFF / TEAM ──────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#1a0e02' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <FadeUp>
            <SectionHeading kicker="Behind the Magic" title="Our Trained Staff & Team" center />
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, marginTop: 30 }}>
            {[
              { num: '15+',  label: 'Master Chefs' },
              { num: '40+',  label: 'Captains & Servers' },
              { num: '20+',  label: 'Live-Counter Specialists' },
              { num: '25+',  label: 'Décor & Setup Crew' },
            ].map((t, i) => (
              <FadeUp key={t.label} delay={i * 0.07}>
                <div className="gold-card" style={{ padding: '32px 24px', borderRadius: 4, textAlign: 'center' }}>
                  <div className="stat-number">{t.num}</div>
                  <p style={{ fontFamily: '"Cormorant Garamond", serif', color: 'rgba(253,246,227,0.8)', fontSize: '1rem', marginTop: 8 }}>{t.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp style={{ marginTop: 40, textAlign: 'center' }}>
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.05rem', color: 'rgba(253,246,227,0.75)', lineHeight: 1.8, maxWidth: 760, margin: '0 auto' }}>
              Every member of our team is professionally trained in event etiquette, hygiene practices and guest service. Our captains coordinate setup, service and clean-up so you can simply enjoy your celebration.
            </p>
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
