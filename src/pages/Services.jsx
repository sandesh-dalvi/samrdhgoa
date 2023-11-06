import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import im from "../assets/images/im.png";
import cc from "../assets/images/cc.png";
import gd from "../assets/images/gd.png";
import em from "../assets/images/em.png";
import pb from "../assets/images/pb.png";
import sa from "../assets/images/sa.png";
import sm from "../assets/images/sm.png";
import vm from "../assets/images/vm.png";
import wd from "../assets/images/wd.png";
import ServiceForm from "../components/ServiceForm";

import logo from "../assets/images/logo.png";
import { Helmet } from "react-helmet-async";

const variants = {
  visible: { opacity: 1 },

  hidden: { opacity: 0 },
  hidden2: { opacity: 0 },
};

const Services = () => {
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
          <title>Samrdh Design Studio & Branding Pvt. Ltd. - Services</title>
          <meta
            name="description"
            content="Unlock Your Brand's Potential with Premier Digital Marketing
            Services in Goa."
          />
          <meta
            name="keywords"
            content="digital marketing, content creation, graphic designing, web development, web design, printing, branding, influencers, campaigns, video editing"
          />
          <meta
            property="og:title"
            content="Samrdh Design Studio & Branding Pvt. Ltd. - Services"
          />
          <meta
            property="og:description"
            content="Unlock Your Brand's Potential with Premier Digital Marketing
            Services in Goa."
          />
          <meta property="og:image" content={logo} />
          <meta property="og:url" content={`http://samrdh.in/services`} />
          <meta
            name="twitter:title"
            content="Samrdh Design Studio & Branding Pvt. Ltd. - Services"
          />
          <meta
            name="twitter:description"
            content="Unlock Your Brand's Potential with Premier Digital Marketing
            Services in Goa."
          />
          <meta name="twitter:image" content={logo} />
          <meta name="twitter:card" content="summary" />
        </Helmet>
        <div
          className={` bg-[#000000] bg-opacity-90 text-white flex flex-col-reverse md:flex-row justify-evenly items-center h-[15vh] overflow-hidden  p-2  aboutheader`}
        >
          <div className="flex text-white justify-evenly items-center gap-2  bg-primary bg-opacity-90 p-1 px-2 md:p-2 md:px-4 rounded-lg">
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
            <span className=" font-bold underline"> Services</span>
          </div>
          <div className="flex text-white ">
            <h1 className=" font-bold text-2xl sm:text-2xl md:text-4xl lg:text-5xl ">
              Services
            </h1>
          </div>
        </div>

        <section className="mt-1 p-4 md:mt-6  lg:mt-10 px-10 md:px-16 lg:px-32 xl:px-40">
          <h2 className=" text-center font-bold text-3xl md:text-4xl xl:text-5xl">
            Samrdh Services
          </h2>
          <h3 className=" text-center font-semibold mt-2 text-[#434343] md:text-base xl:text-lg">
            Unlock Your Brand's Potential with Premier Digital Marketing
            Services.
          </h3>
          <motion.div className=" grid grid-cols-1 md:grid-cols-3 mt-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12 2xl:gap-16">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className=" bg-white p-3 flex flex-col justify-between items-center md:mt-4 lg:mt-6 xl:mt-8 aboutcard"
            >
              <div className=" mt-3 flex flex-col lg:flex-row gap-1 w-full justify-evenly lg:justify-evenly  items-center">
                <img src={sm} alt="" className=" h-[90px] lg:h-[100px]" />
                <h3 className=" font-bold flex mt-1 md:flex-col   text-lg text-center xl:text-xl gap-1">
                  <span>Social Media </span>
                  <span> Marketing</span>
                </h3>
              </div>
              <p className=" mt-2 w-full text-justify px-2 text-black text-sm lg:text-base">
                Social media serve as huge platforms to build your presence
                online and engage with your audience. Our SMM experts help you
                choose the right Social Media platform, reach your target
                audience, and put out the right content at the right time.
              </p>

              <Link
                to={`/service/social-media-marketing`}
                className="bg-primary p-2 my-3  px-4 w-fit rounded-lg text-white font-bold lg:text-base transition-all shadow-[4px_4px_6px_#669e71] hover:shadow-[2px_2px_2px_#669e71] "
              >
                Read On
              </Link>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className=" bg-white p-3 flex flex-col justify-between items-center md:mt-4 lg:mt-6 xl:mt-8 aboutcard"
            >
              <div className=" mt-3 flex flex-col lg:flex-row gap-1 w-full justify-evenly lg:justify-evenly  items-center">
                <img src={wd} alt="" className=" h-[90px] lg:h-[100px]" />
                <h3 className=" font-bold flex mt-1  md:flex-col text-lg xl:text-xl text-center gap-1">
                  <span>Website Design & </span>
                  <span> Development</span>
                </h3>
              </div>
              <p className=" mt-2 w-full text-justify px-2 lg:text-base">
                Build up your Digital presence with an aptly designed website
                for your business. Our Website Development team will help you in
                designing & developing the best website with an astute balance
                of creativity to increase traffic and appeal.
              </p>
              <Link
                to={`/service/web-development`}
                className="bg-primary p-2 my-3  px-4 w-fit rounded-lg text-white font-bold lg:text-base transition-all shadow-[4px_4px_6px_#669e71] hover:shadow-[2px_2px_2px_#669e71]"
              >
                Read On
              </Link>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className=" bg-white p-3 flex flex-col justify-between items-center md:mt-4 lg:mt-6 xl:mt-8 aboutcard"
            >
              <div className=" mt-3 flex flex-col lg:flex-row gap-1 w-full justify-evenly  lg:justify-evenly items-center">
                <img src={gd} alt="" className=" h-[90px] lg:h-[100px]" />
                <h3 className=" font-bold flex mt-1  md:flex-col text-lg xl:text-xl text-center gap-1">
                  <span>Graphic </span>
                  <span> Designing</span>
                </h3>
              </div>
              <p className=" mt-2 w-full text-justify px-2 lg:text-base">
                A person spends 5 seconds on average while surfing the web.
                That's not a lot of time for glancing & its probable messages
                can be ignored before they're even grasped. Compelling &
                creative graphic images not only convey your intention but also
                share your ideological identity!
              </p>
              <Link
                to={`/service/graphic-designing`}
                className="bg-primary p-2 my-3  px-4 w-fit rounded-lg text-white font-bold lg:text-base transition-all shadow-[4px_4px_6px_#669e71] hover:shadow-[2px_2px_2px_#669e71]"
              >
                Read On
              </Link>
            </motion.div>
          </motion.div>
          <motion.div className=" grid grid-cols-1 md:grid-cols-3 mt-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className=" bg-white p-3 flex flex-col justify-between items-center md:mt-4 lg:mt-6 xl:mt-8 aboutcard"
            >
              <div className=" mt-3 flex flex-col lg:flex-row gap-1 w-full justify-evenly lg:justify-evenly  items-center">
                <img src={cc} alt="" className=" h-[90px] lg:h-[100px]" />
                <h3 className=" font-bold flex mt-1  md:flex-col text-lg xl:text-xl text-center gap-1">
                  <span>Content </span>
                  <span> Creation </span>
                </h3>
              </div>
              <p className=" mt-2 w-full text-justify px-2 lg:text-base">
                The age-old adage stating 'Content is king' still rules! Search
                engines crawl & rank through loads of content & it is of
                paramount importance that you stand out! Our content marketers
                develop engaging content for your website, blogs, and social
                media platforms to keep your audience hooked on!
              </p>
              <Link
                to={`/service/content-creation`}
                className="bg-primary p-2 my-3  px-4 w-fit rounded-lg text-white font-bold lg:text-base transition-all shadow-[4px_4px_6px_#669e71] hover:shadow-[2px_2px_2px_#669e71]"
              >
                Read On
              </Link>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className=" bg-white p-3 flex flex-col justify-between items-center md:mt-4 lg:mt-6 xl:mt-8 aboutcard"
            >
              <div className=" mt-3 flex flex-col lg:flex-row gap-1 w-full justify-evenly lg:justify-evenly  items-center">
                <img src={em} alt="" className=" h-[90px] lg:h-[100px]" />
                <h3 className=" font-bold flex mt-1  md:flex-col text-lg xl:text-xl text-center gap-1">
                  <span>Email </span>
                  <span> Marketing</span>
                </h3>
              </div>
              <p className=" mt-2 w-full text-justify px-2 lg:text-base">
                E-mail inboxes are a much more private space than an explore
                feed. Gaining access to your client's email can help maintain a
                relationship with them. DigitCure facilitates e-mail campaigns
                with objectives like brand awareness, customer engagement & lead
                generation.
              </p>
              <Link
                to={`/service/email-marketing`}
                className="bg-primary p-2 my-3  px-4 w-fit rounded-lg text-white font-bold  lg:text-base transition-all shadow-[4px_4px_6px_#669e71] hover:shadow-[2px_2px_2px_#669e71]"
              >
                Read On
              </Link>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className=" bg-white p-3 flex flex-col justify-between items-center md:mt-4 lg:mt-6 xl:mt-8 aboutcard"
            >
              <div className=" mt-3 flex flex-col lg:flex-row gap-1 w-full justify-evenly lg:justify-evenly  items-center">
                <img src={im} alt="" className=" h-[90px] lg:h-[100px]" />
                <h3 className=" font-bold flex mt-1  md:flex-col text-lg xl:text-xl text-center gap-1">
                  <span>Influencer </span>
                  <span> Marketing</span>
                </h3>
              </div>
              <p className=" mt-2 w-full text-justify px-2 lg:text-base">
                Influencers help your business grow by delivering your message
                to a larger audience using their immense reach which builds
                awareness. We'll deliver a result-oriented Influencer Marketing
                campaign by identifying and engaging with key influencers right
                for your brand.
              </p>
              <Link
                to={`/service/influencer-marketing`}
                className="bg-primary p-2 my-3  px-4 w-fit rounded-lg text-white font-bold lg:text-base transition-all shadow-[4px_4px_6px_#669e71] hover:shadow-[2px_2px_2px_#669e71]"
              >
                Read On
              </Link>
            </motion.div>
          </motion.div>
          <motion.div className=" grid grid-cols-1 md:grid-cols-3 mt-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className=" bg-white p-3 flex flex-col justify-between items-center md:mt-4 lg:mt-6 xl:mt-8 aboutcard"
            >
              <div className=" mt-3 flex flex-col lg:flex-row gap-1 w-full justify-evenly lg:justify-evenly  items-center">
                <img src={pb} alt="" className=" h-[90px] lg:h-[100px]" />
                <h3 className=" font-bold flex mt-1  md:flex-col text-lg xl:text-xl text-center gap-1">
                  <span>Printing & </span>
                  <span> Branding </span>
                </h3>
              </div>
              <p className=" mt-2 w-full text-justify px-2 lg:text-base">
                Printing & Branding is crafting visual materials, including
                business cards, brochures, posters, and more. It merges logo
                design, color palettes, typography, and visual language to
                convey a brand's essence and values.
              </p>
              <Link
                to={`/service/printing-and-branding`}
                className="bg-primary p-2 my-3  px-4 w-fit rounded-lg text-white font-bold lg:text-base transition-all shadow-[4px_4px_6px_#669e71] hover:shadow-[2px_2px_2px_#669e71]"
              >
                Read On
              </Link>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className=" bg-white p-3 flex flex-col justify-between items-center md:mt-4 lg:mt-6 xl:mt-8 aboutcard"
            >
              <div className=" mt-3 flex flex-col lg:flex-row gap-1 w-full justify-evenly lg:justify-evenly  items-center">
                <img src={sa} alt="" className=" h-[90px] lg:h-[100px]" />
                <h3 className=" font-bold flex mt-1  md:flex-col text-lg xl:text-xl text-center gap-1">
                  <span>SEM & </span>
                  <span> Advertising</span>
                </h3>
              </div>
              <p className=" mt-2 w-full text-justify px-2 lg:text-base">
                SEM & Advertising is a strategic online promotion. Search Engine
                Marketing (SEM) leverages paid search ads to enhance visibility
                on search engines. Advertising targets audiences through various
                channels, utilizing visuals and content to engage and drive
                action, maximizing brand reach and impact.
              </p>
              <Link
                to={`/service/sem-and-advertisement`}
                className="bg-primary p-2 my-3  px-4 w-fit rounded-lg text-white font-bold lg:text-base transition-all shadow-[4px_4px_6px_#669e71] hover:shadow-[2px_2px_2px_#669e71]"
              >
                Read On
              </Link>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className=" bg-white p-3 flex flex-col justify-between items-center md:mt-4 lg:mt-6 xl:mt-8 aboutcard"
            >
              <div className=" mt-3 flex flex-col lg:flex-row gap-1 w-full justify-evenly lg:justify-evenly  items-center lg:gap-2">
                <img src={vm} alt="" className=" h-[90px] lg:h-[100px]" />
                <h3 className=" font-bold flex mt-1  md:flex-col text-lg xl:text-xl text-center gap-1">
                  <span>Video </span>
                  <span> Marketing</span>
                </h3>
              </div>
              <p className=" mt-2 w-full text-justify px-2 lg:text-base">
                In line with recent trends, videos drive superior engagement
                compared to other media. We specialize in crafting captivating
                video content that embodies your brand, amplifying its reach
                through diverse digital and social platforms. Experience more
                views, heightened awareness, and an enhanced social presence!
              </p>
              <Link
                to={`/service/video-marketing`}
                className="bg-primary p-2 my-3  px-4 w-fit rounded-lg text-white font-bold lg:text-base transition-all shadow-[4px_4px_6px_#669e71] hover:shadow-[2px_2px_2px_#669e71]"
              >
                Read On
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <section className=" mt-2  md:mt-6  lg:mt-8  xl:mt-10  2xl:mt-12  px-8">
          <div className=" flex flex-col justify-center items-center">
            <button className=" bg-primary p-2 my-3  px-4 w-fit rounded-lg text-white font-bold text-center md:text-lg xl:text-xl">
              Contact Us for Digital Marketing Services
            </button>
            <div>
              <h3 className="text-center md:text-base xl:text-lg font-medium">
                Receive the best Digital Marketing Solutions for your Business
              </h3>
            </div>
          </div>
        </section>
        <section className="mt-2 md:mt-4  pb-4 md:pb-8 lg:pb-10 xl:pb-12 2xl:pb-14 md:px-2 lg:px-10 xl:px-14 2xl:px-20 ">
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

export default Services;
