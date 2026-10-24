import Link from "next/link";
import { PRODUCTS } from "../data/products";

export default function ProductGallery() {
  return (
    <section className="product-gallery">
      <h2 className="gallery-title">Our Product Selection</h2>

      <div className="gallery-grid">
        {PRODUCTS.map((p) => (
          <Link key={p.slug} href={`/products/${p.slug}`} className="product-box">
            <img src={p.image} alt={p.name} loading="lazy" />
            <div className="product-label">{p.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
