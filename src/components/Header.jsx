import React, { useState } from "react";

import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

import ContactForm from "./ContactForm";
// import NavbarLinks from "./NavbarLinks";

const Header = ({ openContact, setOpenContact }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 bg-white z-20 w-full">
        <nav className="flex items-center font-medium justify-between bg-white shadow-md px-4 md:px-6 lg:px-8">
          <div className="z-50 px-5 py-2 min-[930px]:w-auto w-full flex justify-between">
            <NavLink to={"/"}>
              <img
                src={logo}
                alt="Samrdh Design Studio"
                className="logo md:cursor-pointer max-h-20"
              />
            </NavLink>
            <div
              className="text-3xl min-[930px]:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 sm:w-8 sm-h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 sm:w-8 sm-h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              )}
              {/* <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon> */}
            </div>
          </div>
          <ul className="min-[930px]:flex hidden uppercae items-center gap-8 ">
            <li className=" ">
              <NavLink
                to="/"
                className="py-3 px-3 transition-all inline-block hover:bg-green-200 rounded-xl text-lg"
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="py-3 px-3 transition-all inline-block hover:bg-green-200 rounded-xl text-lg"
              >
                <span>Services</span>
              </NavLink>
            </li>
            {/* <NavbarLinks /> */}

            <li>
              <NavLink
                to="/ourstory"
                className="py-3 px-3 transition-all inline-block hover:bg-green-200 rounded-xl text-lg"
              >
                <span>Our Story</span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/careers"
                className="py-3 px-3 transition-all inline-block hover:bg-green-200 rounded-xl text-lg"
              >
                <span>Careers</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/testimonials"
                className="py-3 px-3 transition-all inline-block hover:bg-green-200 rounded-xl text-lg"
              >
                <span>Testimonials</span>
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/campaigns"
                className="py-3 px-3 transition-all inline-block hover:bg-green-200 rounded-xl text-lg"
              >
                <span>Campaigns</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className="py-3 px-3 transition-all inline-block hover:bg-green-200 rounded-xl text-lg"
              >
                <span>Contact</span>
              </NavLink>
            </li>
            {/* <li>
              <button
                className=" text-lg styled-btn"
                onClick={() => setOpenContact(!openContact)}
              >
                Contact
              </button>
            </li> */}
          </ul>

          {/* Mobile nav */}
          <div
            className={`min-[930px]:hidden w-full fixed top-0 overflow-y-auto bottom-0  bg-[rgb(0,0,0,0.7)] py-24 px-10 pr-16 z-40 ${
              open ? "right-0" : "right-[-100%]"
            }`}
            onClick={() => setOpen(!open)}
          >
            <ul
              className={`transition-all min-[930px]:hidden bg-white fixed z-50 max-w-md top-0 overflow-y-auto bottom-0  py-24 px-10 pr-16 duration-500 ${
                open ? "right-0" : "right-[-100%]"
              }`}
            >
              <li>
                <NavLink
                  to="/"
                  className="py-3 px-3 transition-all inline-block hover:bg-green-200 rounded-xl text-lg"
                  onClick={() => setOpen(!open)}
                >
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="py-3 px-3 transition-all inline-block hover:bg-green-200 rounded-xl text-lg"
                  onClick={() => setOpen(!open)}
                >
                  <span>Services</span>
                </NavLink>
              </li>
              {/* <NavbarLinks /> */}

              <li>
                <NavLink
                  to="/ourstory"
                  className="py-3 px-3 transition-all inline-block hover:bg-green-200 rounded-xl text-lg"
                  onClick={() => setOpen(!open)}
                >
                  <span>Our Story</span>
                </NavLink>
              </li>

              {/* <li>
              <NavLink
                to="/careers"
                className="py-3 px-3 transition-all inline-block hover:bg-green-200 rounded-xl text-lg"
              >
                <span>Careers</span>
              </NavLink>
            </li> */}

              {/* <li>
              <NavLink
                to="/testimonials"
                className="py-3 px-3 transition-all inline-block hover:bg-green-200 rounded-xl text-lg"
                onClick={() => setOpen(!open)}
              >
                <span>Testimonials</span>
              </NavLink>
            </li> */}
              <li>
                <NavLink
                  to="/campaigns"
                  className="py-3 px-3 transition-all inline-block hover:bg-green-200 rounded-xl text-lg"
                  onClick={() => setOpen(!open)}
                >
                  <span>Campaigns</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactus"
                  className="py-3 px-3 transition-all inline-block hover:bg-green-200 rounded-xl text-lg"
                  onClick={() => setOpen(!open)}
                >
                  <span>Contact</span>
                </NavLink>
              </li>
              {/* <li>
                <button
                  className="py-3 px-3 transition-all inline-block hover:bg-green-200 rounded-xl text-lg"
                  onClick={() => setOpenContact(!openContact)}
                >
                  Contact
                </button>
              </li> */}
            </ul>
          </div>
        </nav>
      </header>
      {openContact && <ContactForm setOpenContact={setOpenContact} />}
    </>
  );
};

export default Header;
