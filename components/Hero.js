export default function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* Overlay transparan */}
      <div className="hero-overlay"></div>

      {/* Konten hero */}
      <div className="hero-content">
        <h2 className="hero-welcome">
          Welcome to </h2>
        <h2 className="hero-adatama">
          ADATAMA</h2>
        <h3 className="hero-subtitle">
          <span className="hero-pt">PT.</span> <span className="hero-name">Andalan Nature Utama</span>
        </h3>
      </div>
    </section>
  );
}
