export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <h3 className="about-subtitle">ADATAMA</h3>

        <p className="about-text">
          Adatama is an Indonesian exporter of natural products, focused on high-quality spices and
          commodities. We are committed to bringing the best products from local farmers to
          international markets through professional selection, processing and shipping.
        </p>

        <div className="about-values">
          <div className="value-box">
            <h4>Quality Sourcing</h4>
            <p>The best raw materials, sourced directly from farmers.</p>
          </div>

          <div className="value-box">
            <h4>Sustainable Partnership</h4>
            <p>Long-term collaboration with local growers.</p>
          </div>

          <div className="value-box">
            <h4>Indonesian Origin</h4>
            <p>Focused on authentic spices and commodities from the Indonesian archipelago.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
