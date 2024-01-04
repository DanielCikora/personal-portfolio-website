import ProjectsImage from "../../../assets/images/projects.jpg";
import TrafalgarImage from "../../../assets/images/trafalgar-pixel-perfect-cut.png";
export default function Projects() {
  return (
    <section className='projects'>
      <img className='projects-image' src={ProjectsImage} alt='projects' />
      <div className='wrapper wrapper--projects'>
        <div className='projects-box'>
          <img
            className='projects-box__image'
            src={TrafalgarImage}
            alt='trafalgar'
          />
          <div className='projects-text'>
            <h2 className='title projects-text__h2'>
              Trafalgar Medical Company
            </h2>
            <p className='paragraph projects-text__p'>
              Website for Trafalgar Medical Company, using React with
              TypeScript, SCSS and React Router.
            </p>
          </div>
          <a
            className='main-link projects-box__a'
            href='https://github.com/DanielCikora/Trafalgar-ReactJS-App.git'
            target='_blank'
          >
            Link to the Project.
          </a>
        </div>
      </div>
    </section>
  );
}
