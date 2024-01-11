import BGVideo from "../../assets/videos/pexels_videos_1839364 (1080p).mp4";
import CVFile from "../../assets/files/Daniel Cikora FE Dev CV ENG.pdf";
export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero-video__wrapper'>
        <video autoPlay muted loop className='hero-video'>
          <source src={BGVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='wrapper wrapper--hero'>
        <div className='hero-text'>
          <h1 className='title hero-text__h1'>I AM DANIEL</h1>
          <h2 className='title hero-text__h2'>Frontend Developer</h2>
          <p className='paragraph hero-text__p'>
            Crafting visually
            appealing and user-friendly websites. Transforming ideas into
            seamless and responsive digital experiences is my expertise.
          </p>
          <a
            href={CVFile}
            className='hero-text__download-btn'
            download='Daniel Cikora FE Dev CV.pdf'
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
