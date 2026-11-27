
import {
  Mail,
  ArrowUpRight,
  Code2,
  Award,
  Download
} from "lucide-react";

import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          ABI<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk <ArrowUpRight size={16} />
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="greeting">
            <span className="status-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </p>

          <h1>
            Hi, I'm <span>Abisekalathan</span>
          </h1>

          <h2>
            Full Stack Developer
          </h2>

          <p className="description">
            I build modern, responsive and user-friendly
            web applications. I enjoy solving problems,
            exploring new technologies and transforming
            ideas into real-world applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Projects <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me <Mail size={18} />
            </a>
          </div>

          <div className="social-links">

  <a href="https://github.com/" target="_blank" rel="noreferrer">
    <Code2 />
  </a>

  <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
    <Code2 />
  </a>

  <a href="mailto:yourmail@gmail.com">
    <Mail />
  </a>

</div>

        </div>

        {/* Developer Card */}
        <div className="hero-card">
          <div className="card-top">
            <span className="card-dot"></span>
            <span className="card-dot"></span>
            <span className="card-dot"></span>
            <p>developer.js</p>
          </div>

          <div className="code-content">
            <p><span className="purple">const</span> developer = {"{"}</p>
            <p className="indent">name: <span className="green">"Abisekalathan"</span>,</p>
            <p className="indent">role: <span className="green">"Full Stack Developer"</span>,</p>
            <p className="indent">passion: <span className="green">"Building Projects"</span>,</p>
            <p className="indent">learning: <span className="green">"Always"</span></p>
            <p>{"};"}</p>
            <br />
            <p><span className="purple">console</span>.log(<span className="green">"Hello World!"</span>);</p>
          </div>

          <div className="code-footer">
            <Code2 size={16} />
            <span>Building something amazing</span>
          </div>
        </div>

      </section>

      <footer>
        © 2026 Abisekalathan. Built with React.
      </footer>

{/* About Me Section */}
<section className="about-section" id="about">

  <div className="section-heading">
    <p className="section-label">GET TO KNOW ME</p>
    <h2>About <span>Me</span></h2>
  </div>

  <div className="about-content">

    <div className="about-text">
      <h3>I'm a passionate Full Stack Developer.</h3>

      <p>
        I'm a college student passionate about software
        development, web technologies and problem-solving.
        I enjoy building practical applications and
        exploring emerging technologies.
      </p>

      <p>
        My interests include frontend development,
        backend development, database management,
        cloud computing and artificial intelligence.
      </p>

      <p>
        I continuously work on improving my technical
        knowledge through academic projects,
        certifications and hands-on learning.
      </p>
    </div>

    <div className="about-details">

      <div className="detail-card">
        <h3>01</h3>
        <p>Problem Solving</p>
      </div>

      <div className="detail-card">
        <h3>02</h3>
        <p>Web Development</p>
      </div>

      <div className="detail-card">
        <h3>03</h3>
        <p>Cloud Computing</p>
      </div>

      <div className="detail-card">
        <h3>04</h3>
        <p>Continuous Learning</p>
      </div>

    </div>
  </div>
</section>

{/* Skills Section */}
<section className="skills-section" id="skills">

  <div className="section-heading">
    <p className="section-label">WHAT I WORK WITH</p>
    <h2>Technical <span>Skills</span></h2>
  </div>

  <div className="skills-grid">

    <div className="skill-card">
      <h3>Frontend Development</h3>
      <p>HTML • CSS • JavaScript • React.js</p>
    </div>

    <div className="skill-card">
      <h3>Backend Development</h3>
      <p>Node.js • Express.js • Python</p>
    </div>

    <div className="skill-card">
      <h3>Database Management</h3>
      <p>MongoDB • SQL</p>
    </div>

    <div className="skill-card">
      <h3>Programming Languages</h3>
      <p>Java • Python • JavaScript</p>
    </div>

    <div className="skill-card">
      <h3>Cloud Computing</h3>
      <p>Amazon Web Services (AWS)</p>
    </div>

    <div className="skill-card">
      <h3>Tools & Technologies</h3>
      <p>VS Code • Git • GitHub • Firebase</p>
    </div>

  </div>
</section>

{/* Projects Section */}
<section className="projects-section" id="projects">

  <div className="section-heading">
    <p className="section-label">MY RECENT WORK</p>
    <h2>Featured <span>Projects</span></h2>
    <p className="projects-intro">
      Here are some of the projects I've worked on
      using different technologies and tools.
    </p>
  </div>

  <div className="projects-grid">

    {/* Project 1 */}
    <div className="project-card">
      <div className="project-number">01 / AI & MACHINE LEARNING</div>

      <h3>AI-Powered Marine Debris Detection</h3>

      <p>
        An AI-powered system designed to detect underwater
        marine debris and anomalies from Side-Scan Sonar
        imagery using computer vision techniques.
      </p>

      <div className="project-tech">
        <span>Python</span>
        <span>YOLO</span>
        <span>Computer Vision</span>
      </div>

      <a href="#contact" className="project-link">
        Know More <ArrowUpRight size={17} />
      </a>
    </div>

    {/* Project 2 */}
    <div className="project-card">
      <div className="project-number">02 / INTERNET OF THINGS</div>

      <h3>Smart Basket System</h3>

      <p>
        An IoT-based smart basket that uses ESP32-CAM,
        load cell and Firebase to capture item images
        and monitor basket weight.
      </p>

      <div className="project-tech">
        <span>ESP32-CAM</span>
        <span>Firebase</span>
        <span>IoT</span>
      </div>

      <a href="#contact" className="project-link">
        Know More <ArrowUpRight size={17} />
      </a>
    </div>

    {/* Project 3 */}
    <div className="project-card">
      <div className="project-number">03 / WEB DEVELOPMENT</div>

      <h3>GreenNest Nursery Website</h3>

      <p>
        A responsive nursery shopping website featuring
        plant categories, product listings, shopping cart
        and order checkout functionality.
      </p>

      <div className="project-tech">
        <span>React.js</span>
        <span>JavaScript</span>
        <span>CSS</span>
      </div>

      <a href="#contact" className="project-link">
        Know More <ArrowUpRight size={17} />
      </a>
    </div>

    {/* Project 4 */}
    <div className="project-card">
      <div className="project-number">04 / DATABASE MANAGEMENT</div>

      <h3>Student & Staff Database Management</h3>

      <p>
        A database-oriented application designed to
        organize and manage student and staff records
        efficiently.
      </p>

      <div className="project-tech">
        <span>Database</span>
        <span>SQL</span>
        <span>Programming</span>
      </div>

      <a href="#contact" className="project-link">
        Know More <ArrowUpRight size={17} />
      </a>
    </div>

  </div>
</section>

{/* Certifications Section */}
<section className="certifications-section" id="certifications">

  <div className="section-heading">
    <p className="section-label">MY LEARNING JOURNEY</p>
    <h2>Certifications <span>& Achievements</span></h2>
    <p className="projects-intro">
      Professional certifications and milestones
      from my technical learning journey.
    </p>
  </div>

  <div className="certification-card">

    <div className="certificate-icon">
      <Award size={35} />
    </div>

    <div className="certificate-content">
      <span className="certificate-label">
        AWS CLOUD CERTIFICATION
      </span>

      <h3>AWS Certified Cloud Practitioner</h3>

      <p>
        Demonstrated foundational knowledge of AWS Cloud,
        cloud concepts, core AWS services, security,
        billing, pricing and support.
      </p>

      <div className="project-tech">
        <span>Amazon Web Services</span>
        <span>Cloud Computing</span>
        <span>Cloud Fundamentals</span>
      </div>

      <a
        href="https://www.credly.com/"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        View Certification <ArrowUpRight size={17} />
      </a>
    </div>

  </div>

</section>

{/* Achievements Section */}
<section className="achievements-section">

  <div className="section-heading">
    <p className="section-label">MILESTONES</p>
    <h2>My <span>Achievements</span></h2>
  </div>

  <div className="achievement-grid">

    <div className="achievement-card">
      <Award size={28} />
      <h3>AWS Cloud Practitioner</h3>
      <p>
        Completed the AWS Cloud Practitioner
        certification examination.
      </p>
    </div>

    <div className="achievement-card">
      <Code2 size={28} />
      <h3>Project Development</h3>
      <p>
        Hands-on experience building web development,
        AI/ML and IoT-based projects.
      </p>
    </div>

    <div className="achievement-card">
      <Download size={28} />
      <h3>Continuous Learning</h3>
      <p>
        Continuously developing technical knowledge
        through practical learning and certifications.
      </p>
    </div>

  </div>

</section>

{/* Contact Section */}
<section className="contact-section" id="contact">

  <div className="section-heading">
    <p className="section-label">GET IN TOUCH</p>
    <h2>Let's Work <span>Together</span></h2>
    <p className="projects-intro">
      Have an opportunity or a project in mind?
      I'd love to hear from you.
    </p>
  </div>

  <div className="contact-content">

    <div className="contact-info">

      <h3>Let's connect!</h3>

      <p>
        I'm open to internships, entry-level opportunities,
        collaborations and exciting development projects.
      </p>

      <a
      href="mailto:abisekalathan@gmail.com"
      target="_blank"
      rel="noreferrer"  
      className="contact-item"
    >
    <Mail size={22} />
     <div>
         <strong>Email</strong>
          <span>abisekalathan@gmail.com</span>
     </div>
    </a>
    <a
  href="tel:+918940204100"
  className="contact-item"
>
  <div>
    <strong>Mobile</strong>
    <span>+91 8940204100</span>
  </div>
</a>

      <a
        href="https://www.linkedin.com/in/abisekalathan-s-816470432/"
        target="_blank"
        rel="noreferrer"
        className="contact-item"
      >
        <Code2 size={22} />
        <div>
          <strong>LinkedIn</strong>
          <span>Connect with me</span>
        </div>
      </a>

      <a
        href="https://github.com/23suca01-svg"
        target="_blank"
        rel="noreferrer"
        className="contact-item"
      >
        <Code2 size={22} />
        <div>
          <strong>GitHub</strong>
          <span>Explore my projects</span>
        </div>
      </a>

      <a
        href="/resume.pdf"
        download="Abisekalathan_Resume.pdf"
        className="resume-button"
      >
        <Download size={18} />
        Download My Resume
      </a>

    </div>

    <div className="contact-message">
      <h3>Ready for new opportunities?</h3>

      <p>
        Let's discuss how I can contribute my technical
        skills, creativity and enthusiasm to your team.
      </p>

      <a
        href="mailto:YOUR_EMAIL@gmail.com?subject=Portfolio%20Enquiry"
        className="primary-button"
      >
        Send Me an Email <ArrowUpRight size={18} />
      </a>
    </div>

  </div>

</section>


    </div>
  );
}

export default App;
