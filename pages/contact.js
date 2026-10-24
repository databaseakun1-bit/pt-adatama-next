import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { SITE, whatsappLink } from "../data/site";
import { useT } from "../lib/i18n";

export default function Contact() {
  const { t } = useT();

  return (
    <>
      <Seo
        title={t.seo.contactTitle}
        description={t.seo.contactDescription}
        path="/contact"
      />

      <Header />

      <main className="contact-page-wrapper">
        <section className="contact-hero-section">
          <div className="contact-overlay"></div>

          <div className="contact-container">
            <div className="contact-card">
              {/* Info side */}
              <div className="contact-info-side">
                <h1 className="contact-main-title">{t.contactPage.title}</h1>
                <p className="contact-description">{t.contactPage.intro}</p>

                <div className="contact-details">
                  <div className="detail-item">
                    <span className="detail-icon" aria-hidden="true">📧</span>
                    <p><a dir="ltr" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon" aria-hidden="true">📞</span>
                    <p><a dir="ltr" href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a></p>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon" aria-hidden="true">📍</span>
                    <p>{t.site.location}</p>
                  </div>
                </div>

                <a
                  className="wa-btn"
                  href={whatsappLink(t.contactPage.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.contactPage.whatsapp}
                </a>
              </div>

              {/* Form side */}
              <div className="contact-form-side">
                <h3 className="form-heading">{t.contactPage.formHeading}</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
