import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BGVideo from "../../assets/videos/blob.mp4";
import CVFile from "../../assets/files/Daniel Cikora FE Dev CV ENG.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTypewriter } from "react-simple-typewriter";
export default function Hero() {
  const [typeWriterText] = useTypewriter({
    words: ["DANIEL"],
    loop: 1,
    typeSpeed: 300,
    delaySpeed: 1000,
  });

  // Create references for sections
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Animation for scaling and fading out the hero section
    gsap.to(heroRef.current, {
      scale: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top", // When the top of the hero section hits the top of the viewport
        end: "bottom top", // When the bottom of the hero section hits the top
        scrub: true, // Smooth animation as you scroll
      },
    });

    // Animation for revealing the services section
    gsap.from(servicesRef.current, {
      y: 100, // Start 100px below
      opacity: 0, // Start fully transparent
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top bottom", // When the top of the services section is at the bottom of the viewport
        end: "top top", // Until the services section is at the top of the viewport
        scrub: true, // Smooth animation
      },
    });
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-video__wrapper">
        <video className="hero-video" autoPlay muted loop>
          <source src={BGVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="wrapper wrapper--hero">
        <div className="hero-text">
          <h1 className="title hero-text__h1">I AM {typeWriterText}</h1>
          <h2 className="title hero-text__h2">Frontend Developer</h2>
          <p className="paragraph hero-text__p">
            Crafting visually appealing and user-friendly websites.
          </p>
          <div className="hero-text__socials">
            <a
              href="mailto:d.cikora98@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hero-socials__a"
            >
              <FontAwesomeIcon icon={faEnvelope} className="hero-socials" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-cikora-a7344a253"
              target="_blank"
              rel="noreferrer"
              className="hero-socials__a"
            >
              <FontAwesomeIcon icon={faLinkedin} className="hero-socials" />
            </a>
            <a
              href="https://github.com/DanielCikora"
              target="_blank"
              rel="noreferrer"
              className="hero-socials__a"
            >
              <FontAwesomeIcon icon={faGithub} className="hero-socials" />
            </a>
          </div>
          <a
            href={CVFile}
            className="hero-text__download-btn"
            download="Daniel Cikora FE Dev CV.pdf"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
