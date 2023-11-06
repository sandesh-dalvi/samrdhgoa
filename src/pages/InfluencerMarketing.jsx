import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { influencemarket } from "../utils/ServicesAccData";

import landing from "../assets/images/landing.png";

import ServiceForm from "../components/ServiceForm";

import ServicesMidSection from "../components/ServicesMidSection";

import useMeasure from "react-use-measure";

import logo from "../assets/images/logo.png";
import { Helmet } from "react-helmet-async";

import main11 from "../assets/images/influencermarketing/main1/1.png";
import main12 from "../assets/images/influencermarketing/main1/2.png";
import main13 from "../assets/images/influencermarketing/main1/3.png";
import main14 from "../assets/images/influencermarketing/main1/4.png";

import main21 from "../assets/images/influencermarketing/main2/1.png";
import main22 from "../assets/images/influencermarketing/main2/2.png";
import main23 from "../assets/images/influencermarketing/main2/3.png";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
const InfluencerMarketing = () => {
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
            Samrdh Design Studio & Branding Pvt. Ltd. - Influencer Marketing
          </title>
          <meta
            name="description"
            content="In a fast-paced digital landscape, influencer marketing stands out as a swift and potent strategy to connect with your desired audience. We've witnessed its prowess firsthand, leveraging the authenticity and magnetism of influencers to achieve remarkable outcomes."
          />
          <meta
            name="keywords"
            content="influencers in goa, influencers, influencer marketing, influencer promotions, samrdh, goa, digital marketing"
          />
          <meta
            property="og:title"
            content="Samrdh Design Studio & Branding Pvt. Ltd. - Influencer Marketing"
          />
          <meta
            property="og:description"
            content="In a fast-paced digital landscape, influencer marketing stands out as a swift and potent strategy to connect with your desired audience. We've witnessed its prowess firsthand, leveraging the authenticity and magnetism of influencers to achieve remarkable outcomes."
          />
          <meta property="og:image" content={logo} />
          <meta
            property="og:url"
            content={`http://samrdh.in/service/influencer-marketing`}
          />
          <meta
            name="twitter:title"
            content="Samrdh Design Studio & Branding Pvt. Ltd. - Influencer Marketing"
          />
          <meta
            name="twitter:description"
            content="In a fast-paced digital landscape, influencer marketing stands out as a swift and potent strategy to connect with your desired audience. We've witnessed its prowess firsthand, leveraging the authenticity and magnetism of influencers to achieve remarkable outcomes."
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
            <span className=" font-bold underline"> Influencer Marketing</span>
          </div>
          {/* <div className="flex text-white ">
          <h1 className=" font-bold text-2xl sm:text-2xl md:text-4xl lg:text-5xl ">
            Web Development
          </h1>
        </div> */}
        </div>
        <section className=" shadow-inner pt-3 md:pt-5 lg:pt-7   px-4 md:px-12 lg:px-32 xl:px-44 2xl:px-52 justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-14 xl:gap-16 2xl:gap-20 justify-center items-center">
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
                  Elevate{" "}
                </span>
                <span className=" text-primary">
                  Your Brand with Influencer Marketing{" "}
                </span>
                <span className=" text-primary"> </span>
              </h2>
              <div ref={ref} className=" flex justify-center items-center">
                <motion.div className=" relative isolate w-[300px] h-[300px] md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px]">
                  <motion.img
                    src={main11}
                    alt=""
                    className={`absolute  top-1/2 right-[5%] -translate-y-1/2 md:top-[60%]   hover:origin-top`}
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
                    src={main12}
                    alt=""
                    className=" absolute   left-[8%] w-[65%] top-[33%] md:top-[43%] "
                    style={{
                      transform:
                        isHover &&
                        `translate3d(${(bounds.x - x * 5) / 1000}px, ${
                          (bounds.y - y * 5) / 1000
                        }px,0px)`,
                    }}
                  />
                  <img
                    src={main13}
                    alt=""
                    className=" absolute right-[5%] top-[3%] md:top-[13%] "
                    style={{
                      transform:
                        isHover &&
                        `translate3d(${(bounds.x - x * -2) / 1000}px, ${
                          (bounds.y - y * -2) / 1000
                        }px,0px)`,
                    }}
                  />
                  <img
                    src={main14}
                    alt=""
                    className=" absolute  bottom-[2%] "
                    style={{
                      transform:
                        isHover &&
                        `translate3d(${(bounds.x - x * -4) / 1000}px, ${
                          (bounds.y - y * 0) / 1000
                        }px,0px)`,
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: "100%" }}
              whileInView={{
                x: "0%",
                transition: { duration: 0.75, type: "spring" },
              }}
              viewport={{ once: true }}
            >
              <h2 className=" font-bold text-lg md:text-xl lg:text-2xl flex flex-col items-start ">
                Embracing the Evolution: From Social Media Enthusiasts to Brand
                Amplifiers
              </h2>

              <div className=" mt-2 flex justify-start items-center">
                <div className="font-medium text-[#434343] text-justify md:text-base">
                  <p className=" text-justify md:max-w-md lg:max-w-lg  xl:max-w-2xl mb-2 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14">
                    A few years ago, social media underwent a transformation as
                    passionate individuals rose to prominence, amassing devoted
                    followings and creating significant impact. Recognizing the
                    potential of this movement, we embarked on a journey to
                    collaborate with these trailblazers, utilizing their
                    influence to expand our reach and promote brands
                    effectively. We take immense pride in being pioneers as one
                    of the earliest influencer marketing companies in Goa,
                    leading the charge in this dynamic realm.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-14 xl:gap-16 2xl:gap-20 justify-center items-center">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{
                x: "0%",
                transition: { duration: 0.75, type: "spring" },
              }}
              viewport={{ once: true }}
            >
              <h2 className=" font-bold text-lg md:text-xl lg:text-2xl flex flex-col items-start ">
                Why Influencer Marketing?
              </h2>

              <div className=" mt-2 flex justify-start items-center">
                <div className="font-medium text-[#434343] text-justify md:text-base">
                  <p className=" text-justify md:max-w-md lg:max-w-lg  xl:max-w-2xl mb-2 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14">
                    In a fast-paced digital landscape, influencer marketing
                    stands out as a swift and potent strategy to connect with
                    your desired audience. We've witnessed its prowess
                    firsthand, leveraging the authenticity and magnetism of
                    influencers to achieve remarkable outcomes.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{
                y: "0%",
                opacity: 1,
                transition: { duration: 0.75, type: "spring" },
              }}
              viewport={{ once: true }}
              ref={ref}
              className=" flex justify-center items-center"
            >
              <motion.div className=" relative isolate w-[300px] h-[300px] md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px]">
                <motion.img
                  src={main21}
                  alt=""
                  className={`absolute right-[2%] md:top-[-10%]   hover:origin-top`}
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
                  src={main22}
                  alt=""
                  className=" absolute md:top-[-10%]  "
                  style={{
                    transform:
                      isHover &&
                      `translate3d(${(bounds.x - x * 10) / 1000}px, ${
                        (bounds.y - y * 10) / 1000
                      }px,0px)`,
                  }}
                />
                <img
                  src={main23}
                  alt=""
                  className=" absolute top-[4%] left-[25%] w-[70%] md:top-[-14%] "
                  style={{
                    transform:
                      isHover &&
                      `translate3d(${(bounds.x - x * -10) / 1000}px, ${
                        (bounds.y - y * -10) / 1000
                      }px,0px)`,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section className="bg-grad-pattern  ">
          <ServicesMidSection
            long={influencemarket}
            type={"influencemarket"}
            x={x}
            y={y}
            isHover={isHover}
          />
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

export default InfluencerMarketing;
