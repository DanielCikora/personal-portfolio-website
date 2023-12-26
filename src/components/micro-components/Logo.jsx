import { Link } from "react-router-dom";
import '../scss/styles.scss';
import LogoImage from "../../assets/images/2ad67463ce014634bfb4c09adca4e036.png";
export default function Logo() {
  return (
    <Link to='/' className='logo'>
      <img className="logo-image" src={LogoImage} alt='logo' />
    </Link>
  );
}
