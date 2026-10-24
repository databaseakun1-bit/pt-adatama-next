import Link from "next/link";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" path="/404" />
      <Header />
      <main className="notfound">
        <h1>404</h1>
        <p>Sorry, we could not find the page you are looking for.</p>
        <Link href="/" className="detail-btn">
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
