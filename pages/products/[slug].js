import Link from "next/link";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { PRODUCTS, productTitle } from "../../data/products";
import { whatsappLink } from "../../data/site";

export async function getStaticPaths() {
  return {
    paths: PRODUCTS.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return { notFound: true };
  return { props: { product } };
}

export default function ProductDetail({ product }) {
  const others = PRODUCTS.filter((p) => p.slug !== product.slug);

  return (
    <>
      <Seo
        title={product.name}
        description={`${product.tagline} ${product.description}`}
        path={`/products/${product.slug}`}
        image={product.image}
      />

      <Header />

      <section className="detail-hero">
        <h1>{productTitle(product)}</h1>
        <p>{product.tagline}</p>
      </section>

      <section className="detail-container">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-info">
          <h2>Product Description</h2>
          <p>{product.description}</p>

          <h3>Specifications</h3>
          <table className="detail-table">
            <tbody>
              {product.specs.map(([label, value]) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="detail-note">
            Specifications are indicative and may vary by harvest. Contact us for the latest spec sheet and samples.
          </p>

          <h3>Suitable For</h3>
          <ul className="detail-list">
            {product.suitableFor.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <div className="detail-actions">
            <Link href={`/contact?product=${product.slug}`} className="detail-btn">
              Request Offer
            </Link>
            <a
              className="detail-btn secondary"
              href={whatsappLink(`Hello Adatama, I would like to request an offer for ${product.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="related">
        <h2>Other Products</h2>
        <div className="related-links">
          {others.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`}>
              {p.name}
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
