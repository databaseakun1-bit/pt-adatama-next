export default function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <h3 className="about-subtitle">ADATAMA</h3>

        <p className="about-text">
          Adatama adalah perusahaan ekspor hasil alam Indonesia yang berfokus 
          pada rempah dan komoditas berkualitas tinggi. Kami berdiri dengan 
          komitmen untuk menghadirkan produk terbaik dari petani lokal kepada 
          pasar internasional melalui proses seleksi, pengolahan, dan pengiriman 
          yang profesional.
        </p>

        <div className="about-values">
          <div className="value-box">
            <h4>Quality Sourcing</h4>
            <p>Seleksi bahan baku terbaik, langsung dari petani.</p>
          </div>

          <div className="value-box">
            <h4>Sustainable Partnership</h4>
            <p>Berkolaborasi jangka panjang dengan pelaku lokal.</p>
          </div>

          <div className="value-box">
            <h4>Indonesian Origin</h4>
            <p>Fokus pada rempah dan komoditas asli Nusantara.</p>
          </div>
        </div>
      </div>

    </section>
  );
}
