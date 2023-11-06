import React, { useState } from "react";

import kapil from "../assets/images/testimonials/kapil.jpg";
import male from "../assets/images/male.png";
import { motion } from "framer-motion";

const ReviewsSlider = () => {
  const reviewsData = [
    {
      id: 0,
      name: "Gaurish Shirodkar",
      designation: "Owner of Shirodkar Jewellery",
      review:
        "We appreciate your digital marketing efforts for Shirodkar our partnership and are confident in achieving even greater success together.",
      image: male,
    },
    {
      id: 1,
      name: "Milling Shirdokar",
      designation: "PSYK Infra LLP",
      review:
        "Thank you for your website and digital marketing services. We're pleased with the progress and appreciate the seamless user experience and mobile-friendly website. Wish for even greater success together.",
      image: male,
    },

    {
      id: 2,
      name: "Kapil Karekar",
      designation: "Owner of Geeta Automations Technologies",
      review:
        "I am pleased to say that Samrdh Design Studio and Branding Pvt. Ltd. has fulfilled their contractual obligations within the stipulated period keeping a high degree of standards.",
      image: kapil,
    },
    {
      id: 3,
      name: "Shahid Faraaz",
      designation: "Owner OOZEME",
      review:
        "I'm absolutely delighted with the logo crafted by this team. Their design brilliantly encapsulates the essence of my brand, marrying creativity and vision seamlessly. The team's attention to detail and commitment to understanding my brand's identity exceeded my expectations. The logo has received rave reviews from both customers and peers, and I'm confident it will be a lasting emblem of my brand's identity. I couldn't be happier with the result.",
      image: male,
    },
  ];

  const [reviews, setReviews] = useState(reviewsData[0]);
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(false);

  const handleClick = (i) => {
    const reviewsSlider = reviewsData[i];
    // console.log(i);

    setReviews(reviewsSlider);
  };

  const leftClick = () => {
    if (reviews.id === 0) {
      const reviewsSlider = reviewsData[reviewsData.length - 1];
      setReviews(reviewsSlider);
      setLeft(true);
      setRight(false);
    } else {
      const reviewsSlider = reviewsData[reviews.id - 1];
      setReviews(reviewsSlider);
      setLeft(true);
      setRight(false);
    }
  };
  const rightClick = () => {
    if (reviews.id === reviewsData.length - 1) {
      const reviewsSlider = reviewsData[0];
      setReviews(reviewsSlider);
      setLeft(false);
      setRight(true);
    } else {
      const reviewsSlider = reviewsData[reviews.id + 1];
      setReviews(reviewsSlider);
      setLeft(false);
      setRight(true);
    }
  };

  return (
    <div className="mt-5 text-cyan-900">
      <h2 className=" mb-2 text-center font-extrabold text-4xl lg:text-5xl 2xl:text-[3.5rem] ">
        Testimonials
      </h2>
      <div className=" flex">
        {reviewsData.map((review) => (
          <motion.div key={review.id} className="  ">
            {review.id === reviews.id && (
              <motion.div
                initial={{ x: `${left ? "100%" : "-100%"}` }}
                animate={{ x: `${left ? "0%" : "0%"}` }}
                exit={{ x: `${left ? "0%" : "0%"}` }}
                transition={{ duration: 0.75 }}
                className="w-[80vw] flex  flex-col md:flex-row justify-center items-center  p-2 md:h-[300px] gap-1 md:gap-4 lg:gap-8 xl:gap-12 2xl:gap-14 bg-white shadow-md rounded-bl-lg rounded-tl-lg rounded-br-lg"
              >
                <div className=" flex justify-center items-center">
                  <div className="relative isolate w-[114px] h-[114px] md:w-[130px] md:h-[130px] lg:w-[180px] lg:h-[180px] flex justify-center items-center">
                    <img
                      src={review.image}
                      className="w-[108px] h-[108px] md:w-[120px] md:h-[120px] lg:w-[170px] lg:h-[170px] rounded-full object-cover z-10"
                      alt=""
                    />
                    <div className=" absolute inset-0 w-[114px] h-[114px] md:w-[130px] md:h-[130px] lg:w-[180px] lg:h-[180px] rounded-full bg-gradient-to-b from-[#2829d5] to-[#87cfce] z-0"></div>
                  </div>
                </div>
                <div>
                  <p className=" text-primary text-justify text-lg  lg:text-xl 2xl:text-2xl px-2 md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
                    "{review.review}"
                  </p>
                  <div className=" flex mt-2">
                    <div className=" w-[100px] h-[2px] bg-blue-600 m-2 md:mt-3"></div>
                    <div className=" md:text-lg  xl:text-xl h-[70px]">
                      <h3 className=" font-bold">{review.name}</h3>
                      <p className=" text-gray-600 font-medium ">
                        {review.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <div className=" mt-3 flex justify-center items-center gap-4 md:gap-6 xl:gap-8">
        <div className=" cursor-pointer" onClick={leftClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="carousel flex justify-center items-center gap-4 p-1">
          {reviewsData.map((items, i) => (
            <div key={i} className=" cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", duration: 0.2 }}
                onClick={() => handleClick(i)}
                className=" "
              >
                <div className=" relative isolate flex justify-center items-center w-8 h-8">
                  <div className=" absolute z-0 inset-0 w-8 h-8 rounded-full border-2 border-black left-1/2 -translate-x-1/2  top-1/2 -translate-y-1/2"></div>
                  <div
                    className={` absolute z-10 inset-0 w-5 h-5 rounded-full bg-gradient-to-b from-[#2829d5] to-[#87cfce] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ${
                      items.id === reviews.id ? "flex" : "hidden"
                    }`}
                  ></div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div onClick={rightClick} className=" cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSlider;
