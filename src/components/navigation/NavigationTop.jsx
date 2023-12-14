import "../scss/styles.scss";
export default function NavigationTop() {
  return (
    <nav className="navigation-top">
      <div className='wrapper navigation-top__wrapper'>
        <a className="main-link navigation-top__logo" href="#">MAIN LOGO</a>
        <ul className="navigation-top__ul">
          <li className="navigation-top__li">
            <a className="navigation-top__a" href='#'>COLLECTIONS</a>
          </li>
          <li>
            <a className="navigation-top__a" href='#'>EXPLORE</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
