import React from "react";
import artofl from "../images/portfolioImagesData/artoflevanidze.com.png";
import rest from "../images/portfolioImagesData/chacha.com.png";
import portfolio from "../images/portfolioImagesData/Levanidze.com.png";

function Work() {
  return (
    <div>
      <div className=" text-white">
        <div>
          <h1 className="text-3xl w-full pt-20 text-center">Recent Projects</h1>
          <h2 className="w-full text-center p-5 pb-20">
            Here are sample of projects I have worked on.
          </h2>
        </div>

        {/* artoflevanidze web page START */}
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="w-full md:w-1/2 pt-10 px-10 ">
            <p className="text-xl"> Practice on own photography project</p>
            <div
              style={{ height: "1px" }}
              className=" w-5/6 bg-white mt-2 mb-4 "
            ></div>
            <div className="flex flex-wrap pt-3">
              <a
                href="http://artoflevanidze.com"
                className="gabriola text-4xl pr-4 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Art of Levanidze
              </a>
              <h2 className="text-3xl pb-10">Web page for my self</h2>
            </div>
            <p className="pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              praesentium voluptatem asperiores suscipit placeat accusamus vero
              cumque impedit quis nostrum tenetur provident nisi excepturi omnis
              saepe, illo laudantium dolorem sequi?
            </p>
            <a
              href="http://artoflevanidze.com"
              target="_blank"
              className="border-2 py-3 px-5 hover:bg-white hover:text-stone-950 transition"
              rel="noopener noreferrer"
            >
              Visit Web Page
            </a>
          </div>
          <div className="w-full md:w-1/2 px-10 flex h-auto flex-col justify-center">
            <a
              href="http://artoflevanidze.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-3xl border-2 border-stone-500"
                src={artofl}
                alt=""
              />
            </a>
          </div>
        </div>
        {/* artoflevanidze web page END */}

        <div className=" w-9/12  bg-white h-1  my-28 mx-auto"></div>

        {/* restaurant web page START*/}

        <div className="flex flex-col-reverse md:flex-row-reverse ">
          <div className="w-full md:w-1/2 pt-10 px-10 ">
            <p className="text-xl"> Practice on test restaurant project</p>
            <div
              style={{ height: "1px" }}
              className=" w-5/6 bg-white mt-2 mb-4 "
            ></div>
            <div className="flex flex-wrap pt-3">
              <a
                href="http://artoflevanidze.com"
                className="gabriola text-4xl pr-4 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ChaCha Restaurant
              </a>
              <h2 className="text-3xl pb-10">Restaurant web page</h2>
            </div>
            <p className="pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              praesentium voluptatem asperiores suscipit placeat accusamus vero
              cumque impedit quis nostrum tenetur provident nisi excepturi omnis
              saepe, illo laudantium dolorem sequi?
            </p>
            <a
              href="http://artoflevanidze.com"
              target="_blank"
              className="border-2 py-3 px-5 hover:bg-white hover:text-stone-950 transition"
              rel="noopener noreferrer"
            >
              Visit Web Page
            </a>
          </div>
          <div className="w-full md:w-1/2 px-10 flex h-auto flex-col justify-center">
            <a
              href="http://artoflevanidze.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-3xl border-2 border-stone-500"
                src={rest}
                alt=""
              />
            </a>
          </div>
        </div>
        {/* restaurant web page END*/}

        <div className=" w-9/12  bg-white h-1 my-28 mx-auto"></div>

        {/* 3rd web page START */}

        <div className="flex flex-col-reverse md:flex-row ">
          <div className="w-full md:w-1/2 pt-10 px-10 ">
            <p className="text-xl"> Practice on own portfolio project</p>
            <div
              style={{ height: "1px" }}
              className=" w-5/6 bg-white mt-2 mb-4 "
            ></div>
            <div className="flex flex-wrap pt-3">
              <a
                href="http://levanidze.com"
                className="gabriola text-4xl pr-4 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Levani Levanidze
              </a>
              <h2 className="text-3xl pb-10">Portfolio for my self</h2>
            </div>
            <p className="pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              praesentium voluptatem asperiores suscipit placeat accusamus vero
              cumque impedit quis nostrum tenetur provident nisi excepturi omnis
              saepe, illo laudantium dolorem sequi?
            </p>
            <a
              href="http://levanidze.com"
              target="_blank"
              className="border-2 py-3 px-5 hover:bg-white hover:text-stone-950 transition"
              rel="noopener noreferrer"
            >
              Visit Web Page
            </a>
          </div>
          <div className="w-full md:w-1/2 px-10 flex h-auto flex-col justify-center">
            <a
              href="http://levanidze.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-3xl border-2 border-stone-500"
                src={portfolio}
                alt=""
              />
            </a>
          </div>
        </div>
        {/* 3rd web page END  */}

        <div className=" w-9/12  bg-white h-1  my-28 mx-auto"></div>
      </div>
    </div>
  );
}

export default Work;
