import { useT } from "../lib/i18n";

export default function About() {
  const { t } = useT();

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">{t.about.title}</h2>
        <h3 className="about-subtitle">ADATAMA</h3>

        <p className="about-text">{t.about.text}</p>

        <div className="about-values">
          {t.about.values.map((v) => (
            <div className="value-box" key={v.title}>
              <h4>{v.title}</h4>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
