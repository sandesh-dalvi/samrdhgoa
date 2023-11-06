import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const ContactForm = ({ setOpenContact }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const form = useRef();

  const handleClose = (e) => {
    if (e.target.id === "overlaycontainer") setOpenContact(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sknndiz",
        "template_rne88k1",
        form.current,
        "pnrzveEN-76pfMljN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(!success);
          navigate("/thankyou", {
            state: {
              message1: "Thank you for reaching out to us.",
              message2: "We will get back to you soon.",
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
    <div
      id="overlaycontainer"
      onClick={handleClose}
      className="contact-form fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-40"
    >
      <div className="contact-form-container bg-neutral-900 text-white relative isolate rounded-md max-w-[700px] md:px-20">
        <svg
          onClick={() => setOpenContact(false)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute top-1 right-1 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <h2 className="text-center text-2xl font-bold pt-8 pb-0">Contact Us</h2>
        <form className="p-8 rounded-md" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Full Name"
            required
            className="bg-transparent rounded-3xl p-4 w-full border-b-2 border-primary m-1 outline-none "
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email Id"
            required
            className="bg-transparent rounded-3xl p-4 w-full border-b-2 border-primary m-1 outline-none"
          />
          {/* <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter Subject"
            required
            className="bg-transparent rounded-3xl p-4 w-full border-b-2 border-primary m-1 outline-none "
          /> */}
          <select
            required
            name="subject"
            id="subject"
            className="bg-transparent rounded-3xl p-4 w-full border-b-2 border-primary m-1 outline-none "
          >
            <option value="subject1" className="p-4 bg-black ">
              Social Media Marketing
            </option>
            <option value="subject2" className="rounded-3xl p-4  bg-black ">
              Website Design & Development
            </option>
            <option value="subject3" className="rounded-3xl p-4  bg-black ">
              Graphic Designing
            </option>
            <option value="subject4" className="rounded-3xl p-4  bg-black ">
              Content Creation
            </option>
            <option value="subject4" className="rounded-3xl p-4  bg-black ">
              Email Marketing
            </option>
            <option value="subject4" className="rounded-3xl p-4  bg-black ">
              Influencer Marketing
            </option>
            <option value="subject4" className="rounded-3xl p-4  bg-black ">
              Printing & Branding
            </option>
            <option value="subject4" className="rounded-3xl p-4  bg-black ">
              SEM & Advertising
            </option>
            <option value="subject4" className="rounded-3xl p-4  bg-black ">
              Video Marketing
            </option>
            <option value="subject4" className="rounded-3xl p-4  bg-black ">
              Others...
            </option>
          </select>
          <textarea
            name="message"
            id="message"
            placeholder="Enter Message"
            required
            rows="6"
            className=" mt-6 bg-transparent rounded-3xl p-4 w-full border-2 border-primary m-1 outline-none bg-[#2c2a2a]"
          ></textarea>
          {/* {error && (
            <p className="text-sm text-red-700 font-bold">
              There was some issue sending the email. Please try again.
            </p>
          )} */}
          {/* {success && (
            <p className="text-sm text-primary font-bold">
              Email was send Succesfully
            </p>
          )} */}
          <button className="button mt-6" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
