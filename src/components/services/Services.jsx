import TerminalImage from "../../assets/images/terminal.png";
export default function Services() {
  const servicesListItems = [
    { key: 1, listText: "Custom Website Development" },
    { key: 2, listText: "Responsive Web Development" },
    { key: 3, listText: "Social Media Integration" },
    { key: 4, listText: "Consultation Services" },
    { key: 5, listText: "Website Optimization" },
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
          <ul className='services-text__ul'>
            {servicesListItems.map((servicesListItem) => (
              <li key={servicesListItem.key} className='services-text__li'>
                {servicesListItem.listText}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
