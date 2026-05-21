import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// ─── EMAILJS CONFIG ──────────────────────────────────────────────────────────
// Sign up at https://emailjs.com → create a service + template → paste IDs below
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'user_ABCD1234'

// ─── FORMSPREE FALLBACK (easier — no account needed beyond free tier) ─────────
// Go to https://formspree.io → "New Form" → copy the endpoint below
// If you use Formspree, set USE_FORMSPREE = true and fill FORMSPREE_ENDPOINT
const USE_FORMSPREE       = false;
const FORMSPREE_ENDPOINT  = 'https://formspree.io/f/YOUR_FORM_ID';

// ─── DATA ────────────────────────────────────────────────────────────────────

const SERVICES = [
  { icon: '💍', title: 'Wedding Catering',   desc: 'Grand wedding feasts with authentic Telugu flavors, elegant setups and impeccable service for your most special day.',          img: '/img7.jpg' },
  { icon: '🏢', title: 'Corporate Catering', desc: 'Professional catering for corporate events, office lunches, conferences and team gatherings across Hyderabad.',                  img: '/img1.jpg' },
  { icon: '🎂', title: 'Birthday Parties',   desc: 'Make every birthday unforgettable with customized menus, live counters and themed food presentations.',                          img: '/img4.jpg' },
  { icon: '🌿', title: 'Outdoor Catering',   desc: 'Full outdoor event catering with complete setup, serving and cleanup — delivered to your chosen venue.',                         img: '/img6.jpg' },
  { icon: '🏠', title: 'House Warming',      desc: 'Celebrate your new home with traditional South Indian feasts served with warmth and love.',                                      img: '/img5.jpg' },
  { icon: '🍽️', title: 'Buffet Setup',       desc: 'Premium buffet arrangements with royal décor, chafing dishes and professional serving staff.',                                   img: '/img2.jpg' },
  { icon: '🔥', title: 'Live Counters',      desc: 'Exciting live cooking stations — dosas, chaats, pasta, biryani — prepared fresh right before your guests.',                     img: '/img3.jpg' },
  { icon: '🌾', title: 'Traditional Meals',  desc: 'Authentic Telugu Saapadu served on banana leaves with 20+ dishes — a true cultural experience.',                                 img: '/img6.jpg' },
];

const GALLERY_IMAGES = [
  { src: '/img1.jpg', alt: 'Corporate catering event' },
  { src: '/img7.jpg', alt: 'Grand buffet setup' },
  { src: '/img6.jpg', alt: 'Food serving at event' },
  { src: '/img2.jpg', alt: 'Large dining setup' },
  { src: '/img3.jpg', alt: 'Catering service' },
  { src: '/img4.jpg', alt: 'Event catering' },
  { src: '/img5.jpg', alt: 'Dining arrangement' },
  { src: '/img6.jpg', alt: 'Traditional feast' },
];

const MENU_CATEGORIES = [
  { name: 'Welcome Drinks', items: ['Coconut Water', 'Jaljeera', 'Buttermilk (Majjiga)', 'Mango Lassi', 'Fresh Lime Soda', 'Rose Milk', 'Tender Coconut Mojito'] },
  { name: 'Starters',       items: ['Paneer Tikka', 'Veg Spring Rolls', 'Crispy Corn', 'Gobi 65', 'Mushroom 65', 'Peanut Chaat', 'Samosa', 'Dahi Puri'] },
  { name: 'South Indian',   items: ['Idli & Sambar', 'Vada', 'Masala Dosa', 'Pesarattu', 'Upma', 'Pongal', 'Uttapam', 'Medu Vada'] },
  { name: 'North Indian',   items: ['Dal Makhani', 'Paneer Butter Masala', 'Chole Bhature', 'Aloo Matar', 'Rajma', 'Mixed Veg Curry', 'Palak Paneer'] },
  { name: 'Rice Items',     items: ['Steamed Rice', 'Lemon Rice', 'Coconut Rice', 'Tamarind Rice (Pulihora)', 'Curd Rice', 'Tomato Rice', 'Ghee Rice'] },
  { name: 'Biryani',        items: ['Veg Dum Biryani', 'Chicken Biryani', 'Mutton Biryani', 'Egg Biryani', 'Paneer Biryani', 'Kheema Biryani'] },
  { name: 'Curries & Dal',  items: ['Sambar', 'Rasam', 'Pappu (Toor Dal)', 'Gongura Pappu', 'Tomato Pappu', 'Pesara Pappu', 'Mixed Veg Koora'] },
  { name: 'Desserts',       items: ['Gulab Jamun', 'Rasgulla', 'Kheer (Payasam)', 'Mysore Pak', 'Badam Halwa', 'Jalebi', 'Semiya Payasam', 'Bobbatlu'] },
  { name: 'Ice Creams',     items: ['Vanilla', 'Chocolate', 'Mango', 'Butterscotch', 'Strawberry', 'Pista', 'Rose'] },
  { name: 'Live Counters',  items: ['Live Dosa Counter', 'Pani Puri Counter', 'Chaat Counter', 'Pasta Counter', 'Dahi Bhalla Counter', 'Juice Counter'] },
];

const TESTIMONIALS = [
  { name: 'Rajesh & Priya Sharma',  event: 'Wedding Reception – 500 Guests',        text: 'Aadhya Caterers exceeded every expectation. The food was absolutely divine — our guests are still talking about the biryani and live counters. The setup was royal and the staff was impeccably professional. Highly recommend!', rating: 5 },
  { name: 'Suresh Reddy',           event: 'Corporate Event – Cognizant Hyderabad', text: 'We hired Aadhya for our company annual day. 300+ employees were served traditional Telugu meals on banana leaves. Everyone loved it! The coordination and hygiene standards were top notch. Will definitely book again.', rating: 5 },
  { name: 'Lakshmi Narayana',       event: 'House Warming Ceremony',                text: 'From the welcome drinks to the desserts, everything was perfect. The team arrived early, set up beautifully and served with a smile. Our family of 150 was very happy. The Gulab Jamun and Payasam were outstanding!', rating: 5 },
  { name: 'Meera & Anil Kumar',     event: 'Wedding – 800 Guests',                  text: "The grand buffet setup they arranged for our daughter's wedding was breathtaking. Multiple cuisines, live counters, and the service team handled everything smoothly. Money well spent on a special occasion!", rating: 5 },
  { name: 'Padmavathi Devi',        event: 'Birthday Party – 200 Guests',           text: 'Amazing catering service! The food quality was incredible and everything was hygienic. The live chaat counter was a massive hit with the guests. Very professional and timely. 5 stars without hesitation!', rating: 5 },
];

// Real YouTube video IDs — replace with actual Aadhya Caterers video IDs from their channel
// To get: open any YouTube video → copy ID from URL: youtube.com/watch?v=VIDEO_ID_HERE
const VIDEOS = [
  {
    id: 'YxOsDLYanfk',
    thumb: '/img7.jpg',
    title: 'Grand Wedding Setup',
    duration: '0:45'
  },
  {
    id: 'Vip_v-h5koE',
    thumb: '/img1.jpg',
    title: 'Corporate Feast',
    duration: '1:02'
  },
  {
    id: 'IpIFk9P_v3E',
    thumb: '/img6.jpg',
    title: 'Live Counter Action',
    duration: '0:38'
  },
  {
    id: 'WMqcYjW0t98',
    thumb: '/img4.jpg',
    title: 'Buffet Arrangement',
    duration: '0:55'
  },
];

const NAV_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'Menu',         href: '#menu' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

const WHATSAPP_MSG = encodeURIComponent(
  'Hi, I want to book catering for my event. Please share details about your packages and availability.'
);
const WHATSAPP_URL = `https://wa.me/919494055353?text=${WHATSAPP_MSG}`;

// ─── SHARED COMPONENTS ───────────────────────────────────────────────────────

const GoldDivider = () => (
  <div className="gold-divider my-4" />
);

const StarRating = ({ count = 5 }) => (
  <div style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} style={{ color: '#d4a017' }}>★</span>
    ))}
  </div>
);

// Reusable fade-in-up wrapper wired to useInView
function FadeUp({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function FadeIn({ children, delay = 0, x = 0, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ─── PRELOADER ────────────────────────────────────────────────────────────────

function Preloader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="preloader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src="/logo.png" alt="Aadhya Caterers" className="preloader-logo" />
      <div style={{ fontFamily: '"Great Vibes", cursive', fontSize: '1.6rem', color: '#d4a017', marginTop: -8 }}>
        Aadhya Caterers
      </div>
      <div className="preloader-bar">
        <div className="preloader-bar-fill" />
      </div>
      <p style={{ fontFamily: '"Cormorant Garamond", serif', color: 'rgba(253,246,227,0.5)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        Crafting Excellence…
      </p>
    </motion.div>
  );
}

// ─── SCROLL TO TOP ────────────────────────────────────────────────────────────

function ScrollTopBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="scroll-top-btn"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          title="Back to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on any nav-link click
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        transition: 'all 0.4s',
        background: scrolled
          ? 'rgba(26,14,2,0.97)'
          : 'linear-gradient(to bottom, rgba(26,14,2,0.8), transparent)',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,160,23,0.2)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/logo.png" alt="Aadhya Caterers" style={{ height: 52, objectFit: 'contain' }} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden-mobile" style={{ display: 'flex', gap: 28 }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        {/* CTA — desktop */}
        <a href="tel:9494055353" className="btn-gold hidden-mobile" style={{ textDecoration: 'none' }}>
          Call Now
        </a>

        {/* ── Hamburger — always rendered, show/hide via CSS ── */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="show-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
        >
          <motion.div
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            style={{ width: 24, height: 2, background: '#d4a017', transformOrigin: 'center', borderRadius: 1 }}
          />
          <motion.div
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={{ width: 24, height: 2, background: '#d4a017', borderRadius: 1 }}
          />
          <motion.div
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            style={{ width: 16, height: 2, background: '#d4a017', transformOrigin: 'center', borderRadius: 1 }}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: 'rgba(26,14,2,0.98)', borderTop: '1px solid rgba(212,160,23,0.2)', overflow: 'hidden' }}
          >
            <div style={{ padding: '20px 24px 28px', display: 'flex', flexDirection: 'column', gap: 18 }}>
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-link"
                  onClick={closeMenu}
                  style={{ fontSize: '1.15rem' }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:9494055353"
                className="btn-gold"
                onClick={closeMenu}
                style={{ textDecoration: 'none', textAlign: 'center', marginTop: 8 }}
              >
                📞 Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="home"
      style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
    >
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/img7.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.3) contrast(1.1) saturate(1.1)' }} />
      {/* Dark gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,14,2,0.55) 0%, rgba(26,14,2,0.2) 40%, rgba(26,14,2,0.85) 100%)' }} />
      {/* Pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(212,160,23,0.02) 40px,rgba(212,160,23,0.02) 80px)' }} />

      {/* ── Gold decorative border frame ── */}
      <div className="hero-gold-frame">
        <div className="hero-corner tl" />
        <div className="hero-corner tr" />
        <div className="hero-corner bl" />
        <div className="hero-corner br" />
      </div>

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '130px 24px 90px', maxWidth: 900 }}>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ marginBottom: 24 }}>
          <img src="/logo.png" alt="Aadhya Caterers" style={{ height: 100, objectFit: 'contain', filter: 'drop-shadow(0 4px 12px rgba(212,160,23,0.35))' }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
          style={{ fontFamily: '"Great Vibes", cursive', fontSize: 'clamp(1.8rem,4vw,3rem)', color: '#d4a017', marginBottom: 8 }}
        >
          Deliciously Crafted. Perfectly Served.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
          style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem,5vw,3.5rem)', fontWeight: 700, color: '#fdf6e3', lineHeight: 1.2, marginBottom: 16 }}
        >
          Premium Catering Services<br />
          <span style={{ color: '#d4a017' }}>in Hyderabad</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.7, duration: 0.6 }}>
          <div style={{ margin: '16px 0', color: '#d4a017', fontSize: '0.8rem', letterSpacing: '0.3em', fontFamily: '"Lato", sans-serif' }}>✦ AADHYA CATERERS ✦</div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }}
          style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1rem,2.5vw,1.4rem)', color: 'rgba(253,246,227,0.85)', letterSpacing: '0.1em', marginBottom: 40 }}
        >
          Traditional Taste &nbsp;•&nbsp; Grand Presentation &nbsp;•&nbsp; Memorable Events
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.7 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="tel:9494055353" className="btn-gold" style={{ textDecoration: 'none' }}>📞 Call Now</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ textDecoration: 'none' }}>💬 WhatsApp Us</a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }}
          style={{ display: 'flex', gap: 40, justifyContent: 'center', marginTop: 60, flexWrap: 'wrap' }}
        >
          {[
            { num: '500+', label: 'Events Catered' },
            { num: '10K+', label: 'Happy Guests' },
            { num: '8+',   label: 'Years Experience' },
            { num: '100%', label: 'Hygienic Food' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div className="stat-number">{s.num}</div>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', color: 'rgba(253,246,227,0.7)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
        style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ color: '#d4a017', fontSize: '1.2rem' }}>↓</motion.div>
      </motion.div>
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="section-pad pattern-overlay" style={{ background: 'linear-gradient(to bottom, #1a0e02, #2d1a06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>

          {/* Images */}
          <FadeIn x={-40}>
            <div style={{ position: 'relative', paddingBottom: 40 }}>
              <div style={{ position: 'relative', borderRadius: 2, overflow: 'hidden', border: '2px solid rgba(212,160,23,0.3)' }}>
                <img src="/img6.jpg" alt="Catering service" style={{ width: '100%', height: 420, objectFit: 'cover', filter: 'brightness(0.95) contrast(1.05) saturate(1.1)', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,14,2,0.4), transparent)' }} />
              </div>
              <div style={{ position: 'absolute', bottom: 10, right: -20, width: '55%', border: '3px solid #1a0e02', borderRadius: 2, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}>
                <img src="/img2.jpg" alt="Buffet setup" style={{ width: '100%', height: 200, objectFit: 'cover', filter: 'brightness(0.95) contrast(1.05)', display: 'block' }} />
              </div>
              <div style={{ position: 'absolute', top: 20, left: -15, background: 'linear-gradient(135deg,#d4a017,#f2cd25)', color: '#1a0e02', padding: '12px 20px', fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: '0.85rem', textAlign: 'center', boxShadow: '0 4px 16px rgba(212,160,23,0.4)' }}>
                8+ Years<br /><span style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>OF EXCELLENCE</span>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn x={40} delay={0.2}>
            <p style={{ fontFamily: '"Great Vibes", cursive', fontSize: '2rem', color: '#d4a017', marginBottom: 8 }}>About Us</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: 16, lineHeight: 1.3 }}>
              Hyderabad's Most Trusted<br />Catering Partner
            </h2>
            <GoldDivider />
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem', color: 'rgba(253,246,227,0.85)', lineHeight: 1.8, marginTop: 20, marginBottom: 16 }}>
              Aadhya Caterers is a premium catering service based in Hyderabad, dedicated to delivering exceptional culinary experiences for weddings, corporate events, birthday celebrations, house warmings and all special occasions.
            </p>
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem', color: 'rgba(253,246,227,0.75)', lineHeight: 1.8, marginBottom: 24 }}>
              With over 8 years of catering expertise across Hyderabad and Telangana, we specialize in authentic Telugu meals, elaborate buffet setups, live cooking counters and grand wedding feasts. Every dish is prepared fresh with the finest ingredients under strictest hygiene standards.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 28 }}>
              {['✦ Wedding Catering','✦ Corporate Events','✦ Traditional Telugu Meals','✦ Live Cooking Counters','✦ Grand Buffet Setups','✦ Hygienic Cooking','✦ Birthday Celebrations','✦ Experienced Staff'].map((f) => (
                <div key={f} style={{ fontFamily: '"Lato", sans-serif', fontSize: '0.85rem', color: 'rgba(253,246,227,0.8)' }}>
                  <span style={{ color: '#d4a017' }}>✦</span>{f.slice(1)}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#services" className="btn-gold" style={{ textDecoration: 'none' }}>Our Services</a>
              <a href="tel:9494055353" className="btn-outline-gold" style={{ textDecoration: 'none' }}>Call Us Today</a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="services" className="section-pad" style={{ background: '#1a0e02' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <FadeUp style={{ textAlign: 'center', marginBottom: 60 }}>
          <p style={{ fontFamily: '"Great Vibes"', fontSize: '2rem', color: '#d4a017' }}>What We Offer</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: 12 }}>Our Catering Services</h2>
          <GoldDivider />
          <p className="section-subtitle" style={{ maxWidth: 560, margin: '16px auto 0', fontFamily: '"Cormorant Garamond"', fontSize: '1.1rem' }}>
            From intimate gatherings to grand wedding feasts — we bring the finest flavors to every occasion
          </p>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
          {SERVICES.map((svc, i) => (
            <FadeUp key={svc.title} delay={i * 0.07}>
              <div className="gold-card" style={{ borderRadius: 2, overflow: 'hidden' }}>
                {/* Fixed-height image container so crops are consistent */}
                <div style={{ position: 'relative', overflow: 'hidden', height: 200 }}>
                  <img
                    src={svc.img}
                    alt={svc.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.5s', filter: 'brightness(0.8) contrast(1.05) saturate(1.1)', display: 'block' }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseOut={(e)  => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,14,2,0.7) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', bottom: 12, left: 16, fontSize: '2rem' }}>{svc.icon}</div>
                </div>
                <div style={{ padding: '20px 20px 24px' }}>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', color: '#d4a017', marginBottom: 8 }}>{svc.title}</h3>
                  <p style={{ fontFamily: '"Lato", sans-serif', fontSize: '0.85rem', color: 'rgba(253,246,227,0.75)', lineHeight: 1.7 }}>{svc.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── GALLERY ──────────────────────────────────────────────────────────────────

function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const openLightbox = (idx) => { setLightboxIdx(idx); setLightbox(GALLERY_IMAGES[idx].src); };
  const closeLightbox = () => { setLightbox(null); setLightboxIdx(null); };
  const prevImg = (e) => { e.stopPropagation(); const i = (lightboxIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length; openLightbox(i); };
  const nextImg = (e) => { e.stopPropagation(); const i = (lightboxIdx + 1) % GALLERY_IMAGES.length; openLightbox(i); };

  useEffect(() => {
    const handler = (e) => {
      if (!lightbox) return;
      if (e.key === 'ArrowLeft')  { const i = (lightboxIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length; openLightbox(i); }
      if (e.key === 'ArrowRight') { const i = (lightboxIdx + 1) % GALLERY_IMAGES.length; openLightbox(i); }
      if (e.key === 'Escape')     closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);

  }, [lightbox, lightboxIdx]);

  return (
    <section id="gallery" className="section-pad" style={{ background: 'linear-gradient(to bottom, #2d1a06, #1a0e02)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <FadeUp style={{ textAlign: 'center', marginBottom: 50 }}>
          <p style={{ fontFamily: '"Great Vibes"', fontSize: '2rem', color: '#d4a017' }}>Moments Captured</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: 12 }}>Our Gallery</h2>
          <GoldDivider />
        </FadeUp>

        {/*
          Desktop: 3-column grid, first & 6th span 2 cols
          Mobile: 2-column grid, no spans (via CSS class override)
        */}
        <div
          className="gallery-grid-mobile"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}
        >
          {GALLERY_IMAGES.map((img, i) => {
            const isWide = i === 0 || i === 5;
            return (
              <FadeUp key={i} delay={i * 0.06} style={{ gridColumn: isWide ? 'span 2' : 'span 1', display: 'block' }}>
                <div
                  className={`gallery-item${isWide ? '' : ' gallery-span-none'}`}
                  style={{ borderRadius: 2, border: '1px solid rgba(212,160,23,0.2)', cursor: 'pointer', overflow: 'hidden' }}
                  onClick={() => openLightbox(i)}
                >
                  <div style={{ position: 'relative' }}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className={isWide ? 'gallery-img-tall' : 'gallery-img-short'}
                      style={{ width: '100%', height: isWide ? 360 : 240, objectFit: 'cover', objectPosition: 'center', display: 'block', filter: 'brightness(0.9) contrast(1.05) saturate(1.1)', transition: 'transform 0.4s' }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseOut={(e)  => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div
                      className="gallery-overlay"
                      style={{ position: 'absolute', inset: 0, background: 'rgba(212,160,23,0)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s' }}
                    >
                      <span className="gallery-zoom-icon" style={{ color: 'white', fontSize: '1.8rem', opacity: 0, transition: 'opacity 0.3s' }}>🔍</span>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>

      {/* Lightbox with prev/next */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="lightbox"
            onClick={closeLightbox}
          >
            <motion.img
              key={lightbox}
              initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
              src={lightbox}
              alt="Gallery"
              style={{ maxWidth: '88vw', maxHeight: '86vh', objectFit: 'contain', borderRadius: 4, border: '2px solid rgba(212,160,23,0.4)' }}
              onClick={(e) => e.stopPropagation()}
            />
            {/* Close */}
            <button onClick={closeLightbox} style={{ position: 'absolute', top: 20, right: 24, background: 'rgba(212,160,23,0.9)', border: 'none', color: '#1a0e02', width: 40, height: 40, fontSize: '1.1rem', cursor: 'pointer', borderRadius: '50%', fontWeight: 700 }}>✕</button>
            {/* Prev */}
            <button onClick={prevImg} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.4)', color: '#d4a017', width: 44, height: 44, fontSize: '1.3rem', cursor: 'pointer', borderRadius: '50%' }}>‹</button>
            {/* Next */}
            <button onClick={nextImg} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.4)', color: '#d4a017', width: 44, height: 44, fontSize: '1.3rem', cursor: 'pointer', borderRadius: '50%' }}>›</button>
            <p style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', color: 'rgba(253,246,227,0.5)', fontFamily: '"Lato",sans-serif', fontSize: '0.8rem' }}>
              {lightboxIdx + 1} / {GALLERY_IMAGES.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ─── VIDEO SHORTS ─────────────────────────────────────────────────────────────
function VideoShorts() {
  return (
    <section id="videos" className="section-pad" style={{ background: '#1a0e02' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <FadeUp style={{ textAlign: 'center', marginBottom: 50 }}>
          <p style={{ fontFamily: '"Great Vibes"', fontSize: '2rem', color: '#d4a017' }}>Video Shorts</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: 12 }}>Behind the Scenes</h2>
          <GoldDivider />
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
          {VIDEOS.map((video, index) => (
            <FadeUp key={video.id} delay={index * 0.08}>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', borderRadius: 8, overflow: 'hidden', textDecoration: 'none', background: '#16110b', border: '1px solid rgba(212,160,23,0.18)', transition: 'transform 0.3s' }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={video.thumb}
                    alt={video.title}
                    style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,0.0),rgba(0,0,0,0.72))' }} />
                  <div style={{ position: 'absolute', left: 16, bottom: 16, color: 'white', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: '1.2rem' }}>▶</span>
                    <span style={{ fontSize: '0.92rem', fontWeight: 700 }}>{video.duration}</span>
                  </div>
                </div>
                <div style={{ padding: '18px 16px 20px' }}>
                  <h3 style={{ fontFamily: '"Playfair Display",serif', color: '#d4a017', fontSize: '1rem', margin: 0, marginBottom: 8 }}>{video.title}</h3>
                  <p style={{ fontFamily: '"Lato",sans-serif', color: 'rgba(253,246,227,0.75)', fontSize: '0.9rem', margin: 0 }}>Watch our catering highlights and live event moments.</p>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MENU ─────────────────────────────────────────────────────────────────────

function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categoryIcons = {
    'Welcome Drinks': '🍹',
    Starters: '🔥',
    'South Indian': '🥘',
    'North Indian': '🍛',
    'Rice Items': '🍚',
    Biryani: '🍗',
    'Curries & Dal': '🥣',
    Desserts: '🍨',
    'Ice Creams': '🍦',
    'Live Counters': '👨‍🍳',
  };

  return (
    <section
      id="menu"
      className="section-pad pattern-overlay"
      style={{
        background: 'linear-gradient(to bottom, #2d1a06, #1a0e02)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* HERO BANNER */}
        <div
          style={{
            height: '320px',
            backgroundImage: 'url(/img7.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '60px',
            border: '1px solid rgba(212,160,23,0.2)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.4)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.75))'
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '20px'
            }}
          >
            <p
              style={{
                color: '#d4a017',
                fontFamily: '"Great Vibes"',
                fontSize: 'clamp(2rem,4vw,3rem)',
                marginBottom: '10px'
              }}
            >
              Signature Catering Experience
            </p>

            <h2
              style={{
                color: '#fff',
                fontSize: 'clamp(2.2rem,5vw,4rem)',
                fontFamily: '"Playfair Display"',
                lineHeight: 1.2,
                marginBottom: '16px'
              }}
            >
              Our Premium Menu
            </h2>

            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                maxWidth: '700px',
                lineHeight: 1.7,
                fontSize: '1rem'
              }}
            >
              Customized catering menus crafted with authentic flavors,
              premium ingredients and elegant presentation for every occasion.
            </p>
          </div>
        </div>

        {/* HEADING */}
        <FadeUp style={{ textAlign: 'center', marginBottom: 40 }}>
          <p
            style={{
              fontFamily: '"Great Vibes"',
              fontSize: '2rem',
              color: '#d4a017'
            }}
          >
            Culinary Delights
          </p>

          <h2
            className="section-title"
            style={{
              fontSize: 'clamp(1.8rem,3vw,2.8rem)',
              marginBottom: 12
            }}
          >
            Explore Our Menu Categories
          </h2>

          <GoldDivider />

          <p
            className="section-subtitle"
            style={{
              marginTop: 16,
              fontFamily: '"Cormorant Garamond"',
              fontSize: '1.1rem',
              maxWidth: '700px',
              marginInline: 'auto'
            }}
          >
            From traditional Telugu meals to grand buffet experiences,
            every dish is prepared with perfection and served with elegance.
          </p>
        </FadeUp>

        {/* STATS */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
            marginBottom: '50px'
          }}
        >
          {[
            ['50+', 'Menu Items'],
            ['10+', 'Live Counters'],
            ['100%', 'Fresh Ingredients'],
            ['500+', 'Events Catered']
          ].map(([num, text]) => (
            <div
              key={text}
              style={{
                textAlign: 'center',
                padding: '18px 28px',
                borderRadius: '18px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(212,160,23,0.15)',
                backdropFilter: 'blur(10px)',
                minWidth: '160px'
              }}
            >
              <h3
                style={{
                  color: '#d4a017',
                  fontSize: '2rem',
                  marginBottom: '6px',
                  fontFamily: '"Playfair Display"'
                }}
              >
                {num}
              </h3>

              <p
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.9rem'
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* CATEGORY TABS */}
        <div
          style={{
            display: 'flex',
            gap: 12,
            overflowX: 'auto',
            paddingBottom: 16,
            marginBottom: 40,
            scrollbarWidth: 'none'
          }}
        >
          {MENU_CATEGORIES.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              style={{
                padding: '14px 22px',
                borderRadius: '999px',
                border:
                  activeCategory === i
                    ? '1px solid #d4a017'
                    : '1px solid rgba(212,160,23,0.2)',
                background:
                  activeCategory === i
                    ? 'linear-gradient(135deg,#d4a017,#f2cd25)'
                    : 'rgba(255,255,255,0.05)',
                color:
                  activeCategory === i
                    ? '#1a0e02'
                    : 'rgba(255,255,255,0.85)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
            >
              {categoryIcons[cat.name]} {cat.name}
            </button>
          ))}
        </div>

        {/* MENU ITEMS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 20
            }}
          >
            {MENU_CATEGORIES[activeCategory].items.map((item) => (
              <div
                key={item}
                style={{
                  padding: '22px',
                  borderRadius: '20px',
                  border: '1px solid rgba(212,160,23,0.15)',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(14px)',
                  transition: 'all 0.35s ease',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform =
                    'translateY(-8px)';
                  e.currentTarget.style.borderColor =
                    'rgba(212,160,23,0.45)';
                  e.currentTarget.style.background =
                    'rgba(255,255,255,0.08)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform =
                    'translateY(0)';
                  e.currentTarget.style.borderColor =
                    'rgba(212,160,23,0.15)';
                  e.currentTarget.style.background =
                    'rgba(255,255,255,0.05)';
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background:
                        'linear-gradient(135deg,#d4a017,#f2cd25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      color: '#1a0e02',
                      fontWeight: 'bold',
                      flexShrink: 0
                    }}
                  >
                    ✦
                  </div>

                  <div>
                    <h3
                      style={{
                        color: '#fff',
                        fontSize: '1.05rem',
                        marginBottom: '4px',
                        fontFamily: '"Cormorant Garamond"'
                      }}
                    >
                      {item}
                    </h3>

                    <p
                      style={{
                        color: 'rgba(255,255,255,0.55)',
                        fontSize: '0.8rem'
                      }}
                    >
                      Premium quality preparation
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div
          style={{
            textAlign: 'center',
            marginTop: 60
          }}
        >
          <p
            style={{
              fontFamily: '"Cormorant Garamond"',
              color: 'rgba(255,255,255,0.75)',
              fontSize: '1.1rem',
              marginBottom: 24
            }}
          >
            Need a customized menu for your event?
            We create personalized catering experiences for every occasion.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 16,
              flexWrap: 'wrap'
            }}
          >
            <a
              href="#contact"
              className="btn-gold"
              style={{ textDecoration: 'none' }}
            >
              Request Custom Menu
            </a>

            <a
              href="/menu.pdf"
              className="btn-outline-gold"
              style={{ textDecoration: 'none' }}
            >
              Download Full Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % TESTIMONIALS.length), 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-pad" id="testimonials" style={{ background: '#1a0e02' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
        <FadeUp style={{ textAlign: 'center', marginBottom: 50 }}>
          <p style={{ fontFamily: '"Great Vibes"', fontSize: '2rem', color: '#d4a017' }}>Happy Clients</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: 12 }}>What Our Clients Say</h2>
          <GoldDivider />
        </FadeUp>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="testimonial-card"
            style={{ borderRadius: 2, textAlign: 'center' }}
          >
            <div style={{ fontSize: '3rem', color: '#d4a017', marginBottom: 16, opacity: 0.4 }}>"</div>
            <p style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.15rem', color: 'rgba(253,246,227,0.9)', lineHeight: 1.8, marginBottom: 24, fontStyle: 'italic' }}>
              {TESTIMONIALS[current].text}
            </p>
            <StarRating count={TESTIMONIALS[current].rating} />
            <div style={{ marginTop: 16 }}>
              <p style={{ fontFamily: '"Playfair Display",serif', color: '#d4a017', fontSize: '1rem', fontWeight: 600 }}>{TESTIMONIALS[current].name}</p>
              <p style={{ fontFamily: '"Lato",sans-serif', color: 'rgba(253,246,227,0.6)', fontSize: '0.8rem', letterSpacing: '0.05em', marginTop: 4 }}>{TESTIMONIALS[current].event}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 28 }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? 28 : 10, height: 10, borderRadius: 5, background: i === current ? '#d4a017' : 'rgba(212,160,23,0.3)', border: 'none', cursor: 'pointer', transition: 'all 0.3s' }} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────

function Contact() {
  const [form, setForm]           = useState({ name: '', phone: '', email: '', event: '', message: '' });
  const [status, setStatus]       = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      if (USE_FORMSPREE) {
        // ── FORMSPREE path ──────────────────────────────────────────
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Formspree error');
      } else {
        // ── EMAILJS path ────────────────────────────────────────────
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
    <section id="contact" className="section-pad pattern-overlay" style={{ background: 'linear-gradient(to bottom, #2d1a06, #1a0e02)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <FadeUp style={{ textAlign: 'center', marginBottom: 60 }}>
          <p style={{ fontFamily: '"Great Vibes"', fontSize: '2rem', color: '#d4a017' }}>Get in Touch</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: 12 }}>Book Your Event</h2>
          <GoldDivider />
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 48 }}>

          {/* Contact Info */}
          <FadeIn x={-30}>
            <h3 style={{ fontFamily: '"Playfair Display",serif', color: '#d4a017', fontSize: '1.4rem', marginBottom: 24 }}>Contact Information</h3>

            {[
              { icon: '📞', label: 'Phone', lines: [
                <a href="tel:9494055353" style={{ color: '#d4a017', textDecoration: 'none' }}>+91 94940 55353</a>,
                <a href="tel:9398183197" style={{ color: 'rgba(253,246,227,0.8)', textDecoration: 'none' }}>+91 93981 83197</a>,
              ]},
              { icon: '✉️', label: 'Email', lines: [
                <a href="mailto:aadhyacaterers01@gmail.com" style={{ color: '#d4a017', textDecoration: 'none', fontSize: '0.9rem' }}>aadhyacaterers01@gmail.com</a>,
              ]},
              { icon: '📍', label: 'Kukatpally Branch', lines: ['Balajinagar, Kukatpally', 'Hyderabad, Telangana - 500072'] },
              { icon: '📍', label: 'Uppal Branch',      lines: ['Chilkanagar, Uppal', 'Hyderabad, Telangana'] },
            ].map((c) => (
              <div key={c.label} style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                <div style={{ width: 44, height: 44, border: '1px solid rgba(212,160,23,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <p style={{ fontFamily: '"Lato",sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(253,246,227,0.5)', textTransform: 'uppercase', marginBottom: 4 }}>{c.label}</p>
                  {c.lines.map((line, i) => (
                    <p key={i} style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1rem', color: 'rgba(253,246,227,0.85)' }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social buttons */}
            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: '#25D366', color: 'white', textDecoration: 'none', fontFamily: '"Lato",sans-serif', fontSize: '0.85rem', fontWeight: 700 }}>
                💬 WhatsApp Us
              </a>
              <a href="https://youtube.com/@aadhyacaterers?si=DPTGpWcFBa9mVFtC" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: '#FF0000', color: 'white', textDecoration: 'none', fontFamily: '"Lato",sans-serif', fontSize: '0.85rem', fontWeight: 700 }}>
                ▶ YouTube
              </a>
            </div>

            {/* ── REAL MAP: Kukatpally, Hyderabad ── */}
            <div style={{ marginTop: 28, border: '1px solid rgba(212,160,23,0.3)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4721278748!2d78.40601!3d17.4946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e5b1f59e63%3A0x5d86a7da8c7c4e9f!2sBalajinagar%2C+Kukatpally%2C+Hyderabad%2C+Telangana+500072!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aadhya Caterers Kukatpally Location"
              />
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn x={30} delay={0.2}>
            <h3 style={{ fontFamily: '"Playfair Display",serif', color: '#d4a017', fontSize: '1.4rem', marginBottom: 24 }}>Send Us a Message</h3>

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
              <input className="form-input" name="name"    placeholder="Your Full Name *"    value={form.name}    onChange={handleChange} required />
              <input className="form-input" name="phone"   placeholder="Phone Number *"      value={form.phone}   onChange={handleChange} required />
              <input className="form-input" name="email"   type="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
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
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

// SVG social icons
const IconWhatsApp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const IconYouTube = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const IconFacebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const SocialBtn = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    style={{ width: 38, height: 38, background: 'rgba(212,160,23,0.12)', border: '1px solid rgba(212,160,23,0.3)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#d4a017', transition: 'all 0.3s' }}
    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(212,160,23,0.25)'; e.currentTarget.style.borderColor = '#d4a017'; }}
    onMouseOut={(e)  => { e.currentTarget.style.background = 'rgba(212,160,23,0.12)'; e.currentTarget.style.borderColor = 'rgba(212,160,23,0.3)'; }}
  >
    {icon}
  </a>
);

function Footer() {
  return (
    <footer style={{ background: '#0e0700', borderTop: '1px solid rgba(212,160,23,0.2)', paddingBottom: 80 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Aadhya Caterers" style={{ height: 70, marginBottom: 16 }} />
            <p style={{ fontFamily: '"Cormorant Garamond",serif', color: 'rgba(253,246,227,0.7)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: 20 }}>
              Deliciously Crafted. Perfectly Served. Premium catering services for weddings, corporate events and celebrations across Hyderabad.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <SocialBtn href={WHATSAPP_URL} icon={<IconWhatsApp />} label="WhatsApp" />
              <SocialBtn href="https://youtube.com/@aadhyacaterers?si=DPTGpWcFBa9mVFtC" icon={<IconYouTube />} label="YouTube" />
              {/* Replace # with real Instagram / Facebook URLs when available */}
              <SocialBtn href="https://instagram.com/aadhyacaterers" icon={<IconInstagram />} label="Instagram" />
              <SocialBtn href="https://facebook.com/aadhyacaterers" icon={<IconFacebook />} label="Facebook" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: '"Playfair Display",serif', color: '#d4a017', marginBottom: 20, fontSize: '1rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} style={{ fontFamily: '"Lato",sans-serif', color: 'rgba(253,246,227,0.65)', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.3s' }}
                   onMouseOver={(e) => (e.currentTarget.style.color = '#d4a017')}
                   onMouseOut={(e)  => (e.currentTarget.style.color = 'rgba(253,246,227,0.65)')}
                >✦ {l.label}</a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: '"Playfair Display",serif', color: '#d4a017', marginBottom: 20, fontSize: '1rem' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SERVICES.slice(0, 6).map((s) => (
                <p key={s.title} style={{ fontFamily: '"Lato",sans-serif', color: 'rgba(253,246,227,0.65)', fontSize: '0.88rem' }}>✦ {s.title}</p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: '"Playfair Display",serif', color: '#d4a017', marginBottom: 20, fontSize: '1rem' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="tel:9494055353"            style={{ color: 'rgba(253,246,227,0.7)', textDecoration: 'none', fontFamily: '"Lato"', fontSize: '0.88rem' }}>📞 +91 94940 55353</a>
              <a href="tel:9398183197"            style={{ color: 'rgba(253,246,227,0.7)', textDecoration: 'none', fontFamily: '"Lato"', fontSize: '0.88rem' }}>📞 +91 93981 83197</a>
              <a href="mailto:aadhyacaterers01@gmail.com" style={{ color: 'rgba(253,246,227,0.7)', textDecoration: 'none', fontFamily: '"Lato"', fontSize: '0.85rem' }}>✉️ aadhyacaterers01@gmail.com</a>
              <p style={{ color: 'rgba(253,246,227,0.6)', fontFamily: '"Lato"', fontSize: '0.85rem', lineHeight: 1.6 }}>📍 Balajinagar, Kukatpally,<br />Hyderabad - 500072</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(212,160,23,0.15)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontFamily: '"Lato",sans-serif', color: 'rgba(253,246,227,0.4)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Aadhya Caterers. All Rights Reserved.
          </p>
          <p style={{ fontFamily: '"Lato",sans-serif', color: 'rgba(253,246,227,0.4)', fontSize: '0.8rem' }}>
            Developed by <span style={{ color: '#d4a017' }}>StaffArc</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── FLOATING BUTTONS ─────────────────────────────────────────────────────────

function FloatingButtons() {
  return (
    <>
      {/* WhatsApp bubble */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Scroll to top */}
      <ScrollTopBtn />

      {/* Mobile sticky bottom bar */}
      <div className="mobile-sticky">
        <a href="tel:9494055353" style={{ flex: 1, padding: 16, background: '#d4a017', color: '#1a0e02', textAlign: 'center', textDecoration: 'none', fontFamily: '"Lato",sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          📞 Call Now
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ flex: 1, padding: 16, background: '#25D366', color: 'white', textAlign: 'center', textDecoration: 'none', fontFamily: '"Lato",sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          💬 WhatsApp
        </a>
        <a href="#contact" style={{ flex: 1, padding: 16, background: '#1a0e02', color: '#d4a017', textAlign: 'center', textDecoration: 'none', fontFamily: '"Lato",sans-serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', border: '2px solid #d4a017', borderBottom: 'none' }}>
          🍽️ Book
        </a>
      </div>
    </>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Preloader key="preloader" onDone={() => setLoading(false)} />
      ) : (
        <motion.div key="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Gallery />
          <VideoShorts />
          <Menu />
          <Testimonials />
          <Contact />
          <Footer />
          <FloatingButtons />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
