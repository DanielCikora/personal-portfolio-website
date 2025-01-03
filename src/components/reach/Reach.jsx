import { Link } from "react-router-dom";
export default function Reach() {
  return (
    <section className='reach'>
      <div className='wrapper'>
        <div className='reach-content'>
          <h2 className='mainTitle titleLine reach__text-title'>REACH OUT</h2>
          <p className='paragraph reach__text-paragraph'>
            I'd love to connect and hear from you! Whether you have a creative
            idea, feedback, or just want to start a conversation, I'm here.
            Let's build something meaningful or simply exchange thoughts—don't
            hold back, I'm all ears!
          </p>
          <Link className='cta reach__cta-link' to='/Contact'>
            Reach Out
          </Link>
        </div>
      </div>
    </section>
  );
}
