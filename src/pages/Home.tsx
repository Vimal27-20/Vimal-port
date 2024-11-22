
import { Link } from 'react-router-dom';
import './Home.css';
import profileImage from '../Images/myphoto.jpeg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      
      <div className="content-section">
        <h1 className="greeting">Hello</h1>
        <h2 className="about-title">A Bit About Me</h2>
        <p className="about-description">
          I'm a UX/UI designer passionate about crafting user-friendly and visually appealing digital experiences. I’m here to tell a story and let users know a little more about me.
        </p>
        
        <div className="button-container">
          <Link to="/resume" className="circle-btn resume-btn">Resume</Link>
          <Link to="/projects" className="circle-btn projects-btn">Projects</Link>
          <Link to="/contact" className="circle-btn contact-btn">Contact</Link>
        </div>
      </div>
    </div>

    
  );
};

export default Home;
