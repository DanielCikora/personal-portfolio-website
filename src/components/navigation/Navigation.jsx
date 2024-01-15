import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../micro-components/Logo";
export default function Navigation() {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
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
    { id: 2, title: "CONTACT", url: "/Contact" },
    { id: 3, title: "ABOUT", url: "/About" },
  ];
  return (
    <header>
      <nav
        className={`navigation-top${isFixed ? " navigation-top--fixed" : ""}${
          isOpen ? " navigation-top--opened" : ""
        }`}
      >
        <div className='wrapper navigation-top__wrapper'>
          <Logo />
          <ul className='navigation-top__ul'>
            {linksArray.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.url}
                  className='main-link navigation-top__link'
                  onClick={handleClose}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className={`hamburger${isOpen ? " hamburger--opened" : ""}`}
            onClick={handleOpen}
          >
            <span className='hamburger-line hamburger-line--1'></span>
            <span className='hamburger-line hamburger-line--2'></span>
            <span className='hamburger-line hamburger-line--3'></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
