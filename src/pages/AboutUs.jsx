import React from "react";
import { motion } from "framer-motion";

import logo from "../assets/images/logo3.png";
import center from "../assets/images/center.png";
import layer1 from "../assets/images/layer1.png";
import layer2 from "../assets/images/layer2.png";
import layer3 from "../assets/images/layer3.png";
import layer4 from "../assets/images/layer4.png";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";

const AboutUs = () => {
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
          <meta property="og:url" content={`http://samrdh.in/ourstory`} />
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
            <span className=" font-bold underline"> Our Story</span>
          </div>
          <div className="flex text-white ">
            <h1 className=" font-bold text-3xl md:text-5xl lg:text-5xl ">
              Our Story
            </h1>
          </div>
        </div>
        <section className="mt-1 md:mt-10 lg:mt-16 px-2 md:px-10 lg:px-32">
          <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-start  mt-4 p-2">
            <div className=" flex justify-center ">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{
                  x: "0%",
                  transition: {
                    duration: 0.75,
                    ease: "easeInOut",
                    type: "tween",
                  },
                }}
                viewport={{ once: true }}
                width={"100%"}
              >
                <img
                  src={logo}
                  alt=""
                  className=" max-w-[200px] md:max-w-[340px]"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ x: "100%" }}
              whileInView={{
                x: "0%",
                transition: {
                  duration: 0.75,
                  delay: 0.01,
                  ease: "easeInOut",
                  type: "tween",
                },
              }}
              viewport={{ once: true }}
              className="w-full p-2 md:p-0"
            >
              <h2 className=" font-bold text-[1.15rem] md:text-[1.75rem] xl:text-4xl  leading-7 md:leading-9 mb-3">
                <span>Unveiling Samrdh Design Studio and Branding : </span>
                <span>Where Creativity and Identity Converge</span>
              </h2>
              <div className="p-2">
                <h3 className=" text-primary font-bold text-base md:text-lg 2xl:text-xl mb-2 ">
                  Discover what we do and how we do it
                </h3>
                <div className="text-[#434343] p-1 font-medium text-base 2xl:text-lg text-justify">
                  <p className=" mb-2 text-[#434343] ">
                    Welcome to Samrdh Design Studio and Branding, a nexus of
                    visually pleasing creativity and smart brand development. We
                    are thrilled to introduce a collection of innovative designs
                    and transformative branding solutions that bring your vision
                    to life.
                  </p>
                  <p className=" mb-2 text-[#434343]">
                    Our team, helmed by founders Kamlesh Karekar and Ravi Kamat,
                    brings a dynamic fusion of creative minds and strategic
                    wizards. Since our inception in 2019, we've been dedicated
                    to crafting experiences that transcend the ordinary.
                  </p>
                  <a
                    href=""
                    className=" mt-4 md:mt-6 flex items-center text-lg md:text-xl 2xl:text-2xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <span className=" font-semibold text-[#434343] text-base md:text-lg 2xl:text-xl">
                      Our Headquarters: Panjim-Goa
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          <div className=" px-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{
                opacity: 1,
                scaleY: 1,
                transition: {
                  duration: 0.75,

                  ease: "easeInOut",
                  type: "tween",
                },
              }}
              viewport={{ once: true }}
              className="mt-2"
            >
              <h3 className=" text-primary font-bold text-4xl 2xl:text-5xl mb-3">
                Vision
              </h3>
              <p className=" font-medium text-[#434343] text-base 2xl:text-lg text-justify">
                Our vision is clear and resolute: to lead the charge in digital
                brilliance for every business. We strive to empower enterprises
                with unparalleled digital excellence, bridging the gap between
                potential and triumph in the ever-evolving digital sphere.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{
                opacity: 1,
                scaleY: 1,
                transition: {
                  duration: 0.75,

                  ease: "easeInOut",
                  type: "tween",
                },
              }}
              viewport={{ once: true }}
              className="mt-4 md:mt-2"
            >
              <h3 className=" text-primary font-bold text-4xl 2xl:text-5xl mb-3">
                Mission
              </h3>
              <p className=" font-medium text-[#434343] text-base 2xl:text-lg text-justify">
                We're more than strategists; we're architects of digital
                accomplishment. Our pledge is to provide inventive, strategic
                digital marketing solutions that empower clients to excel in the
                dynamic digital arena. With data-driven insights, creativity,
                and technology at our core, we amplify brands, enrich
                engagement, and optimize ROI. Together, we navigate the digital
                landscape to nurture lasting success.
              </p>
            </motion.div>
          </div>
        </section>
        <div className=" flex flex-col justify-center items-center influencerscreen3">
          <div className="p-2 mt-4 md:mt-16 lg:mt-32 px-2 md:px-32 lg:px-52">
            <motion.h3
              initial={{ opacity: 0, x: "100%" }}
              whileInView={{
                opacity: 1,
                x: "0%",
                transition: {
                  duration: 0.75,
                  ease: "easeInOut",
                  type: "spring",
                },
              }}
              viewport={{ once: true }}
              className=" font-bold text-xl md:text-3xl lg:text-3xl 2xl:text-4xl mb-1 md:mb-2 text-center  "
            >
              <span>Unleashing Excellence: A Dynamic Team of</span>
              <span> Digital Marketers,Designers, and Developers</span>
            </motion.h3>
            <motion.p
              initial={{ scaleY: 0 }}
              whileInView={{
                scaleY: 1,
                transition: { duration: 0.5, type: "spring" },
              }}
              viewport={{ once: true }}
              className="  px-2 lg:px-8 text-[#434343] font-medium  text-base lg:text-xl mt-2 md:mt-10  mb-2 md:mb-3 lg:mb-6 text-justify"
            >
              At the heart of our success lies a team driven by passion. We're
              not just professionals; we're enthusiasts who excel in digital
              marketing, design, and development. Our collective goal is to
              ensure your business shines brighter than the rest.
            </motion.p>
          </div>
          <div className="p-2 w-full flex justify-center items-center relative isolate">
            <div className=" absolute inset-0 "></div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5, type: "tween" },
              }}
              viewport={{ once: true }}
            >
              <img
                src={center}
                alt=""
                className=" max-w-[200px] md:max-w-[300px] lg:max-w-[400px] "
              />
            </motion.div>
          </div>
        </div>
        <div className="px-2 md:px-32 lg:px-52 flex flex-col  justify-center  items-center lg:items-start influencerscreen3  md:mb-2 xl:mb-3 ">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{
              x: "0%",
              transition: { duration: 0.5, type: "spring" },
            }}
            viewport={{ once: true }}
            className="p-2 mt-4 md:mt-12 lg:mt-20 xl:mt-24 self-start"
          >
            <h3 className=" font-bold text-xl md:text-3xl lg:text-3xl 2xl:text-4xl mb-2 text-center">
              <span>What Sets Us Apart?</span>
            </h3>
            <p className=" mt-3 md:mt-6 lg:mt-10  px-2 lg:px-8 text-[#434343] font-medium  text-base lg:text-xl  mb-2 md:mb-3 lg:mb-6 text-justify">
              In the digital realm, success hinges on brand visibility and
              targeted online traffic. Our meticulously crafted strategies are
              geared towards unlocking these keys to success for your business.
            </p>
          </motion.div>
          <div className=" px-12 flex justify-center items-center">
            <motion.div
              initial={{ x: "100%" }}
              whileInView={{
                x: "0%",
                transition: { duration: 0.5, type: "spring" },
              }}
              viewport={{ once: true }}
              className="p-2 grid grid-cols-2 md:grid-cols-4 gap-6 text-white mb-4"
            >
              <div className=" flex flex-col justify-end items-center aboutuscards">
                <img
                  src={layer1}
                  alt=""
                  className=" max-w-[90px] md:max-w-[120px] pt-1"
                />
                <h3 className=" font-bold md:text-base lg:text-lg text-center pt-1 md:pt-4 lg:pt-8">
                  Customised Solution
                </h3>
              </div>
              <div className=" flex flex-col justify-end items-center aboutuscards">
                <img
                  src={layer2}
                  alt=""
                  className=" max-w-[90px] md:max-w-[120px] pt-1"
                />
                <h3 className=" font-bold md:text-base lg:text-lg text-center pt-1 md:pt-4 lg:pt-8">
                  ROI Focussed Strategies
                </h3>
              </div>
              <div className=" flex flex-col justify-end items-center aboutuscards">
                <img
                  src={layer3}
                  alt=""
                  className=" max-w-[90px] md:max-w-[120px] pt-1"
                />
                <h3 className=" font-bold md:text-base lg:text-lg text-center pt-1 md:pt-4 lg:pt-8">
                  Enthusiastic Team of Experts
                </h3>
              </div>
              <div className=" flex flex-col justify-end items-center  aboutuscards">
                <img
                  src={layer4}
                  alt=""
                  className=" max-w-[90px] md:max-w-[120px] pt-1"
                />
                <h3 className=" font-bold md:text-base lg:text-lg text-center pt-1 md:pt-4 lg:pt-8">
                  Progressive Approach to Technology
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
