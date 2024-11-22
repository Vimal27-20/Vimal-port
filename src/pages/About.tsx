
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="intro">
        <h1>
          Hi, I'm <span className="highlight">Vimal Kumar Veeraragavan</span>
        </h1>
        <p className="subtitle">
          Aspiring UX UI Designer
        </p>
        <div className="social-links">
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="mailto:johndoe@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <h2>Skills & Expertise</h2>
      <div className="skills">
        {["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "GraphQL", "Git", "REST APIs"].map(skill => (
          <span key={skill} className="skill">{skill}</span>
        ))}
      </div>

      <h2>Experience</h2>
      <div className="experience">
        <div className="job">
          <h3>Senior Frontend Developer</h3>
          <p className="company">Tech Corp | 2021 - Present</p>
          <p>Leading the frontend development team, implementing modern web solutions.</p>
        </div>
        <div className="job">
          <h3>Full Stack Developer</h3>
          <p className="company">Digital Agency | 2019 - 2021</p>
          <p>Developed full-stack applications using React and Node.js.</p>
        </div>
      </div>

      <h2>About Me</h2>
      <p className="about-text">
        I'm a passionate Full Stack Developer with over 5 years of experience in building web applications. 
        My journey in software development started with a deep curiosity for technology and problem-solving.
      </p>
      <p className="about-text">
        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
      </p>
    </section>
  );
};

export default About;
