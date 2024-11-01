
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons
import './Home.css';
import profileimage from './../assets/images/logo.png'

const Home = () => {
    return (
        <div className="home-container">
          <div className="Profilepiccontainer"><img src={profileimage}  /></div>
            <div className="home-section">
                <h1 className="home-title">Welcome to My Portfolio</h1>
                <p className="home-about">
                    I am a passionate UX/UI designer committed to creating 
                    user-friendly and visually appealing digital experiences.
                </p>
                <div className="home-buttons">
                    <Link to="/resume" className="btn resume-btn">My Resume</Link>
                    <Link to="/projects" className="btn projects-btn">My Projects</Link>
                </div>
                <div className="social-icons">
                    <a href="https:www.linkedin.com/in/vimalkumar27102000" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} />
                    </a>
                    <a href="mailto:vimalkumarveeraraghavan@gmail.com">
                        <FaEnvelope size={30} />
                    </a>
    
                 
                </div>
            </div>
            
        </div>

        
    );
};

export default Home;
