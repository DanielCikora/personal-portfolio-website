import "../scss/styles.scss";
export default function NavigationTop() {
  return (
    <nav className="navigation-top">
      <div className='wrapper navigation-top__wrapper'>
        <a className="navigation-top__logo" href="#">DANIEL CIKORA</a>
        <ul className="navigation-top__ul">
          <li className="navigation-top__li">
            <a className="main-link navigation-top__a" href='#'>COLLECTIONS</a>
          </li>
          <li>
            <a className="main-link navigation-top__a" href='#'>EXPLORE</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
