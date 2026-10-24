import Link from "next/link";
import { SITE } from "../data/site";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* Transparent overlay */}
      <div className="hero-overlay"></div>

      {/* Hero content */}
      <div className="hero-content">
        <h2 className="hero-welcome">Welcome to</h2>
        <h1 className="hero-adatama">ADATAMA</h1>
        <h3 className="hero-subtitle">
          <span className="hero-pt">PT.</span> <span className="hero-name">Andalan Nature Utama</span>
        </h3>
        <p className="hero-tagline">{SITE.tagline}</p>
        <div className="hero-actions">
          <Link href="/products" className="hero-btn">
            View Products
          </Link>
          <Link href="/contact" className="hero-btn secondary">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
