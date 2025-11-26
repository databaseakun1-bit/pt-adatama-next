export default function ProductGallery() {
  const items = [
    { name: "Cloves", image: "/images/cengkeh-herosection.jpg", link: "/products/clove" },
    { name: "Vanilla", image: "/images/vanilla-herosection.jpg", link: "/products/vanilla" },
    { name: "Black Pepper", image: "/images/blackpepper-herosection.jpg", link: "/products/blackpepper" },
    { name: "Giant Ginger", image: "/images/giantginger-herosection.jpg", link: "/products/giantginger" }
  ];

  return (
    <section className="product-gallery">
      <h2 className="gallery-title">Our Product Selection</h2>

      <div className="gallery-grid">
        {items.map((item, i) => (
          <a key={i} href={item.link} className="product-box">
            <img src={item.image} alt={item.name} />
            <div className="product-label">{item.name}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
