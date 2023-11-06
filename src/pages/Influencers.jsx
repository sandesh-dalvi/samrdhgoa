import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import influencer from "../assets/images/influencer.png";

import emailjs from "@emailjs/browser";

import male from "../assets/images/male.png";
import female from "../assets/images/female.png";
import influencers from "../assets/images/influencers.png";

import logo from "../assets/images/logo.png";
import { Helmet } from "react-helmet-async";

const Influencers = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_diqkwor",
        "template_xjuxm1i",
        form.current,
        "FcIDZdAcMM2rcqd9W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(!success);
          navigate("/thankyou", {
            state: {
              message1:
                "Thank you for reaching out and expressing your interest in our Influencer Program.",
              message2: "We appreciate your enthusiasm!",
            },
          });
        },
        (error) => {
          console.log(error.text);
          setError(!error);
          navigate("/error");
        }
      );
    e.target.reset();
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
          <title>Samrdh Design Studio & Branding Pvt. Ltd. - Influencers</title>
          <meta
            name="description"
            content="Unlock a world of opportunities to share and earn as a Samrdh Design Studio & Branding influencer! By becoming an influencer, you can monetize your content and maximize your influence with every sign-up generated through your unique referral link."
          />
          <meta name="keywords" content="home" />
          <meta
            property="og:title"
            content="Samrdh Design Studio & Branding Pvt. Ltd. - Influencers"
          />
          <meta
            property="og:description"
            content="Unlock a world of opportunities to share and earn as a Samrdh Design Studio & Branding influencer! By becoming an influencer, you can monetize your content and maximize your influence with every sign-up generated through your unique referral link."
          />
          <meta property="og:image" content={influencer} />
          <meta property="og:url" content={`http://samrdh.in/influencers`} />
          <meta
            name="twitter:title"
            content="Samrdh Design Studio & Branding Pvt. Ltd. - Influencers"
          />
          <meta
            name="twitter:description"
            content="Unlock a world of opportunities to share and earn as a Samrdh Design Studio & Branding influencer! By becoming an influencer, you can monetize your content and maximize your influence with every sign-up generated through your unique referral link."
          />
          <meta name="twitter:image" content={influencer} />
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
            <span className=" font-bold underline"> Influencers</span>
          </div>
          <div className="flex text-white ">
            <h1 className=" font-bold text-3xl md:text-5xl lg:text-5xl ">
              Influencers
            </h1>
          </div>
        </div>

        <section className=" mt-1 md:mt-10 lg:mt-16 px-2 md:px-10 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-4 p-2 justify-center items-start">
            <div className=" flex justify-center self-center ">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 0.5, type: "spring" },
                }}
                viewport={{ once: true }}
              >
                <img
                  src={influencer}
                  alt=""
                  className=" max-h-[30vh] 2xl:max-h-[40vh]"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ x: "100%" }}
              whileInView={{
                x: "0%",
                transition: { duration: 0.6, type: "spring" },
              }}
              viewport={{ once: true }}
              className="w-full p-2 md:p-0"
            >
              <h2 className="font-bold text-[1.15rem] md:text-[1.75rem] xl:text-4xl  leading-7 md:leading-9">
                Turn Your Content into Profit: Join the Samrdh Design Studio &
                Branding Influencer Program.
              </h2>
              <div className="p-2">
                <h3 className=" text-primary font-bold text-base md:text-lg 2xl:text-xl">
                  Transform Your Passion and Inspire Change
                </h3>
                <div className="text-[#434343] p-1 font-medium text-base 2xl:text-lg text-justify">
                  <p className=" mb-2 text-[#434343]">
                    Unlock a world of opportunities to share and earn as a
                    Samrdh Design Studio & Branding influencer! By becoming an
                    influencer, you can monetize your content and maximize your
                    influence with every sign-up generated through your unique
                    referral link. Not only will you earn commissions for every
                    sign-up, but you may also have the chance to be prominently
                    featured on the Samrdh Design Studio & Branding influencer
                    website, gaining even more exposure and credibility. Join us
                    today and discover a seamless way to engage with your
                    audience while earning for every sign-up.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <div
          className={` bg-[#000000] bg-opacity-90 text-white flex flex-col-reverse md:flex-row justify-evenly items-center min-h-[10vh] overflow-hidden  p-2  careerdivider mt-1 md:mt-6 lg:mt-12 xl:mt-16 2xl:mt-20`}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6, type: "spring" },
            }}
            viewport={{ once: true }}
            className=" text-white px-10 font-bold md:text-xl lg:text-2xl 2xl:text-[1.7rem] p-4 md:p-10 lg:p-16 md:px-24 md:flex md:flex-col  text-center"
          >
            <span>
              Start capitalizing on your influence and turn your passion
            </span>
            <span> into profit with Samrdh Design Studio & Branding!</span>
          </motion.p>
        </div>
        <div className="px-2 md:px-32 lg:px-52 flex flex-col justify-center items-center influencerscreen2">
          <div className="p-2 mt-2 md:mt-10 lg:mt-10 2xl:mt-12">
            <h3 className=" font-bold text-xl md:text-3xl lg:text-3xl 2xl:text-4xl  text-center mb-1 md:mb-4 ">
              <span>Influence Your World - Inspire Consumers as a </span>
              <span>Samrdh Design Studio & Branding Influencer</span>
              {/* <span>Unleashing Excellence: A Dynamic Team of</span>
            <span> Digital Marketers,Designers, and Developers</span> */}
            </h3>
            <p className="  px-2 lg:px-8 text-[#434343] font-medium  text-base lg:text-xl  mb-2 md:mb-3 lg:mb-6 text-justify">
              The Samrdh Design Studio & Branding Influencer Program is designed
              for individuals who have a strong presence on social media
              platforms. As a Samrdh Design Studio & Branding Influencer, your
              primary goal is to share authentic recommendations and insights
              that encourage your followers to engage with our brands.
            </p>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: { duration: 1, type: "tween" },
          }}
          viewport={{ once: true }}
          className=" mt-1 md:mt-8 lg:mt-10 p-2 flex justify-center px-8 md:px-32 lg:px-52 w-full"
        >
          <div className=" w-full lg:max-w-xl 2xl:max-w-3xl">
            <h2 className="font-bold text-xl md:text-3xl lg:text-3xl 2xl:text-4xl  text-center mb-1 md:mb-2  xl:mb-4 ">
              Engage your followers
            </h2>

            <div className=" ">
              <form
                className=" flex flex-col  gap-2"
                ref={form}
                onSubmit={sendEmail}
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                  className="p-2  border-2 border-primary rounded-xl"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  className="p-2  border-2 border-primary rounded-xl"
                />
                <input
                  type="number"
                  name="contact"
                  id="contact"
                  placeholder="Contact"
                  required
                  className="p-2  border-2 border-primary rounded-xl"
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message (optional)"
                  required
                  className="p-2  border-2 border-primary rounded-xl"
                ></textarea>
                <button
                  className=" bg-[#26af7b] p-2  px-4 w-fit rounded-lg text-white font-bold"
                  type="submit"
                >
                  Sign Up
                </button>
                {/* {error && (
                  <p className="text-sm text-red-700 font-bold">
                    There was some issue sending the email. Please try again.
                  </p>
                )} */}
                {/* {success && (
                  <p className="text-sm text-primary font-bold">
                    Email was send Succesfully
                  </p>
                )} */}
              </form>
            </div>
          </div>
        </motion.div>

        <div className="px-2 md:px-32 lg:px-52 flex flex-col  influencerscreen3">
          <div className="p-2 mt-4 md:mt-14 lg:mt-10 xl:mt-16 2xl:mt-24">
            <h3 className=" font-bold text-xl md:text-3xl lg:text-3xl 2xl:text-4xl  text-center mb-1 md:mb-2 ">
              <span>Rise as an influential voice: Qualify to become</span>
              <span>a Samrdh Design Studio & Branding Influencer!</span>
            </h3>
            <div className=" grid grid-cols-1 xl:grid-cols-2 justify-center items-center">
              <div className="p-2  mt-4 md:mt-8 lg:mt-12  ">
                <ul className=" list-decimal font-semibold  px-2 lg:px-8 text-[#434343] text-[12px]  md:text-base lg:text-lg mb-2 md:mb-3 lg:mb-6">
                  <li>
                    Social Media Accounts: You should have an active YouTube,
                    Instagram, or Facebook account. These platforms are
                    preferred for the Samrdh Design Studio & Branding Influencer
                    Program.
                  </li>
                  <li>
                    Engagement Metrics: We take into account the level of
                    engagement your content receives, such as likes, comments,
                    shares, and views. High engagement indicates an active and
                    dedicated audience.
                  </li>
                  <li>
                    Authenticity and Quality: We appreciate influencers who
                    consistently produce high-quality content and maintain an
                    authentic connection with their audience. Your content
                    should align with the values and interests of Samrdh Design
                    Studio & Branding.
                  </li>
                  <li>
                    Consistency: Regularly creating and posting content is
                    important for building a strong presence. This approach
                    ensures engagement and fosters meaningful connections.
                  </li>
                  <li>
                    Frequency: Consistency in content frequency not only
                    showcases your dedication to your audience but also
                    reinforces your credibility for potential collaborations and
                    partnerships.
                  </li>
                  <li>
                    Follower Count: While we value quality engagement over sheer
                    numbers, having a substantial follower count can enhance
                    your chances of qualifying.
                  </li>
                </ul>
              </div>
              <div className=" flex justify-center items-center">
                <img src={influencers} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 md:px-14 lg:px-20 2xl:px-24  flex flex-col  justify-center  items-center influencerscreen3  mb-8 md:mb-10">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{
              y: "0%",
              transition: { duration: 0.5, type: "tween" },
            }}
            viewport={{ once: true }}
            className="p-2 mt-2 md:mt-8"
          >
            <h3 className=" font-bold text-xl md:text-3xl lg:text-3xl 2xl:text-5xl  text-center mb-1 md:mb-2 ">
              <span>Meet Our Influencer</span>
            </h3>
          </motion.div>
          <motion.div className=" px-4 md:px-6 lg:px-10 2xl:px-14 mt-1 md:mt-8 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 w-full">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: { duration: 0.6, type: "tween" },
              }}
              viewport={{ once: true }}
              className=" bg-white p-4 flex flex-col justify-center items-center rounded-lg min-w-[200px] py-2 md:py-4 lg:py-6 xl:py-7 2xl:py-8 w-full h-full aboutcard"
            >
              <img
                src={male}
                className=" w-[100px] md:w-[150px] aspect-square rounded-full border-2 border-primary object-cover"
                alt=""
              />
              <div className="p-2 flex flex-col justify-center items-center">
                <div className=" font-bold md:text-lg">
                  {/* <span className=" font-bold">Name:</span> */}
                  Viraj Phadte
                </div>
                <div className=" text-primary font-semibold lg:text-base">
                  {/* <span className=" font-bold">Name:</span> */}
                  Facebook, Instagram, Other.
                </div>

                {/* <div>
                  <span className=" font-bold">Description:</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, porro!
                </div> */}
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: { duration: 0.6, type: "tween" },
              }}
              viewport={{ once: true }}
              className=" bg-white p-4 flex flex-col justify-center items-center rounded-lg min-w-[200px] py-2 md:py-4 lg:py-6 xl:py-7 2xl:py-8 w-full h-full aboutcard"
            >
              <img
                src={female}
                className=" w-[100px] md:w-[150px] aspect-square rounded-full border-2 border-primary object-cover"
                alt=""
              />
              <div className="p-2 flex flex-col justify-center items-center">
                <div className=" font-bold md:text-lg">
                  {/* <span className=" font-bold">Name:</span> */}
                  Roma Bharne
                </div>
                <div className=" text-primary font-semibold lg:text-base">
                  {/* <span className=" font-bold">Name:</span> */}
                  Instagram
                </div>

                {/* <div>
                  <span className=" font-bold">Description:</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, porro!
                </div> */}
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: { duration: 0.6, type: "tween" },
              }}
              viewport={{ once: true }}
              className=" bg-white p-4 flex flex-col justify-center items-center rounded-lg min-w-[200px] py-2 md:py-4 lg:py-6 xl:py-7 2xl:py-8 w-full h-full aboutcard"
            >
              <img
                src={male}
                className=" w-[100px] md:w-[150px] aspect-square rounded-full border-2 border-primary object-cover"
                alt=""
              />
              <div className="p-2 flex flex-col justify-center items-center">
                <div className=" font-bold md:text-lg">
                  {/* <span className=" font-bold">Name:</span> */}
                  Vishal Agrawal
                </div>
                <div className=" text-primary font-semibold lg:text-base">
                  {/* <span className=" font-bold">Name:</span> */}
                  Instagram
                </div>

                {/* <div>
                  <span className=" font-bold">Description:</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, porro!
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default Influencers;
