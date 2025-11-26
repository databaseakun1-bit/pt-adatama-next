import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';
import ProductGallery from '../components/ProductGallery';

export default function Home() {
  return (
    <>
      <Head>
        <title>Adatama</title>
        <meta
          name="description"
          content="Mitra ekspor hasil alam dan rempah Indonesia berkualitas tinggi."/>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
       </Head>

      {/* HEADER */}
      <Header />

      {/* ISI HALAMAN */}
      <main>
        <Hero />
        <About />
        <ProductGallery />
        {/* nanti di sini bisa tambah produk, about, kontak, dll */}
      </main>

      <GetInTouch />
      {/* FOOTER */}
      <Footer />
    </>
  );
}
