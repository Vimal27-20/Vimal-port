import '../styles.css';

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <div className="card">
        <h2>Get in Touch</h2>
        <p>
          We’d love to hear from you! Whether you have a question about our services, need a demo, or just want to say hello, feel free to contact us.
        </p>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Your message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
