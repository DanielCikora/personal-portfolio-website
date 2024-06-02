import { useState } from "react";
export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <form className='form'>
      <label className='form-label' htmlFor='email-input'>
        Your e-mail address:
      </label>
      <input
        id='email-input'
        name='email-input'
        type='email'
        value={email}
        placeholder='Your email'
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label className='form-label' htmlFor='message-area'>
        Your message:
      </label>
      <textarea
        rows={10}
        cols={40}
        id='message-area'
        name='message-area'
        value={message}
        placeholder='Your message'
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <input id='send-input' type='submit' value='Send message'></input>
    </form>
  );
}
