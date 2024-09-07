export default function ServicesAccordion({
  title,
  text,
  index,
  openIndex,
  setOpenIndex,
}) {
  const isOpenAcc = index === openIndex;
  const handleToggle = () => {
    setOpenIndex(isOpenAcc ? null : index);
  };
  return (
    <div className={`accordion${isOpenAcc ? " accordion--open" : ""}`}>
      <button className="accordion-btn" onClick={handleToggle}>
        <h2 className="accordion-btn__title">{title}</h2>
      </button>
      <div
        className="accordion-details"
        style={{ maxHeight: isOpenAcc ? "300px" : "0" }}
      >
        <p className="accordion-details__p">{text}</p>
      </div>
    </div>
  );
}
