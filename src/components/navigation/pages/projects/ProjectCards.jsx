import { useState } from "react";
import TrafalgarImage from "../../../../assets/images/trafalgar-pixel-perfect-cut.png";
export default function ProjectCards() {
  const [selectedCard, setSelectedCard] = useState(null);
  const openGallery = (key) => {
    setSelectedCard(key === selectedCard ? null : key);
  };
  const projectCardsContent = [
    {
      key: 1,
      cardImgSrc: TrafalgarImage,
      cardAlt: "project-trafalgar",
      cardTitle: "Trafalgar Medical Company",
      cardDescription:
        "Website for Trafalgar Medical Company, using React with TypeScript, SCSS and React Router",
      cardGitHubLink:
        "https://github.com/DanielCikora/Trafalgar-ReactJS-App.git",
    },
    {
      key: 2,
      cardImgSrc: TrafalgarImage,
      cardAlt: "project-trafalgar",
      cardTitle: "Trafalgar Medical Company",
      cardDescription:
        "Website for Trafalgar Medical Company, using React with TypeScript, SCSS and React Router",
      cardGitHubLink:
        "https://github.com/DanielCikora/Trafalgar-ReactJS-App.git",
    },
  ];

  return (
    <>
      {projectCardsContent.map((projectCard) => (
        <div
          className={`projects-box${
            selectedCard === projectCard.key ? " projects-box--opened" : ""
          }`}
          key={projectCard.key}
          onClick={() => openGallery(projectCard.key)}
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
            className='main-link projects-box__a'
            href={projectCard.cardGitHubLink}
            target='_blank'
            rel='noreferrer'
          >
            Link to the Project
          </a>
        </div>
      ))}
    </>
  );
}
