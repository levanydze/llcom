import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { FiMail } from "react-icons/fi";

export const ContactForm = () => {
  const form = useRef();
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u6gjg6s",
        "template_jsv5qfx",
        form.current,
        "y8nREYl_1OCsl1rBw"
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="md:w-1/2 w-full text-white">
      <form ref={form} onSubmit={sendEmail} className="px-20 ">
        <label className="">Name</label>
        <input
          type="text"
          name="user_name"
          className="pl-3 w-full mt-2 text-black h-8"
        />
        <label className="pl-10 absol ">
          <div className="flex">
            <p>Email</p>
          </div>
        </label>
        <div className="relative">
          <FiMail className="mr-2 absolute text-teal-900 mt-3 ml-2" size={24} />
          <input
            type="email"
            name="user_email"
            className=" w-full mb-5 mt-2 text-black h-8 pl-10"
          />
        </div>
        <label className="">Message</label>
        <textarea
          name="message"
          className="pl-3 pt-1 w-full mb-3 mt-2 h-40 text-black resize-none"
        />
        <input
          className="w-full bg-gray-400 p-3 text-black border-2 border-white hover:bg-white hover:text-black cursor-pointer text-xl font-bold"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default ContactForm;
