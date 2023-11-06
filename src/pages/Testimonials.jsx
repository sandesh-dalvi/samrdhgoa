import React from "react";
import { motion } from "framer-motion";

import male from "../assets/images/male.png";

import { Link } from "react-router-dom";
import hede from "../assets/images/testimonials/hede.jpg";
import kapil from "../assets/images/testimonials/kapil.jpg";
import makbul from "../assets/images/testimonials/makbul.jpg";
import shaikh from "../assets/images/testimonials/shaikh.jpg";

import logo from "../assets/images/logo.png";
import { Helmet } from "react-helmet-async";

const Testimonials = () => {
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
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.75, ease: "easeInOut" }}
        // exit={{ opacity: 1 }}
        className=" overflow-x-hidden"
      >
        <Helmet>
          <title>
            Samrdh Design Studio & Branding Pvt. Ltd. - Testimonials
          </title>
          <meta
            name="description"
            content="Samrdh Design Studio & Branding Pvt. Ltd. - Testimonials"
          />
          <meta
            name="keywords"
            content="digital marketing in goa, social media marketing in goa, web development in goa, website design in goa"
          />
          <meta
            property="og:title"
            content="Samrdh Design Studio & Branding Pvt. Ltd. - Testimonials"
          />
          <meta
            property="og:description"
            content="Samrdh Design Studio & Branding Pvt. Ltd. - Testimonials"
          />
          <meta property="og:image" content={logo} />
          <meta property="og:url" content={`http://samrdh.in/testimonials`} />
          <meta
            name="twitter:title"
            content="Samrdh Design Studio & Branding Pvt. Ltd. - Testimonials"
          />
          <meta
            name="twitter:description"
            content="Samrdh Design Studio & Branding Pvt. Ltd. - Testimonials"
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
            <span className=" font-bold underline"> Testimonials</span>
          </div>
          <div className="flex text-white ">
            <h1 className=" font-bold text-3xl md:text-5xl lg:text-5xl ">
              Testimonials
            </h1>
          </div>
        </div>
        <section className="px-2 md:px-16 lg:px-40 xl:px-48 2xl:px-52 mb-4 md:mb-8 ">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{
              opacity: 1,
              y: "0%",
              transition: { duration: 0.75, type: "tween" },
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-center font-extrabold mt-4 mb-2 md:mt-10  md:mb-3  lg:mt-12  xl:mb-6 xl:mt-16  text-xl md:text-3xl lg:text-4xl 2xl:text-5xl ">
              Creating Raving Fans
            </h2>
            <h3 className=" text-center font-bold text-[#009118] text-base mb-4 md:text-lg md:mb-8 lg:text-xl lg:mb-10 xl:text-2xl xl:mb-11">
              "Inspiring Stories Straight from Our Clients"
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,

              transition: { duration: 0.75, type: "tween" },
            }}
            viewport={{ once: true }}
            className=" mt-2 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 justify-center items-center text-white p-2 px-4 "
          >
            <div className="p-2 h-full flex flex-col justify-center items-center rounded-3xl testimonial-card">
              <img
                src={kapil}
                alt=""
                className="w-[120px] md:w-[160px] mt-1 md:mt-4 aspect-square rounded-full border-2 border-primary"
              />
              <div className="mt-2 self-start p-4">
                <h4 className="leading-none  mb-0 p-0 tracking-wide">
                  Kapil Karekar
                </h4>
                <h5 className=" mb-2 text-[#00d224] font-semibold">
                  Owner of Geeta Automations Technologies
                </h5>
                <p className=" text-white">
                  I am pleased to say that Samrdh Design Studio and Branding
                  Pvt. Ltd. has fulfilled their contractual obligations within
                  the stipulated period keeping a high degree of standards.
                </p>
              </div>
            </div>
            <div className=" p-2 h-full flex flex-col justify-center items-center rounded-3xl testimonial-card">
              <img
                src={male}
                alt=""
                className="w-[120px] md:w-[160px] mt-1 md:mt-4 aspect-square rounded-full border-2 border-primary"
              />
              <div className="mt-2 self-start p-4">
                <h4 className=" leading-none mb-0 p-0 tracking-wide">
                  Gaurish Shirodkar
                </h4>
                <h5 className=" mb-2 text-[#00d224] font-semibold">
                  Owner of Shirodkar Jewellery
                </h5>
                <p className=" text-white ">
                  We appreciate your digital marketing efforts for Shirodkar
                  Jewellery and are satisfied with the progress. We value our
                  partnership and are confident in achieving even greater
                  success together.
                </p>
              </div>
            </div>
            <div className="p-2 h-full flex flex-col justify-center items-center rounded-3xl testimonial-card">
              <img
                src={male}
                alt=""
                className=" w-[120px] md:w-[160px] mt-1 md:mt-4 aspect-square rounded-full border-2 border-primary"
              />
              <div className=" mt-2 self-start p-4">
                <h4 className="leading-none  mb-0 p-0 tracking-wide">
                  Milling Shirdokar
                </h4>
                <h5 className=" mb-2 text-[#00d224] font-semibold">
                  PSYK Infra LLP
                </h5>
                <p className=" text-white">
                  Thank you for your website and digital marketing services.
                  We're pleased with the progress and appreciate the seamless
                  user experience and mobile-friendly website. Wish for even
                  greater success together.
                </p>
              </div>
            </div>
            <div className="p-2 h-full flex flex-col justify-center items-center rounded-3xl testimonial-card">
              <img
                src={male}
                alt=""
                className=" w-[120px] md:w-[160px] mt-1 md:mt-4 aspect-square rounded-full border-2 border-primary"
              />
              <div className=" mt-2 self-start p-4">
                <h4 className="leading-none  mb-0 p-0 tracking-wide">
                  Shahid Faraaz
                </h4>
                <h5 className=" mb-2 text-[#00d224] font-semibold">
                  Owner OOZEME
                </h5>
                <p className=" text-white">
                  I'm absolutely delighted with the logo crafted by this team.
                  Their design brilliantly encapsulates the essence of my brand,
                  marrying creativity and vision seamlessly. The team's
                  attention to detail and commitment to understanding my brand's
                  identity exceeded my expectations. The logo has received rave
                  reviews from both customers and peers, and I'm confident it
                  will be a lasting emblem of my brand's identity. I couldn't be
                  happier with the result.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
