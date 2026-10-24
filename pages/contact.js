import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { SITE, whatsappLink } from "../data/site";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Request an offer for Indonesian cloves, vanilla, black pepper or giant ginger. Contact PT. Andalan Nature Utama (Adatama)."
        path="/contact"
      />

      <Header />

      <main className="contact-page-wrapper">
        <section className="contact-hero-section">
          <div className="contact-overlay"></div>

          <div className="contact-container">
            <div className="contact-card">
              {/* Left: info */}
              <div className="contact-info-side">
                <h1 className="contact-main-title">Start a Global Partnership</h1>
                <p className="contact-description">
                  Interested in our premium spices? Our team is ready to answer your questions within 24 hours.
                </p>

                <div className="contact-details">
                  <div className="detail-item">
                    <span className="detail-icon" aria-hidden="true">📧</span>
                    <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon" aria-hidden="true">📞</span>
                    <p><a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a></p>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon" aria-hidden="true">📍</span>
                    <p>{SITE.location}</p>
                  </div>
                </div>

                <a
                  className="wa-btn"
                  href={whatsappLink("Hello Adatama, I would like to ask about your products.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Right: form */}
              <div className="contact-form-side">
                <h3 className="form-heading">Send Us a Message</h3>
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
