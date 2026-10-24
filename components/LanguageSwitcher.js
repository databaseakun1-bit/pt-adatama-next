import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LANGUAGES, useT } from "../lib/i18n";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { t, locale } = useT();
  const [open, setOpen] = useState(false);
  const box = useRef(null);

  // Close on outside click or Escape
  useEffect(() => {
    const onDown = (e) => {
      if (box.current && !box.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const current = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  return (
    <div className="lang-switch" ref={box}>
      <button
        type="button"
        className="lang-btn"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`${t.nav.language}: ${current.label}`}
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.6 2.7 4 5.7 4 9s-1.4 6.3-4 9c-2.6-2.7-4-5.7-4-9s1.4-6.3 4-9z" />
        </svg>
        <span>{current.short}</span>
      </button>

      {open && (
        <ul className="lang-menu">
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <Link
                href={router.asPath}
                locale={l.code}
                lang={l.htmlLang}
                hrefLang={l.hreflang}
                className={l.code === locale ? "current" : ""}
                aria-current={l.code === locale ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
