import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";
import logo from "../assets/images/logo.png";
import { Helmet } from "react-helmet-async";

const categories = [
  {
    id: 1,
    title: "Services",
    data: [
      {
        id: 11,
        question: "What is a digital marketing agency",
        answer:
          "A digital marketing agency is a company that provides a range of online marketing services to help businesses promote their products or services on the internet. These services can include social media management, search engine optimization (SEO), pay-per-click advertising (PPC), content creation, email marketing, web design, and more.",
      },
      {
        id: 12,

        question: "Why should I hire a digital marketing agency",
        answer:
          "Hiring a digital marketing agency can provide several benefits, such as accessing specialized expertise, saving time and resources, staying updated with the latest trends, and achieving better results in your online marketing efforts.",
      },
      {
        id: 13,

        question: "What services do your agency offer",
        answer: `We as a digital marketing agency offer a variety of services such as: \n-Web Development \n-Content Creation \n-Graphic Designing \n-Content Marketing \n-SEM & Advertisement \n-Influencer Marketing \n-Printing & Branding`,
      },
      {
        id: 14,

        question:
          "How much does it cost to hire you as our digital marketing agency",
        answer:
          "The cost of hiring Samrdh can vary widely based on factors such as the agency's size, location, services offered, and the scope of your project. We also charge on monthly retainer fee, others offer project-based pricing.",
      },
      {
        id: 15,
        question:
          "How long does it take to see results from digital marketing efforts",
        answer:
          "The timeline for seeing results can vary depending on the specific strategies and tactics being implemented. Some tactics, like PPC advertising, can yield quicker results, while strategies like SEO may take several months to show significant improvements.",
      },
      {
        id: 16,
        question:
          "Can Samrdh help improve my website's ranking on search engines",
        answer:
          "Yes, We specialize in SEO, which aims to improve your website's visibility on search engines like Google. We can help optimize your website's content, structure, and other factors to increase its chances of ranking higher in search engine results.",
      },
      {
        id: 17,
        question: "Does Samrdh handle social media management",
        answer:
          "Yes, We offer social media management services. We can create, schedule, and post content on your social media platforms, engage with your audience, and help grow your social media presence.",
      },
      {
        id: 18,

        question: "Can Samrdh help with content creation",
        answer:
          "Absolutely. We offer content creation and marketing services, including writing blog posts, articles, website copy, and creating visual content such as images and videos to engage your target audience.",
      },
      {
        id: 19,

        question: "How can Samrdh improve my online advertising efforts",
        answer:
          "We can create and manage online advertising campaigns, such as PPC ads on platforms like Google Ads or Meta Ads. We can optimize these campaigns to reach your target audience and achieve your advertising goals.",
      },
    ],
  },
  {
    id: 2,
    title: "Web Development",
    data: [
      {
        id: 21,

        question:
          "What is web development, and why is it important for my business",
        answer:
          "Web development involves creating and maintaining websites. It's important because your website serves as a digital storefront and is often the first point of contact for potential customers online.",
      },
      {
        id: 22,
        question: "What technologies do you use for web development",
        answer:
          "We use a variety of technologies like HTML, CSS, JavaScript, and various content management systems (CMS) like WordPress, or custom-built solutions. ",
      },
      {
        id: 23,
        question: "Can you create a responsive and mobile-friendly website",
        answer:
          "Yes, responsive design ensures your website works well on various devices, including smartphones and tablets.",
      },
      {
        id: 24,
        question: "Do you offer e-commerce website development",
        answer:
          "We offer e-commerce solutions, including setting up online stores, payment gateways, and shopping cart functionality.",
      },
    ],
  },
  {
    id: 3,
    title: "Content Creation",
    data: [
      {
        id: 31,
        question: "What types of content do you create",
        answer:
          "Content can include blog posts, articles, infographics, videos, and more.",
      },
      {
        id: 32,
        question:
          "How do you ensure the content aligns with my brand's voice and values",
        answer:
          "We typically conduct research and work closely with you to understand your brand's identity and create content that reflects it.",
      },
      {
        id: 33,
        question:
          "Do you handle keyword research and SEO optimization for content",
        answer:
          "Yes, We conduct keyword research and optimize content to improve their search engine visibility.",
      },
    ],
  },
  {
    id: 4,
    title: "Graphic Designing",
    data: [
      {
        id: 41,
        question: "What design services do you offer",
        answer:
          "Services may include logo design, branding, social media graphics, website design elements, and more.",
      },
      {
        id: 42,
        question:
          "Can you create visuals that are consistent with my brand's identity",
        answer:
          "Yes, we maintain consistent branding across all design elements.",
      },
      {
        id: 43,
        question: "Do you provide print design services as well",
        answer:
          "Yes, We offer print designs for items like Brochures, Standee, Foam Boards, Visiting Cards, Hoardings, Billboards, Mobile Billboards, Lit Boards, Acrylic Boards, Signages, Kiosk Design & Execution, LED Screen Ads, Newspaper Ads, Magazine Ads, Road Signages, Mobile Ads and flyers.",
      },
    ],
  },
  {
    id: 5,
    title: "Content Marketing",
    data: [
      {
        id: 51,
        question:
          "What is content marketing, and how can it benefit my business",
        answer:
          "Content marketing involves creating and sharing valuable content to attract and engage your target audience. It can build brand authority and foster customer loyalty.",
      },
      {
        id: 52,
        question:
          "How do you determine the content topics and strategy for my business",
        answer:
          "We conduct research on your industry, audience, and competitors to develop a strategic content plan.",
      },
    ],
  },
  {
    id: 6,
    title: "SEM & Advertisement",
    data: [
      {
        id: 61,
        question:
          "What is Search Engine Marketing (SEM), and how can it help my business",
        answer:
          "SEM involves paid advertising on search engines like Google ads, Meta Ads, and LinkedIn Ads. It can drive targeted traffic to your website.",
      },
      {
        id: 62,
        question: "Do you handle Pay-Per-Click (PPC) campaigns",
        answer:
          "Yes, We manage PPC campaigns, which can include Google Ads, Meta Ads, and LinkedIn Ads.",
      },
      {
        id: 63,
        question:
          "How do you measure the effectiveness of my advertising campaigns",
        answer:
          "We use metrics like click-through rates (CTR), conversion rates, and return on investment (ROI) to assess campaign effectiveness.",
      },
    ],
  },
  {
    id: 7,
    title: "Influencer Marketing",
    data: [
      {
        id: 71,
        question: "What is influencer marketing, and how can it boost my brand",
        answer:
          "Influencer marketing involves collaborating with influential individuals to promote your products or services to their followers.",
      },
      {
        id: 72,
        question: "How do you identify suitable influencers for my brand",
        answer:
          "We research and analyze influencers' audiences, content, and engagement to find the right fit for your brand.",
      },
      {
        id: 73,
        question: "How do you measure the success of influencer campaigns",
        answer:
          "Success metrics may include engagement metrics, website traffic, and conversions generated through the influencer's promotion.",
      },
    ],
  },
];

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const FAQs = () => {
  const [showCategory, setShowCategory] = useState(false);

  const [activeCurrentIndex, setActiveCurrentIndex] = useState(1);
  const [openkey, setopenkey] = useState();

  const handletoggle = (key) => {
    setopenkey(openkey !== key ? key : null);
  };

  const toggleShowAccordion = (id) => {
    setShowCategory(!showCategory);
    if (activeCurrentIndex === id) {
      setActiveCurrentIndex();
    } else {
      setActiveCurrentIndex(id);
    }
  };
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
          <meta property="og:url" content={`http://samrdh.in/faqs`} />
          <meta
            name="twitter:title"
            content="Samrdh Design Studio & Branding Pvt. Ltd.Samrdh Design Studio & Branding Pvt. Ltd."
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
            <span className=" font-bold underline"> FAQs</span>
          </div>
          <div className="flex text-white ">
            <h1 className=" font-bold text-3xl md:text-5xl lg:text-5xl ">
              FAQs
            </h1>
          </div>
        </div>
        <section className="mb-12 md:mb-16 ">
          <h2 className="text-center text-xl mt-6 mb-4 font-bold md:text-2xl md:mt-10 md:mb-8 lg:text-3xl lg:mt-12 lg:mb-10 xl:text-4xl xl:mt-14 xl:mb-12">
            Here are some frequently asked questions (FAQs) about us:
          </h2>
          <div>
            <div className="md:hidden">
              {categories.map((category) => (
                <div key={category.id} className=" px-2">
                  <div
                    onClick={() => toggleShowAccordion(category.id)}
                    className="flex gap-2 justify-between items-center cursor-pointer  bg-green-600 m-2 text-white p-2 shadow"
                  >
                    <h3 className="text-lg font-semibold ">{category.title}</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-5 h-5 transition-all duration-500 ${
                        activeCurrentIndex === category.id ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <AnimatePresence>
                    {activeCurrentIndex === category.id && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-clip"
                      >
                        {category.data.map((item, i) => (
                          <div key={i} className="px-2 bg-white mb-2 shadow">
                            <Accordion
                              item={item}
                              page={true}
                              toggle={handletoggle}
                              open={openkey === item.id}
                            />
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <div className="hidden md:block p-2 md:p-4 px-4 md:px-6 lg:px-24 xl:px-36 2xl:px-44 md:h md:bg-neutral-50 ">
              <div
                className={` flex justify-between w-full  bg-green-600 md:mb-4 lg:mb-6  p-2 pb-4`}
              >
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className={``}
                    onClick={() => setActiveCurrentIndex(category.id)}
                  >
                    <div
                      className={` flex justify-center items-center md:text-lg cursor-pointer lg:text-xl  transition-all duration-100 ${
                        activeCurrentIndex === category.id
                          ? "bg-neutral-50 text-black "
                          : " bg-green-600 text-white "
                      } p-2 hover:bg-green-500 hover:text-black  font-bold h-full m-1`}
                    >
                      {category.title}
                    </div>
                  </div>
                ))}
              </div>
              <div className=" ">
                <div>
                  {activeCurrentIndex &&
                    categories
                      .find((category) => category.id === activeCurrentIndex)
                      .data.map((item, i) => (
                        <div key={i} className="bg-white p-2 rounded-md m-2">
                          <Accordion
                            item={item}
                            page={true}
                            toggle={handletoggle}
                            open={openkey === item.id}
                          />
                        </div>
                      ))}
                </div>
                <div>
                  {!activeCurrentIndex &&
                    categories
                      .find((category) => category.id === 1)
                      .data.map((item, i) => (
                        <div key={i} className="bg-white p-2 rounded-md">
                          <Accordion
                            item={item}
                            page={true}
                            toggle={handletoggle}
                            open={openkey === item.id}
                          />
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQs;
