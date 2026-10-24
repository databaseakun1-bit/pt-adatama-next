import Link from "next/link";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CtaBand from "../../components/CtaBand";
import { PRODUCTS, productTitle } from "../../data/products";

export default function AllProducts() {
  return (
    <>
      <Seo
        title="Our Premium Products"
        description="Premium Indonesian cloves, vanilla beans, black pepper and giant ginger for export. View specifications and request an offer."
        path="/products"
      />

      <Header />

      {/* SMALL HERO */}
      <section className="product-hero">
        <h1 className="product-hero-title">Our Premium Products</h1>
        <p className="product-hero-subtitle">
          High-quality Indonesian spices curated for global export needs.
        </p>
      </section>

      {/* PRODUCT GRID */}
      <section className="product-list">
        {PRODUCTS.map((p) => (
          <div className="product-card" key={p.slug}>
            <img src={p.image} alt={p.name} loading="lazy" />
            <h3>{productTitle(p)}</h3>
            <p>{p.summary}</p>
            <Link href={`/products/${p.slug}`} className="product-btn">
              Learn more
            </Link>
          </div>
        ))}
      </section>

      <CtaBand />
      <Footer />
    </>
  );
}
