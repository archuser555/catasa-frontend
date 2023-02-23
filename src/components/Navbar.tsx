import '../Navbar.css';
import { FaHome, FaGithub } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item navbar__item--icon"><a href="#"><FaHome /><span>Home</span></a></li>
        <li className="navbar__item navbar__item--icon"><a href="#"><FaGithub /><span>Github</span></a></li>
        <li className="navbar__item navbar__item--login"><a href="#">login</a></li>
        <li className="navbar__item navbar__item--signup"><a href="#">signup</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;