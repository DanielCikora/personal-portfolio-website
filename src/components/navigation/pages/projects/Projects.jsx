import ProjectCards from "./ProjectCards";
import ProjectsImage from "../../../../assets/images/projects.jpg";
export default function Projects() {
  return (
    <section className='projects'>
      <div className='projects-image__wrapper'>
        <img className='projects-image' src={ProjectsImage} alt='projects' />
      </div>
      <div className='wrapper wrapper--projects'>
        <ProjectCards />
      </div>
    </section>
  );
}
