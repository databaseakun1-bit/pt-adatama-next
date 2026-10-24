import { SITE } from "../data/site";

export default function GetInTouch() {
  return (
    <section className="getintouch-section">
      <div className="getintouch-overlay"></div>

      <div className="getintouch-content">
        <h2>Get in touch</h2>

        <div className="contact-info-box">
          <p className="company-name">{SITE.legalName}</p>
          <p>{SITE.location}</p>

          <p className="contact-item">
            <span className="icon" aria-hidden="true">📧</span>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>

          <p className="contact-item">
            <span className="icon" aria-hidden="true">📞</span>
            <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
          </p>

          <p className="contact-item">
            <span className="icon" aria-hidden="true">📷</span>
            <a href={`https://instagram.com/${SITE.instagram}`} target="_blank" rel="noopener noreferrer">
              @{SITE.instagram}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
