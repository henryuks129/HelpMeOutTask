import { Link } from "react-router-dom";
import navbaricon from "../assets/navbaricon.svg";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-body sticky-top">
      <div className="container d-flex justify-content-between align-items-center pt-3 mb-2">
        <div className="">
          <Link to={"/"} className="d-flex gap-2 align-items-center text-decoration-none text-dark">
            <img src={navbaricon} alt="" />
            <h5 className="navbar-icon-header">HelpMeOut</h5>
          </Link>
        </div>
        <div className="d-flex gap-5 align-items-center justify-content-center">
          <h5 className="navbar-header-text">Features</h5>
          <h5 className="navbar-header-text">How it Works</h5>
        </div>
        <div>
          <Link to={'/Login'} className="text-decoration-none">
          <h5 className="navbar-route">Get Started</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}
