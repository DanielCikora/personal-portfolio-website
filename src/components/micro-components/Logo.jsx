import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <Link to='/' className='logo'>
      <img className='logo-image' alt='logo' />
    </Link>
  );
}
