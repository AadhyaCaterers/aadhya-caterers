import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import CTASection from '../components/CTASection';
import MenuPlan from '../components/MenuPlan';

import {
  FadeUp,
  Ornament,
} from '../components/animations';

import { VEG_PLANS } from '../data/menuData';

export default function VegMenu() {
  const planLinks = useMemo(
    () =>
      VEG_PLANS.map((p) => ({
        id: p.id,
        title: p.title,
      })),
    []
  );

  const jumpTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      {/* HERO */}
      <section
        className="cream-section"
        style={{
          padding:
            'clamp(140px,16vw,180px) 0 clamp(50px,7vw,70px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: 920,
            margin: '0 auto',
            padding: '0 24px',
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
          }}
        >
          <FadeUp>
            <p className="section-kicker">
              Premium Pure Vegetarian Catering
            </p>

            <h1
              className="section-title"
              style={{
                fontSize:
                  'clamp(2.2rem,4.8vw,3.4rem)',
                marginTop: 6,
                marginBottom: 14,
                lineHeight: 1.15,
              }}
            >
              <span
                style={{
                  background:
                    'linear-gradient(135deg,#2E5E3B,#4E8A5B,#C9A14A)',
                  WebkitBackgroundClip:
                    'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor:
                    'transparent',
                  fontStyle: 'italic',
                }}
              >
                Veg Catering Menu
              </span>
            </h1>

            <Ornament />

            <p
              className="section-subtitle"
              style={{
                maxWidth: 760,
                margin: '18px auto 0',
                fontSize: '1.08rem',
                lineHeight: 1.9,
              }}
            >
              Traditional Telugu, North Indian
              and South Indian vegetarian
              catering menus crafted for weddings,
              receptions, engagements and premium
              family celebrations.
            </p>
          </FadeUp>

          {/* MENU TYPE BUTTONS */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 12,
              flexWrap: 'wrap',
              marginTop: 42,
            }}
          >
            {planLinks.map((p) => (
              <button
                key={p.id}
                onClick={() =>
                  jumpTo(p.id)
                }
                style={{
                  padding: '12px 22px',
                  background:
                    'rgba(201,161,74,0.08)',
                  border:
                    '1.5px solid rgba(139,107,42,0.35)',
                  color: '#8B6B2A',
                  fontFamily:
                    '"DM Sans", sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.10em',
                  textTransform:
                    'uppercase',
                  borderRadius: 999,
                  cursor: 'pointer',
                  transition:
                    'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    'linear-gradient(135deg,#E5C77F,#C9A14A)';
                  e.currentTarget.style.color =
                    '#3B2A1F';
                  e.currentTarget.style.transform =
                    'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    'rgba(201,161,74,0.08)';
                  e.currentTarget.style.color =
                    '#8B6B2A';
                  e.currentTarget.style.transform =
                    'translateY(0)';
                }}
              >
                {p.title}
              </button>
            ))}

            <Link
              to="/non-veg-menu"
              style={{
                padding: '12px 22px',
                background:
                  'rgba(192,57,43,0.08)',
                border:
                  '1.5px solid rgba(192,57,43,0.35)',
                color: '#C0392B',
                fontFamily:
                  '"DM Sans", sans-serif',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.10em',
                textTransform:
                  'uppercase',
                borderRadius: 999,
                textDecoration: 'none',
                transition:
                  'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(135deg,#E8A29C,#C0392B)';
                e.currentTarget.style.color =
                  '#FFFBF2';
                e.currentTarget.style.transform =
                  'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  'rgba(192,57,43,0.08)';
                e.currentTarget.style.color =
                  '#C0392B';
                e.currentTarget.style.transform =
                  'translateY(0)';
              }}
            >
              View Non-Veg Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* MENU PLANS */}
      <section
        className="cream-section"
        style={{
          padding: '30px 0 100px',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {VEG_PLANS.map((plan, i) => (
            <MenuPlan
              key={plan.id}
              plan={plan}
              index={i}
            />
          ))}

          {/* FOOTER NOTE */}
          <FadeUp
            style={{
              textAlign: 'center',
              marginTop: 18,
            }}
          >
            <div
              style={{
                background:
                  'linear-gradient(180deg,#FFF8E7 0%,#FFFFFF 100%)',
                border:
                  '1px solid rgba(201,161,74,0.20)',
                borderRadius: 22,
                padding:
                  'clamp(24px,4vw,38px)',
                maxWidth: 900,
                margin: '0 auto',
              }}
            >
              <h3
                style={{
                  fontFamily:
                    '"Playfair Display", serif',
                  color: '#3B2A1F',
                  fontSize: '1.6rem',
                  marginBottom: 14,
                }}
              >
                Fully Customisable Menus
              </h3>

              <p
                style={{
                  fontFamily:
                    '"DM Sans", sans-serif',
                  color: '#6B5544',
                  fontSize: '1rem',
                  lineHeight: 1.9,
                  maxWidth: 720,
                  margin:
                    '0 auto 28px',
                }}
              >
                Every catering menu can be
                customised based on guest count,
                wedding theme, regional taste and
                special dietary requirements.
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 14,
                  flexWrap: 'wrap',
                }}
              >
                <Link
                  to="/contact"
                  className="btn-gold"
                  style={{
                    textDecoration:
                      'none',
                  }}
                >
                  Request Custom Menu
                </Link>

                <Link
                  to="/non-veg-menu"
                  className="btn-outline-gold"
                  style={{
                    textDecoration:
                      'none',
                  }}
                >
                  Explore Non-Veg Menu
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Let's Curate Your Dream Vegetarian Feast"
        subtitle="From traditional sweets to grand wedding spreads — every dish is crafted to elevate your celebration."
      />
    </>
  );
}