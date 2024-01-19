export default function Services() {
  const servicesListItems = [
    { key: 1, listText: "Custom Website Development" },
    { key: 2, listText: "User Experience (UX) Design" },
    { key: 3, listText: "Responsive Web Design" },
    { key: 4, listText: "Social Media Integration" },
    { key: 5, listText: "Consultation Services" },
    { key: 6, listText: "Website Optimization" },
    { key: 7, listText: "Content Strategy" },
  ];
  return (
    <section className='services'>
      <div className='wrapper wrapper--services'>
        <div className='services-text'>
          <div className='services-text__slider'>
            <div className='services-text__icon'>
              <h2 className='services-text__h2'>WHAT I OFFER</h2>
            </div>
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
