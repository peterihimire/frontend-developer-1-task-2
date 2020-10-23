import React from "react";
import menuImg from "../assets/menu-icon.svg";

const Navbar = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-center">
          <div className="nav-container">
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
            <div className="navbar-btn" onClick={props.openMenu}>
              <img src={menuImg} alt="menu-icon" />
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
