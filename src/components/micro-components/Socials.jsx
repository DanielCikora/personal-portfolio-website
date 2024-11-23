import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Socials({ className }) {
  return (
    <div className={`socials-container ${className}`}>
      <a
        href="mailto:d.cikora98@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="socials__a"
      >
        <FontAwesomeIcon icon={faEnvelope} className="socials-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/daniel-cikora-a7344a253"
        target="_blank"
        rel="noreferrer"
        className="socials__a"
      >
        <FontAwesomeIcon icon={faLinkedin} className="socials-icon" />
      </a>
      <a
        href="https://github.com/DanielCikora"
        target="_blank"
        rel="noreferrer"
        className="socials__a"
      >
        <FontAwesomeIcon icon={faGithub} className="socials-icon" />
      </a>
    </div>
  );
}
