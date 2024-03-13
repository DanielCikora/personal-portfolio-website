export default function Footer() {
  const fullYearDate = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='wrapper wrapper--footer'>
        <div className='footer-logo'>
          <h3 className='footer-logo__year'>
            Copyright © {fullYearDate} Daniel Cikora
          </h3>
        </div>
        <div className='footer-text'></div>
      </div>
    </footer>
  );
}
