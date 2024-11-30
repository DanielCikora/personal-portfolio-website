import { useEffect, useState, useRef } from "react";
import ServicesAccordion from "./ServicesAccordion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
  const servicesRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animateHeading = () => {
      gsap.fromTo(
        ".services-text__h2",
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-text__h2",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    };
    const animateAccordionItems = () => {
      gsap.fromTo(
        ".services-text__accordion > *",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".services-text__accordion",
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
  const accordionItems = [
    {
      key: 1,
      accordionTitle: "Custom Website Development",
      accordionParagraph:
        "Tailor-made digital solutions that align with your brand identity and business objectives for a standout online presence.",
    },
    {
      key: 2,
      accordionTitle: "Responsive Web Development",
      accordionParagraph:
        "Ensure optimal user experience on any device with fluid and adaptive design techniques.",
    },
    {
      key: 3,
      accordionTitle: "Social Media Integration",
      accordionParagraph:
        "Seamlessly integrate social platforms to enhance audience engagement and expand online reach.",
    },
    {
      key: 4,
      accordionTitle: "Consultation Services",
      accordionParagraph:
        "Gain valuable insights and tailored strategies to elevate your online presence and achieve your business goals.",
    },
    {
      key: 5,
      accordionTitle: "Website Optimization",
      accordionParagraph:
        "Enhance website performance and user experience through strategic optimizations, ensuring maximum impact and visibility.",
    },
  ];
  return (
    <section className='services' ref={servicesRef}>
      <div className='wrapper-xl wrapper--services'>
        <div className='services-text'>
          <h2 className='mainTitle'>WHAT I OFFER</h2>
          <div className='services-text__accordion'>
            {accordionItems.map((accordionItem, index) => (
              <ServicesAccordion
                key={accordionItem.key}
                index={index}
                title={accordionItem.accordionTitle}
                text={accordionItem.accordionParagraph}
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
