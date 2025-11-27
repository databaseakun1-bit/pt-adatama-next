import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
         <Head>
         <title>Contact Us</title>
         <link rel="icon" href="/favicon.ico" sizes="any" />
         <link rel="icon" type="image/png" href="/favicon.png" />
         </Head>

      <Header />

      <main>
        <section className="contact-section">
          <div className="contact-overlay"></div>

          <div className="contact-container">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-subtitle">
              Kami siap membantu kebutuhan ekspor rempah & hasil alam Indonesia.
            </p>

            <div className="contact-grid">

              <div className="contact-info-box">
                <h3>Contact Information</h3>
                <p><strong>Email:</strong> andalannatureutama@gmail.com</p>
                <p><strong>WhatsApp:</strong> +62 812 3456 7890</p>
                <p><strong>Location:</strong> Indonesia</p>
              </div>

              <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Email Address" required />
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
              </form>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
