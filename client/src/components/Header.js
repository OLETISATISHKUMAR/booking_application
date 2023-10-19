import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/TravelLogo.jpg";

function Header() {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Component Logo" className="w-20 h-20" />
          <span className="text-black text-2xl font-semibold ml-2">
            Prakruthi Tours and Travels
          </span>
        </Link>

        <nav className="space-x-4">
          <Link to="/" className="text-black text-lg">Home</Link>
          <Link to="/about" className="text-black text-lg">About</Link>
          <Link to="/tour" className="text-black text-lg">Tour</Link>
        </nav>

        <div className="flex space-x-4 justify-start">
          <Link to="/login" className="text-black text-lg">Login</Link>
          <Link to="/register" className="text-black text-lg">Register</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
