
import './Project.css';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One. This project involved using modern web technologies to create a responsive and interactive application.',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two. This project involved working with APIs and complex data to create a user-friendly experience.',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three. This project highlights advanced styling and animation techniques for a seamless UI.',
    link: '#',
  },
];

const Project = () => {
  return (
    <div className="project-page">
      <h1 className="project-title">My Projects</h1>
      <p className="project-intro">Explore some of my recent work below.</p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2 className="project-card-title">{project.title}</h2>
            <p className="project-card-description">{project.description}</p>
            <a href={project.link} className="project-card-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
