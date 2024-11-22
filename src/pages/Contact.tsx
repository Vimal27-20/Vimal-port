
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


interface ContactMethod {
  icon: string;
  title: string;
  detail: string;
  link: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    detail: 'vimalkumarveeraraghavan@gmail.com',
    link: '',
  },
  {
    icon: 'fas fa-phone',
    title: 'Phone',
    detail: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: 'fab fa-github',
    title: 'GitHub',
    detail: 'github.com/Vimal Kumar Veeraragavan',
    link: 'https://github.com/Vimal27-20',
  },
  {
    icon: 'fab fa-linkedin',
    title: 'LinkedIn',
    detail: 'linkedin.com/in/vimalkumar Veeraragavan',
    link: 'https://github.com/Vimal27-20',
    
  },
];

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-intro">Feel free to reach out to me through any of these channels</p>
      <div className="contact-grid">
        {contactMethods.map((method, index) => (
          <div className="contact-card" key={index}>
            <i className={`${method.icon} contact-icon`}></i>
            <h2 className="contact-card-title">{method.title}</h2>
            <p className="contact-card-detail">{method.detail}</p>
            <a href={method.link} className="contact-button" target="_blank" rel="noopener noreferrer">
              Connect
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
