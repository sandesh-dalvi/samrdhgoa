import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import logo2 from "../assets/images/logo2.png";

import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Footer = ({ openContact, setOpenContact }) => {
  return (
    <>
      {openContact && <ContactForm setOpenContact={setOpenContact} />}
      <footer className="primary-footer p-4 bg-[#000000]  text-white ">
        <div className="  flex justify-center items-center">
          <div className=" py-4">
            <div className="primary-footer-wrapper gap-12 md:flex md:justify-center md:items-center">
              <div className="primary-footer-logo-social flex flex-col-reverse md:flex-col items-center justify-center gap-6">
                <div className="logo-tag">
                  <a className="logo-link" href="#">
                    <img src={logo2} alt="" className="max-w-[110px]" />
                  </a>
                  <p className="text-sm max-w-sm flex flex-col lg:text-base">
                    <span>Result-driven digital marketing agency </span>
                    <span>that puts you and your business first!</span>
                  </p>
                </div>

                <ul
                  className="social-list flex gap-8"
                  role="list"
                  aria-label="Social links"
                >
                  <li className="social-link p-4 rounded-full bg-neutral-900 hover:bg-primary transition-all duration-300">
                    <a
                      aria-label="facebook"
                      target="_blank"
                      href="https://www.facebook.com/samrdhdesignstudio"
                    >
                      <BsFacebook className="w-5 h-5 " />
                    </a>
                  </li>
                  <li className="social-link p-4 rounded-full bg-neutral-900 hover:bg-primary transition-all duration-300">
                    <a
                      aria-label="twitter"
                      target="_blank"
                      href="https://x.com/samrdhgoa?s=20"
                    >
                      <BsTwitter className="w-5 h-5 " />
                    </a>
                  </li>
                  <li className="social-link p-4 rounded-full bg-neutral-900 hover:bg-primary transition-all duration-300">
                    <a
                      aria-label="instagram"
                      target="_blank"
                      href="https://www.instagram.com/samrdhdesignstudio/"
                    >
                      <BsInstagram className="w-5 h-5 " />
                    </a>
                  </li>
                  <li className="social-link p-4 rounded-full bg-neutral-900 hover:bg-primary transition-all duration-300">
                    <a
                      aria-label="pinterest"
                      target="_blank"
                      href="https://in.pinterest.com/samrdhdesignbranding/"
                    >
                      <BsPinterest className="w-5 h-5 " />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" px-5 w-full md:w-fit md:gap-4 flex justify-between gap-4 lg:gap-12 primary-footer-explore">
                <div className="">
                  <h2 className="text-base font-bold lg:text-lg">
                    Important Links
                  </h2>
                  <nav
                    className="footer-nav lg:text-base  min-[800px]:columns-1 gap-footergap"
                    style={{ "--flow-spacer": "0.6rem" }}
                  >
                    <ul data-spacing="tight" aria-label="footer" role="list">
                      <li>
                        <Link to="/careers" className="hover:text-primary">
                          Career
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/privacypolicy"
                          className="hover:text-primary"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link to="/contactus" className="hover:text-primary">
                          Contact
                        </Link>
                      </li>
                      {/* <li>
                        <button
                          className="hover:text-primary"
                          onClick={() => setOpenContact(!openContact)}
                        >
                          Contact
                        </button>
                      </li> */}
                    </ul>
                  </nav>
                </div>
                <div className="">
                  <h2 className="text-base font-bold lg:text-lg">Resources</h2>
                  <nav
                    className="footer-nav lg:text-base  min-[800px]:columns-1 gap-footergap"
                    style={{ "--flow-spacer": "0.6rem" }}
                  >
                    <ul data-spacing="tight" aria-label="footer" role="list">
                      <li>
                        <Link to="/influencers" className="hover:text-primary">
                          Influencers
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/blogs" className="hover:text-primary">
                          Blogs
                        </Link>
                      </li> */}

                      <li>
                        <Link to="/faqs" className="hover:text-primary">
                          FAQs
                        </Link>
                      </li>
                      <li>
                        <Link to="/testimonials" className="hover:text-primary">
                          Testimonials
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className=" px-4 flow primary-footer-contact">
                <h2 className="text-base font-bold lg:text-lg">Contact</h2>
                <p className="text-white max-w-[290px] lg:text-base">
                  Unitech City Center, 502, Fifth floor, MG Road, Panaji, Goa,
                  403101
                </p>
                <div className=" flex gap-1 mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>

                  <p className="text-white lg:text-base">7020581290</p>
                </div>
                <div className=" flex gap-1 mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>

                  <p className="text-secondary lg:text-base">hello@samrdh.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-center text-sm md:text-lg bg-black p-2 ">
          <span className=" text-secondary">&#169;</span>2023{" "}
          <span className=" text-secondary">
            Samrdh Design Studio & Branding Pvt. Ltd.
          </span>{" "}
          {/* <Link
            to={"/privacypolicy"}
            className=" borber border-b-2 border-b-green-500"
          >
            Privacy Policy.
          </Link> */}
          {"  "}
          All Rights Reserved
        </div>
        <a
          href="https://wa.me/917020581290"
          className="fixed w-[50px] h-[50px] bottom-[15px] right-[10px] text-3xl bg-green-500 text-white rounded-full text-center shadow-md z-20 md:text-3xl md:w-[60px] md:h-[60px] flex justify-center items-center "
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="" />
        </a>
      </footer>
    </>
  );
};

export default Footer;
