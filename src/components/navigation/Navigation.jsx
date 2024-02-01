import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../micro-components/Logo";
import ArrowUp from "../arrow-up/ArrowUp";
export default function Navigation() {
  const [isFixed, setIsFixed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
      setIsScrolled(offset > 40);
      setIsFixed(offset > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const linksArray = [
    { key: 1, title: "HOME", url: "/" },
    { key: 2, title: "PROJECTS", url: "/Projects" },
    { key: 3, title: "SKILLS", url: "/Skills" },
    { key: 4, title: "ABOUT", url: "/About" },
    { key: 5, title: "CONTACT", url: "/Contact" },
  ];
  return (
    <header>
      <nav
        className={`navigation${isFixed ? " navigation--fixed" : ""}${
          isOpen ? " navigation--opened" : ""
        }`}
      >
        {isScrolled && <ArrowUp />}
        <div className='wrapper navigation__wrapper'>
          <Logo />
          <ul className='navigation__ul'>
            {linksArray.map((link) => (
              <li key={link.key}>
                <Link
                  to={link.url}
                  className='main-link navigation__link'
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
