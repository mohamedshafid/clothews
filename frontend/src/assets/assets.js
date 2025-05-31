// Hero image
import hero from "./hero.jpg";

// All products images
import m1 from "./all-products/m_c1.webp";
import m2 from "./all-products/m_c2.webp";
import m3 from "./all-products/m_c3.webp";
import m4 from "./all-products/m_c4.webp";
import m5 from "./all-products/m_c5.webp";
import m6 from "./all-products/m_c6.webp";
import m7 from "./all-products/m_c7.webp";
import m8 from "./all-products/m_c8.webp";
import m9 from "./all-products/m_c9.webp";
import m10 from "./all-products/m_c10.webp";
import w1 from "./all-products/w_c1.webp";
import w2 from "./all-products/w_c2.webp";
import w3 from "./all-products/w_c3.webp";
import w4 from "./all-products/w_c4.webp";
import w5 from "./all-products/w_c5.webp";
import w6 from "./all-products/w_c6.webp";
import w7 from "./all-products/w_c7.webp";
import w8 from "./all-products/w_c8.webp";
import w9 from "./all-products/w_c9.webp";
import w10 from "./all-products/w_c10.webp";
import c1 from "./all-products/c_c1.webp";
import c2 from "./all-products/c_c2.webp";
import c3 from "./all-products/c_c3.webp";
import c4 from "./all-products/c_c4.webp";
import c5 from "./all-products/c_c5.webp";
import c6 from "./all-products/c_c6.webp";
import c7 from "./all-products/c_c7.webp";
import c8 from "./all-products/c_c8.webp";
import c9 from "./all-products/c_c9.webp";
import c10 from "./all-products/c_c10.webp";


// All products data
const allProducts = [
  // Men
  {
    id: 1,
    name: "Men's Classic 1",
    image: m1,
    price: 75,
    description: "Stylish and comfortable everyday wear.",
    category: "Men",
    rating: 4.1,
  },
  {
    id: 2,
    name: "Men's Classic 2",
    image: m2,
    price: 85,
    description: "A bold statement piece for modern men.",
    category: "Men",
    rating: 4.3,
  },
  {
    id: 3,
    name: "Men's Classic 3",
    image: m3,
    price: 95,
    description: "Casual yet elegant men's collection.",
    category: "Men",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Men's Classic 4",
    image: m4,
    price: 80,
    description: "Perfect for formal and casual use.",
    category: "Men",
    rating: 4.2,
  },
  {
    id: 5,
    name: "Men's Classic 5",
    image: m5,
    price: 100,
    description: "Designed with premium quality fabric.",
    category: "Men",
    rating: 4.4,
  },
  {
    id: 6,
    name: "Men's Classic 6",
    image: m6,
    price: 105,
    description: "A must-have for your wardrobe.",
    category: "Men",
    rating: 4.6,
  },
  {
    id: 7,
    name: "Men's Classic 7",
    image: m7,
    price: 90,
    description: "Crafted for style and durability.",
    category: "Men",
    rating: 4.3,
  },
  {
    id: 8,
    name: "Men's Classic 8",
    image: m8,
    price: 110,
    description: "Clean cuts and classic design.",
    category: "Men",
    rating: 4.7,
  },
  {
    id: 9,
    name: "Men's Classic 9",
    image: m9,
    price: 115,
    description: "Sleek and modern men's fashion.",
    category: "Men",
    rating: 4.5,
  },
  {
    id: 10,
    name: "Men's Classic 10",
    image: m10,
    price: 120,
    description: "Premium comfort and luxury.",
    category: "Men",
    rating: 4.8,
  },

  // Women
  {
    id: 11,
    name: "Women's Style 1",
    image: w1,
    price: 95,
    description: "Chic and comfortable for all seasons.",
    category: "Women",
    rating: 4.2,
  },
  {
    id: 12,
    name: "Women's Style 2",
    image: w2,
    price: 85,
    description: "Elegant and feminine design.",
    category: "Women",
    rating: 4.0,
  },
  {
    id: 13,
    name: "Women's Style 3",
    image: w3,
    price: 110,
    description: "Tailored for the perfect fit.",
    category: "Women",
    rating: 4.4,
  },
  {
    id: 14,
    name: "Women's Style 4",
    image: w4,
    price: 120,
    description: "Graceful patterns and soft texture.",
    category: "Women",
    rating: 4.6,
  },
  {
    id: 15,
    name: "Women's Style 5",
    image: w5,
    price: 100,
    description: "A modern twist to classic fashion.",
    category: "Women",
    rating: 4.3,
  },
  {
    id: 16,
    name: "Women's Style 6",
    image: w6,
    price: 115,
    description: "Flowy and elegant.",
    category: "Women",
    rating: 4.7,
  },
  {
    id: 17,
    name: "Women's Style 7",
    image: w7,
    price: 105,
    description: "Bold colors and comfortable fit.",
    category: "Women",
    rating: 4.1,
  },
  {
    id: 18,
    name: "Women's Style 8",
    image: w8,
    price: 90,
    description: "Trendy and affordable.",
    category: "Women",
    rating: 4.2,
  },
  {
    id: 19,
    name: "Women's Style 9",
    image: w9,
    price: 95,
    description: "Perfect for any occasion.",
    category: "Women",
    rating: 4.5,
  },
  {
    id: 20,
    name: "Women's Style 10",
    image: w10,
    price: 130,
    description: "Elegant wear with modern style.",
    category: "Women",
    rating: 4.8,
  },

  // Children
  {
    id: 21,
    name: "Casual Fit 1",
    image: c1,
    price: 70,
    description: "Relaxed and comfortable for daily use.",
    category: "Children",
    rating: 4.0,
  },
  {
    id: 22,
    name: "Casual Fit 2",
    image: c2,
    price: 60,
    description: "Breathable and stylish everyday wear.",
    category: "Children",
    rating: 4.2,
  },
  {
    id: 23,
    name: "Casual Fit 3",
    image: c3,
    price: 65,
    description: "Easygoing and budget-friendly.",
    category: "Children",
    rating: 3.9,
  },
  {
    id: 24,
    name: "Casual Fit 4",
    image: c4,
    price: 75,
    description: "Perfect blend of comfort and fashion.",
    category: "Children",
    rating: 4.3,
  },
  {
    id: 25,
    name: "Casual Fit 5",
    image: c5,
    price: 85,
    description: "Laid-back and casual fit.",
    category: "Children",
    rating: 4.1,
  },
  {
    id: 26,
    name: "Casual Fit 6",
    image: c6,
    price: 78,
    description: "Soft fabric for all-day comfort.",
    category: "Children",
    rating: 4.0,
  },
  {
    id: 27,
    name: "Casual Fit 7",
    image: c7,
    price: 90,
    description: "Trendy and practical everyday wear.",
    category: "Children",
    rating: 4.2,
  },
  {
    id: 28,
    name: "Casual Fit 8",
    image: c8,
    price: 72,
    description: "Simple, sleek, and stylish.",
    category: "Children",
    rating: 4.4,
  },
  {
    id: 29,
    name: "Casual Fit 9",
    image: c9,
    price: 68,
    description: "For those who love comfort in style.",
    category: "Children",
    rating: 4.1,
  },
  {
    id: 30,
    name: "Casual Fit 10",
    image: c10,
    price: 80,
    description: "Go-to choice for casual occasions.",
    category: "Children",
    rating: 4.3,
  },
];

// Popular products
const popular = [
  {
    id: 1,
    name: "Summer Collection",
    image: m3,
    price: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Men",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Winter Collection",
    image: w10,
    price: 120,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Women",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Casual Collection",
    image: c1,
    price: 80,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Casual",
    rating: 4.2,
  },
];

// Exporting assets
export { hero, allProducts, popular };

