import { Link } from "react-router-dom";
export default function FooterLinks() {
  const footerLinks = [
    { key: 1, href: "/Projects", text: "PROJECTS" },
    { key: 2, href: "/Contact", text: "CONTACT" },
    { key: 3, href: "/About", text: "ABOUT" },
  ];
  return (
    <ul className='footer-text__ul'>
      {footerLinks.map((footerLink) => (
        <li className='footer-list__item' key={footerLink.key}>
          <Link to={footerLink.href} className='main-link footer-list__link'>
            {footerLink.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
