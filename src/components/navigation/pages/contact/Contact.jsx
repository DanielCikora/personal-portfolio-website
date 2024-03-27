import ContactForm from "./ContactForm";
export default function Contact() {
  return (
    <section className='contact'>
      <div className='wrapper wrapper--contact'>
        <div className='contact-text__container'>
          <h2 className='contact-text__h2'>CONTACT</h2>
          <p className='contact-text__p'>
            You may <b>contact me</b> on <b>social media</b> using the links
            provided <b>below</b>, or simply write a message using the{" "}
            <b>form</b>. Any questions, recommendations or even just to say Hi,
            <b>
              <u>You</u>
            </b>{" "}
            are more than welcome.
          </p>
        </div>
        <div className='form-container'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
