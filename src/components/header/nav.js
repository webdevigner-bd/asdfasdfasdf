import Link from 'next/link';

const Nav = () => {
  return (
    //   navigation bar
    <div className="nav-box" id="nav-box">
      <ul className="menus">
        <li className="menu">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="menu">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>

        <li className="menu">
          <Link href="/services">
            <a>Services</a>
          </Link>
        </li>

        <li className="menu">
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>

        <li className="menu">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
