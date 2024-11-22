
import './Project.css';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  liveDemoLink: string;
}

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with React and Node.js',
    image: 'https://path/to/ecommerce-image.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubLink: 'https://github.com/username/ecommerce-platform',
    liveDemoLink: 'https://ecommerce-demo.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application',
    image: 'https://path/to/task-management-image.png',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    githubLink: 'https://github.com/username/task-management-app',
    liveDemoLink: 'https://taskmanagement-demo.com',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React',
    image: 'https://path/to/portfolio-image.png',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com/username/portfolio-website',
    liveDemoLink: 'https://portfolio-demo.com',
  },
];

const Project = () => {
  return (
    <div className="project-page">
      <h1 className="project-title">My Projects</h1>
      <p className="project-intro">
        Here are some of my recent projects that showcase my skills and experience.
      </p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={`${project.title} thumbnail`} className="project-image" />
            <h2 className="project-card-title">{project.title}</h2>
            <p className="project-card-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span className="project-tag" key={idx}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href={project.liveDemoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-globe"></i> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
