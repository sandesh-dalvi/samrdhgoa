import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";

import ServiceForm from "../components/ServiceForm";

import ServicesMidSection from "../components/ServicesMidSection";
import { contentcreate } from "../utils/ServicesAccData";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

import logo from "../assets/images/logo.png";
import { Helmet } from "react-helmet-async";

import main1 from "../assets/images/contentcreation/main/1.png";
import main2 from "../assets/images/contentcreation/main/2.png";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const ContentCreation = () => {
  const { scrollYProgress } = useScroll();
  // console.log(scrollYProgress);
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

        onMouseMove={(e) => (innerWidth >= 768 ? imageAnimate(e) : null)}
        onMouseOut={() => setIsHover(false)}
        className=" overflow-x-hidden"
      >
        <Helmet>
          <title>
            Samrdh Design Studio & Branding Pvt. Ltd. - Content Creation
          </title>
          <meta
            name="description"
            content="Elevate Your Digital Marketing with Samrdh Design Studio & Branding - a Content Marketing company in Goa. Our team of content marketing specialists empowers businesses to thrive by crafting powerful digital strategies."
          />
          <meta
            name="keywords"
            content="content creation in goa, content creation, socila media, disgital marketing in goa, digital marketing"
          />
          <meta
            property="og:title"
            content="Samrdh Design Studio & Branding Pvt. Ltd. - Content Creation"
          />
          <meta
            property="og:description"
            content="Elevate Your Digital Marketing with Samrdh Design Studio & Branding - a Content Marketing company in Goa. Our team of content marketing specialists empowers businesses to thrive by crafting powerful digital strategies."
          />
          <meta property="og:image" content={logo} />
          <meta
            property="og:url"
            content={`http://samrdh.in/service/content-creation`}
          />
          <meta
            name="twitter:title"
            content="Samrdh Design Studio & Branding Pvt. Ltd. - Content Creation"
          />
          <meta
            name="twitter:description"
            content="Elevate Your Digital Marketing with Samrdh Design Studio & Branding - a Content Marketing company in Goa. Our team of content marketing specialists empowers businesses to thrive by crafting powerful digital strategies."
          />
          <meta name="twitter:image" content={logo} />
          <meta name="twitter:card" content="summary" />
        </Helmet>
        <div
          className={` bg-[#000000] bg-opacity-90 text-white flex flex-col-reverse md:flex-row justify-evenly items-center h-[15vh] overflow-hidden  p-2  aboutheader`}
        >
          <div className="flex text-white justify-evenly items-center gap-2  bg-primary bg-opacity-90 p-1 px-2 md:p-2 md:px-4 rounded-lg  md:text-base">
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
            <span className=" font-bold underline"> Content Creation</span>
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
                Unlock{" "}
              </span>
              <span className=" text-primary">
                Creative Possibilities with Our Content Creation{" "}
              </span>
              <span className=" text-primary"> </span>
            </h2>

            <div className=" mt-2 flex justify-start items-center">
              <div className="font-medium text-[#434343] text-justify md:text-base">
                <p className=" text-justify md:max-w-md lg:max-w-lg  xl:max-w-2xl mb-2 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14">
                  Elevate Your Digital Marketing with Samrdh Design Studio &
                  Branding - a Content Marketing company in Goa. Our team of
                  content marketing specialists empowers businesses to thrive by
                  crafting powerful digital strategies. Experience the pinnacle
                  of content creation and technological prowess, allowing you to
                  captivate, convert, and cultivate new customers. Witness
                  amplified engagement, soaring sales, and heightened revenue
                  through our expertise.
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
              className=" relative isolate w-[300px] h-[300px] md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px]"
            >
              <motion.img
                src={main1}
                alt=""
                className={`absolute inset-0  left-[-2%]   hover:origin-top`}
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
                className=" absolute inset-0  "
                style={{
                  transform:
                    isHover &&
                    `translate3d(${(bounds.x - x * -10) / 1000}px, ${
                      (bounds.y - y * -10) / 1000
                    }px,0px)`,
                }}
              />
            </motion.div>
          </div>
        </section>
        <section className="bg-gradient-to-r from-[#219dff] to-[#67dfcf]  ">
          <ServicesMidSection
            short={contentcreate}
            type={"contentcreate"}
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

export default ContentCreation;
