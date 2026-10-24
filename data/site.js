// Single source of truth for company info.
// Edit here once and every page (header, footer, contact, SEO) updates.
export const SITE = {
  name: "Adatama",
  legalName: "PT. Andalan Nature Utama",
  // Change this to your real domain once you connect one in Vercel.
  url: "https://pt-adatama-next.vercel.app",
  tagline: "Premium Indonesian Spices for Global Buyers",
  description:
    "Adatama by PT. Andalan Nature Utama is an Indonesian exporter of premium cloves, vanilla beans, black pepper and giant ginger, sourced directly from local farmers.",
  email: "andalannatureutama@gmail.com",
  phone: "+62 822-1715-7449",
  phoneRaw: "+6282217157449",
  whatsapp: "6282217157449",
  instagram: "adatama.indonesia",
  location: "Tangerang, Indonesia",
};

export const whatsappLink = (text) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
