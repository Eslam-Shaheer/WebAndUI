import React, { useContext } from "react";

import { Nav } from "./styles";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

const Navbar = () => {
  const { handleToggleTheme } = useContext(ThemeContext);

  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Login",
      href: "/login",
    },
  ];
  return (
    <Nav className="nav navbar navbar-expand-lg ">
      <div className="container-fluid  nav__container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler nav__container__button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {links.map((item) => (
              <li className="nav-item" key={item.title}>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link font-bold ${isActive && `active`}`
                  }
                  to={item.href}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}

            <li
              className="nav-item"
              style={{ cursor: "pointer" }}
              onClick={handleToggleTheme}
            >
              <a>Toggle theme</a>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
