import { useEffect, useState, useRef } from "react";
import ServicesBoxes from "./ServicesBoxes";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCode,
  faComment,
  faLaptopCode,
  faLightbulb,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
  const servicesRef = useRef(null);
  const boxesItems = [
    {
      key: 1,
      boxTitle: "Custom Website Development",
      boxParagraph:
        "Tailor-made digital solutions that align with your brand identity and business objectives for a standout online presence.",
      boxIcon: <FontAwesomeIcon icon={faCode} />,
    },
    {
      key: 2,
      boxTitle: "Responsive Web Development",
      boxParagraph:
        "Ensure optimal user experience on any device with fluid and adaptive design techniques.",
      boxIcon: <FontAwesomeIcon icon={faLaptopCode} />,
    },
    {
      key: 3,
      boxTitle: "Social Media Integration",
      boxParagraph:
        "Seamlessly integrate social platforms to enhance audience engagement and expand online reach.",
      boxIcon: <FontAwesomeIcon icon={faShareAlt} />,
    },
    {
      key: 4,
      boxTitle: "Consultation Services",
      boxParagraph:
        "Gain valuable insights and tailored strategies to elevate your online presence and achieve your business goals.",
      boxIcon: <FontAwesomeIcon icon={faComment} />,
    },
    {
      key: 5,
      boxTitle: "Website Optimization",
      boxParagraph:
        "Enhance website performance and user experience through strategic optimizations, ensuring maximum impact and visibility.",
      boxIcon: <FontAwesomeIcon icon={faChartLine} />,
    },
    {
      key: 6,
      boxTitle: "Creative Frontend Solutions",
      boxParagraph:
        "Showcase modern animations and interactive features to captivate users and leave a lasting impression.",
      boxIcon: <FontAwesomeIcon icon={faLightbulb} />,
    },
  ];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animateHeading = () => {
      gsap.fromTo(
        ".services-content__title",
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-content__title",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    };
    const animateAccordionItems = () => {
      gsap.fromTo(
        ".services-content__boxes > *",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8, // Increased duration for smoother transition
          ease: "power3.out", // Slightly smoother easing
          stagger: 0.2, // Reduced stagger time for more fluid animation
          scrollTrigger: {
            trigger: ".services-content__boxes",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    };
    animateHeading();
    animateAccordionItems();
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section className='services' ref={servicesRef}>
      <div className='wrapper-xl wrapper--services'>
        <div className='services-content'>
          <h2 className='mainTitle titleLine services-content__title'>
            WHAT I OFFER
          </h2>
          <div className='services-content__boxes'>
            {boxesItems.map((boxItem, index) => (
              <ServicesBoxes
                key={boxItem.key}
                index={index}
                title={boxItem.boxTitle}
                text={boxItem.boxParagraph}
                icon={boxItem.boxIcon}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
