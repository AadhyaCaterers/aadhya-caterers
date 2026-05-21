import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { FadeUp, FadeIn, GoldDivider } from '../components/animations';
import {
  WHATSAPP_URL, YOUTUBE_URL, PHONE_PRIMARY, PHONE_SECONDARY, EMAIL_PRIMARY,
  USE_FORMSPREE, FORMSPREE_ENDPOINT,
  EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY,
} from '../data/constants';

// Dedicated Contact page — form, both addresses, map, WhatsApp, call, email
export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', event: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      if (USE_FORMSPREE) {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Formspree error');
      } else {
        const emailjs = await import('@emailjs/browser');
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          { from_name: form.name, phone: form.phone, email: form.email, event_type: form.event, message: form.message },
          EMAILJS_PUBLIC_KEY,
        );
      }
      setStatus('success');
      setForm({ name: '', phone: '', email: '', event: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <>
      <PageBanner
        tagline="Get in Touch"
        title="Contact Aadhya Caterers"
        subtitle="Call, WhatsApp, email or fill the form — we typically respond within an hour during business hours."
        image="/img6.jpg"
      />

      {/* Quick action buttons row */}
      <section style={{ background: '#1a0e02', padding: '50px 0 30px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {[
              { icon: '📞', label: 'Call Now',     val: '+91 94940 55353', href: `tel:${PHONE_PRIMARY}`,   color: '#d4a017' },
              { icon: '💬', label: 'WhatsApp Chat', val: 'Chat with us instantly', href: WHATSAPP_URL,      color: '#25D366', external: true },
              { icon: '✉️', label: 'Email Us',     val: EMAIL_PRIMARY,    href: `mailto:${EMAIL_PRIMARY}`, color: '#d4a017' },
              { icon: '▶',  label: 'YouTube',      val: 'Watch our reels', href: YOUTUBE_URL,              color: '#FF0000', external: true },
            ].map((a, i) => (
              <FadeUp key={a.label} delay={i * 0.06}>
                <a
                  href={a.href}
                  target={a.external ? '_blank' : undefined}
                  rel={a.external ? 'noopener noreferrer' : undefined}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '18px 20px', border: '1px solid rgba(212,160,23,0.3)', borderRadius: 4, background: 'linear-gradient(135deg, rgba(45,26,6,0.95), rgba(26,14,2,0.98))', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s' }}
                  onMouseOver={(e) => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.7)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: a.color, color: '#1a0e02', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                    {a.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: '"Lato"', color: 'rgba(253,246,227,0.55)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{a.label}</p>
                    <p style={{ fontFamily: '"Cormorant Garamond"', color: '#fdf6e3', fontSize: '0.95rem' }}>{a.val}</p>
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="section-pad pattern-overlay" style={{ background: 'linear-gradient(to bottom, #2d1a06, #1a0e02)', paddingTop: 30 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 48 }}>
            {/* Left — info + map */}
            <FadeIn x={-30}>
              <h3 style={{ fontFamily: '"Playfair Display",serif', color: '#d4a017', fontSize: '1.5rem', marginBottom: 8 }}>Contact Information</h3>
              <div className="gold-divider-left" style={{ marginBottom: 24 }} />

              {[
                { icon: '📞', label: 'Phone', lines: [
                  <a key="p1" href={`tel:${PHONE_PRIMARY}`}   style={{ color: '#d4a017', textDecoration: 'none' }}>+91 94940 55353</a>,
                  <a key="p2" href={`tel:${PHONE_SECONDARY}`} style={{ color: 'rgba(253,246,227,0.8)', textDecoration: 'none' }}>+91 93981 83197</a>,
                ]},
                { icon: '✉️', label: 'Email', lines: [
                  <a key="e" href={`mailto:${EMAIL_PRIMARY}`} style={{ color: '#d4a017', textDecoration: 'none', fontSize: '0.95rem' }}>{EMAIL_PRIMARY}</a>,
                ]},
                { icon: '📍', label: 'Kukatpally Branch', lines: ['Balajinagar, Kukatpally', 'Hyderabad, Telangana - 500072'] },
                { icon: '📍', label: 'Uppal Branch',      lines: ['Chilkanagar, Uppal', 'Hyderabad, Telangana'] },
                { icon: '🕒', label: 'Working Hours',     lines: ['Monday – Sunday', '08:00 AM – 09:00 PM'] },
              ].map((c) => (
                <div key={c.label} style={{ display: 'flex', gap: 16, marginBottom: 22 }}>
                  <div style={{ width: 44, height: 44, border: '1px solid rgba(212,160,23,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <p style={{ fontFamily: '"Lato",sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(253,246,227,0.5)', textTransform: 'uppercase', marginBottom: 4 }}>{c.label}</p>
                    {c.lines.map((line, i) => (
                      <p key={i} style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1rem', color: 'rgba(253,246,227,0.85)' }}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: '#25D366', color: 'white', textDecoration: 'none', fontFamily: '"Lato",sans-serif', fontSize: '0.85rem', fontWeight: 700 }}>
                  💬 WhatsApp Us
                </a>
                <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: '#FF0000', color: 'white', textDecoration: 'none', fontFamily: '"Lato",sans-serif', fontSize: '0.85rem', fontWeight: 700 }}>
                  ▶ YouTube
                </a>
              </div>

              {/* Map — Kukatpally */}
              <div style={{ marginTop: 28, border: '1px solid rgba(212,160,23,0.3)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4721278748!2d78.40601!3d17.4946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e5b1f59e63%3A0x5d86a7da8c7c4e9f!2sBalajinagar%2C+Kukatpally%2C+Hyderabad%2C+Telangana+500072!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="260"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aadhya Caterers Kukatpally Location"
                />
              </div>
            </FadeIn>

            {/* Right — form */}
            <FadeIn x={30} delay={0.15}>
              <h3 style={{ fontFamily: '"Playfair Display",serif', color: '#d4a017', fontSize: '1.5rem', marginBottom: 8 }}>Send Us a Message</h3>
              <div className="gold-divider-left" style={{ marginBottom: 24 }} />

              {status === 'success' && (
                <div style={{ background: 'rgba(212,160,23,0.1)', border: '1px solid #d4a017', padding: '14px 20px', marginBottom: 24, fontFamily: '"Cormorant Garamond",serif', color: '#d4a017', fontSize: '1rem' }}>
                  ✓ Thank you! We'll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div style={{ background: 'rgba(180,40,40,0.1)', border: '1px solid #c0392b', padding: '14px 20px', marginBottom: 24, fontFamily: '"Cormorant Garamond",serif', color: '#e74c3c', fontSize: '1rem' }}>
                  ✗ Something went wrong. Please call us directly at +91 94940 55353.
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <input className="form-input" name="name"  placeholder="Your Full Name *" value={form.name}  onChange={handleChange} required />
                <input className="form-input" name="phone" placeholder="Phone Number *"   value={form.phone} onChange={handleChange} required />
                <input className="form-input" name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
                <select className="form-input" name="event" value={form.event} onChange={handleChange} required style={{ cursor: 'pointer' }}>
                  <option value="">Select Event Type *</option>
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Birthday Party</option>
                  <option>House Warming</option>
                  <option>Outdoor Event</option>
                  <option>Other</option>
                </select>
                <textarea className="form-input" name="message" placeholder="Tell us about your event — date, guest count, requirements…" value={form.message} onChange={handleChange} rows={5} style={{ resize: 'vertical' }} />
                <button type="submit" className="btn-gold" disabled={status === 'sending'} style={{ cursor: status === 'sending' ? 'not-allowed' : 'pointer', fontSize: '0.8rem', opacity: status === 'sending' ? 0.7 : 1 }}>
                  {status === 'sending' ? 'Sending…' : 'Submit Enquiry'}
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Both branches block */}
      <section className="section-pad" style={{ background: '#1a0e02' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 36 }}>
            <p style={{ fontFamily: '"Great Vibes"', fontSize: '2rem', color: '#d4a017' }}>Find Us Here</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: 12 }}>Our Two Hyderabad Branches</h2>
            <GoldDivider />
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {[
              { name: 'Kukatpally Branch', lines: ['Balajinagar, Kukatpally', 'Hyderabad, Telangana - 500072'], img: '/img2.jpg' },
              { name: 'Uppal Branch',      lines: ['Chilkanagar, Uppal',      'Hyderabad, Telangana'],          img: '/img4.jpg' },
            ].map((b) => (
              <FadeUp key={b.name}>
                <div className="gold-card" style={{ borderRadius: 4, overflow: 'hidden' }}>
                  <img src={b.img} alt={b.name} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                  <div style={{ padding: '24px 26px' }}>
                    <h3 style={{ fontFamily: '"Playfair Display"', color: '#d4a017', fontSize: '1.2rem', marginBottom: 8 }}>📍 {b.name}</h3>
                    {b.lines.map((l) => (
                      <p key={l} style={{ fontFamily: '"Cormorant Garamond"', color: 'rgba(253,246,227,0.85)', fontSize: '1rem', lineHeight: 1.7 }}>{l}</p>
                    ))}
                    <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
                      <a href={`tel:${PHONE_PRIMARY}`} className="btn-gold" style={{ textDecoration: 'none', fontSize: '0.72rem', padding: '9px 18px' }}>📞 Call</a>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ textDecoration: 'none', fontSize: '0.72rem', padding: '8px 16px' }}>💬 WhatsApp</a>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
