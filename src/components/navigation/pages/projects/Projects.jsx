import ProjectCards from "./ProjectCards";
import ProjectsVideo from "../../../../assets/videos/pexels-pavel-danilyuk-5215219 (1080p).mp4";
export default function Projects() {
  return (
    <section className='projects'>
      <div className='projects-video__wrapper'>
        <video className='projects-video' src={ProjectsVideo} autoPlay muted loop/>
      </div>
      <div className='wrapper wrapper--projects'>
        <ProjectCards />
      </div>
    </section>
  );
}
