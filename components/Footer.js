import { useT } from "../lib/i18n";

export default function Footer() {
  const { t } = useT();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          <strong>© {new Date().getFullYear()}</strong>{" "}
          <strong>ADATAMA | PT. Andalan Nature Utama | {t.footer.rights}</strong>
        </p>
      </div>
    </footer>
  );
}
