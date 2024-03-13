import { useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ArrowUp() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScrollDown = () => {
    const screenHeight = window.innerHeight;
    const newPosition = scrollPosition + screenHeight;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollPosition(newPosition);
  };
  return (
    <button className='down-arrow' onClick={handleScrollDown}>
      <i className='scroll-icon'>
        <FontAwesomeIcon icon={faArrowUp} className='scroll-icon' />
      </i>
    </button>
  );
}
