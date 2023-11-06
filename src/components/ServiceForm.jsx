import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const ServiceForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_diqkwor",
        "template_0yhtmhp",
        form.current,
        "FcIDZdAcMM2rcqd9W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(!success);
          navigate("/thankyou", {
            state: {
              message1: "Thank you for choosing our services.",
              message2:
                "Our dedicated team will be reaching out to you shortly.",
            },
          });
        },
        (error) => {
          console.log(error.text);
          setError(!error);
          navigate("/error");
        }
      );
    e.target.reset();
  };
  return (
    <div className=" p-4 lg:px-8 xl:px-10 2xl:px-12 flex flex-col md:flex-row justify-center  items-center lg:gap-2 xl:gap-8 2xl:gap-12 xl:justify-between">
      <div className="">
        <h2 className=" md:flex md:flex-col font-bold text-[1.4rem] md:text-2xl lg:text-3xl xl:text-4xl  mb-1">
          <span>Now let's talk about </span>
          <span>your Growth.</span>
        </h2>
        <h3 className=" text-white font-bold md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          Drop your details here and let's work on crafting growth today
        </h3>
      </div>
      <form
        ref={form}
        className=" flex flex-col md:flex-row gap-4 w-full md:w-fit xl:w-full xl:justify-between xl:gap-10 "
        onSubmit={sendEmail}
      >
        <div className=" text-white flex flex-col xl:w-full xl:max-w-[600px] ">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="  text-white placeholder:text-white bg-transparent border-b border-white p-2 xl:border-b-2 xl:placeholder:text-xl xl:w-full xl:mt-4"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="text-white placeholder:text-white bg-transparent border-b border-white p-2 xl:border-b-2 xl:placeholder:text-xl xl:w-full xl:mt-6"
          />
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Phone"
            className="text-white placeholder:text-white bg-transparent border-b border-white p-2 xl:border-b-2 xl:placeholder:text-xl xl:w-full xl:mt-6 xl:mb-4"
          />
        </div>
        <div className=" xl:w-full xl:max-w-[600px]">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className=" w-full bg-white rounded-tl-lg rounded-bl-lg rounded-br-lg text-black placeholder:text-black font-bold p-6 pt-1 pl-2 md:h-full"
          ></textarea>
        </div>
        <div className=" self-center  xl:max-w-[600px] xl:justify-self-end">
          <button
            className="p-2 text-white font-bold bg-[#02bd18] rounded-tl-lg rounded-bl-lg rounded-br-lg shadow-md hover:bg-secondary  px-8 lg:text-lg"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
