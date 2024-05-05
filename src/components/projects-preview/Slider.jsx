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
import "swiper/css";
export default function Slider() {
  return (
    <>
      <div className='projects-btn__wrapper'>
        <button className='projects-preview-btn projects-preview-btn--prev'>
          <FontAwesomeIcon icon={faCircleArrowLeft} />
        </button>
        <button className='projects-preview-btn projects-preview-btn--next'>
          <FontAwesomeIcon icon={faCircleArrowRight} />
        </button>
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation={{
          prevEl: ".projects-preview-btn--prev",
          nextEl: ".projects-preview-btn--next",
        }}
      >
        <SwiperSlide>
          <img className='slider-image' src={MountainImage} alt='mountain' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='slider-image' src={DesertImage} alt='desert' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='slider-image' src={ForestImage} alt='forest' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
