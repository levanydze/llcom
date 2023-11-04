import React from "react";
import Nav from "./Nav";
import BurgerNav from "./BurgerNav";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="relative">
      <Link
        to="/"
        className="absolute text-white gabriola md:left-20 left-10 top-5 md:top-10 text-2xl md:text-6xl z-10"
      >
        Leo
      </Link>

      <Nav></Nav>
      <BurgerNav />
    </div>
  );
}

export default Header;
