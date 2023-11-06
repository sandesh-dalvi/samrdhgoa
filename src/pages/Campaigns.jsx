import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import googleads from "../assets/images/googleads.png";
import linkdin from "../assets/images/linkdin.png";
import meta from "../assets/images/meta.png";
import campaigns from "../assets/images/campaigns.png";
import { Helmet } from "react-helmet-async";

const Campaigns = () => {
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
          <title>Samrdh Design Studio & Branding Pvt. Ltd. - Campaings</title>
          <meta
            name="description"
            content="Running a campaign and not being able to manage it is disastrous for your investment. With our Google Ads, LinkedIn Ads, and Meta Ads campaigns and services, you won't need to worry. We are aware of the most effective techniques for running successful campaigns and getting the required results."
          />
          <meta
            name="keywords"
            content="ads, google ads, meta ads, goa, meta ads in goa,google ads in goa"
          />
          {/* <meta name="author" content="Your Name" /> */}
          <meta
            property="og:title"
            content="Samrdh Design Studio & Branding Pvt. Ltd. - Campaings"
          />
          <meta
            property="og:description"
            content="Running a campaign and not being able to manage it is disastrous for your investment. With our Google Ads, LinkedIn Ads, and Meta Ads campaigns and services, you won't need to worry. We are aware of the most effective techniques for running successful campaigns and getting the required results."
          />
          <meta property="og:image" content={googleads} />
          <meta property="og:url" content="http://samrdh.in/campaigns" />
          <meta
            name="twitter:title"
            content="Samrdh Design Studio & Branding Pvt. Ltd. - Campaings"
          />
          <meta
            name="twitter:description"
            content="Running a campaign and not being able to manage it is disastrous for your investment. With our Google Ads, LinkedIn Ads, and Meta Ads campaigns and services, you won't need to worry. We are aware of the most effective techniques for running successful campaigns and getting the required results."
          />
          <meta name="twitter:image" content={googleads} />
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
            <span className=" font-bold underline"> Campaigns</span>
          </div>
          <div className="flex text-white ">
            <h1 className=" font-bold text-3xl md:text-5xl lg:text-5xl ">
              Campaigns
            </h1>
          </div>
        </div>
        <section className=" p-4 pt-3 md:pt-8  lg:pt-14 px-2 md:px-32 ">
          <motion.div
            initial={{ y: "100%" }}
            viewport={{ once: true }}
            whileInView={{ y: "0%", transition: { duration: 1 } }}
          >
            <h2 className=" font-bold text-xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-7 md:leading-9 text-center">
              Explore Our Impactful Campaigns
            </h2>
            <h3 className="text-[#434343] font-bold text-lg md:text-xl 2xl:text-3xl p-2 lg:p-4 text-center">
              Empowering Change Together
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: "0%", transition: { duration: 1 } }}
            className=" m-4 grid grid-cols-1  md:grid-cols-3 justify-center items-center place-items-center gap-4 md:gap-6 lg:gap-8 xl:gap-12  "
          >
            <div className=" flex flex-col justify-center items-center bg-white rounded-md shadow-[0px_0px_5px_1px_#028e4f] p-2 w-full h-full aspect-square">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
                viewport={{ once: true }}
              >
                <img
                  src={googleads}
                  className=" max-w-[90px] lg:max-w-[120px]"
                  alt=""
                />
              </motion.div>
              <div className="mt-1 p-1 lg:p-2 xl:p-4 md:mt-6">
                <p className="w-full font-medium text-[#434343] text-justify md:text-base">
                  Google Ads is a powerful advertising platform that allows you
                  to reach your target audience through various ad formats.
                  Here's a basic breakdown of types of Google Ads. Each type of
                  Google Ad has its unique benefits and is suited for different
                  campaign objectives.
                </p>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center bg-white rounded-md shadow-[0px_0px_5px_1px_#028e4f] p-2 w-full h-full aspect-square ">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
                viewport={{ once: true }}
              >
                <img
                  src={meta}
                  className=" max-w-[90px] lg:max-w-[120px]"
                  alt=""
                />
              </motion.div>
              <div className="mt-1 p-1 lg:p-2 xl:p-4 md:mt-6">
                <p className="w-full text-justify font-medium text-[#434343] md:text-base">
                  Facebook Ads enable targeted online advertising on the
                  Facebook platform, reaching specific audiences on Facebook and
                  its associated platforms like Instagram. These ads display in
                  users' news feeds, the desktop's right-hand column, and mobile
                  Stories.
                </p>
                <p className="text-white">.</p>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center bg-white rounded-md shadow-[0px_0px_5px_1px_#028e4f] p-2 w-full   h-full aspect-square ">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
                viewport={{ once: true }}
              >
                <img
                  src={linkdin}
                  className=" max-w-[90px] lg:max-w-[120px]"
                  alt=""
                />
              </motion.div>
              <div className="mt-1 p-1 lg:p-2 xl:p-4 md:mt-6">
                <p className="w-full text-justify font-medium text-[#434343] md:text-base">
                  LinkedIn Ads are a form of online advertising provided by the
                  professional networking platform LinkedIn. LinkedIn's unique
                  audience consists primarily of professionals, making it a
                  valuable platform for B2B (business-to-business) marketing and
                  professional networking.
                </p>
                {/* <p className="text-white">.</p> */}
              </div>
            </div>
          </motion.div>
        </section>
        <div className="px-2 md:px-12 lg:px-20 flex flex-col  justify-center  items-center influencerscreen3 mb-10 md:mb-16 lg:mb-20 ">
          <motion.div
            initial={{ x: "100%" }}
            viewport={{ once: true }}
            whileInView={{
              x: "0%",
              transition: { duration: 1, type: "spring" },
            }}
            className="p-2 mt-2 md:mt-8 lg:mt-16   "
          >
            <h3 className=" font-bold text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl text-center mb-1 md:mb-2 ">
              <span>Our Campaign Categories</span>
            </h3>
          </motion.div>
          <motion.div
            initial={{ x: "-100%" }}
            viewport={{ once: true }}
            whileInView={{
              x: "0%",
              transition: { duration: 1, type: "spring" },
            }}
            className=" mt-1 md:mt-4 lg:mt-10 grid grid-cols-3 md:grid-cols-4  gap-2 md:gap-4 lg:gap-8 text-center"
          >
            <div className=" flex justify-center items-center    aboutcard">
              <h2 className=" p-1  font-bold flex flex-col">
                <span>Awareness</span>
                <span>Campaigns</span>
              </h2>
            </div>
            <div className=" flex justify-center items-center  aboutcard">
              <h2 className=" p-1 font-bold flex flex-col">
                <span>Fundraising</span> <span>Campaigns</span>
              </h2>
            </div>
            <div className=" flex justify-center items-center  aboutcard">
              <h2 className=" p-1 font-bold flex flex-col">
                <span>Product Launch</span> <span>Campaigns</span>
              </h2>
            </div>
            <div className=" flex justify-center items-center  aboutcard">
              <h2 className=" p-1 font-bold flex flex-col">
                <span>Promotional</span> <span>Campaigns</span>
              </h2>
            </div>
            <div className=" flex justify-center items-center  aboutcard">
              <h2 className=" p-1 font-bold flex flex-col">
                <span>Social Media</span> <span>Campaigns</span>
              </h2>
            </div>
            <div className=" flex justify-center items-center  aboutcard">
              <h2 className=" p-1 font-bold flex flex-col">
                <span>Advocacy</span> <span>Campaigns</span>
              </h2>
            </div>
            <div className=" flex justify-center items-center  aboutcard">
              <h2 className=" p-1 font-bold flex flex-col">
                <span>Event Promotion</span> <span>Campaigns</span>
              </h2>
            </div>
            <div className=" flex justify-center items-center  aboutcard">
              <h2 className=" p-1 font-bold flex flex-col">
                <span>Cause-Related</span> <span>Campaigns</span>
              </h2>
            </div>
            <div className=" flex justify-center items-center  aboutcard">
              <h2 className=" p-1 font-bold flex flex-col">
                <span>Membership / Subscription</span> <span>Campaigns</span>
              </h2>
            </div>
            <div className=" flex justify-center items-center aboutcard">
              <h2 className=" p-1 font-bold flex flex-col">
                <span>Educational</span>
                <span>Campaigns</span>
              </h2>
            </div>
            <div className=" flex justify-center items-center aboutcard">
              <h2 className=" p-1 font-bold flex flex-col">
                <span>Rebranding</span>
                <span>Campaigns</span>
              </h2>
            </div>
            <div className=" flex justify-center items-center aboutcard">
              <h2 className=" p-1 font-bold flex flex-col">
                <span>User-Generated Content (UGC)</span>
                <span>Campaigns</span>
              </h2>
            </div>
          </motion.div>
        </div>
        <div
          className={` bg-[#000000] bg-opacity-90 text-white flex flex-col-reverse md:flex-row justify-evenly items-center min-h-[10vh] overflow-hidden  p-2  careerdivider mt-1 md:mt-6 lg:mt-12 xl:mt-16 2xl:mt-20`}
        >
          <p className=" text-white px-10 font-bold md:text-xl lg:text-2xl 2xl:text-[1.7rem] p-4 md:p-10  md:px-24 md:flex md:flex-col text-center">
            <span>
              Remember that the success of a campaign depends on careful
              planning{" "}
            </span>
            <span>
              and effective promotion. Choose us for the best Campaign
              effectiveness.
            </span>
          </p>
        </div>

        <div className="px-2 md:px-24 lg:px-20 2xl:px-24 flex flex-col justify-center items-center influencerscreen3">
          <div className="p-2 mt-6 md:mt-12 lg:mt-14 ">
            <h3 className=" font-bold text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl text-center mb-4 md:mb-8 lg:mb-12 ">
              <span>Campaign Optimization Services</span>
            </h3>
            <div className=" grid grid-cols-1 lg:grid-cols-2 px-4 md:px-4 lg:px-12 2xl:px-20 ">
              <div className="">
                <p className="  px-2 text-[#434343] font-medium  text-base lg:text-lg text-justify  mb-2 md:mb-3 lg:mb-6">
                  Running a campaign and not being able to manage it is
                  disastrous for your investment. With our Google Ads, LinkedIn
                  Ads, and Meta Ads campaigns and services, you won't need to
                  worry. We are aware of the most effective techniques for
                  running successful campaigns and getting the required results.
                  We make sure that your campaigns are regularly updated to
                  increase attention, carry out accurate campaign analytics, and
                  intervene as needed. We use the correct long and short-tail
                  keywords so that ranking doesn't take a hit nor does content
                  when it comes to traffic engagement.
                </p>
                <p className="  px-2  text-[#434343] font-medium  text-base lg:text-xl text-justify  mb-8 ">
                  Our consultants help you update your website with the correct
                  information and maximum information so that most queries are
                  answered. This also helps the users spend more time on your
                  website increasing your chances of ranking. We know that
                  everything in the digital world is interconnected and
                  interdependent to a great extent. Hence we take care of your
                  overall campaign management holistically with sustainable
                  thought in mind. We also ensure that no black hat techniques
                  are used for the purpose of overnight results delivery, hence
                  we set the expectation of the client clear that digital
                  success is not going to happen overnight, it is a day-by-day
                  investment and growth industry.
                </p>
              </div>
              <div className=" flex justify-center items-center">
                <img src={campaigns} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Campaigns;
