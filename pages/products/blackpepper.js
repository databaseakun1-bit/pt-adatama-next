import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function BlackPepper() {
  return (
    <>
      <Header />

      <section className="detail-hero">
        <h1>Black Pepper</h1>
        <p>High-grade black pepper sourced from Indonesian farms.</p>
      </section>

      <section className="detail-container">
        <div className="detail-image">
          <img src="/images/blackpepper-herosection.jpg" alt="Black Pepper" />
        </div>

        <div className="detail-info">
          <h2>Product Description</h2>
          <p>
            Indonesia is one of the top producers of premium black pepper with 
            strong aroma and high piperine content. Suitable for spice traders, 
            seasoning factories, and bulk buyers.
          </p>

          <h3>Specifications</h3>
          <table className="detail-table">
            <tbody>
              <tr><td>Moisture</td><td>12% Max</td></tr>
              <tr><td>Grade</td><td>550 GL / 500 GL</td></tr>
              <tr><td>Origin</td><td>Indonesia</td></tr>
              <tr><td>Packing</td><td>PP Bag 25–50 kg</td></tr>
            </tbody>
          </table>

          <a 
            href="mailto:andalannatureutama@gmail.com?subject=Request%20Offer%20-%20Black%20Pepper"
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
