import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { styled } from "styled-components";

function BurgerNav() {
  const [menu, setMenu] = useState(false);
  const openMenu = () => {
    setMenu(true);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <WRAP className="w-full absolute top-0  block sm:hidden ">
      {/* clone nav */}
      <FaBars
        className="absolute top-3 right-4 cursor-pointer text-2xl z-10"
        onClick={openMenu}
      />

      {/* Navigation */}

      <div className=" text-stone-400">
        {menu ? (
          <div className=" flex-col flex absolute items-center bg-black gap-5 h-screen  w-full top-0 pt-4 z-10 text-2xl">
            <FaTimes
              className=" text-white right-4 top-3 z-30 absolute cursor-pointer"
              onClick={closeMenu}
            />
            <NavLink className=" gabriola text-5xl" to="/" onClick={closeMenu}>
              Leo
            </NavLink>
            <NavLink className="" to="/work" onClick={closeMenu}>
              Web Development
            </NavLink>
            <NavLink className="" to="/Photography" onClick={closeMenu}>
              Photography
            </NavLink>
            <NavLink className="" to="/about" onClick={closeMenu}>
              About Me
            </NavLink>
            <NavLink className="" to="/contact" onClick={closeMenu}>
              Let's Connect
            </NavLink>
          </div>
        ) : null}
      </div>
    </WRAP>
  );
}
export default BurgerNav;

const WRAP = styled.div`
  .active {
    color: white;
  }
`;
