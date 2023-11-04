import React from "react";
import ContactForm from "../components/ContactForm";
import gomi from "../images/portfolioImagesData/Screenshot 2023-08-11 at 14.42.48.png";
import Header from "../components/Header";

function Contact() {
  return (
    <div className="pt-20">
      <h2 className="w-full text-center text-white text-3xl ">Contact</h2>
      <div className="flex flex-col md:flex-row w-full mt-20">
        <ContactForm></ContactForm>
        <div className="imgdiv w-full md:w-1/2 flex md:pr-16 md:p-0 p-14  ">
          <img className="object-cover  rounded-2xl mt-8" src={gomi} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
