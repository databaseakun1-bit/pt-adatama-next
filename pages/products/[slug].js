import Link from "next/link";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { PRODUCTS } from "../../data/products";
import { whatsappLink } from "../../data/site";
import { productTitle, useT } from "../../lib/i18n";

// One page per product per language (4 products x 4 languages = 16 pages)
export async function getStaticPaths({ locales }) {
  const paths = [];
  for (const locale of locales || ["en"]) {
    for (const p of PRODUCTS) paths.push({ params: { slug: p.slug }, locale });
  }
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  if (!PRODUCTS.some((p) => p.slug === params.slug)) return { notFound: true };
  return { props: { slug: params.slug } };
}

export default function ProductDetail({ slug }) {
  const { t } = useT();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const info = t.products[slug];
  const others = PRODUCTS.filter((p) => p.slug !== slug);

  return (
    <>
      <Seo
        title={info.name}
        description={`${info.tagline} ${info.description}`}
        path={`/products/${slug}`}
        image={product.image}
      />

      <Header />

      <section className="detail-hero">
        <h1>{productTitle(info)}</h1>
        <p>{info.tagline}</p>
      </section>

      <section className="detail-container">
        <div className="detail-image">
          <img src={product.image} alt={info.name} />
        </div>

        <div className="detail-info">
          <h2>{t.detail.description}</h2>
          <p>{info.description}</p>

          <h3>{t.detail.specifications}</h3>
          <table className="detail-table">
            <tbody>
              {info.specs.map(([label, value]) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="detail-note">{t.detail.specNote}</p>

          <h3>{t.detail.suitableFor}</h3>
          <ul className="detail-list">
            {info.suitableFor.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <div className="detail-actions">
            <Link href={`/contact?product=${slug}`} className="detail-btn">
              {t.detail.requestOffer}
            </Link>
            <a
              className="detail-btn secondary"
              href={whatsappLink(t.detail.whatsappMessage.replace("{product}", info.name))}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.detail.whatsappUs}
            </a>
          </div>
        </div>
      </section>

      <section className="related">
        <h2>{t.detail.otherProducts}</h2>
        <div className="related-links">
          {others.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`}>
              {t.products[p.slug].name}
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
