import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import CTASection from '../components/CTASection';
import MenuPlan from '../components/MenuPlan';

import {
  FadeUp,
  Ornament,
} from '../components/animations';

import { NONVEG_PLANS } from '../data/menuData';

export default function NonVegMenu() {
  const planLinks = useMemo(
    () =>
      NONVEG_PLANS.map((p) => ({
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
              Royal Hyderabadi Non-Veg Catering
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
                    'linear-gradient(135deg,#7A1F1F,#C0392B,#E5C77F)',
                  WebkitBackgroundClip:
                    'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor:
                    'transparent',
                  fontStyle: 'italic',
                }}
              >
                Non-Veg Catering Menu
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
              Signature Hyderabadi dum biryani,
              chicken curries, mutton specials and
              traditional celebration dishes crafted
              for weddings, receptions and grand
              family events.
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
                  cursor: 'pointer',
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
                {p.title}
              </button>
            ))}

            <Link
              to="/veg-menu"
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
                textDecoration: 'none',
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
              View Veg Menu →
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
          {NONVEG_PLANS.map((plan, i) => (
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
                  'linear-gradient(180deg,#FFF5F4 0%,#FFFFFF 100%)',
                border:
                  '1px solid rgba(192,57,43,0.16)',
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
                Fully Customisable Non-Veg Menus
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
                Every menu can be tailored based on
                guest count, biryani preference,
                regional flavours, spice level and
                special event requirements.
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
                  to="/veg-menu"
                  className="btn-outline-gold"
                  style={{
                    textDecoration:
                      'none',
                  }}
                >
                  Explore Veg Menu
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Let's Curate Your Dream Non-Veg Feast"
        subtitle="From signature Hyderabadi biryani to rich curries and celebration platters — every dish is crafted to impress your guests."
      />
    </>
  );
}