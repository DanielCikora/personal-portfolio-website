import FooterLinks from "./FooterLinks";
import Logo from "../micro-components/Logo";
export default function Footer() {
  const fullYearDate = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='wrapper wrapper--footer'>
        <div className='footer-logo'>
          <Logo />
          <h3 className='footer-logo__year'>
            Copyright © {fullYearDate} Daniel Cikora
          </h3>
        </div>
        <div className='footer-text'>
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
}
