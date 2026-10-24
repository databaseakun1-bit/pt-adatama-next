import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PRODUCTS } from "../data/products";
import { SITE } from "../data/site";
import { getDict, useT } from "../lib/i18n";

const EMPTY = { name: "", company: "", email: "", country: "", product: "", message: "", website: "" };

// The email you receive is always in English, so the product value is the English name.
const englishName = (slug) => getDict("en").products[slug].name;

export default function ContactForm() {
  const router = useRouter();
  const { t, locale } = useT();
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  // /contact?product=clove pre-selects the product (used by "Request Offer" buttons)
  useEffect(() => {
    if (!router.isReady) return;
    const slug = router.query.product;
    if (typeof slug !== "string") return;
    if (PRODUCTS.some((p) => p.slug === slug)) setForm((f) => ({ ...f, product: englishName(slug) }));
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
        body: JSON.stringify({ ...form, locale }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || "Request failed");

      setStatus({ state: "success", message: t.form.success });
      setForm(EMPTY);
    } catch (err) {
      setStatus({ state: "error", message: t.form.error.replace("{email}", SITE.email) });
    }
  }

  return (
    <form className="modern-form" onSubmit={onSubmit}>
      {status.state === "success" && (
        <div className="form-status success" role="status">{status.message}</div>
      )}
      {status.state === "error" && (
        <div className="form-status error" role="alert">{status.message}</div>
      )}

      <div className="form-row">
        <div className="input-group">
          <label htmlFor="cf-name">{t.form.name}</label>
          <input id="cf-name" type="text" name="name" value={form.name} onChange={onChange}
                 placeholder={t.form.namePh} required maxLength={100} autoComplete="name" />
        </div>
        <div className="input-group">
          <label htmlFor="cf-company">{t.form.company}</label>
          <input id="cf-company" type="text" name="company" value={form.company} onChange={onChange}
                 placeholder={t.form.companyPh} maxLength={120} autoComplete="organization" />
        </div>
      </div>

      <div className="form-row">
        <div className="input-group">
          <label htmlFor="cf-email">{t.form.email}</label>
          <input id="cf-email" type="email" name="email" dir="ltr" value={form.email} onChange={onChange}
                 placeholder={t.form.emailPh} required maxLength={150} autoComplete="email" />
        </div>
        <div className="input-group">
          <label htmlFor="cf-country">{t.form.country}</label>
          <input id="cf-country" type="text" name="country" value={form.country} onChange={onChange}
                 placeholder={t.form.countryPh} maxLength={80} autoComplete="country-name" />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="cf-product">{t.form.product}</label>
        <select id="cf-product" name="product" value={form.product} onChange={onChange}>
          <option value="">{t.form.general}</option>
          {PRODUCTS.map((p) => (
            <option key={p.slug} value={englishName(p.slug)}>{t.products[p.slug].name}</option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="cf-message">{t.form.message}</label>
        <textarea id="cf-message" name="message" value={form.message} onChange={onChange}
                  placeholder={t.form.messagePh} rows="5" required maxLength={3000} />
      </div>

      {/* Honeypot: hidden from humans, bots fill it in */}
      <div className="hp-field" aria-hidden="true">
        <label>Website <input type="text" name="website" tabIndex={-1} autoComplete="off"
                              value={form.website} onChange={onChange} /></label>
      </div>

      <button type="submit" className="submit-btn-modern" disabled={status.state === "sending"}>
        {status.state === "sending" ? t.form.sending : t.form.send}
      </button>
    </form>
  );
}
