import Link from "next/link";
import { useT } from "../lib/i18n";

export default function Hero() {
  const { t } = useT();

  return (
    <section className="hero-section" id="home">
      {/* Transparent overlay */}
      <div className="hero-overlay"></div>

      {/* Hero content */}
      <div className="hero-content">
        <h2 className="hero-welcome">{t.hero.welcome}</h2>
        <h1 className="hero-adatama">ADATAMA</h1>
        <h3 className="hero-subtitle">
          <span className="hero-pt">PT.</span> <span className="hero-name">Andalan Nature Utama</span>
        </h3>
        <p className="hero-tagline">{t.hero.tagline}</p>
        <div className="hero-actions">
          <Link href="/products" className="hero-btn">
            {t.hero.viewProducts}
          </Link>
          <Link href="/contact" className="hero-btn secondary">
            {t.hero.requestQuote}
          </Link>
        </div>
      </div>
    </section>
  );
}
