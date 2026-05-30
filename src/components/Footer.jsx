import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../data/navLinks';
import { SERVICES } from '../data/services';
import {
  WHATSAPP_URL,
  YOUTUBE_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  PHONE_PRIMARY,
  EMAIL_PRIMARY,
  LOGO_SRC,
} from '../data/constants';

const IconWhatsApp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
  </svg>
);

const IconYouTube = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
  </svg>
);

const IconFacebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const SocialBtn = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    style={{
      width: 46,
      height: 46,
      borderRadius: '50%',
      border: '1px solid rgba(212,175,55,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      color: '#D4AF37',
      transition: 'all .3s ease',
      background: 'rgba(212,175,55,0.06)',
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform =
        'translateY(-3px)';
      e.currentTarget.style.boxShadow =
        '0 8px 20px rgba(212,175,55,0.18)';
      e.currentTarget.style.background =
        'rgba(212,175,55,0.12)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform =
        'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.background =
        'rgba(212,175,55,0.06)';
    }}
  >
    {icon}
  </a>
);

export default function Footer() {
  return (
    <footer
      style={{
        background:
          'linear-gradient(135deg, #120B0A 0%, #1B1310 50%, #241815 100%)',
        borderTop:
          '1px solid rgba(212,175,55,0.18)',
        paddingBottom: 50,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top Accent Line */}
      <div
        style={{
          height: 3,
          background:
            'linear-gradient(90deg, transparent, #D4AF37 30%, #B68B3A 50%, #D4AF37 70%, transparent)',
        }}
      />

      {/* Soft Luxury Texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02), rgba(255,255,255,0.02))',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '56px 24px 28px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 40,
            marginBottom: 40,
          }}
        >
          {/* Brand */}
          <div>
            <img
              src={LOGO_SRC}
              alt="Aadhya Caterers"
              className="brand-logo"
              style={{
                height: 78,
                width: 'auto',
                marginBottom: 26,
              }}
            />

            <h3
              style={{
                fontFamily:
                  '"Playfair Display", serif',
                color: '#D4AF37',
                fontSize: '1.5rem',
                marginBottom: 14,
              }}
            >
              Aadhya Caterers
            </h3>

            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                color: 'rgba(255,251,242,0.78)',
                lineHeight: 1.8,
                fontSize: '0.95rem',
                marginBottom: 24,
              }}
            >
              Premium wedding catering crafted with
              authentic flavours, elegant presentation
              and exceptional hospitality across
              Hyderabad.
            </p>

            <div
              style={{
                display: 'flex',
                gap: 12,
                flexWrap: 'wrap',
              }}
            >
              <SocialBtn
                href={WHATSAPP_URL}
                icon={<IconWhatsApp />}
                label="WhatsApp"
              />

              <SocialBtn
                href={YOUTUBE_URL}
                icon={<IconYouTube />}
                label="YouTube"
              />

              <SocialBtn
                href={INSTAGRAM_URL}
                icon={<IconInstagram />}
                label="Instagram"
              />

              <SocialBtn
                href={FACEBOOK_URL}
                icon={<IconFacebook />}
                label="Facebook"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily:
                  '"Playfair Display", serif',
                color: '#D4AF37',
                marginBottom: 18,
                fontSize: '1.1rem',
                fontWeight: 700,
              }}
            >
              Quick Links
            </h4>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  style={{
                    fontFamily:
                      '"DM Sans", sans-serif',
                    color:
                      'rgba(255,251,242,0.72)',
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                    transition: 'all .3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color =
                      '#D4AF37';
                    e.currentTarget.style.paddingLeft =
                      '6px';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color =
                      'rgba(255,251,242,0.72)';
                    e.currentTarget.style.paddingLeft =
                      '0';
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily:
                  '"Playfair Display", serif',
                color: '#D4AF37',
                marginBottom: 18,
                fontSize: '1.1rem',
                fontWeight: 700,
              }}
            >
              Services
            </h4>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              {SERVICES.slice(0, 6).map((s) => (
                <Link
                  key={s.title}
                  to="/services"
                  style={{
                    fontFamily:
                      '"DM Sans", sans-serif',
                    color:
                      'rgba(255,251,242,0.72)',
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                    transition: 'all .3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color =
                      '#D4AF37';
                    e.currentTarget.style.paddingLeft =
                      '6px';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color =
                      'rgba(255,251,242,0.72)';
                    e.currentTarget.style.paddingLeft =
                      '0';
                  }}
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily:
                  '"Playfair Display", serif',
                color: '#D4AF37',
                marginBottom: 18,
                fontSize: '1.1rem',
                fontWeight: 700,
              }}
            >
              Contact Us
            </h4>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <a
                href={`tel:${PHONE_PRIMARY}`}
                style={{
                  color:
                    'rgba(255,251,242,0.80)',
                  textDecoration: 'none',
                  fontFamily: '"DM Sans"',
                  fontSize: '0.92rem',
                }}
              >
                📞 +91 90908 09026
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color:
                    'rgba(255,251,242,0.80)',
                  textDecoration: 'none',
                  fontFamily: '"DM Sans"',
                  fontSize: '0.92rem',
                }}
              >
                💬 +91 93981 83297
              </a>

              <a
                href={`mailto:${EMAIL_PRIMARY}`}
                style={{
                  color:
                    'rgba(255,251,242,0.80)',
                  textDecoration: 'none',
                  fontFamily: '"DM Sans"',
                  fontSize: '0.88rem',
                }}
              >
                ✉️ {EMAIL_PRIMARY}
              </a>

              <p
                style={{
                  color:
                    'rgba(255,251,242,0.72)',
                  fontFamily: '"DM Sans"',
                  fontSize: '0.92rem',
                  lineHeight: 1.7,
                }}
              >
                📍 Uppal . Chilka nagar• Hyderabad
              </p>
<p
                style={{
                  color:
                    'rgba(255,251,242,0.72)',
                  fontFamily: '"DM Sans"',
                  fontSize: '0.92rem',
                  lineHeight: 1.7,
                }}
              >
                📍 Kukatpally • Balaji Nagar• Hyderabad
              </p>
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop:
              '1px solid rgba(212,175,55,0.16)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              color: 'rgba(255,251,242,0.55)',
              fontSize: '0.84rem',
              letterSpacing: '0.03em',
            }}
          >
            © {new Date().getFullYear()} Aadhya
            Caterers • Premium Catering Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-10797028884">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-10797028884');
</script>
