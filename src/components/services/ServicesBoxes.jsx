export default function ServicesAccordion({
  title,
  text,
  index,
  icon,
  openIndex,
  setOpenIndex,
}) {
  const isOpenAcc = index === openIndex;
  const handleToggle = () => {
    setOpenIndex(isOpenAcc ? null : index);
  };
  return (
    <button
      className={`box-btn ${isOpenAcc && " box-btn--expanded"}`}
      onClick={handleToggle}
    >
      <p className='box-details__icon'>{icon}</p>
      <h2 className='box-btn__title'>{title}</h2>
      <p className='box-details__p'>{text}</p>
    </button>
  );
}
