import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BGVideo from "../../assets/videos/blob.mp4";
import CVFile from "../../assets/files/Daniel Cikora FE Dev CV.pdf";
import { useTypewriter } from "react-simple-typewriter";
import Socials from "../micro-components/Socials";
export default function Hero() {
  const [typewriterText] = useTypewriter({
    words: ["DANIEL"],
    loop: 1,
    typeSpeed: 300,
    delaySpeed: 1000,
  });
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  useEffect(() => {
    const hero = heroRef.current;
    const services = servicesRef.current;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(hero, {
      scale: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.from(services, {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: services,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
  }, []);
  return (
    <section className='hero' ref={heroRef}>
      <div className='hero-video__wrapper'>
        <video className='hero-video' autoPlay muted loop playsInline>
          <source src={BGVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='wrapper-xl wrapper--hero'>
        <div className='hero-text'>
          <h1 className='title hero-text__h1'>I AM {typewriterText}</h1>
          <h2 className='title hero-text__h2'>Frontend Developer</h2>
          <p className='paragraph hero-text__p'>
            Creating visually stunning, user-friendly websites that deliver
            seamless user experiences.
          </p>
          <Socials className='hero-socials' />
          <a
            href={CVFile}
            className='hero-text__download-btn'
            download='Daniel Cikora FE Dev CV.pdf'
            aria-label='Resume'
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
