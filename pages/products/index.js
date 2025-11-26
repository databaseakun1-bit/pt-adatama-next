import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AllProducts() {
  return (
    <>
          <Header />
    
          {/* HERO KECIL */}
          <section className="product-hero">
            <h1 className="product-hero-title">Our Premium Products</h1>
            <p className="product-hero-subtitle">
              High-quality Indonesian spices curated for global export needs.
            </p>
          </section>
    
          {/* PRODUCT GRID */}
          <section className="product-list">
            <div className="product-card">
              <img src="/images/cengkeh-herosection.jpg" />
              <h3>Clove (Cengkeh)</h3>
              <p>High-grade Indonesian cloves carefully hand-picked.</p>
              <a href="/products/clove" className="product-btn">Learn more</a>
            </div>
    
            <div className="product-card">
              <img src="/images/vanilla-herosection.jpg" />
              <h3>Vanilla Beans</h3>
              <p>Premium vanilla with rich aroma and export-ready quality.</p>
              <a href="/products/vanilla" className="product-btn">Learn more</a>
            </div>
    
            <div className="product-card">
              <img src="/images/blackpepper-herosection.jpg" />
              <h3>Black Pepper</h3>
              <p>Bold aroma & strong flavor sourced from trusted farmers.</p>
              <a href="/products/blackpepper" className="product-btn">Learn more</a>
            </div>
    
            <div className="product-card">
              <img src="/images/giantginger-herosection.jpg" />
              <h3>Giant Ginger</h3>
              <p>Fresh & potent ginger ideal for large-scale export needs.</p>
              <a href="/products/giantginger" className="product-btn">Learn more</a>
            </div>
          </section>
    
          <Footer />
        </>
  );
}
