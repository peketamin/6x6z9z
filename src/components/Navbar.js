import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-20 bg-orange-200 text-neutral-800">
      <ul className="flex items-center justify-start h-full px-4 container max-w-3xl mx-auto">
        <Link to="/">
          <li className="mr-4">Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        {/* <Link to="/workcontainer">
          <li>Work Container</li>
        </Link> */}
      </ul>
    </nav>
  );
}
