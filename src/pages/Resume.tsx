
import "./Resume.css";

interface Education {
  type: "education";
  institution: string;
  degree: string;
  duration: string;
}

interface Experience {
  type: "experience";
  position: string;
  company: string;
  duration: string;
  details: string[];
}

interface Skills {
  type: "skills";
  items: string[];
}

type Section = Education | Experience | Skills;

const Resume = () => {
  const sections: Section[] = [
    {
      type: "education",
      institution: "ABC University",
      degree: "Bachelor of Science in Computer Science",
      duration: "2017 - 2021",
    },
    {
      type: "experience",
      position: "Software Engineer",
      company: "Tech Corp",
      duration: "2021 - Present",
      details: [
        "Developed scalable web applications using React and Node.js.",
        "Collaborated with cross-functional teams to design solutions.",
        "Led the implementation of new UI/UX features.",
      ],
    },
    {
      type: "skills",
      items: ["JavaScript", "React", "Node.js", "CSS3", "TypeScript", "Git"],
    },
  ];

  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1 className="animated-heading">John Doe</h1>
        <p className="animated-subheading">Full-Stack Developer</p>
      </header>
      <main className="resume-content">
        {sections.map((section, index) => (
          <section className="resume-section" key={index}>
            {section.type === "education" && (
              <>
                <h2 className="section-title">Education</h2>
                <div className="item-details">
                  <h3>{section.degree}</h3>
                  <span className="company-name">{section.institution}</span>
                  <span className="duration">{section.duration}</span>
                </div>
              </>
            )}
            {section.type === "experience" && (
              <>
                <h2 className="section-title">Experience</h2>
                <div className="item-details">
                  <h3>{section.position}</h3>
                  <span className="company-name">{section.company}</span>
                  <span className="duration">{section.duration}</span>
                  <ul className="details-list">
                    {section.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
            {section.type === "skills" && (
              <>
                <h2 className="section-title">Skills</h2>
                <div className="section-content">
                  {section.items.map((skill, skillIndex) => (
                    <span className="skill-item" key={skillIndex}>
                      {skill}
                    </span>
                  ))}
                </div>
              </>
            )}
          </section>
        ))}
      </main>
    </div>
  );
};

export default Resume;
