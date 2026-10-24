// English (default language). Every other file in /locales must have the same keys.
const en = {
  meta: { code: "en", label: "English", short: "EN", htmlLang: "en", hreflang: "en", dir: "ltr", ogLocale: "en_US" },
  site: { location: "Tangerang, Indonesia" },
  seo: {
    description:
      "Adatama by PT. Andalan Nature Utama is an Indonesian exporter of premium cloves, vanilla beans, black pepper and giant ginger, sourced directly from local farmers.",
    productsTitle: "Our Premium Products",
    productsDescription:
      "Premium Indonesian cloves, vanilla beans, black pepper and giant ginger for export. View specifications and request an offer.",
    contactTitle: "Contact Us",
    contactDescription:
      "Request an offer for Indonesian cloves, vanilla, black pepper or giant ginger. Contact PT. Andalan Nature Utama (Adatama).",
    notFoundTitle: "Page Not Found",
  },
  nav: {
    home: "Home",
    products: "Products",
    contact: "Contact",
    requestQuote: "Request Quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    language: "Language",
  },
  hero: {
    welcome: "Welcome to",
    tagline: "Premium Indonesian Spices for Global Buyers",
    viewProducts: "View Products",
    requestQuote: "Request a Quote",
  },
  about: {
    title: "About Us",
    text:
      "Adatama is an Indonesian exporter of natural products, focused on high-quality spices and commodities. We are committed to bringing the best products from local farmers to international markets through professional selection, processing and shipping.",
    values: [
      { title: "Quality Sourcing", text: "The best raw materials, sourced directly from farmers." },
      { title: "Sustainable Partnership", text: "Long-term collaboration with local growers." },
      { title: "Indonesian Origin", text: "Focused on authentic spices and commodities from the Indonesian archipelago." },
    ],
  },
  gallery: { title: "Our Product Selection" },
  cta: {
    title: "Looking to source Indonesian spices?",
    text: "Tell us what you need, and our team will get back to you within 24 hours.",
    button: "Request a Quote",
  },
  getInTouch: { title: "Get in touch" },
  footer: { rights: "All Rights Reserved" },
  productsPage: {
    title: "Our Premium Products",
    subtitle: "High-quality Indonesian spices curated for global export needs.",
    learnMore: "Learn more",
  },
  detail: {
    description: "Product Description",
    specifications: "Specifications",
    specNote: "Specifications are indicative and may vary by harvest. Contact us for the latest spec sheet and samples.",
    suitableFor: "Suitable For",
    otherProducts: "Other Products",
    requestOffer: "Request Offer",
    whatsappUs: "WhatsApp Us",
    whatsappMessage: "Hello Adatama, I would like to request an offer for {product}.",
  },
  contactPage: {
    title: "Start a Global Partnership",
    intro: "Interested in our premium spices? Our team is ready to answer your questions within 24 hours.",
    whatsapp: "Chat on WhatsApp",
    whatsappMessage: "Hello Adatama, I would like to ask about your products.",
    formHeading: "Send Us a Message",
  },
  form: {
    name: "Full Name *",
    company: "Company",
    email: "Business Email *",
    country: "Country",
    product: "Product of Interest",
    general: "General inquiry",
    message: "Message *",
    namePh: "Your name",
    companyPh: "Your company",
    emailPh: "name@company.com",
    countryPh: "Destination country",
    messagePh: "Quantity, packaging, destination port, target price...",
    send: "Send Message",
    sending: "Sending...",
    success: "Thank you! Your message has been sent. We will reply within 24 hours.",
    error: "Sorry, we could not send your message. Please email us at {email} or message us on WhatsApp.",
  },
  notFound: {
    title: "Page Not Found",
    text: "Sorry, we could not find the page you are looking for.",
    back: "Back to Home",
  },
  products: {
    clove: {
      name: "Cloves",
      localName: "Cengkeh",
      tagline: "Premium Indonesian clove for global export.",
      summary: "High-grade Indonesian cloves carefully hand-picked.",
      description:
        "Our Indonesian clove is sourced from trusted farmers with strict quality control. Suitable for spice traders, manufacturers and international buyers seeking high-grade raw materials.",
      specs: [
        ["Moisture", "10% Max"],
        ["Grade", "Handpicked / FAQ"],
        ["Origin", "Indonesia"],
        ["Packing", "Gunny Bag 50–60 kg"],
      ],
      suitableFor: ["Spice traders", "Manufacturers", "International buyers of high-grade raw materials"],
    },
    vanilla: {
      name: "Vanilla Beans",
      localName: null,
      tagline: "High quality Indonesian vanilla for export markets.",
      summary: "Premium vanilla with rich aroma and export-ready quality.",
      description:
        "Indonesian vanilla is well-known for its rich aroma, high vanillin content, and international-grade curing process. Ideal for F&B manufacturers, flavor houses and global wholesalers.",
      specs: [
        ["Moisture", "20–25%"],
        ["Grade", "Gourmet / Grade A / Grade B"],
        ["Origin", "Indonesia"],
        ["Packing", "Vacuum Pack 1–5 kg"],
      ],
      suitableFor: ["F&B manufacturers", "Flavor houses", "Global wholesalers"],
    },
    blackpepper: {
      name: "Black Pepper",
      localName: "Lada Hitam",
      tagline: "High-grade black pepper sourced from Indonesian farms.",
      summary: "Bold aroma & strong flavor sourced from trusted farmers.",
      description:
        "Indonesia is one of the top producers of premium black pepper with strong aroma and high piperine content. Suitable for spice traders, seasoning factories, and bulk buyers.",
      specs: [
        ["Moisture", "12% Max"],
        ["Grade", "550 GL / 500 GL"],
        ["Origin", "Indonesia"],
        ["Packing", "PP Bag 25–50 kg"],
      ],
      suitableFor: ["Spice traders", "Seasoning factories", "Bulk buyers"],
    },
    giantginger: {
      name: "Giant Ginger",
      localName: "Jahe Gajah",
      tagline: "Fresh Indonesian giant ginger for industry needs.",
      summary: "Fresh & potent ginger ideal for large-scale export needs.",
      description:
        "Indonesian giant ginger (Jahe Gajah) is known for its strong taste, bright color and suitability for beverage and herbal product industries.",
      specs: [
        ["Moisture", "Fresh Product"],
        ["Grade", "Export Grade"],
        ["Origin", "Indonesia"],
        ["Packing", "Mesh Bag 20–30 kg"],
      ],
      suitableFor: ["Beverage industry", "Herbal product industry", "Large-scale buyers"],
    },
  },
};

export default en;
