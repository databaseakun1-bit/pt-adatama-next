export default function ContactForm() {
  return (
    <section className="contact-section" id="contact">

      <h2 className="contact-title">Get in Touch</h2>

      <form
        action="https://formsubmit.co/andalannatureutama@gmail.com"
        method="POST"
        className="contact-form"
      >
        {/* Redirect setelah sukses */}
        <input type="hidden" name="_next" value="https://yourdomain.com/thanks" />

        {/* Matikan captcha */}
        <input type="hidden" name="_captcha" value="false" />

        <div className="form-group">
          <label>Your Name</label>
          <input type="text" name="name" required />
        </div>

        <div className="form-group">
          <label>Your Email</label>
          <input type="email" name="email" required />
        </div>

        <div className="form-group">
          <label>Your Message</label>
          <textarea name="message" rows="4" required></textarea>
        </div>

        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>

    </section>
  );
}
