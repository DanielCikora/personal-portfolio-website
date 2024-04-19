import Slider from "./Slider";
import { Link } from "react-router-dom";
export default function ProjectsPreview() {
  return (
    <section className='projects-preview'>
      <div className='wrapper'>
        <div className='projects-wrapper'>
          <div className='projects-preview-text'>
            <h2 className='title projects-preview-text__title'>
              PREVIEW OF MY PROJECTS.
            </h2>
            <p className='paragraph projects-preview-text__paragraph'>
              MY PERSONAL PROJECTS.
            </p>
            <Link className='cta projects-preview-text__btn' to='/Projects'>
              Learn more
            </Link>
          </div>
          <Slider />
        </div>
      </div>
    </section>
  );
}
