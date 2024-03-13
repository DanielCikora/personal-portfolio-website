import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MountainImage from "../../assets/images/mountain.jpg";
import DesertImage from "../../assets/images/desert.jpg";
import ForestImage from "../../assets/images/forest.jpg";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default function ProjectsPreview() {
  return (
    <section className='projects-preview'>
      <div className='wrapper wrapper--projects-preview'>
        <div className='projects-preview-text'>
          <h2 className='title projects-preview-text__title'>
            PREVIEW OF MY PROJECTS
          </h2>
          <p className='paragraph projects-preview-text__paragraph'>
            These are the ...
          </p>
          <Link className='cta projects-preview-text__btn' to='/Projects'>
            Learn more
          </Link>
        </div>
        <div className='projects-preview-slider__wrapper'>
          <button className='projects-preview-button projects-preview-button--prev'>
            <FontAwesomeIcon icon={faCircleArrowLeft} />
          </button>
          <button className='projects-preview-button projects-preview-button--next'>
            <FontAwesomeIcon icon={faCircleArrowRight} />
          </button>
          <Swiper
            className='projects-swiper'
            navigation={{
              nextEl: ".projects-preview-button--next",
              prevEl: ".projects-preview-button--prev",
            }}
            modules={[Navigation]}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img className='swiper-slide__image' src={MountainImage} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='swiper-slide__image' src={DesertImage} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='swiper-slide__image' src={ForestImage} alt='' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
