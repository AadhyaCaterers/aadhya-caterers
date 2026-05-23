// ─────────────────────────────────────────────────────────────────
// Aadhya Caterers — Catering Menu Data
//
// Two top-level menus: VEG and NON-VEG, each containing one or more
// pricing plans (Standard, Silver). Each plan is a list of named
// categories with item arrays. Fully data-driven: pages and home
// cards consume the same source of truth.
// ─────────────────────────────────────────────────────────────────

// ── Veg plans ────────────────────────────────────────────────────
export const VEG_PLANS = [
  {
    id: 'veg-standard',
    title: 'Vegetarian Standard Menu',
    tagline: 'A classic vegetarian celebration spread',
    description:
      'A graceful selection of authentic Telugu, North and South Indian vegetarian classics — perfectly curated for every traditional celebration.',
    categories: [
      {
        name: 'Sweet',
        icon: '🍮',
        items: [
          'Gulab Jamun',
          'Kala Jamoon',
          'Double ka Mita',
          'Jilebi',
          'Badusha',
          'Bobbatlu',
          'Poornam',
        ],
      },
      {
        name: 'Hot',
        icon: '🌶',
        items: [
          'Mirchi Bajji',
          'Masala Gare',
          'Minapa Gare',
        ],
      },
      {
        name: 'Indian Bread',
        icon: '🫓',
        items: [
          'Pulka',
          'Rumali Roti',
          'Chepathi',
        ],
      },
      {
        name: 'SPL Masala Curry',
        icon: '🥘',
        items: [
          'Paneer Butter Masala',
          'Chole Masala',
          'Kadai Paneer',
        ],
      },
      {
        name: 'Flavour Rice',
        icon: '🍚',
        items: [
          'Veg Biryani',
          'Veg Dhum Biryani',
          'Jeera Rice',
          'Bagara Rice',
          'Pudina Rice',
          'Pulihora',
        ],
      },
      {
        name: 'Common Masala Curry',
        icon: '🍲',
        items: [
          'Guthi Vankaya Masala',
          'Alu Kurma',
          'Mirchi Ka Salan',
          'Mixed Veg Kurma',
        ],
      },
      {
        name: 'Oil Fry',
        icon: '🍳',
        items: [
          'Bendi Fry',
          'Alu Fry',
          'Dondkaya Fry',
          'Cabbage Fry',
        ],
      },
      {
        name: 'Common Items',
        icon: '🥗',
        items: [
          'Dall',
          'Samabar',
          'Chutney',
          'Pickle',
          'Curd',
          'Raitha',
          'Plain Rice',
          'Mouth Freshener',
          'Papad',
          'Drinking Water (Cool Water Tin)',
        ],
      },
    ],
  },
  {
    id: 'veg-silver',
    title: 'Vegetarian Silver Menu',
    tagline: 'An elevated silver-tier vegetarian feast',
    description:
      'Our premium vegetarian spread with the same authentic flavours plus refined add-ons like ice cream, sweet pan and green salad.',
    categories: [
      {
        name: 'Sweet',
        icon: '🍮',
        items: [
          'Gulab Jamun',
          'Kala Jamoon',
          'Double ka Mita',
          'Jilebi',
          'Badusha',
          'Bobbatlu',
          'Poornam',
        ],
      },
      {
        name: 'Hot',
        icon: '🌶',
        items: [
          'Mirchi Bajji',
          'Masala Gare',
          'Minapa Gare',
        ],
      },
      {
        name: 'Indian Bread',
        icon: '🫓',
        items: [
          'Pulka',
          'Rumali Roti',
          'Chepathi',
        ],
      },
      {
        name: 'SPL Masala Curry',
        icon: '🥘',
        items: [
          'Paneer Butter Masala',
          'Chole Masala',
          'Kadai Paneer',
        ],
      },
      {
        name: 'Flavour Rice',
        icon: '🍚',
        items: [
          'Veg Biryani',
          'Veg Dhum Biryani',
          'Jeera Rice',
          'Bagara Rice',
          'Pudina Rice',
          'Pulihora',
        ],
      },
      {
        name: 'Common Masala Curry',
        icon: '🍲',
        items: [
          'Guthi Vankaya Masala',
          'Alu Kurma',
          'Mirchi Ka Salan',
          'Mixed Veg Kurma',
        ],
      },
      {
        name: 'Oil Fry',
        icon: '🍳',
        items: [
          'Bendi Fry',
          'Alu Fry',
          'Dondkaya Fry',
          'Cabbage Fry',
        ],
      },
      {
        name: 'Common Items',
        icon: '🥗',
        items: [
          'Dall',
          'Samabar',
          'Chutney',
          'Pickle',
          'Curd',
          'Raitha',
          'Plain Rice',
          'Sweet Pan',
          'Papad',
          'Water Bottle',
          'Ice Cream',
          'Green Salad',
        ],
      },
    ],
  },
];

// ── Non-Veg plans ────────────────────────────────────────────────
export const NONVEG_PLANS = [
  {
    id: 'nonveg-standard',
    title: 'Non-Veg Standard Menu',
    tagline: 'A royal Hyderabadi non-veg celebration spread',
    description:
      'A classic non-vegetarian feast featuring authentic Hyderabadi Dum Biryani, signature chicken curries and traditional Telugu sides.',
    categories: [
      {
        name: 'Sweet',
        icon: '🍮',
        items: [
          'Gulab Jamun',
          'Kala Jamoon',
          'Double ka Mita',
          'Jilebi',
          'Badusha',
          'Bobbatlu',
          'Poornam',
        ],
      },
      {
        name: 'Hot',
        icon: '🌶',
        items: [
          'Mirchi Bajji',
          'Masala Gare',
          'Minapa Gare',
          'Veg Manchurian',
        ],
      },
      {
        name: 'Indian Bread',
        icon: '🫓',
        items: [
          'Pulka',
          'Rumali Roti',
          'Chepathi',
        ],
      },
      {
        name: 'Paneer Butter Masala',
        icon: '🧈',
        items: [
          'Paneer Butter Masala',
        ],
      },
      {
        name: 'Hyderabad Dhum Biryani',
        icon: '🍛',
        items: [
          'Chicken Biryani',
          'Mutton Biryani',
        ],
      },
      {
        name: 'Mirchi Ka Salan',
        icon: '🌶',
        items: [
          'Mirchi Ka Salan',
        ],
      },
      {
        name: 'Non-Veg Curry',
        icon: '🍗',
        items: [
          'Chicken Curry',
          'Chicken Fry',
          'Dhum Ka Chicken',
        ],
      },
      {
        name: 'Common Items',
        icon: '🥗',
        items: [
          'Dall',
          'Samabar',
          'Chutney',
          'Veg Biryani or Bagara',
          'Curd',
          'Raitha',
          'Plain Rice',
          'Mouth Freshener',
          'Papad',
          'Drinking Water (Cool Water Tin)',
          'Green Salad',
        ],
      },
    ],
  },
  {
    id: 'nonveg-silver',
    title: 'Non-Veg Silver Menu',
    tagline: 'A grand silver-tier non-veg banquet',
    description:
      'Our signature non-veg silver spread — premium starters, dum biryanis, signature curries, plus refined add-ons like sweet pan and ice cream.',
    categories: [
      {
        name: 'Sweet',
        icon: '🍮',
        items: [
          'Gulab Jamun',
          'Kala Jamoon',
          'Double ka Mita',
          'Jilebi',
          'Badusha',
          'Bobbatlu',
          'Poornam',
        ],
      },
      {
        name: 'Hot',
        icon: '🌶',
        items: [
          'Mirchi Bajji',
          'Masala Gare',
          'Minapa Gare',
          'Veg Manchurian',
        ],
      },
      {
        name: 'Non Veg Snack',
        icon: '🍢',
        items: [
          'Chicken Manchurian',
          'Chilli Chicken',
          'Chicken 65',
          'Appollo Fish',
          'Fish Fry',
        ],
      },
      {
        name: 'Indian Bread',
        icon: '🫓',
        items: [
          'Pulka',
          'Rumali Roti',
          'Chepathi',
        ],
      },
      {
        name: 'Paneer Butter Masala',
        icon: '🧈',
        items: [
          'Paneer Butter Masala',
        ],
      },
      {
        name: 'Hyderabad Dhum Biryani',
        icon: '🍛',
        items: [
          'Chicken Biryani',
          'Mutton Biryani',
        ],
      },
      {
        name: 'Mirchi Ka Salan',
        icon: '🌶',
        items: [
          'Mirchi Ka Salan',
        ],
      },
      {
        name: 'Non-Veg Curry',
        icon: '🍗',
        items: [
          'Chicken Curry',
          'Chicken Fry',
          'Dhum Ka Chicken',
        ],
      },
      {
        name: 'Common Items',
        icon: '🥗',
        items: [
          'Dall',
          'Samabar',
          'Chutney',
          'Veg Biryani or Bagara',
          'Curd',
          'Raitha',
          'Plain Rice',
          'Sweet Pan',
          'Papad',
          'Water Bottle',
          'Green Salad',
          'Ice Cream',
        ],
      },
    ],
  },
];

// ── Top-level menu choice cards (Home + /menu hub) ───────────────
// Each entry powers one premium card on the homepage and the menu hub.
export const MENU_OPTIONS = [
  {
    key: 'veg',
    label: 'Veg Menu',
    tagline: 'Pure Vegetarian Delights',
    description:
      'Authentic Telugu and North Indian vegetarian classics — Standard & Silver plans curated for every celebration.',
    icon: '🌿',
    image: '/img6.jpg',
    to: '/veg-menu',
    accent: {
      from: '#E5C77F',   // gold light
      mid:  '#C9A14A',   // gold
      to:   '#8B6B2A',   // gold deep
      ring: 'rgba(201,161,74,0.45)',
      tint: 'rgba(229,199,127,0.18)',
    },
    plans: VEG_PLANS,
  },
  {
    key: 'nonveg',
    label: 'Non-Veg Menu',
    tagline: 'Royal Hyderabadi Non-Veg Feast',
    description:
      'Hyderabadi Dum Biryani, signature chicken & mutton curries — Standard & Silver plans for grand occasions.',
    icon: '🍗',
    image: '/img7.jpg',
    to: '/non-veg-menu',
    accent: {
      from: '#E8A29C',   // soft rose
      mid:  '#C0392B',   // primary red
      to:   '#6B1F1F',   // maroon
      ring: 'rgba(192,57,43,0.45)',
      tint: 'rgba(232,162,156,0.20)',
    },
    plans: NONVEG_PLANS,
  },
];

// Helper: get a menu option by key
export const getMenuOption = (key) =>
  MENU_OPTIONS.find((m) => m.key === key);
