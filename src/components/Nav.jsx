import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

function Nav() {
  return (
    <WRAP className=" text-white text-lg md:text-xl text-center relative hidden sm:block">
      {/* Navigation */}
      <div className="flex justify-center relative pt-20">
        <div className="flex justify-between w-4/5 ">
          <NavLink className="navtag mt-20" to="/work">
            Web Development
          </NavLink>
          <NavLink className="navtag  h-7 mr-5" to="/about">
            About Me
          </NavLink>
          <NavLink className="navtag  h-7" to="/contact">
            Let's Connect
          </NavLink>

          <NavLink className="navtag mt-20" to="/Photography">
            Photography
          </NavLink>
        </div>
      </div>
    </WRAP>
  );
}
export default Nav;

const WRAP = styled.div`
  .navtag {
    letter-spacing: 1px;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 2.5);
    display: flex;
    color: var(--lighter);
    position: relative;

    &:hover {
      color: var(--light);
      scale: 1.1;
    }

    &:after {
      content: "";
      position: absolute;
      right: 0;
      height: 2px;
      bottom: -3px;
      width: 0%;
      background-color: var(--undermenu);
      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }

    &.active {
      color: var(--light);
      scale: 1.1;

      &:after {
        background-color: var(--undermenu);
        width: 100%;
      }
    }
  }
`;
