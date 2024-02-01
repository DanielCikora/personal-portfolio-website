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
    <button
      className={`accordion-btn${isOpenAcc ? " accordion-btn--open" : ""}`}
      onClick={handleOpenAcc}
    >
      <h2 className='title accordion-btn__title'>{title}</h2>
      {isOpenAcc && (
        <span className='accordion-details'>
          <p className='paragraph accordion-details__p'>{text}</p>
        </span>
      )}
    </button>
  );
}
