import React from "react";
import menuImg from "../assets/menu-icon.svg";
// import Category from "../components/Category";
// import { Link, NavLink } from "react-router-dom";
// import { FaBars, FaCartPlus, FaUser } from "react-icons/fa";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-center">
          <div className="first-nav">
            <div className="navbar-header">
              <a href="/" className="logo">
                <strong>
                  ben<span>kih</span>{" "}
                </strong>
              </a>
            
            </div>
            <ul className="navbar-links">
              <li className="navbar-item">
                <a className="navbar-single-link" href="/">
                  task 1
                </a>
              </li>
              <li className="navbar-item">
                <a className="navbar-single-link" href="/">
                  task 2
                </a>
              </li>
            </ul>
            <button
                className="navbar-btn"
                type="button"
                onClick={props.clicked}
              >
                <img src={menuImg} alt="menu-icon" />
              </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
