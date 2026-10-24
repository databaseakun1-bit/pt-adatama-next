// All product content lives here. Add a product = add one object.
// Pages /products and /products/[slug] and the home gallery are generated from it.
export const PRODUCTS = [
  {
    slug: "clove",
    name: "Cloves",
    localName: "Cengkeh",
    image: "/images/cengkeh-herosection.jpg",
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
  {
    slug: "vanilla",
    name: "Vanilla Beans",
    localName: null,
    image: "/images/vanilla-herosection.jpg",
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
  {
    slug: "blackpepper",
    name: "Black Pepper",
    localName: "Lada Hitam",
    image: "/images/blackpepper-herosection.jpg",
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
  {
    slug: "giantginger",
    name: "Giant Ginger",
    localName: "Jahe Gajah",
    image: "/images/giantginger-herosection.jpg",
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
];

export const productTitle = (p) => (p.localName ? `${p.name} (${p.localName})` : p.name);
