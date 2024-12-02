import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
const ContactForm = () => {
  const emailRegex = process.env.REACT_APP_EMAIL_REGEX;
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};
    if (!formData.from_name) {
      formIsValid = false;
      newErrors.from_name = "Name is required";
    }
    if (!formData.from_email) {
      formIsValid = false;
      newErrors.from_email = "Email is required";
    } else if (!emailRegex.test(formData.from_email)) {
      formIsValid = false;
      newErrors.from_email = "Invalid email format";
    }
    if (!formData.phone) {
      formIsValid = false;
      newErrors.phone = "Phone number is required";
    }
    if (!formData.message) {
      formIsValid = false;
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return formIsValid;
  };
  const serviceKey = process.env.REACT_APP_SERVICE_KEY;
  const template = process.env.REACT_APP_TEMPLATE;
  const apiKey = process.env.REACT_APP_API_KEY;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .send(serviceKey, template, formData, apiKey)
        .then(() => {
          toast.success("Message sent successfully!");
          setFormData({
            from_name: "",
            from_email: "",
            phone: "",
            message: "",
          });
        })
        .catch(() => {
          toast.error("Error sending message, please try again.");
        });
    } else {
      toast.error("Please fill out all required fields correctly.");
    }
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
          />
          {errors.from_name && <p className='error'>{errors.from_name}</p>}
          <input
            type='email'
            name='from_email'
            className='contact-input contact-form__input-email'
            placeholder='Your Email'
            value={formData.from_email}
            onChange={handleChange}
          />
          {errors.from_email && <p className='error'>{errors.from_email}</p>}
          <input
            type='tel'
            name='phone'
            className='contact-input contact-form__input-phone'
            placeholder='Your Phone Number'
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className='error'>{errors.phone}</p>}
          <textarea
            name='message'
            className='contact-input contact-form__input-message'
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            rows={8}
          />
          {errors.message && <p className='error'>{errors.message}</p>}
          <button className='cta contact-submit__btn' type='submit'>
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
