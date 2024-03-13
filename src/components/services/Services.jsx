import ServicesAccordion from "./ServicesAccordion";
import TerminalImage from "../../assets/images/terminal.png";
import { useState } from "react";
export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
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
    <section className='services'>
      <div className='wrapper wrapper--services'>
        <div className='services-text'>
          <div className='services-text__image'>
            <h2 className='services-text__h2 services-text__h2--double'>
              WHAT I OFFER
            </h2>
            <h2 className='services-text__h2'>WHAT I OFFER</h2>
            <img
              className='services-image'
              src={TerminalImage}
              alt='terminal'
            />
          </div>
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
