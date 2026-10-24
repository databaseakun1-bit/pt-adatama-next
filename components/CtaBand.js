import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <h2>Looking to source Indonesian spices?</h2>
      <p>Tell us what you need, and our team will get back to you within 24 hours.</p>
      <Link href="/contact" className="hero-btn">
        Request a Quote
      </Link>
    </section>
  );
}
