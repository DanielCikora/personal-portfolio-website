import { Link } from "react-router-dom";
//import MainLogoImage from "../../assets/images/Daniel Logo White.png";
export default function Logo() {
  return (
    <Link to='/' className='logo'>
      <img className='logo-image' alt='logo' />
    </Link>
  );
}
