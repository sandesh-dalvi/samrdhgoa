import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import wd from "../assets/images/wd.png";
import landing from "../assets/images/landing.png";
import uiux from "../assets/images/uiux.png";
import seo from "../assets/images/seo.png";
import ServiceForm from "../components/ServiceForm";

import ServicesMidSection from "../components/ServicesMidSection";
import { webdev } from "../utils/ServicesAccData";
import useMeasure from "react-use-measure";

import logo from "../assets/images/logo.png";
import { Helmet } from "react-helmet-async";

import main1 from "../assets/images/webdevelopment/main/1.png";
import main2 from "../assets/images/webdevelopment/main/2.png";
import main4 from "../assets/images/webdevelopment/main/4.png";
import main3 from "../assets/images/webdevelopment/main/3.png";
import main5 from "../assets/images/webdevelopment/main/5.png";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
const WebDevelopment = () => {
  const [ref, bounds] = useMeasure({ scroll: false });
  // console.log(bounds);
  const [isHover, setIsHover] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const imageAnimate = (e) => {
    setIsHover(true);
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      if (innerWidth < 768) {
        // console.log(window.scrollY);
        setX(window.scrollY);
        setY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ScrollToTopOnMount />
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
        onMouseMove={imageAnimate}
        onMouseOut={() => setIsHover(false)}
        className=" overflow-x-hidden"
      >
        <Helmet>
          <title>
            Samrdh Design Studio & Branding Pvt. Ltd. - Web Development
          </title>
          <meta
            name="description"
            content="We are a web design company in Goa, where we design and develop websites for meaningful customer experience. With a thorough understanding of the client's needs - design & functionality, we create every website to meet the end goal."
          />
          <meta
            name="keywords"
            content="web development, web design, website design, website in goa, digital marketing website in goa"
          />
          <meta
            property="og:title"
            content="Samrdh Design Studio & Branding Pvt. Ltd. - Web Development"
          />
          <meta
            property="og:description"
            content="We are a web design company in Goa, where we design and develop websites for meaningful customer experience. With a thorough understanding of the client's needs - design & functionality, we create every website to meet the end goal."
          />
          <meta property="og:image" content={logo} />
          <meta
            property="og:url"
            content={`http://samrdh.in/web-development`}
          />
          <meta
            name="twitter:title"
            content="Samrdh Design Studio & Branding Pvt. Ltd. - Web Development"
          />
          <meta
            name="twitter:description"
            content="We are a web design company in Goa, where we design and develop websites for meaningful customer experience. With a thorough understanding of the client's needs - design & functionality, we create every website to meet the end goal."
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
            <Link
              to={"/services"}
              className=" flex justify-center items-center gap-1"
            >
              <span>/ Services</span>
            </Link>
            <span className=" font-bold"> / </span>
            <span className=" font-bold underline"> Web Development</span>
          </div>
          {/* <div className="flex text-white ">
          <h1 className=" font-bold text-2xl sm:text-2xl md:text-4xl lg:text-5xl ">
            Web Development
          </h1>
        </div> */}
        </div>
        <section className="  shadow-inner pt-3 md:pt-5 lg:pt-7  grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-14 xl:gap-16 2xl:gap-20 px-4 md:px-12 lg:px-32 xl:px-44 2xl:px-52 justify-center items-center">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{
              x: "0%",
              transition: { duration: 0.75, type: "spring" },
            }}
            viewport={{ once: true }}
          >
            <h2 className=" font-bold text-[1.15rem] md:text-[1.75rem] xl:text-4xl flex flex-col items-center md:items-start ">
              <span className=" font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-[#434343]">
                Leading{" "}
              </span>
              <span className=" text-primary">
                Web Design & Development Company in Goa{" "}
              </span>
              <span className=" text-primary"> </span>
            </h2>

            <div className=" mt-2 flex justify-start items-center">
              <div className="font-medium text-[#434343] text-justify md:text-base">
                <p className=" text-justify md:max-w-md lg:max-w-lg  xl:max-w-2xl mb-2 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14">
                  We are a web design company in Goa, where we design and
                  develop websites for meaningful customer experience. With a
                  thorough understanding of the client's needs - design &
                  functionality, we create every website to meet the end goal.
                  We work with you and make a selection of the best software and
                  integrate the most suitable applications to meet your wants
                  and needs.
                </p>
              </div>
            </div>
          </motion.div>
          <div ref={ref} className=" flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,

                transition: { duration: 0.75, type: "tween" },
              }}
              viewport={{ once: true }}
              className=" relative isolate w-[300px] h-[300px] md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px]"
            >
              <motion.img
                src={main1}
                alt=""
                className={`absolute inset-0 top-1/2 right-1/2 -translate-y-1/2   hover:origin-top`}
                // style={{
                //   transform:
                //     isHover &&
                //     `translate3d(${(x - bounds.x * 3) / 100}px, ${
                //       (y - bounds.y * 50) / 120
                //     }px,0px)`,

                // }}
                // style={{
                //   perspective: isHover ? "3.6rem" : "3rem",
                // }}
              />
              <img
                src={main2}
                alt=""
                className=" absolute inset-0 w-[32%] top-[30%]  left-[60%] "
                style={{
                  transform:
                    isHover &&
                    `translate3d(${(bounds.x - x * 2) / 1000}px, ${
                      (bounds.y - y * 2) / 1000
                    }px,0px)`,
                }}
              />
              <img
                src={main3}
                alt=""
                className=" absolute inset-0 w-[25%] top-[40%]  left-[20%] "
                style={{
                  transform:
                    isHover &&
                    `translate3d(${(bounds.x - x * 2) / 1000}px, ${
                      (bounds.y - y * 2) / 1000
                    }px,0px)`,
                }}
              />
              <img
                src={main4}
                alt=""
                className=" absolute inset-0 w-[16%] top-[59%]  left-[11%] "
                style={{
                  transform:
                    isHover &&
                    `translate3d(${(bounds.x - x * 4) / 1000}px, ${
                      (bounds.y - y * 4) / 1000
                    }px,0px)`,
                }}
              />

              <img
                src={main5}
                alt=""
                className=" absolute inset-0 w-[60%] top-[10%] left-[30%]  "
                style={{
                  transform:
                    isHover &&
                    `translate3d(${(bounds.x - x * 5) / 1000}px, ${
                      (bounds.y - y * -6) / 1000
                    }px,0px)`,
                }}
              />
            </motion.div>
          </div>
        </section>
        <section className="bg-grad-pattern">
          <ServicesMidSection
            short={webdev}
            type={"webdev"}
            x={x}
            y={y}
            isHover={isHover}
          />
        </section>
        <section className=" ">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{
              y: "0%",
              opacity: 1,

              transition: { duration: 0.75, type: "tween" },
            }}
            viewport={{ once: true }}
          >
            <h2 className=" text-center py-6 flex flex-col text-xl font-bold md:p-8 md:text-3xl lg:py-10 lg:text-4xl 2xl:text-5xl">
              <span className=" text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
                Our Complete
              </span>{" "}
              <span className=" text-primary">Web Development Solutions</span>
            </h2>
          </motion.div>

          <div className="">
            <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center  gap-4 md:gap-8 lg:gap-14 xl:gap-16 2xl:gap-20 px-4 md:px-12 lg:px-32 xl:px-44 2xl:px-52">
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                whileInView={{
                  opacity: 1,
                  x: "0%",
                  transition: { duration: 0.75, type: "tween" },
                }}
                viewport={{ once: true }}
                className=" mt-8 flex flex-col justify-center items-center md:justify-start h-full w-full "
              >
                <motion.img
                  // initial={{ x: "-100%" }}
                  // whileInView={{
                  //   x: "0%",
                  //   transition: { type: "spring", duration: 1 },
                  // }}
                  src={wd}
                  alt=""
                  className="h-[170px] md:h-[200px] lg:h-[220px] xl:h-[240px]"
                />
                <div className=" self-start">
                  <h2 className=" mt-1 font-bold text-lg lg:text-xl 2xl:text-2xl">
                    WordPress / ECommerce Website Development
                  </h2>
                  <p className=" mt-1 font-medium text-[#434343] text-justify md:text-base">
                    Harness the Power of Highly Customizable and Scalable
                    Solutions as We Utilize WordPress to Create Bold,
                    High-Performance Websites. Join the Global Community
                    Embracing WordPress as the Premier CMS for Crafting Engaging
                    and Conversion-Driven Online Experiences.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                whileInView={{
                  opacity: 1,
                  x: "0%",
                  transition: { duration: 0.75, type: "tween" },
                }}
                viewport={{ once: true }}
                className=" mt-8 flex flex-col justify-center items-center md:justify-start h-full w-full"
              >
                <motion.img
                  // initial={{ x: "100%" }}
                  // whileInView={{
                  //   x: "0%",
                  //   transition: { type: "spring", duration: 1 },
                  // }}
                  src={landing}
                  alt=""
                  className="h-[170px] md:h-[200px] lg:h-[220px] xl:h-[240px] "
                />
                <div className="  self-start">
                  <h2 className=" mt-1 font-bold text-lg lg:text-xl 2xl:text-2xl">
                    Landing Pages Designed for Conversion Success
                  </h2>
                  <p className=" mt-1 font-medium text-[#434343] text-justify md:text-base">
                    Our Priority: Strategically Plan, Design, and Construct Each
                    Page to Effortlessly Guide Users Towards Key Actions,
                    Fulfilling Your Business Objectives. Elevate Your Digital
                    Strategy with Effective Landing Pages.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div className="">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-14 xl:gap-16 2xl:gap-20 px-4 md:px-12 lg:px-32 xl:px-44 2xl:px-52">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,

                  transition: { duration: 0.75 },
                }}
                viewport={{ once: true }}
                className=" mt-8 flex flex-col justify-center items-center md:justify-start h-full w-full"
              >
                <motion.img
                  // initial={{ x: "-100%" }}
                  // whileInView={{
                  //   x: "0%",
                  //   transition: { type: "spring", duration: 1 },
                  // }}
                  src={uiux}
                  alt=""
                  className=" h-[170px] md:h-[200px] lg:h-[220px] xl:h-[240px]"
                />
                <div className=" self-start">
                  <h2 className=" mt-1 font-bold text-lg lg:text-xl 2xl:text-2xl">
                    UI Design & UX Audit
                  </h2>
                  <p className=" mt-1 font-medium text-[#434343] text-justify md:text-base">
                    Elevating Aesthetics and User Experience. Our Philosophy:
                    Every Website Should Marry Beauty with User Goals. Hence, We
                    Prioritize UX, Ensuring Seamless User Journeys. Our
                    Proficient Developers Craft Websites for Diverse Industries
                    - From Eateries to Empowerment Fashion.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,

                  transition: { duration: 0.75 },
                }}
                viewport={{ once: true }}
                className=" mt-8 flex flex-col justify-center items-center md:justify-start h-full w-full"
              >
                <motion.img
                  // initial={{ x: "100%" }}
                  // whileInView={{
                  //   x: "0%",
                  //   transition: { type: "spring", duration: 1 },
                  // }}
                  src={seo}
                  alt=""
                  className=" h-[170px] md:h-[200px] lg:h-[220px] xl:h-[240px]"
                />
                <div className=" self-start">
                  <h2 className=" mt-1 font-bold text-lg lg:text-xl 2xl:text-2xl">
                    Unlocking SEO Excellence
                  </h2>
                  <p className=" mt-1 font-medium text-[#434343] text-justify md:text-base">
                    Your Path to Higher Rankings and Relevant Leads. Our
                    Arsenal: Diverse Strategies Tailored for Attracting Valuable
                    Leads. We Optimize Websites through Precision: Incorporating
                    Keywords, Meta Tags, Image Tags, and Enhancing Other
                    Elements to Elevate Your Search Engine Rankings.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="  pt-10 md:pt-14 lg:pt-16 2xl:pt-20 pb-4 md:pb-8 lg:pb-10 xl:pb-12 2xl:pb-14 md:px-2 lg:px-10 xl:px-14 2xl:px-20 ">
          <div className="animated-border">
            <div className="bg-gradient-to-r from-[#219dff] to-[#67dfcf]   rounded-tl-lg rounded-bl-lg rounded-br-lg ">
              <ServiceForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebDevelopment;
