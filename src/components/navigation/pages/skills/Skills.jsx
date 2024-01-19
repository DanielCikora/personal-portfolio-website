import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faBootstrap,
  faGit,
  faGulp,
} from "@fortawesome/free-brands-svg-icons";
export default function Skills() {
  return (
    <section className='skills'>
      <div className='wrapper wrapper--skills'>
        <div className='skills-icons'>
          <i className='skill-icon'>
            <FontAwesomeIcon icon={faHtml5} />
          </i>
          <i className='skill-icon'>
            <FontAwesomeIcon icon={faCss3} />
          </i>
          <i className='skill-icon'>
            <FontAwesomeIcon icon={faSass} />
          </i>
          <i className='skill-icon'>
            <FontAwesomeIcon icon={faJs} />
          </i>
          <i className='skill-icon'>
            <FontAwesomeIcon icon={faReact} />
          </i>
          <i className='skill-icon'>
            <FontAwesomeIcon icon={faBootstrap} />
          </i>
          <i className='skill-icon'>
            <FontAwesomeIcon icon={faGit} />
          </i>
          <i className='skill-icon'>
            <FontAwesomeIcon icon={faGulp} />
          </i>
        </div>
      </div>
    </section>
  );
}
