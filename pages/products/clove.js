import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Clove() {
  return (
    <>
      <Header />

      {/* HERO PRODUK */}
      <section className="detail-hero">
        <h1>Cengkeh (Clove)</h1>
        <p>Premium Indonesian clove for global export.</p>
      </section>

      {/* KONTEN DETAIL */}
      <section className="detail-container">
        
        {/* FOTO */}
        <div className="detail-image">
          <img src="/images/cengkeh-herosection.jpg" alt="Clove" />
        </div>

        {/* INFORMASI */}
        <div className="detail-info">
          <h2>Product Description</h2>
          <p>
            Our Indonesian clove is sourced from trusted farmers with strict
            quality control. Suitable for spice traders, manufacturers and
            international buyers seeking high-grade raw materials.
          </p>

          <h3>Specifications</h3>
          <table className="detail-table">
            <tbody>
              <tr><td>Moisture</td><td>10% Max</td></tr>
              <tr><td>Grade</td><td>Handpicked / FAQ</td></tr>
              <tr><td>Origin</td><td>Indonesia</td></tr>
              <tr><td>Packing</td><td>Gunny Bag 50–60 kg</td></tr>
            </tbody>
          </table>

          <a 
            href="mailto:andalannatureutama@gmail.com?subject=Request%20Offer%20-%20Clove"
            className="detail-btn"
          >
            Request Offer
          </a>
        </div>

      </section>

      <Footer />
    </>
  );
}
