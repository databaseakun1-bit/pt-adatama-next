import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Vanilla() {
  return (
    <>
      <Header />

      <section className="detail-hero">
        <h1>Vanilla Beans</h1>
        <p>High quality Indonesian vanilla for export markets.</p>
      </section>

      <section className="detail-container">
        <div className="detail-image">
          <img src="/images/vanilla-herosection.jpg" alt="Vanilla Beans" />
        </div>

        <div className="detail-info">
          <h2>Product Description</h2>
          <p>
            Indonesian vanilla is well-known for its rich aroma, high vanillin content,
            and international-grade curing process. Ideal for F&B manufacturers,
            flavor houses and global wholesalers.
          </p>

          <h3>Specifications</h3>
          <table className="detail-table">
            <tbody>
              <tr><td>Moisture</td><td>20–25%</td></tr>
              <tr><td>Grade</td><td>Gourmet / Grade A / Grade B</td></tr>
              <tr><td>Origin</td><td>Indonesia</td></tr>
              <tr><td>Packing</td><td>Vacuum Pack 1–5 kg</td></tr>
            </tbody>
          </table>

          <a 
            href="mailto:andalannatureutama@gmail.com?subject=Request%20Offer%20-%20Vanilla"
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
