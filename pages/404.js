import Link from "next/link";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useT } from "../lib/i18n";

export default function NotFound() {
  const { t } = useT();

  return (
    <>
      <Seo title={t.seo.notFoundTitle} path="/404" noindex />
      <Header />
      <main className="notfound">
        <h1>404</h1>
        <p>{t.notFound.text}</p>
        <Link href="/" className="detail-btn">
          {t.notFound.back}
        </Link>
      </main>
      <Footer />
    </>
  );
}
