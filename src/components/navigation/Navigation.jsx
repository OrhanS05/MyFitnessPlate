import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Navigation.css";

function Navigation() {
  const { isAuth, username } = useContext(AuthContext);

  return (
    <nav>
      <div className="nav-container">
        <h4 className="logo">MyFitnessPlate</h4>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "default-link")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className={({ isActive }) => (isActive ? "active-link" : "default-link")}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active-link" : "default-link")}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/recepten" className={({ isActive }) => (isActive ? "active-link" : "default-link")}>
              Recepten
            </NavLink>
          </li>
          <li>
            <NavLink to="/dagboek" className={({ isActive }) => (isActive ? "active-link" : "default-link")}>
              Dagboek
            </NavLink>
          </li>

          {!isAuth && (
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link" : "default-link")}>
                Log in
              </NavLink>
            </li>
          )}

          {isAuth && (
            <li>
              <NavLink to="/profile" className={({ isActive }) => (isActive ? "active-link" : "default-link")}>
                {username}
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
