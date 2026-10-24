import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const close = () => setOpen(false);

  return (
    <header className="floating-header">
      {/* LEFT */}
      <div className="header-left">
        <Link href="/" className="brand-link" onClick={close}>
          <img src="/images/logo.png" alt="Adatama logo" className="logo" />
          <div className="brand-box">ADATAMA</div>
        </Link>
      </div>

      {/* CENTER */}
      <div className={`header-center${open ? " open" : ""}`}>
        <nav className="menu-card" aria-label="Main navigation">
          {LINKS.map((l) => (
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

      {/* RIGHT */}
      <div className="header-right">
        <Link href="/contact" className="nav-cta">
          Request Quote
        </Link>
        <button
          type="button"
          className={`nav-toggle${open ? " open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
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
