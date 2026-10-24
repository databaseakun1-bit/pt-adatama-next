import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PRODUCTS } from "../data/products";
import { SITE } from "../data/site";

const EMPTY = { name: "", company: "", email: "", country: "", product: "", message: "", website: "" };

export default function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  // /contact?product=clove pre-selects the product (used by "Request Offer" buttons)
  useEffect(() => {
    if (!router.isReady) return;
    const slug = router.query.product;
    if (typeof slug !== "string") return;
    const match = PRODUCTS.find((p) => p.slug === slug);
    if (match) setForm((f) => ({ ...f, product: match.name }));
  }, [router.isReady, router.query.product]);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    if (status.state === "sending") return;
    setStatus({ state: "sending", message: "" });

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || "Request failed");

      setStatus({
        state: "success",
        message: "Thank you! Your message has been sent. We will reply within 24 hours.",
      });
      setForm(EMPTY);
    } catch (err) {
      setStatus({
        state: "error",
        message: `Sorry, we could not send your message. Please email us at ${SITE.email} or message us on WhatsApp.`,
      });
    }
  }

  return (
    <form className="modern-form" onSubmit={onSubmit} noValidate={false}>
      {status.state === "success" && (
        <div className="form-status success" role="status">{status.message}</div>
      )}
      {status.state === "error" && (
        <div className="form-status error" role="alert">{status.message}</div>
      )}

      <div className="form-row">
        <div className="input-group">
          <label htmlFor="cf-name">Full Name *</label>
          <input id="cf-name" type="text" name="name" value={form.name} onChange={onChange}
                 placeholder="Your name" required maxLength={100} autoComplete="name" />
        </div>
        <div className="input-group">
          <label htmlFor="cf-company">Company</label>
          <input id="cf-company" type="text" name="company" value={form.company} onChange={onChange}
                 placeholder="Your company" maxLength={120} autoComplete="organization" />
        </div>
      </div>

      <div className="form-row">
        <div className="input-group">
          <label htmlFor="cf-email">Business Email *</label>
          <input id="cf-email" type="email" name="email" value={form.email} onChange={onChange}
                 placeholder="name@company.com" required maxLength={150} autoComplete="email" />
        </div>
        <div className="input-group">
          <label htmlFor="cf-country">Country</label>
          <input id="cf-country" type="text" name="country" value={form.country} onChange={onChange}
                 placeholder="Destination country" maxLength={80} autoComplete="country-name" />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="cf-product">Product of Interest</label>
        <select id="cf-product" name="product" value={form.product} onChange={onChange}>
          <option value="">General inquiry</option>
          {PRODUCTS.map((p) => (
            <option key={p.slug} value={p.name}>{p.name}</option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="cf-message">Message *</label>
        <textarea id="cf-message" name="message" value={form.message} onChange={onChange}
                  placeholder="Quantity, packaging, destination port, target price..."
                  rows="5" required maxLength={3000} />
      </div>

      {/* Honeypot: hidden from humans, bots fill it in */}
      <div className="hp-field" aria-hidden="true">
        <label>Website <input type="text" name="website" tabIndex={-1} autoComplete="off"
                              value={form.website} onChange={onChange} /></label>
      </div>

      <button type="submit" className="submit-btn-modern" disabled={status.state === "sending"}>
        {status.state === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
