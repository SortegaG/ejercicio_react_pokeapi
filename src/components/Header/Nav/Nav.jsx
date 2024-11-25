import React from "react";
import { Link } from "react-router-dom";
import '../../../styles/components/_Nav.scss'

const Nav = () => {
  return (
    <nav className="navbar">
      <ul>
      <li className="nav-links">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-links">
          <Link to="/new">Crear pokemon</Link>
        </li>
        <li className="nav-links ">
          <Link to="/pokemon/:id">Detalles</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
