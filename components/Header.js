import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import LanguageSwitcher from "./LanguageSwitcher";
import { useT } from "../lib/i18n";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();
  const { t } = useT();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/products", label: t.nav.products },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const close = () => setOpen(false);

  return (
    <header className="floating-header">
      {/* START (left in LTR, right in RTL) */}
      <div className="header-left">
        <Link href="/" className="brand-link" onClick={close}>
          <img src="/images/logo.png" alt="Adatama" className="logo" />
          <div className="brand-box">ADATAMA</div>
        </Link>
      </div>

      {/* CENTER */}
      <div className={`header-center${open ? " open" : ""}`}>
        <nav className="menu-card" aria-label={t.nav.mainNav}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
              aria-current={isActive(l.href) ? "page" : undefined}
              onClick={close}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* END */}
      <div className="header-right">
        <LanguageSwitcher />
        <Link href="/contact" className="nav-cta">
          {t.nav.requestQuote}
        </Link>
        <button
          type="button"
          className={`nav-toggle${open ? " open" : ""}`}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
