import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_vjl48eq",
        "template_1b9u45b",
        formData,
        "hyoPHizzbRYKwmVf9"
      )
      .then((response) => {
        console.log("Message sent successfully", response);
        toast.success("Message sent successfully!");
        setFormData({ from_name: "", from_email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending message", error);
        toast.error("Error sending message, please try again.");
      });
  };

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <div className='wrapper'>
        <div className='contact-form__content'>
          <h2 className='contact-form__h2'>Contact Me</h2>
          <input
            type='text'
            name='from_name'
            className='contact-input contact-form__input-name'
            placeholder='Your Name'
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='from_email'
            className='contact-input contact-form__input-email'
            placeholder='Your Email'
            value={formData.from_email}
            onChange={handleChange}
            required
          />
          <input
            type='tel'
            name='phone'
            className='contact-input contact-form__input-phone'
            placeholder='Your Phone Number'
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name='message'
            className='contact-input contact-form__input-message'
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            required
            rows={8}
          />
          <button className='contact-submit__btn' type='submit'>
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
