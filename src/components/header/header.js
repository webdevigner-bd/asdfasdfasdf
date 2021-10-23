import Link from 'next/link';
import Nav from './nav';

function Header() {
  return (
    <header className="site-header" id="site-header">
      {/* Logo */}
      <div className="logo" id="logo">
        <h1>
          <Link href="/">
            <a>Logo</a>
          </Link>
        </h1>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
