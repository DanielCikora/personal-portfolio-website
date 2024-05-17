import BGVideo from "../../assets/videos/blob.mp4";
import CVFile from "../../assets/files/Daniel Cikora FE Dev CV ENG.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero-video__wrapper'>
        <video autoPlay muted loop className='hero-video'>
          <source src={BGVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='wrapper wrapper--hero'>
        <div className='hero-text'>
          <h1 className='title hero-text__h1'>I AM DANIEL</h1>
          <h2 className='title hero-text__h2'>Frontend Developer</h2>
          <p className='paragraph hero-text__p'>
            Crafting visually appealing and user-friendly websites. Transforming
            ideas into seamless and responsive digital experiences is my
            expertise.
          </p>
          <div className='hero-text__socials'>
            <a
              className='hero-socials__a'
              href='mailto:d.cikora98@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faEnvelope} className='hero-socials' />
            </a>
            <a
              className='hero-socials__a'
              href='https://www.linkedin.com/in/daniel-cikora-a7344a253'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedin} className='hero-socials' />
            </a>
            <a
              className='hero-socials__a'
              href='https://github.com/DanielCikora'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faGithub} className='hero-socials' />
            </a>
          </div>
          <a
            href={CVFile}
            className='hero-text__download-btn'
            download='Daniel Cikora FE Dev CV.pdf'
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
