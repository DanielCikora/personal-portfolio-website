import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../micro-components/Logo";
import "../scss/styles.scss";
export default function NavigationTop() {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const linksArray = [
    { id: 1, title: "PROJECTS", url: "/Projects" },
    { id: 2, title: "SERVICES", url: "/Services" },
    { id: 3, title: "RESUME", url: "/Resume" },
    { id: 4, title: "ABOUT", url: "/About" },
    { id: 5, title: "CONTACT", url: "/Contact" },
  ];
  return (
    <nav className={`navigation-top${isFixed ? " navigation-top--fixed" : ""}`}>
      <div className='wrapper navigation-top__wrapper'>
        <Logo />
        <ul className='navigation-top__ul'>
          {linksArray.map((link) => (
            <li key={link.id}>
              <Link to={link.url} className='main-link navigation-top__link'>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={`hamburger${isOpen ? " hamburger--open" : ""}`}
          onClick={handleOpen}
        >
          <span className='hamburger-line hamburger-line--1'></span>
          <span className='hamburger-line hamburger-line--2'></span>
          <span className='hamburger-line hamburger-line--3'></span>
        </button>
      </div>
    </nav>
  );
}
