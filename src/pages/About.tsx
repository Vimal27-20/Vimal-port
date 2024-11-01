
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="profile-card">
                <img src="/path-to-your-image.jpg" alt="Profile" className="profile-image" />
                <h1 className="profile-name">Your Name</h1>
                <p className="profile-title">UX/UI Designer & Front-End Developer</p>
                <p className="profile-description">
                    With a passion for creating user-friendly, visually appealing designs, 
                    I specialize in bridging the gap between design and technology. I strive 
                    to deliver impactful and accessible experiences through innovative solutions.
                </p>
            </div>

            <div className="skills-section">
                <h2 className="section-title">My Skills</h2>
                <div className="skill">
                    <span className="skill-name">UX/UI Design</span>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '90%' }}></div>
                    </div>
                </div>
                <div className="skill">
                    <span className="skill-name">JavaScript & React</span>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '85%' }}></div>
                    </div>
                </div>
                <div className="skill">
                    <span className="skill-name">Prototyping</span>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '80%' }}></div>
                    </div>
                </div>
                <div className="skill">
                    <span className="skill-name">Responsive Design</span>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '95%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
