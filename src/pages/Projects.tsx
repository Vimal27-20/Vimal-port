
import './Project.css';

const projects = [
  {
    title: 'User Centred Design Exploration and Prototyping',
    description: 'Applying Creative Techniques and Expanding the Design possibilities.',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two. This project involved working with APIs and complex data to create a user-friendly experience.',
    link: '#https://drive.google.com/file/d/17qYDQXPjxE1y_VkKxWbQk5MSD0SogV4b/view?usp=sharing',
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
