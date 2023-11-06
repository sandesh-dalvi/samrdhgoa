import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import career1 from "../assets/images/careers/career1.png";
import career2 from "../assets/images/careers/career2.png";
import about1 from "../assets/images/about1.jpg";
import about2 from "../assets/images/about2.jpg";
import emailjs from "@emailjs/browser";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import logo from "../assets/images/logo.png";
import { Helmet } from "react-helmet-async";

import graphicdesign from "../assets/images/careers/illustration.png";
import marketingstrategist from "../assets/images/careers/strategy-development.png";
import contentcreator from "../assets/images/careers/platform.png";
import socialmediamanager from "../assets/images/careers/social-media.png";
import wordpress from "../assets/images/careers/wordpress.png";
import internships from "../assets/images/careers/certificate.png";
import businessmanager from "../assets/images/careers/sustainability.png";
import businessexecutive from "../assets/images/careers/business-model.png";
import photo from "../assets/images/careers/photo.png";
import contentstrategist from "../assets/images/careers/content-management.png";
import videoeditor from "../assets/images/careers/video-editor.png";
import digitalmarketing from "../assets/images/careers/content-strategy.png";
import ux from "../assets/images/careers/ux.png";
import contentwriter from "../assets/images/careers/content-writing.png";
import socialmedial from "../assets/images/careers/content-managing.png";
import accountant from "../assets/images/careers/accounting.png";
import ads from "../assets/images/careers/ads.png";
import adsaudit from "../assets/images/careers/survey.png";
import project from "../assets/images/careers/project.png";
import cinema from "../assets/images/careers/cinematographic.png";
import hr from "../assets/images/careers/hr.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Lottie from "lottie-react";
import careersAnimation1 from "../assets/lottie/animation_careers_b.json";
import careersAnimation2 from "../assets/lottie/animation_careers_a.json";

const Careers = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [availability, setAvailibality] = useState(false);
  const [overview, setOverview] = useState(false);

  const handleClick = (title, available, desc) => {
    setOverview(desc);
    setAvailibality(available);
    setModalTitle(title);
    setIsOpen(true);
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
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.75, ease: "easeInOut" }}
        // exit={{ opacity: 1 }}
        className=" overflow-x-hidden"
      >
        <Helmet>
          <title>Samrdh Design Studio & Branding Pvt. Ltd. - Careers</title>
          <meta
            name="description"
            content="At Samrdh Design Studio & Branding, we believe that innovation is born from diverse perspectives and talents."
          />
          <meta
            name="keywords"
            content="seo,digital marketing, goa, digital marketing in goa, design studio in goa, design studio, web design, web development, samrdh"
          />
          <meta
            property="og:title"
            content="Samrdh Design Studio & Branding Pvt. Ltd. - Careers"
          />
          <meta
            property="og:description"
            content="At Samrdh Design Studio & Branding, we believe that innovation is born from diverse perspectives and talents."
          />
          <meta property="og:image" content={logo} />
          <meta property="og:url" content={`http://samrdh.in/careers`} />
          <meta
            name="twitter:title"
            content="Samrdh Design Studio & Branding Pvt. Ltd. - Careers"
          />
          <meta
            name="twitter:description"
            content="At Samrdh Design Studio & Branding, we believe that innovation is born from diverse perspectives and talents."
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
            <span className=" font-bold underline"> Careers</span>
          </div>
          <div className="flex text-white ">
            <h1 className=" font-bold text-3xl md:text-5xl lg:text-5xl ">
              Careers
            </h1>
          </div>
        </div>
        <section className="px-4 md:px-10 lg:px-20 xl:px-32 2xl:px-44 mb-8 md:mb-16 lg:mb-24 flex flex-col relative isolate">
          <div className=" absolute inset-0 z-0 "></div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center  pt-8 z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.6, type: "spring" },
              }}
              viewport={{ once: true }}
              className=" place-self-center"
            >
              {/* <img src={career1} alt="" className="max-w-[300px]" /> */}
              <Lottie
                animationData={careersAnimation1}
                loop={true}
                className=" max-w-[400px]"
              />
            </motion.div>

            <div className=" mt-2">
              <motion.div
                initial={{ x: "100%" }}
                whileInView={{
                  x: "0%",
                  transition: { duration: 0.7, type: "spring" },
                }}
                viewport={{ once: true }}
              >
                <h2 className=" font-bold text-[1.15rem] md:text-[1.75rem] xl:text-4xl leading-7 md:leading-9 text-center md:text-left ">
                  Join Our Team and Shape the Future!
                </h2>
                <p className=" p-2 px-4 mb-1 md:mb-4  font-medium text-[#434343] text-base 2xl:text-lg text-justify">
                  At Samrdh Design Studio & Branding, we believe that innovation
                  is born from diverse perspectives and talents. If you're
                  passionate about design, branding, and pushing the boundaries
                  of creativity, we invite you to explore our career
                  opportunities and make a meaningful impact.
                </p>
                <a
                  href="#jobs"
                  className=" ml-4 inline-flex rounded-3xl p-2 px-4 font-bold md:text-base bg-primary text-white md:p-3 md:px-5 lg:text-lg 2xl:text-xl shadow-lg"
                >
                  Explore Job Opportunities
                </a>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{
              x: "0%",
              transition: { duration: 0.6, type: "spring" },
            }}
            viewport={{ once: true }}
            className=" grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center  pt-8 z-10"
          >
            <div className=" mt-2">
              <h2 className="  font-bold text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl text-center">
                Why Choose a Career with Us?
              </h2>
              <ol className=" p-2 px-4 pl-8 list-disc  font-medium  text-base lg:text-xl  ">
                <li className=" marker:text-[#2cb280]">
                  Collaborate with a dynamic and driven team.
                </li>
                <li className=" marker:text-[#2cb280]">
                  Work on projects that make an impact and resonate with global
                  audiences.
                </li>
                <li className=" marker:text-[#2cb280]">
                  Embrace a culture that fosters continuous learning and growth.
                </li>
                <li className=" marker:text-[#2cb280]">
                  Experience a flexible and inclusive work environment.
                </li>
                <li className=" marker:text-[#2cb280]">
                  Shape your career trajectory with ample opportunities.
                </li>
              </ol>
            </div>
            <div>
              {/* <img src={career2} alt="" className=" max-w-[300px]" /> */}
              <Lottie
                animationData={careersAnimation2}
                loop={true}
                className=" max-w-[400px]"
              />
            </div>
          </motion.div>
        </section>
        <section className="px-2 md:px-4  lg:px-10 2xl:px-14">
          <h2 className="  ml-8  my-2  md:ml-16 md:my-6  lg:ml-28 lg:my-10  xl:ml-32 xl:my-16 font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-center">
            Discover Our Culture
          </h2>
          {/* slider */}
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={about1} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={about2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={about1} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={about2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={about1} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={about2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={about1} alt="slide_image" />
            </SwiperSlide>

            <div className="slider-controler ">
              <div className="swiper-button-prev slider-arrow">
                <span name="arrow-back-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </span>
              </div>
              <div className="swiper-button-next slider-arrow">
                <span name="arrow-forward-outline">
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
          {/* slider */}
        </section>

        <div
          id="jobs"
          className={` bg-[#000000] bg-opacity-90 text-white flex flex-col-reverse md:flex-row justify-evenly items-center min-h-[10vh] overflow-hidden  p-2  careerdivider`}
        >
          <p className=" text-white px-10 font-bold md:text-xl lg:text-2xl 2xl:text-[1.7rem] p-4 md:p-10 lg:p-16 md:flex md:flex-col text-center">
            <span>
              Join us on this exciting journey to create, inspire, and leave
              your mark.{" "}
            </span>
            <span>
              Together, we'll shape the future of design and branding.
            </span>
          </p>
        </div>

        <section className="positions mt-10 md:mt-12 lg:mt-14   px-4 md:px-8 lg:px-28 xl:px-36 2xl:px-40 pb-4 ">
          <h2 className=" font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-center">
            Positions We're Hiring For
          </h2>
          <div className="my-6 flex justify-center  gap-2 font-bold md:gap-4 lg:gap-8">
            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6 w-[160px] md:w-[170px] lg:w-[190px] xl:w-[200px] 2xl:w-[250px]"
              onClick={() =>
                handleClick(
                  "Accountant",
                  true,
                  "We're seeking an Accountant with expertise in GST and Tally to oversee financial transactions. This role involves managing finances and demands 2-3 years of prior experience. Your goal is to provide precise financial data and ensure tax compliance."
                )
              }
            >
              <img
                src={accountant}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>Accountant</span>
              </h3>
            </div>
            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6 w-[160px] md:w-[170px] lg:w-[190px] xl:w-[200px] 2xl:w-[250px]"
              onClick={() =>
                handleClick(
                  "Business Development Executive",
                  true,
                  "We Looking for a Business Development Executive skilled in Marketing, Sales, and Client Management. This role entails handling clients and requires 1-2 years of experience. Your objective is to effectively manage our business and ensure clients' needs are met."
                )
              }
            >
              <img
                src={businessexecutive}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>Business</span>
                <span>Development</span>
                <span>Executive</span>
              </h3>
            </div>
          </div>
          <h2 className=" font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-center md:text-left">
            Other Positions
          </h2>
          <div className=" mt-2 p-2 md:p-4 lg:p-10 xl:p-12 2xl:p-14  grid grid-cols-2 md:grid-cols-4 grid-rows-4 gap-2 md:gap-4 lg:gap-8 text-white font-bold">
            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2  cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6  "
              onClick={() =>
                handleClick(
                  "Graphic Designer",
                  false,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopossimus dolorum eveniet vero assumenda! Quos quod obcaecati,numquam in ut nostrum blanditiis quia culpa odit."
                )
              }
            >
              <img
                src={graphicdesign}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>Graphic</span>
                <span>Designer</span>
              </h3>
            </div>

            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6"
              onClick={() =>
                handleClick(
                  "Marketing Strategist",
                  false,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopossimus dolorum eveniet vero assumenda! Quos quod obcaecati,numquam in ut nostrum blanditiis quia culpa odit."
                )
              }
            >
              <img
                src={marketingstrategist}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>Marketing</span>
                <span>Strategist</span>
              </h3>
            </div>
            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6"
              onClick={() =>
                handleClick(
                  "Content Creator",
                  false,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopossimus dolorum eveniet vero assumenda! Quos quod obcaecati,numquam in ut nostrum blanditiis quia culpa odit."
                )
              }
            >
              <img
                src={contentcreator}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>Content</span>
                <span>Creator</span>
              </h3>
            </div>
            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6"
              onClick={() =>
                handleClick(
                  "Social Media Manager",
                  false,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopossimus dolorum eveniet vero assumenda! Quos quod obcaecati,numquam in ut nostrum blanditiis quia culpa odit."
                )
              }
            >
              <img
                src={socialmediamanager}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>Social</span>
                <span>Media</span>
                <span>Manager</span>
              </h3>
            </div>
            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6"
              onClick={() =>
                handleClick(
                  "Wordpress Developer",
                  false,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopossimus dolorum eveniet vero assumenda! Quos quod obcaecati,numquam in ut nostrum blanditiis quia culpa odit."
                )
              }
            >
              <img
                src={wordpress}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>WordPress</span>
                <span>Developer</span>
              </h3>
            </div>
            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6"
              onClick={() =>
                handleClick(
                  "Internships",
                  false,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopossimus dolorum eveniet vero assumenda! Quos quod obcaecati,numquam in ut nostrum blanditiis quia culpa odit."
                )
              }
            >
              <img
                src={internships}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>Internships</span>
              </h3>
            </div>
            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6"
              onClick={() =>
                handleClick(
                  "Business Development Manager",
                  false,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopossimus dolorum eveniet vero assumenda! Quos quod obcaecati,numquam in ut nostrum blanditiis quia culpa odit."
                )
              }
            >
              <img
                src={businessmanager}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>Business</span>
                <span>Development</span>
                <span>Manager</span>
              </h3>
            </div>

            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6"
              onClick={() =>
                handleClick(
                  "Creative Photographer",
                  false,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopossimus dolorum eveniet vero assumenda! Quos quod obcaecati,numquam in ut nostrum blanditiis quia culpa odit."
                )
              }
            >
              <img
                src={photo}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>Creative</span>
                <span>Photographer</span>
              </h3>
            </div>
            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6"
              onClick={() =>
                handleClick(
                  "Content Strategist",
                  false,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopossimus dolorum eveniet vero assumenda! Quos quod obcaecati,numquam in ut nostrum blanditiis quia culpa odit."
                )
              }
            >
              <img
                src={contentstrategist}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>Content</span>
                <span>Strategist</span>
              </h3>
            </div>
            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6"
              onClick={() =>
                handleClick(
                  "Video Editor",
                  false,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopossimus dolorum eveniet vero assumenda! Quos quod obcaecati,numquam in ut nostrum blanditiis quia culpa odit."
                )
              }
            >
              <img
                src={videoeditor}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>Video</span>
                <span>Editor</span>
              </h3>
            </div>
            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6"
              onClick={() =>
                handleClick(
                  "Digital Marketing Executivet",
                  false,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopossimus dolorum eveniet vero assumenda! Quos quod obcaecati,numquam in ut nostrum blanditiis quia culpa odit."
                )
              }
            >
              <img
                src={digitalmarketing}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>Digital</span>
                <span>Marketing</span>
                <span>Executive</span>
              </h3>
            </div>
            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6"
              onClick={() =>
                handleClick(
                  "UI/UX Designer",
                  false,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopossimus dolorum eveniet vero assumenda! Quos quod obcaecati,numquam in ut nostrum blanditiis quia culpa odit."
                )
              }
            >
              <img
                src={ux}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>UI/UX</span>
                <span>Designer</span>
              </h3>
            </div>
            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6"
              onClick={() =>
                handleClick(
                  "Content Writer / Copywriter",
                  false,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopossimus dolorum eveniet vero assumenda! Quos quod obcaecati,numquam in ut nostrum blanditiis quia culpa odit."
                )
              }
            >
              <img
                src={contentwriter}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>Content</span>
                <span>Writer /</span>
                <span>Copywriter</span>
              </h3>
            </div>
            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6"
              onClick={() =>
                handleClick(
                  "Social Media Executive",
                  false,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopossimus dolorum eveniet vero assumenda! Quos quod obcaecati,numquam in ut nostrum blanditiis quia culpa odit."
                )
              }
            >
              <img
                src={socialmedial}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>Social</span>
                <span>Media</span>
                <span>Executive</span>
              </h3>
            </div>
            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6"
              onClick={() =>
                handleClick(
                  "Paid Ads Manager",
                  false,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopossimus dolorum eveniet vero assumenda! Quos quod obcaecati,numquam in ut nostrum blanditiis quia culpa odit."
                )
              }
            >
              <img
                src={ads}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>Paid Ads</span>
                <span>Manager</span>
              </h3>
            </div>
            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6"
              onClick={() =>
                handleClick(
                  "Paid Ads Auditor",
                  false,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopossimus dolorum eveniet vero assumenda! Quos quod obcaecati,numquam in ut nostrum blanditiis quia culpa odit."
                )
              }
            >
              <img
                src={adsaudit}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>Paid Ads</span>
                <span>Auditor</span>
              </h3>
            </div>
            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6"
              onClick={() =>
                handleClick(
                  "Project Manager",
                  false,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopossimus dolorum eveniet vero assumenda! Quos quod obcaecati,numquam in ut nostrum blanditiis quia culpa odit."
                )
              }
            >
              <img
                src={project}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>Project</span>
                <span>Manager</span>
              </h3>
            </div>
            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6"
              onClick={() =>
                handleClick(
                  "Cinematographer",
                  false,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopossimus dolorum eveniet vero assumenda! Quos quod obcaecati,numquam in ut nostrum blanditiis quia culpa odit."
                )
              }
            >
              <img
                src={cinema}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span className=" hidden md:inline-block">Cinematographer</span>
                <span className=" md:hidden">Cinemato-</span>
                <span className=" md:hidden">grapher</span>
              </h3>
            </div>
            <div
              className="rounded-lg flex gap-1 justify-center items-center aboutcard p-2 cursor-pointer transition-all hover:scale-95 md:gap-2 lg:gap-3 2xl:gap-6"
              onClick={() =>
                handleClick(
                  "Human Resource Associate",
                  false,
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quopossimus dolorum eveniet vero assumenda! Quos quod obcaecati,numquam in ut nostrum blanditiis quia culpa odit."
                )
              }
            >
              <img
                src={hr}
                alt=""
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
              />
              <h3 className="flex flex-col">
                <span>Human</span>
                <span>Resource</span>
                <span>Associate</span>
              </h3>
            </div>
          </div>
          {isOpen && (
            <Modal
              modalTitle={modalTitle}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              availability={availability}
              overview={overview}
            />
          )}
        </section>
      </div>
    </>
  );
};

export const Modal = ({
  isOpen,
  setIsOpen,
  modalTitle,
  overview,
  availability,
}) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sknndiz",
        "template_pxsre3j",
        form.current,
        "pnrzveEN-76pfMljN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(!success);
        },
        (error) => {
          console.log(error.text);
          setError(!error);
        }
      );
    e.target.reset();
  };
  return (
    <div className="relative z-50">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div
        className="fixed inset-0  bg-black/30"
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0  overflow-y-auto">
        {/* The actual dialog panel  */}
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="mx-auto max-w-sm rounded bg-white p-4 relative isolate">
            <div className=" text-lg font-bold mb-4">{modalTitle}</div>
            <div
              className=" absolute top-1 right-2 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            {/* <div className="text-lg text-gray-500 font-semibold">Overview</div>

            <p className=" mb-4 text-gray-500">{overview}</p> */}
            {availability ? (
              <div className="mb-4">
                <h3 className=" text-lg font-semibold text-gray-600">
                  Job Description
                </h3>
                <p className=" mb-4 text-gray-500">{overview}</p>
              </div>
            ) : (
              <div className="mb-4">
                <h3 className=" text-lg font-semibold text-gray-600">
                  Currently Position is not available
                </h3>
                <p className=" mb-4 text-gray-500">You can send us your CV.</p>
              </div>
            )}

            <div>
              <form
                className=" flex flex-col max-w-[400px] gap-2"
                ref={form}
                onSubmit={sendEmail}
              >
                <label className=" flex flex-col">
                  <span className=" text-neutral-500 font-bold">
                    Enter Full Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Full Name"
                    required
                    className="p-2 border-2 border-primary rounded-xl"
                  />
                </label>
                <label className=" flex flex-col">
                  <span className="text-neutral-500 font-bold">
                    Enter Email Address
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    className="p-2  border-2 border-primary rounded-xl"
                  />
                </label>
                <label className=" flex flex-col">
                  <span className="text-neutral-500 font-bold">
                    Enter Mobile Number
                  </span>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Mobile Number"
                    required
                    className="p-2  border-2 border-primary rounded-xl"
                  />
                </label>
                <label className=" flex flex-col">
                  <span className="text-neutral-500 font-bold">City</span>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City"
                    required
                    className="p-2  border-2 border-primary rounded-xl"
                  />
                </label>

                <label className="">
                  <span className="font-bold text-neutral-500">
                    Upload your CV
                  </span>
                  <input type="file" name="cv" id="cv" />
                </label>
                <div className=" flex justify-between mt-4">
                  <button
                    className=" bg-[#26af7b] p-2  px-4 w-fit rounded-lg text-white font-bold"
                    type="submit"
                  >
                    Apply Now
                  </button>
                  <button
                    className="bg-[#26af7b] p-2  px-4 w-fit rounded-lg text-white font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
