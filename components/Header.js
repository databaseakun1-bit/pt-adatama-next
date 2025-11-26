export default function Header() {
  return (
    <header className="floating-header">

      {/* KIRI */}
      <div className="header-left">
      <a href="/" className="brand-link">
      <img src="/images/logo.png" alt="Adatama Logo" className="logo" />
      <div className="brand-box">ADATAMA</div>
      </a>
      </div>


      {/* TENGAH */}
      <div className="header-center">
        <nav className="menu-card">
        <a href="/">Home</a>
        <a href="/products">Product</a>
        <a href="/contact">Contact</a>
      </nav>
      </div>

      {/* KANAN */}
      <div className="header-right">
        <a href="#order" className="buy-btn">Buy Now</a>
      </div>

    </header>
  );
}
