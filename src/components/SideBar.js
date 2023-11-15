import { Link } from "react-router-dom";
import { FaComputer } from "react-icons/fa6";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo-box">
        <FaComputer className="logo" />
      </div>

      <nav className="nav-bar">
        <ul className="nav-bar-list">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about-us">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
