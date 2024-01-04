import BGImage from "../../assets/images/background.jpg";
export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero-image__wrapper'>
        <img className='hero-image' src={BGImage} alt='hero' />
      </div>
      <div className='wrapper wrapper--hero'>
        <div className='hero-text'>
          <h1 className='hero-text__h1'>I AM DANIEL</h1>
          <p className='hero-text__h2'>
            Frontend Developer, Music Producer and Gamer.
          </p>
        </div>
      </div>
    </section>
  );
}
