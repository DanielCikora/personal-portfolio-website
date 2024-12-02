export default function About() {
  return (
    <section className='about'>
      <div className='wrapper'>
        <h2 className='mainTitle titleLine about__title'>About Me</h2>
        <div className='about__content'>
          <div className='about__bio'>
            <p className='paragraph'>
              Hi, I'm <strong>Daniel Cikora</strong>, a passionate Frontend
              Developer. I have a strong focus on modern web technologies.
              Currently, I'm a <strong>Frontend Developer Lead</strong> at{" "}
              <strong>Zummit Infolabs</strong>, where I build high-quality web
              applications using tools like{" "}
              <strong>React, Next.js, Redux, TypeScript,</strong> and{" "}
              <strong>Tailwind CSS</strong>. My mission is to create
              user-centric applications with seamless experiences.
            </p>
            <p className='paragraph'>
              My journey into development began as a junior developer after
              completing a bootcamp at <strong>SmartInIT</strong>, where I honed
              my skills in HTML, CSS, JavaScript, and React. Following an
              internship at <strong>VegaIT</strong> and transitioning to
              freelancing on platforms like <strong>UpWork</strong> and{" "}
              <strong>Fiverr</strong>, I gained hands-on experience working on
              diverse projects. Over time, I worked my way up and am now proud
              to be a <strong>Frontend Developer Lead</strong> at{" "}
              <strong>Zummit Infolabs</strong>, leading a talented team to build
              high-quality, user-centric web applications.
            </p>
            <p className='paragraph'>
              While I specialize in frontend technologies, my ambitions go
              beyond that. I'm currently focused on expanding my knowledge in{" "}
              <strong>Backend Development</strong> and{" "}
              <strong>UI/UX Design</strong> to become a well-rounded{" "}
              <strong>Full-Stack Developer</strong>.
            </p>
          </div>
          <div className='about__projects'>
            <h3 className='about__subtitle'>
              Types of Projects I've Worked On
            </h3>
            <p className='paragraph'>
              Over the course of my career, I've had the opportunity to work on
              a variety of exciting projects, collaborating with talented teams
              to bring innovative ideas to life. Some of the key project types
              include:
            </p>
            <ul className='about__projects-list'>
              <li>
                <strong>AI Project:</strong> Worked on an AI-driven web
                application that uses machine learning models to deliver
                personalized user experiences.
              </li>
              <li>
                <strong>Web Applications:</strong> Developed fully-functional
                web applications with a React frontend and a robust backend,
                focusing on user engagement and performance.
              </li>
              <li>
                <strong>Static Web Pages:</strong> Created highly optimized
                static websites with clean, modern designs using HTML, CSS, and
                JavaScript, ensuring fast load times and accessibility.
              </li>
            </ul>
          </div>
          <div className='about__strengths'>
            <h3 className='about__subtitle'>Core Skills & Strengths</h3>
            <ul className='about__skills'>
              <li>
                <strong>Frontend Development:</strong> React, Next.js, Redux,
                TypeScript
              </li>
              <li>
                <strong>UI/UX Design:</strong> Tailwind CSS, SCSS, Responsive
                Design, Design Systems
              </li>
              <li>
                <strong>Web Animation:</strong> GSAP, Three.js
              </li>
              <li>
                <strong>Backend Development:</strong> Node.js, Express,
                Databases (Learning)
              </li>
              <li>
                <strong>Cyber Security:</strong> Linux, Kali, Security Best
                Practices (Exploring)
              </li>
            </ul>
          </div>
          <div className='about__experience'>
            <h3 className='about__subtitle'>Professional Experience</h3>
            <ul className='about__experience-list'>
              <li>
                <strong>Frontend Developer Lead | Zummit Infolabs</strong> -
                Leading the frontend development of complex web applications,
                including AI-powered solutions and interactive web apps.
                Initially joined as a Junior Frontend Developer, progressing to
                Lead through strong performance, leadership, and contributions
                to the team’s growth.
              </li>
              <li>
                <strong>Freelance Developer | UpWork & Fiverr</strong> -
                Delivered various projects to clients, including websites, apps,
                static web pages, and custom solutions.
              </li>
              <li>
                <strong>Intern | VegaIT</strong> - Gained hands-on experience
                with React and web development technologies while working in a
                team.
              </li>
              <li>
                <strong>Bootcamp Graduate | SmartInIT</strong> - Completed an
                intensive bootcamp where I learned core web development skills,
                including HTML, CSS, JavaScript, and React.
              </li>
            </ul>
          </div>
          <div className='about__vision'>
            <h3 className='about__subtitle'>My Vision for the Future</h3>
            <p className='paragraph'>
              Looking ahead, I am eager to grow as a{" "}
              <strong>Full-Stack Developer</strong> with a strong foundation in
              both frontend and backend development. I also plan to dive deeper
              into <strong>UI/UX Design</strong> and{" "}
              <strong>Cyber Security</strong> to create seamless, user-centric
              applications and contribute to building secure systems.
            </p>
            <p className='paragraph'>
              As I continue my journey, my ultimate goal is to work on projects
              that challenge me, expand my skills, and make a lasting impact in
              the world of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
