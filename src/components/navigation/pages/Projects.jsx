import ProjectsImage from "../../../assets/images/projects.jpg";
export default function Projects() {
  return (
    <section className='projects'>
      <img className='projects-image' src={ProjectsImage} alt='projects' />
      <div className='wrapper wrapper--projects'></div>
    </section>
  );
}
