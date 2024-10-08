import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-desc">
          We'd love to hear from you! Whether you have questions about our projects, collaboration ideas, or just want to say hello, feel free to reach out.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your message" required />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        <div className="contact-info">
          <p><strong>Email:</strong> contact@computervisionml.com</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Address:</strong>  Innovation St, Mountain View, CA</p>
        </div>
      </div>
    </div>
  );
}

