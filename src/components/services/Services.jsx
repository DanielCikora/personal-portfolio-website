import ServicesAccordion from "./ServicesAccordion";
import TerminalImage from "../../assets/images/terminal.png";
import { useState } from "react";
export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
  const accordionItems = [
    {
      key: 1,
      accordionTitle: "Custom Website Development",
      accordionParagraph: "bana1",
    },
    {
      key: 2,
      accordionTitle: "Responsive Web Development",
      accordionParagraph: "bana2",
    },
    {
      key: 3,
      accordionTitle: "Social Media Integration",
      accordionParagraph: "bana3",
    },
    {
      key: 4,
      accordionTitle: "Consultation Services",
      accordionParagraph: "bana4",
    },
    {
      key: 5,
      accordionTitle: "Website Optimization",
      accordionParagraph: "bana5",
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
