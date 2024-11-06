
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume-container">
            <header className="resume-header">
                <h1 className="resume-title">Vimal Kumar Veeraragavan</h1>
                <p className="resume-subtitle">UX/UI Designer</p>
                <p className="resume-contact">
                    Email: vimalkumarveeraraghavan@gmail.com | LinkedIn: <a href="https://github.com/Vimal27-20" target="_blank" rel="noopener noreferrer">github.com/your-profile</a>
                </p>
            </header>

            <section className="resume-section">
                <h2 className="section-title">Work Experience</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-date">2022 - Present</div>
                        <h3 className="timeline-job-title">UX/UI Designer</h3>
                        <p className="timeline-company">Company Name</p>
                        <p className="timeline-description">Brief description of your responsibilities and achievements.</p>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-date">2021 - 2022</div>
                        <h3 className="timeline-job-title">Tableau Administrator</h3>
                        <p className="timeline-company">Infosys</p>
                        <p className="timeline-description">Managed projects independently and gained significant exposure.</p>
                    </div>
                </div>
            </section>

            <section className="resume-section">
                <h2 className="section-title">Education</h2>
                <div className="education-item">
                    <h3>BSc in Computer Science</h3>
                    <p>University Name, Year of Graduation</p>
                </div>
                <div className="education-item">
                    <h3>Master's in Interaction and Experience Design</h3>
                    <p>University Name, Expected Year of Graduation</p>
                </div>
            </section>

            <section className="resume-section">
                <h2 className="section-title">Skills</h2>
                <ul className="skills-list">
                    <li>UX/UI Design</li>
                    <li>Adobe XD, Figma, Sketch</li>
                    <li>HTML, CSS, JavaScript</li>
                    <li>Tableau, Data Visualization</li>
                    <li>Responsive Web Design</li>
                </ul>
            </section>

            <section className="resume-section">
                <h2 className="section-title">Certifications</h2>
                <ul className="certifications-list">
                    <li>Certification Name, Issuing Organization</li>
                    <li>Certification Name, Issuing Organization</li>
                </ul>
            </section>

            <section className="resume-section">
                <h2 className="section-title">Projects</h2>
                <ul className="projects-list">
                    <li>Project Name - Brief description of the project and technologies used.</li>
                    <li>Project Name - Brief description of the project and technologies used.</li>
                </ul>
            </section>
        </div>
    );
};

export default Resume;
