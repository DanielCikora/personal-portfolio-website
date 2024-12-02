import ContactForm from "./ContactForm";
export default function Contact() {
  return (
    <section className='contact'>
      <div className='wrapper wrapper--contact'>
        <div className='contact-text__container'>
          <h2 className='mainTitle titleLine'>CONTACT</h2>
          <p className='paragraph contact-text__p'>
            You may contact me on social media using the links provided below,
            or simply write a message using the form. Feel free to reach out
            with any questions, recommendations, or even just to say hi. You are
            more than welcome!
          </p>
        </div>
        <div className='form-container'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
