import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navigation">
      <div className="container-s">
        <ul className="menu">
          <li>
            <NavLink to="/nos-valeurs">Nos Valeurs</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/nos-pass">Nos PASS</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/nos-activites">Nos Activites</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/inscription">M'inscrire</NavLink>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
}
