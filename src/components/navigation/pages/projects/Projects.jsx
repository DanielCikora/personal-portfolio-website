import ProjectCards from "./ProjectCards";
export default function Projects() {
  return (
    <section className='projects'>
      <h2 className='mainTitle titleLine projects__title'>PROJECTS</h2>
      <div className='wrapper wrapper--projects'>
        <ProjectCards />
      </div>
    </section>
  );
}
