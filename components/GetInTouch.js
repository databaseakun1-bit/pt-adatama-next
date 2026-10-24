import { SITE } from "../data/site";
import { useT } from "../lib/i18n";

export default function GetInTouch() {
  const { t } = useT();

  return (
    <section className="getintouch-section">
      <div className="getintouch-overlay"></div>

      <div className="getintouch-content">
        <h2>{t.getInTouch.title}</h2>

        <div className="contact-info-box">
          <p className="company-name">{SITE.legalName}</p>
          <p>{t.site.location}</p>

          <p className="contact-item">
            <span className="icon" aria-hidden="true">📧</span>
            <a dir="ltr" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>

          <p className="contact-item">
            <span className="icon" aria-hidden="true">📞</span>
            <a dir="ltr" href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
          </p>

          <p className="contact-item">
            <span className="icon" aria-hidden="true">📷</span>
            <a dir="ltr" href={`https://instagram.com/${SITE.instagram}`} target="_blank" rel="noopener noreferrer">
              @{SITE.instagram}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
