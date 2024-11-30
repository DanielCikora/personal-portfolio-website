import { useEffect, useRef } from "react";
import TailwindIcon from "../../assets/images/tailwind.svg";
import GSAPIcon from "../../assets/images/gsap.svg";
import TypeScriptIcon from "../../assets/images/typescript.svg";
import FigmaIcon from "../../assets/images/figma.svg";
import NextIcon from "../../assets/images/next.svg";
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Skills() {
  const skillsRef = useRef(null);
  const skillsIcons = [
    { key: 0, iconSrc: faHtml5, name: "HTML5", isSvg: false },
    { key: 1, iconSrc: faCss3, name: "CSS3", isSvg: false },
    { key: 2, iconSrc: faJs, name: "JavaScript", isSvg: false },
    { key: 3, iconSrc: TypeScriptIcon, name: "TypeScript", isSvg: true },
    { key: 4, iconSrc: faReact, name: "React.js", isSvg: false },
    { key: 5, iconSrc: NextIcon, name: "Next.js", isSvg: true },
    { key: 6, iconSrc: faGulp, name: "Gulp.js", isSvg: false },
    { key: 7, iconSrc: faBootstrap, name: "Bootstrap", isSvg: false },
    { key: 8, iconSrc: TailwindIcon, name: "Tailwind", isSvg: true },
    { key: 9, iconSrc: GSAPIcon, name: "GSAP", isSvg: true },
    { key: 10, iconSrc: faGit, name: "Git", isSvg: false },
    { key: 11, iconSrc: FigmaIcon, name: "Figma", isSvg: true },
  ];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".skills-content__box",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);
  return (
    <section className='skills' ref={skillsRef}>
      <div className='wrapper wrapper--skills'>
        <div className='skills-content'>
          <div className='skills-content__text'>
            <h2 className='mainTitle'>TECHNOLOGIES USED</h2>
          </div>
          <div className='skills-content__icons'>
            {skillsIcons.map((skillsIcon) => (
              <div className='skills-content__box' key={skillsIcon.key}>
                {!skillsIcon.isSvg ? (
                  <FontAwesomeIcon
                    className='skills-icon'
                    icon={skillsIcon.iconSrc}
                  />
                ) : (
                  <img
                    src={skillsIcon.iconSrc}
                    alt={skillsIcon.name}
                    className='skills-icon skills-icon--svg'
                  />
                )}
                <h3 className='skills-icon__label'>{skillsIcon.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
