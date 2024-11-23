import FooterLinks from "./FooterLinks";
import Logo from "../micro-components/Logo";
import Socials from "../micro-components/Socials";
export default function Footer() {
  const fullYearDate = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrapper wrapper--footer">
        <div className="footer-content">
          <div className="footer-logo">
            <Logo />
          </div>
          <div className="footer-text">
            <FooterLinks />
            <h3 className="footer-logo__year">
              Copyright © {fullYearDate} Daniel Cikora
            </h3>
          </div>
          <div className="footer-logo_socials">
            <Socials className="footer-socials" />
            <h3 className="footer-logo__year footer-logo__year--md">
              Copyright © {fullYearDate} Daniel Cikora
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
