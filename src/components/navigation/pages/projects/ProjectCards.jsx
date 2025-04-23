import { useState } from "react";
import ExoticRestaurant from "../../../../assets/images/exotic-restaurant.png";
import WorkSphereImage from "../../../../assets/images/work-sphere-image.png";
import ZummpathImage from "../../../../assets/images/zummpath-image.png";
import PortfolioImage from "../../../../assets/images/portfolio.png";
import FinanceTrackerImage from "../../../../assets/images/finance-tracker-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWebAwesome } from "@fortawesome/free-brands-svg-icons";
export default function ProjectCards() {
  const [selectedCard, setSelectedCard] = useState(null);
  const openGallery = (key) => {
    setSelectedCard((prevSelected) => (key === prevSelected ? null : key));
  };
  const projectCardsContent = [
    {
      key: 0,
      cardImgSrc: FinanceTrackerImage,
      cardAlt: "project-finance-tracker",
      cardTitle: "Finance Tracker",
      cardDescription:
        "Frontend - Personal Finance Tracker - Next.js, Tailwind.css, TypeScript",
      cardGitHubLink: "https://github.com/DanielCikora/finance-tracker",
      cardLink: "https://finance-tracker-seven-delta.vercel.app/dashboard",
    },
    {
      key: 1,
      cardImgSrc: ExoticRestaurant,
      cardAlt: "project-exotic-restaurant",
      cardTitle: "Exotic Indian Eats",
      cardDescription:
        "Fullstack - Exotic Indian Restaurant - Next.js, Tailwind.css, Express.js, MongoDB",
      cardGitHubLink: "https://github.com/DanielCikora/exotic-restaurant",
      cardLink: "https://exotic-restaurant-tzp1.vercel.app/",
    },
    {
      key: 2,
      cardImgSrc: ZummpathImage,
      cardAlt: "project-zummpath-bioinformatics",
      cardTitle: "Zummpath Bioinformatics",
      cardDescription:
        "Frontend - Zummpath Bioinformatics Static Web Page - React.js, GSAP, Three.js, Tailwind.css",
      cardGitHubLink:
        "https://github.com/DanielCikora/zummpath-bio-informatics",
      cardLink: "https://zummpathbioinformatics.zummitlabs.com",
    },
    {
      key: 3,
      cardImgSrc: WorkSphereImage,
      cardAlt: "project-work-sphere",
      cardTitle: "Work Sphere",
      cardDescription:
        "Frontend - Work Sphere Job Search Web App - Next.js, TypeScript, Redux.js, Three.js, Tailwind.css",
      cardGitHubLink: "https://github.com/DanielCikora/work-sphere",
      cardLink: "https://dc-worksphere.netlify.app",
    },
    {
      key: 4,
      cardImgSrc: PortfolioImage,
      cardAlt: "project-personal-portfolio",
      cardTitle: "Personal Portfolio",
      cardDescription:
        "Frontend - Personal Portfolio Static Web Page - React.js, React Router, SASS",
      cardGitHubLink:
        "https://github.com/DanielCikora/personal-portfolio-website",
      cardLink: "https://danielcikora.netlify.app",
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
