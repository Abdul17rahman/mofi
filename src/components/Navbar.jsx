import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-2 sticky top-0 h-15 py-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <h1>
            <NavLink to="/">MOFI</NavLink>
          </h1>
        </div>

        <ul className="flex">
          <li className="mr-4 hover:border-b-2 hover:text-green-200 transition-all duration-100">
            <NavLink to="/">About</NavLink>
          </li>
          <li className="mr-4 hover:border-b-2 hover:text-green-200 transition-all duration-100">
            <NavLink to="/compare">Compare</NavLink>
          </li>
          <li className="hover:border-b-2 hover:text-green-200 transition-all duration-100">
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
