import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import MenuPlan from '../components/MenuPlan';
import { FadeUp, Ornament } from '../components/animations';
import { NONVEG_PLANS } from '../data/menuData';

// ──────────────────────────────────────────────────────────────────
// NON-VEG MENU PAGE  (/non-veg-menu)
// Renders all non-vegetarian plans (Standard + Silver) using the
// reusable MenuPlan component.
// ──────────────────────────────────────────────────────────────────
export default function NonVegMenu() {
  const planLinks = useMemo(
    () => NONVEG_PLANS.map((p) => ({ id: p.id, title: p.title })),
    []
  );

  const jumpTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Page header — text-only, banner image removed */}
      <section
        className="cream-section"
        style={{
          // Clears the fixed navbar (TopBar + Navbar) and gives the
          // heading comfortable breathing room without empty space.
          padding: 'clamp(140px, 16vw, 180px) 0 clamp(40px, 6vw, 64px)',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: 880,
            margin: '0 auto',
            padding: '0 24px',
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
          }}
        >
          <FadeUp>
            <p className="section-kicker">Royal Hyderabadi Non-Veg Selection</p>
            <h1
              className="section-title"
              style={{
                fontSize: 'clamp(2rem, 4.4vw, 3rem)',
                marginTop: 6,
              }}
            >
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #B8923D, #C9A14A, #8B6B2A)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontStyle: 'italic',
                }}
              >
                Non-Veg Menu
              </span>
            </h1>
            <Ornament />
            <p
              className="section-subtitle"
              style={{
                maxWidth: 720,
                margin: '14px auto 0',
                fontSize: '1.05rem',
              }}
            >
              Hyderabadi Dum Biryani, signature chicken &amp; mutton curries and traditional sides — crafted for grand weddings, receptions and special celebrations.
            </p>
          </FadeUp>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 10,
              flexWrap: 'wrap',
              marginTop: 36,
            }}
          >
            {planLinks.map((p) => (
              <button
                key={p.id}
                onClick={() => jumpTo(p.id)}
                style={{
                  padding: '10px 20px',
                  background: 'rgba(192,57,43,0.08)',
                  border: '1.5px solid rgba(192,57,43,0.40)',
                  color: '#C0392B',
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  borderRadius: 999,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    'linear-gradient(135deg, #E8A29C, #C0392B)';
                  e.currentTarget.style.color = '#FFFBF2';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 20px rgba(192,57,43,0.30)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(192,57,43,0.08)';
                  e.currentTarget.style.color = '#C0392B';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {p.title}
              </button>
            ))}
            <Link
              to="/veg-menu"
              style={{
                padding: '10px 20px',
                background: 'rgba(201,161,74,0.08)',
                border: '1.5px solid rgba(139,107,42,0.40)',
                color: '#8B6B2A',
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                borderRadius: 999,
                textDecoration: 'none',
                transition: 'all 0.3s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(135deg, #E5C77F, #C9A14A)';
                e.currentTarget.style.color = '#3B2A1F';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(201,161,74,0.08)';
                e.currentTarget.style.color = '#8B6B2A';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              View Veg Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section
        className="cream-section"
        style={{ padding: '40px 0 90px', position: 'relative' }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            padding: '0 24px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {NONVEG_PLANS.map((plan, i) => (
            <MenuPlan key={plan.id} plan={plan} index={i} />
          ))}

          {/* Footer note */}
          <FadeUp style={{ textAlign: 'center', marginTop: 12 }}>
            <p
              style={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: 'italic',
                color: '#6B5544',
                fontSize: '1rem',
                maxWidth: 600,
                margin: '0 auto 22px',
                lineHeight: 1.7,
              }}
            >
              Every menu is fully customisable to your wedding theme, guest count and dietary preferences.
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 12,
                flexWrap: 'wrap',
              }}
            >
              <Link to="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>
                Request Custom Menu
              </Link>
              <Link
                to="/veg-menu"
                className="btn-outline-gold"
                style={{ textDecoration: 'none' }}
              >
                View Veg Menu
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTASection
        title="Let's Curate Your Dream Non-Veg Menu"
        subtitle="From signature dum biryani to royal kebabs — every dish, every detail, designed around your celebration."
      />
    </>
  );
}
