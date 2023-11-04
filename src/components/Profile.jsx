import React from "react";
import left1 from "../images/setup/arr-left-1.png";
import left2 from "../images/setup/arr-left-2.png";
import right1 from "../images/setup/arr-right-1.png";
import right2 from "../images/setup/arr-right-2.png";
import fingers from "../images/setup/me-fingers.png";
import shooting from "../images/setup/me-shoooting.png";
import camera from "../images/setup/me-with-camera.png";
import comp from "../images/setup/me-with-comp.png";
import screens from "../images/setup/screens.png";
import webBuild from "../images/setup/web-build.png";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import HomeNav from "./BurgerNav";

function Profile() {
  return (
    <WRAP className=" text-white text-xl text-center relative pt-5">
      {/* Navigation */}

      {/* images setup */}

      {/* computer, text, camera */}
      <div className="flex pt-10 w-full">
        {/* computer div  */}
        <img
          className="w-1/3 pl-4 md:pl-10 md:pr-5 pt-10 object-contain"
          src={comp}
          alt=""
        />

        {/* text between computer and camera images */}
        <div className=" w-1/3  -mt-20 ">
          {/* Hi iam levani */}
          <div className="pt-32 text-base px-5 flex flex-col justify-evenly h-full">
            <div className="flex-col md:flex-row flex justify-center gabriola  gap-3 -mt-20 pb-5 items-center ">
              <h4 className=" text-2xl md:text-4xl ">Hi I'm </h4>
              <h5 className=" text-3xl md:text-5xl">Levani</h5>
              <h4 className="text-xl gabriola md:hidden">
                Web Deeveloper & Photographer
              </h4>
            </div>
            <h4 className=" leading-7 hidden md:block">
              I'm both a
              <a className="text-blue-600 px-2" href="/work">
                web developer
              </a>
              and a
              <a className="text-red-600 pl-2" href="http://artoflevanidze.com">
                photographer
              </a>
              , I specialize in creating idea-catching photos and custom web
              solutions to meet your specific needs to improve your business.
            </h4>
          </div>
        </div>

        {/* camera image div  */}
        <img
          className="pr-2 md:pr-10 w-1/3 pt-10 object-contain"
          src={camera}
          alt=""
        />
      </div>

      {/* arrow, finger, arrow */}
      <div className="flex justify-evenly pt-10">
        <img className="w-1/12  object-contain" src={left1} alt="" />
        <img className="w-1/2 -mt-10  object-contain" src={fingers} alt="" />
        <img className="w-1/12  object-contain" src={right1} alt="" />
      </div>
      {/* web, space, shoooting */}
      <div className="flex justify-between px-5 pt-10 ">
        <img className=" w-1/4 object-contain" src={webBuild} alt="" />
        <img className="w-1/4 object-contain 0" src={shooting} alt="" />
      </div>
      {/* arrow, screens, arrow */}
      <div className="flex justify-evenly h-full py-20  ">
        <img className="w-1/6  object-contain  -mt-10" src={left2} alt="" />
        <img className="w-1/3 object-contain -mb-40 " src={screens} alt="" />
        <img className="w-1/6  object-contain   -mt-10 " src={right2} alt="" />
      </div>
    </WRAP>
  );
}

export default Profile;

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
