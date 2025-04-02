import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-2 sticky top-0">
      <div className="container mx-auto flex">
        <div>
          <h1>
            <NavLink to="/">MOFI</NavLink>
          </h1>
        </div>
        <div className="flex justify-between">
          <ul>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/compare">Compare</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
