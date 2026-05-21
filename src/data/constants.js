// ─── EMAILJS CONFIG ──────────────────────────────────────────────────────────
// Sign up at https://emailjs.com → create a service + template → paste IDs below
export const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
export const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
export const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

// ─── FORMSPREE FALLBACK ──────────────────────────────────────────────────────
export const USE_FORMSPREE      = false;
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

// ─── CONTACT INFO ────────────────────────────────────────────────────────────
export const PHONE_PRIMARY   = '9494055353';
export const PHONE_SECONDARY = '9398183197';
export const EMAIL_PRIMARY   = 'aadhyacaterers01@gmail.com';

const WHATSAPP_MSG = encodeURIComponent(
  'Hi, I want to book catering for my event. Please share details about your packages and availability.'
);
export const WHATSAPP_URL = `https://wa.me/91${PHONE_PRIMARY}?text=${WHATSAPP_MSG}`;
export const YOUTUBE_URL  = 'https://youtube.com/@aadhyacaterers?si=DPTGpWcFBa9mVFtC';
export const INSTAGRAM_URL = 'https://instagram.com/aadhyacaterers';
export const FACEBOOK_URL  = 'https://facebook.com/aadhyacaterers';
