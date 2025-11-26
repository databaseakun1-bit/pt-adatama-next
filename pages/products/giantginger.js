import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function GiantGinger() {
  return (
    <>
      <Header />

      <section className="detail-hero">
        <h1>Giant Ginger</h1>
        <p>Fresh Indonesian giant ginger for industry needs.</p>
      </section>

      <section className="detail-container">
        <div className="detail-image">
          <img src="/images/giantginger-herosection.jpg" alt="Giant Ginger" />
        </div>

        <div className="detail-info">
          <h2>Product Description</h2>
          <p>
            Indonesian giant ginger (Jahe Gajah) is known for its strong taste,
            bright color and suitability for beverage and herbal product industries.
          </p>

          <h3>Specifications</h3>
          <table className="detail-table">
            <tbody>
              <tr><td>Moisture</td><td>Fresh Product</td></tr>
              <tr><td>Grade</td><td>Export Grade</td></tr>
              <tr><td>Origin</td><td>Indonesia</td></tr>
              <tr><td>Packing</td><td>Mesh Bag 20–30 kg</td></tr>
            </tbody>
          </table>

          <a 
            href="mailto:andalannatureutama@gmail.com?subject=Request%20Offer%20-%20Giant%20Ginger"
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
