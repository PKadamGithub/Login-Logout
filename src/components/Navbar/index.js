import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import image0 from "../../Assets/images/wallet.png";
import { VscAccount } from "react-icons/vsc";
import "../../Assets/css/bootstrap.css";
import "../../Assets/css/responsive.css";
import "../../Assets/css/style.css.map";

const Navbar = () => {




  return (  
    
    <div>
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand" to="/">
              <span>Cryptop</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>

                  <li className="nav-item ">
                    <Link className="nav-link" to="/About ">
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/How ">
                      How
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/Wallet">
                      <span>Wallet</span> <img src={image0} />
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/Login">
                      {" "}
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/SignUp">
                      {" "}
                      Sign Up
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/Dashboard">
                      <span>
                        <VscAccount />{" "}
                      </span>
                      {/* VscAccount */}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* end header section */}
    </div>
  );
};

export default Navbar;
