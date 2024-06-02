import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faGulp,
  faBootstrap,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
export default function Skills() {
  const skillsIcons = [
    { key: 0, iconSrc: faHtml5 },
    { key: 1, iconSrc: faCss3 },
    { key: 2, iconSrc: faJs },
    { key: 3, iconSrc: faReact },
    { key: 4, iconSrc: faGulp },
    { key: 5, iconSrc: faBootstrap },
    { key: 6, iconSrc: faGit },
  ];
  return (
    <section className='skills'>
      <div className='wrapper wrapper--skills'>
        <div className='skills-content'>
          <div className='skills-content__text'>
            <h2 className='skills-title'>TECHNOLOGIES USED</h2>
          </div>
          <div className='skills-content__icons'>
            {skillsIcons.map((skillsIcon) => (
              <div className='skills-content__box' key={skillsIcon.key}>
                <FontAwesomeIcon
                  className='skills-icon'
                  icon={skillsIcon.iconSrc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
