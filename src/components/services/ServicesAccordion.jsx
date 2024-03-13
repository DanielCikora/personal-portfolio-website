export default function ServicesAccordion({
  title,
  text,
  index,
  openIndex,
  setOpenIndex,
}) {
  const isOpenAcc = index === openIndex;
  const handleOpenAcc = () => {
    setOpenIndex(isOpenAcc ? null : index);
  };
  return (
    <div className={`accordion${isOpenAcc ? " accordion--open" : ""}`}>
      <button className="accordion-btn" onClick={handleOpenAcc}>
        <h2 className='title accordion-btn__title'>{title}</h2>
      </button>
      <span className='accordion-details'>
        <p className='paragraph accordion-details__p'>{text}</p>
      </span>
    </div>
  );
}
