import { Link } from "react-router-dom";
import '../scss/styles.scss';
import LogoImage from "../../assets/images/logo.png";
export default function Logo() {
  return (
    <Link to='/' className='logo'>
      <img className="logo-image" src={LogoImage} alt='logo' />
    </Link>
  );
}
