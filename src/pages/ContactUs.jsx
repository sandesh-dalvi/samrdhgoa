import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { Helmet } from "react-helmet-async";
import logo from "../assets/images/logo3.png";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const form = useRef();

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
    <>
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.75, delay: 1 }}
        className="  grid place-content-center fixed inset-0 w-full h-full bg-white z-[999999]"
      >
        <img src="/spinner.gif" alt="" />
      </motion.div>
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        exit={{ opacity: 1 }}
        className=" overflow-x-hidden"
      >
        <Helmet>
          <title>Samrdh Design Studio & Branding Pvt. Ltd.</title>
          <meta
            name="description"
            content="At Samrdh, we're not just another digital marketing company - we're your growth partners. With a focus on precision and innovation, we specialize in the art of Growth Hacking."
          />
          <meta
            name="keywords"
            content="digital marketing in goa, goa, web development in goa, printing in goa, design studio in goa"
          />
          <meta
            property="og:title"
            content="Samrdh Design Studio & Branding Pvt. Ltd."
          />
          <meta
            property="og:description"
            content="At Samrdh, we're not just another digital marketing company - we're your growth partners. With a focus on precision and innovation, we specialize in the art of Growth Hacking."
          />
          <meta property="og:image" content={logo} />
          <meta property="og:url" content={`http://samrdh.in/contactus`} />
          <meta
            name="twitter:title"
            content="Samrdh Design Studio & Branding Pvt. Ltd."
          />
          <meta
            name="twitter:description"
            content="At Samrdh, we're not just another digital marketing company - we're your growth partners. With a focus on precision and innovation, we specialize in the art of Growth Hacking."
          />
          <meta name="twitter:image" content={logo} />
          <meta name="twitter:card" content="summary" />
        </Helmet>
        <div
          className={` bg-[#000000] bg-opacity-90 text-white flex flex-col-reverse md:flex-row justify-evenly items-center h-[15vh] overflow-hidden  p-2  aboutheader`}
        >
          <div className="flex text-white justify-evenly items-center gap-2  bg-primary bg-opacity-90 p-1 px-2 md:p-2 md:px-4 rounded-lg md:text-base">
            <Link to={"/"} className=" flex justify-center items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 md:w-5 h-4 md:h5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span>Home</span>
            </Link>{" "}
            <span className=" font-bold"> / </span>
            <span className=" font-bold underline"> Contact Us</span>
          </div>
          <div className="flex text-white ">
            <h1 className=" font-bold text-3xl md:text-5xl lg:text-5xl ">
              Contact Us
            </h1>
          </div>
        </div>
        <section className="mt-1 md:mt-10 lg:mt-16 px-2 md:px-10 lg:px-32">
          <div className=" flex flex-col-reverse lg:flex-row lg:gap-8">
            <div className=" ">
              <h2 className="text-center text-3xl font-bold pt-8 pb-0 lg:pt-0">
                Contact Us
              </h2>
              <form
                className="p-8 pt-1 rounded-md"
                ref={form}
                onSubmit={sendEmail}
              >
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
                  <option value="subject1" className="p-4  ">
                    Social Media Marketing
                  </option>
                  <option value="subject2" className="rounded-3xl p-4   ">
                    Website Design & Development
                  </option>
                  <option value="subject3" className="rounded-3xl p-4   ">
                    Graphic Designing
                  </option>
                  <option value="subject4" className="rounded-3xl p-4   ">
                    Content Creation
                  </option>
                  <option value="subject4" className="rounded-3xl p-4   ">
                    Email Marketing
                  </option>
                  <option value="subject4" className="rounded-3xl p-4   ">
                    Influencer Marketing
                  </option>
                  <option value="subject4" className="rounded-3xl p-4   ">
                    Printing & Branding
                  </option>
                  <option value="subject4" className="rounded-3xl p-4   ">
                    SEM & Advertising
                  </option>
                  <option value="subject4" className="rounded-3xl p-4   ">
                    Video Marketing
                  </option>
                  <option value="subject4" className="rounded-3xl p-4   ">
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
            <div className="p-4 pb-1 md:pt-0">
              <h2 className=" text-center font-bold text-3xl">Get in Touch</h2>
              <p className=" text-base text-center font-medium text-neutral-500 md:mt-2 lg:text-left">
                If you have any further inquiries, please feel free to send an
                email to the following address:{" "}
                <span className=" text-primary font-bold">hello@samrdh.in</span>
                .
              </p>
              <p className=" text-base text-center font-medium text-neutral-500 md:mt-2 lg:text-left">
                If you have any further inquiries or need to reach us even more
                quickly, please call us at:{" "}
                <span className=" text-primary font-bold">7020581290</span>.
              </p>
              <p className=" text-base text-center font-medium text-neutral-500 md:mt-2 lg:text-left">
                If you have any further inquiries, you can reach us at
                <span className=" text-primary font-bold"> www.samrdh.in</span>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
