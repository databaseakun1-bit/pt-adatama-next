import Seo from "../components/Seo";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import ProductGallery from "../components/ProductGallery";
import CtaBand from "../components/CtaBand";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import { SITE } from "../data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.legalName,
  alternateName: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/images/logo.png`,
  email: SITE.email,
  telephone: SITE.phoneRaw,
  address: { "@type": "PostalAddress", addressLocality: "Tangerang", addressCountry: "ID" },
  sameAs: [`https://instagram.com/${SITE.instagram}`],
};

export default function Home() {
  return (
    <>
      <Seo path="/" jsonLd={jsonLd} />

      <Header />

      <main>
        <Hero />
        <About />
        <ProductGallery />
        <CtaBand />
      </main>

      <GetInTouch />
      <Footer />
    </>
  );
}
