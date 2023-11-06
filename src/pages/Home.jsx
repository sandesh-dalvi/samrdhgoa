import React, { useRef, useState } from "react";
import video from "../assets/videos/header.mp4";

import headerImg from "../assets/images/header.jpg";

import logo from "../assets/images/logo.png";
import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";

import influencer from "../assets/images/influencer.png";

import OurWorks from "../components/OurWorks";
import OurServices from "../components/OurServices";

import { motion } from "framer-motion";
import ReviewsSlider from "../components/ReviewsSlider";

import Lottie from "lottie-react";
import aboutAnimation from "../assets/lottie/animation_f.json";

const Home = () => {
  return (
    <div className=" overflow-x-hidden">
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.75, delay: 1 }}
        className="  grid place-content-center fixed inset-0 w-full h-full bg-white z-[999999]"
      >
        <img src="/spinner.gif" alt="" />
      </motion.div>
      <Helmet>
        <title>Samrdh Design Studio & Branding Pvt. Ltd.</title>
        <meta
          name="description"
          content="At Samrdh, we're not just another digital marketing company - we're your growth partners. With a focus on precision and innovation, we specialize in the art of Growth Hacking."
        />
        <meta
          name="keywords"
          content="seo,digital marketing, goa, digital marketing in goa, design studio in goa, design studio, web design, web development, samrdh"
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
        <meta property="og:url" content="http://samrdh.in/" />
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
      <main className=" mt-2 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="px-2 md:px-10 lg:px-20"
        >
          <div className="hero-video  rounded-bl-3xl rounded-br-3xl rounded-tl-3xl overflow-hidden w-full h-auto relative isolate shadow-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              // controls
              preload="none"
              poster={headerImg}
              className="w-full rounded-bl-3xl rounded-br-3xl rounded-tl-3xl"
            >
              <source src={video} />
            </video>
            <motion.div className=" absolute bottom-0 w-full bg-[rgba(0_0_0/0.1)] h-[20%]"></motion.div>
            {/* <motion.div
              initial={{ left: "-20%", bottom: "-20%" }}
              animate={{ left: "50%", bottom: "50%" }}
              transition={{ duration: 1 }}
              exit={{ left: "50%", bottom: "50%" }}
              className=" absolute bottom-0 h-[100px] w-[100px] bg-primary rounded-full aspect-square"
            ></motion.div> */}
          </div>
        </motion.div>

        <section className="about-section p-4 md:pt-8 lg:pt-8 xl:pt-12">
          <div className="md:flex md:justify-center  items-center gap-4 md:gap-8 lg:gap-20 xl:gap-32 2xl:gap-48">
            <div className="about-images p-4 flex justify-center items-center">
              <div className=" max-w-sm rounded-full overflow-hidden">
                <Lottie animationData={aboutAnimation} loop={true} />
              </div>
            </div>
            <div className="about-content md:max-w-lg lg:max-w-xl xl:max-w-3xl ">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  viewport={{ once: true }}
                  whileInView={{
                    x: "0%",
                    opacity: 1,
                    transition: { duration: 1.2 },
                  }}
                  exit={{ x: "100%", opacity: 0 }}
                >
                  <h2 className="text-lg leading-3 md:text-xl md:leading-4 xl:text-2xl xl:leading-5 text-gray-600  font-semibold">
                    Our Story
                  </h2>
                  <h3 className="font-bold text-3xl xl:text-5xl  ">
                    Your Premier Digital Marketing Partner in Goa!
                  </h3>
                  <p className="mt-1 md:mt-2 lg:mt-3 2xl:mt-4 mb-2 text-neutral-600 font-medium text-base  xl:text-lg ">
                    Are you ready to propel your brand's growth to new heights?
                    Look no further. At Samrdh, we're not just another digital
                    marketing company - we're your growth partners. With a focus
                    on precision and innovation, we specialize in the art of
                    Growth Hacking.
                  </p>
                  <p className="mb-2 text-neutral-600 font-medium text-base  xl:text-lg ">
                    Located in the heart of Goa, we are experts with a global
                    mindset. Our mission is crystal clear: we're here to help
                    your brand not just survive but thrive. Through our dynamic
                    strategies, we ensure that your brand doesn't just acquire
                    customers; it creates loyal advocates.
                  </p>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                whileInView={{
                  x: "0%",
                  opacity: 1,
                  transition: { duration: 1, delay: 0.3 },
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                exit={{ opacity: 0 }}
                className=" w-fit"
              >
                <Link
                  to={"/ourstory"}
                  className="mt-3 lg:mt-3 2xl:mt-4 inline-flex rounded-3xl p-2 px-4 font-bold md:text-base bg-primary text-white md:p-3 md:px-5 xl:text-lg  shadow-lg"
                >
                  Know more
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section className=" p-4 grid grid-cols-1 justify-center items-center md:px-16 lg:px-24 xl:px-28 2xl:px-36 pb-0 md:pt-10">
          <motion.div className=" p-2 md:p-4 text-center overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              viewport={{ once: true }}
              whileInView={{ y: "0%", transition: { duration: 1 } }}
            >
              <h2 className=" text-center font-bold text-4xl lg:text-5xl 2xl:text-[3.5rem] text-cyan-900">
                Our Partners
              </h2>
              <h3 className="py-2 font-semibold text-base md:text-lg xl:text-xl  text-cyan-900">
                Connecting Across Industries
              </h3>
            </motion.div>
          </motion.div>
          <div>
            <iframe
              id="myiframe"
              src="/slider.html"
              style={{
                width: "1280px",
                // height: "300px",
                maxWidth: "100%",
                overflow: "hidden",
                border: "none",
                padding: 0,
                margin: "0 auto",
                display: "block",
              }}
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              className="h-[190px] min-[355px]:h-[200px] min-[385px]:h-[210px] min-[403px]:h-[220px] min-[425px]:h-[230px] min-[443px]:h-[250px] min-[475px]:h-[260px] min-[495px]:h-[270px] min-[510px]:h-[280px] min-[520px]:h-[290px] min-[535px]:h-[300px] min-[565px]:h-[310px] min-[585px]:h-[320px] min-[603px]:h-[330px] min-[621px]:h-[340px] min-[637px]:h-[350px] min-[655px]:h-[360px] min-[669px]:h-[370px] min-[689px]:h-[380px] min-[707px]:h-[390px] min-[723px]:h-[400px] min-[745px]:h-[410px] min-[857px]:h-[420px] min-[869px]:h-[430px] min-[891px]:h-[440px] min-[905px]:h-[450px] min-[927px]:h-[460px] min-[945px]:h-[470px] min-[963px]:h-[480px] min-[981px]:h-[490px] min-[1005px]:h-[500px] min-[1077px]:h-[510px] min-[1101px]:h-[520px] min-[1121px]:h-[530px] min-[1137px]:h-[540px] min-[1149px]:h-[550px] min-[1165px]:h-[560px] min-[1191px]:h-[570px] min-[1201px]:h-[580px] min-[1223px]:h-[590px] min-[1241px]:h-[600px] min-[1287px]:h-[610px] min-[1307px]:h-[620px] min-[1327px]:h-[630px] min-[1341px]:h-[640px] min-[1375px]:h-[660px] min-[1405px]:h-[680px] min-[1435px]:h-[700px] min-[1467px]:h-[720px]"
            ></iframe>
          </div>
        </section>

        <div
          className={` bg-[#000000] bg-opacity-90 text-white flex flex-col-reverse md:flex-row justify-evenly items-center min-h-[10vh] overflow-hidden  p-2  careerdivider mt-1 md:mt-6 lg:mt-12 xl:mt-16 2xl:mt-20`}
        >
          <div className=" text-white px-10 font-bold text-3xl lg:text-4xl xl:text-5xl p-4 md:p-10 lg:p-16 md:px-24 text-center flex gap-1 md:gap-2 ">
            <motion.div
            // initial={{ x: "-100%" }}
            // whileInView={{
            //   x: "0%",
            //   transition: { duration: 1 },
            // }}
            >
              Our Work
            </motion.div>
            <motion.div
            // initial={{ x: "100%" }}
            // whileInView={{
            //   x: "0%",

            //   transition: { duration: 1 },
            // }}
            >
              {" "}
              in Action
            </motion.div>
          </div>
        </div>

        {/* <section className="range-slider-section bg-[#1f1e23] text-white p-8 md:px-24 lg:px-28">
        <div className="sm:flex justify-around items-center">
          <div className="ceo-section">
            <h2 className="text-3xl font-bold">
              We make the quality designs & development
            </h2>
            <div className="ceo flex items-center gap-2">
              <img
                src={person}
                alt=""
                className="w-[70px] h-[70px] rounded-full border-white border-2"
              />
              <h4 className="font-[1.6rem] font-caveat">John Smith</h4>
            </div>
          </div>
          <div className="slider-section">
            <WorkCompletionSlider />
          </div>
        </div>
      </section> */}

        <OurWorks />

        <section className=" grid justify-center items-center w-full pt-3 md:pt-8 md:pb-8 ">
          <div className=" p-3">
            <ReviewsSlider />
            <div className="py-2 flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1, delay: 0.3 },
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                exit={{ opacity: 0 }}
                className="  w-fit"
              >
                <Link
                  to={"/testimonials"}
                  className="mt-3 lg:mt-3 2xl:mt-4 inline-flex rounded-3xl p-2 px-4 font-bold md:text-base bg-primary text-white md:p-3 md:px-5 xl:text-lg  shadow-lg"
                >
                  See more
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="  bg-gradient-to-r from-[rgba(189,255,203,0.3)] to-[#95ffe830]  ">
          <OurServices />
        </div>

        <section className=" pt-4 flex flex-col md:flex-row justify-center items-center px-4 md:px-8 lg:px-20 xl:px-24 2xl:px-32 gap-4 md:gap-8 lg:gap-20 xl:gap-32 2xl:gap-48 bg-grad-pattern">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: "0%", transition: { duration: 0.5 } }}
            className=" text-center md:text-left"
          >
            <h2 className=" font-bold text-3xl lg:text-5xl 2xl:text-[3.5rem] ">
              Meet our Exclusive Influencers
            </h2>
            <h3 className=" mt-2 font-semibold text-cyan-900 text-xl md:text-2xl xl:text-3xl">
              Our Influencer Partnerships
            </h3>
            <p className=" mt-2 font-medium text-cyan-50 text-base  xl:text-lg  md:max-w-xl xl:max-w-3xl">
              Explore the exciting campaigns and partnerships we've undertaken
              with influencers across various industries. See how we've
              leveraged their influence to achieve outstanding results.
            </p>
            <div className=" flex justify-center items-center md:w-fit">
              <motion.div
                className="w-fit"
                animate={{
                  scale: [1, 1.1, 1.1, 1, 1],
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.4, 0.6, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <Link
                  className=" my-3 inline-flex rounded-3xl p-2 px-4 font-bold md:text-base bg-primary text-white md:p-3 md:px-5 lg:text-lg  shadow-lg"
                  to={"/influencers"}
                >
                  Know More
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <div className="p-4 2xl:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img
                src={influencer}
                className=" max-w-[250px] 2xl:max-w-md"
                alt=""
              />
            </motion.div>
          </div>
        </section>

        <section className="map-section w-full h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.7512345367104!2d73.82170247504118!3d15.497807485101873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc19552f23655%3A0x9fe81848e54f332f!2sSamrdh%20Design%20Studio%20%26%20Branding%20Pvt.Ltd.!5e0!3m2!1sen!2sin!4v1688454459572!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[40vh]"
          ></iframe>
        </section>
      </main>
    </div>
  );
};

export default Home;
