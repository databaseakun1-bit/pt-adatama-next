import Link from "next/link";
import { PRODUCTS } from "../data/products";
import { useT } from "../lib/i18n";

export default function ProductGallery() {
  const { t } = useT();

  return (
    <section className="product-gallery">
      <h2 className="gallery-title">{t.gallery.title}</h2>

      <div className="gallery-grid">
        {PRODUCTS.map((p) => {
          const info = t.products[p.slug];
          return (
            <Link key={p.slug} href={`/products/${p.slug}`} className="product-box">
              <img src={p.image} alt={info.name} loading="lazy" />
              <div className="product-label">{info.name}</div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
