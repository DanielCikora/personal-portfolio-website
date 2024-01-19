import { useState } from "react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function DownArrow() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScrollDown = () => {
    const screenHeight = window.innerHeight;
    const newPosition = scrollPosition + screenHeight;
    window.scrollTo({
      top: newPosition,
      behavior: "smooth",
    });
    setScrollPosition(newPosition);
  };
  return (
    <button className='down-arrow' onClick={handleScrollDown}>
      <i className='scroll-icon'>
        <FontAwesomeIcon icon={faArrowDown} className='scroll-icon' />
      </i>
    </button>
  );
}
