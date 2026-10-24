import Link from "next/link";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CtaBand from "../../components/CtaBand";
import { PRODUCTS } from "../../data/products";
import { productTitle, useT } from "../../lib/i18n";

export default function AllProducts() {
  const { t } = useT();

  return (
    <>
      <Seo
        title={t.seo.productsTitle}
        description={t.seo.productsDescription}
        path="/products"
      />

      <Header />

      {/* SMALL HERO */}
      <section className="product-hero">
        <h1 className="product-hero-title">{t.productsPage.title}</h1>
        <p className="product-hero-subtitle">{t.productsPage.subtitle}</p>
      </section>

      {/* PRODUCT GRID */}
      <section className="product-list">
        {PRODUCTS.map((p) => {
          const info = t.products[p.slug];
          return (
            <div className="product-card" key={p.slug}>
              <img src={p.image} alt={info.name} loading="lazy" />
              <h3>{productTitle(info)}</h3>
              <p>{info.summary}</p>
              <Link href={`/products/${p.slug}`} className="product-btn">
                {t.productsPage.learnMore}
              </Link>
            </div>
          );
        })}
      </section>

      <CtaBand />
      <Footer />
    </>
  );
}
