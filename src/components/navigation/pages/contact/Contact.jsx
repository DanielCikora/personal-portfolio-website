import ContactForm from "./ContactForm";
export default function Contact() {
  return (
    <section className='contact'>
      <div className='wrapper wrapper--contact'>
        <div className='contact-text__container'>
          <h2 className='contact-text__h2'>CONTACT</h2>
          <p></p>
        </div>
        <div className='form-container'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
