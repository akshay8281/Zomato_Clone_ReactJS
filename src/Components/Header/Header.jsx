import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* NavBar */}
      <nav>
        <header>
          <div className="container">
            <div className="navBar flex ali jc-sb">
              <div className="nav-left flex ali">
                <div>
                  <Link to="#">
                    <img
                      className="logo"
                      src="assets/Asset_0.avif"
                      alt="Logo"
                    />
                  </Link>
                </div>
                <div className="input-bar flex ali">
                  <div className="select-wrapper po-rel">
                    <i className="location fa-solid fa-location-dot"></i>
                    <select className="selection" name="Select your City" id="">
                      <option value="Dholera">Dholera</option>
                      <option value="Rajkot">Rajkot</option>
                      <option value="Surat">Surat</option>
                      <option value="Baroda">Baroda</option>
                    </select>
                  </div>
                </div>
                <div>
                  <i className="search fa-solid fa-magnifying-glass"></i>
                  <input
                    type="text"
                    className="searchBar"
                    placeholder="Search for restaurant, cuisine or a dish"
                  />
                </div>
              </div>
              <div className="nav-right login-btn flex ali">
                <div>
                  <Link className="login-button" to="/login">
                    Log in
                  </Link>
                </div>
                <div>
                  <Link className="login-button" to="/signup">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </nav>

      {/* Sub NavBar */}

      <section className="sub-nav-header">
        <div className="container">
          <div className="sub-nav-slots flex">
            <div className="sub-nav-slot-1 flex ali">
              <div className="sub-nav-a-1">
                <Link className="" to="/" target="_self">
                  <img
                    className="sub-nav-a-img"
                    src="/assets/asset 1.avif"
                    alt=""
                  />
                </Link>
              </div>

              <NavLink
                className={({ isActive }) => `sub-nav-a-text
                  ${isActive ? "active-tab" : "inactive-tab"}
                  `}
                target="_self"
                to="/"
              >
                Delivery
              </NavLink>
            </div>
            <div className="sub-nav-slot-2 flex ali">
              <div className="sub-nav-a-2">
                <Link className="" to="/dinning" target="_self">
                  <img
                    className="sub-nav-a-img"
                    src="/assets/asset 2.avif"
                    alt=""
                  />
                </Link>
              </div>

              <NavLink
                to="/dinning"
                className={({ isActive }) =>
                  ` ${isActive ? "active-tab" : "inactive-tab"} sub-nav-a-text`
                }
                target="_self"
              >
                Dinning
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
