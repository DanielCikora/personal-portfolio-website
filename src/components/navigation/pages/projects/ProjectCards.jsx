import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWebAwesome } from "@fortawesome/free-brands-svg-icons";
import { projectCardsContent } from "../../../../lib/constants/constants";
export default function ProjectCards() {
  const [selectedCard, setSelectedCard] = useState(null);
  const openGallery = (key) => {
    setSelectedCard((prevSelected) => (key === prevSelected ? null : key));
  };
  return (
    <>
      {projectCardsContent.map((projectCard) => (
        <div
          key={projectCard.key}
          className={`projects-box ${
            selectedCard === projectCard.key ? "projects-box--opened" : ""
          }`}
          onClick={() => openGallery(projectCard.key)}
          role='button'
          aria-label={`Open project ${projectCard.cardTitle}`}
        >
          <img
            className='projects-box__image'
            src={projectCard.cardImgSrc}
            alt={projectCard.cardAlt}
          />
          <div className='projects-text'>
            <h2 className='title projects-text__h2'>{projectCard.cardTitle}</h2>
            <p className='paragraph projects-text__p'>
              {projectCard.cardDescription}
            </p>
          </div>
          <a
            className='cta cta--link__github'
            href={projectCard.cardGitHubLink}
            target='_blank'
            rel='noreferrer'
          >
            GitHub <FontAwesomeIcon className='github-icon' icon={faGithub} />
          </a>
          <a
            className='cta cta--link__website'
            href={projectCard.cardLink}
            target='_blank'
            rel='noreferrer'
          >
            Live Site{" "}
            <FontAwesomeIcon className='awesome-icon' icon={faWebAwesome} />
          </a>
        </div>
      ))}
    </>
  );
}
