import { NavLink } from "react-router-dom";
import "./style.scss";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <NavLink to="/" className="logo">
          <img src={logo} alt="Finsweet" />
        </NavLink>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact" className="button">
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
