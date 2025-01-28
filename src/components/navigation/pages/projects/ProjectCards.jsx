import { useState } from "react";
import WorkSphereImage from "../../../../assets/images/work-sphere-image.png";
import ZummpathImage from "../../../../assets/images/zummpath-image.png";
export default function ProjectCards() {
  const [selectedCard, setSelectedCard] = useState(null);
  const openGallery = (key) => {
    setSelectedCard((prevSelected) => (key === prevSelected ? null : key));
  };
  const projectCardsContent = [
    {
      key: 1,
      cardImgSrc: ZummpathImage,
      cardAlt: "project-zummpath-bioinformatics",
      cardTitle: "Zummpath Bioinformatics",
      cardDescription:
        "Zummpath Bioinformatics Static Web Page - React.js, GSAP, Three.js, Tailwind.css",
      cardLink: "https://zummpathbioinformatics.zummitlabs.com",
      cardGitHubLink: "https://zummpathbioinformatics.zummitlabs.com",
    },
    {
      key: 2,
      cardImgSrc: WorkSphereImage,
      cardAlt: "project-work-sphere",
      cardTitle: "Work Sphere",
      cardDescription:
        "Work Sphere Web App - Next.js, TypeScript, Redux.js, Three.js, Tailwind.css",
      cardLink: "https://dc-worksphere.netlify.app",
      cardGitHubLink: "https://dc-worksphere.netlify.app",
    },
  ];
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
            className='cta'
            href={projectCard.cardGitHubLink}
            target='_blank'
            rel='noreferrer'
          >
            View Project
          </a>
        </div>
      ))}
    </>
  );
}
