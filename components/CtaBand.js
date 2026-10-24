import Link from "next/link";
import { useT } from "../lib/i18n";

export default function CtaBand() {
  const { t } = useT();

  return (
    <section className="cta-band">
      <h2>{t.cta.title}</h2>
      <p>{t.cta.text}</p>
      <Link href="/contact" className="hero-btn">
        {t.cta.button}
      </Link>
    </section>
  );
}
