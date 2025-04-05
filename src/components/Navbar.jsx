import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-2 sticky top-0 h-15 py-4 text-lg">
      <div className="container mx-auto flex justify-between">
        <div className="font-bold">
          <h1>
            <NavLink to="/">MOFI</NavLink>
          </h1>
        </div>

        <ul className="flex">
          <li className="mr-4 hover:border-b-2 hover:text-green-200 transition-all duration-100 hover:font-bold">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mr-4 hover:border-b-2 hover:text-green-200 transition-all duration-100 hover:font-bold">
            <NavLink to="/compare">Compare</NavLink>
          </li>
          <li className="hover:border-b-2 hover:text-green-200 transition-all duration-100 hover:font-bold">
            <NavLink to="/">Account</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
