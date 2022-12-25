import React from "react";

const NavBar = ({ totalCounts }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Brand ===
        <span className="badge-pill badge-secondary">{totalCounts}</span>
      </a>
    </nav>
  );
};

export default NavBar;
