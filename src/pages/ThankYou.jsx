import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import email from "../assets/images/email1.png";

const ThankYou = () => {
  const location = useLocation();

  const [message1, setMessage1] = useState(
    location.state?.message1
      ? location.state?.message1
      : "Thank you for reaching out and expressing your interest in our Influencer Program."
  );
  // const [message1, setMessage1] = useState(
  //   location.state?.message1
  //     ? location.state?.message1
  //     : "Thank you for reaching out to us."
  // );
  const [message2, setMessage2] = useState(
    location.state?.message2
      ? location.state?.message2
      : "We will get back to you soon."
  );

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="  relative isolate h-[60vh] md:h-[60vh] ">
      <div className=" h-[50vh] grid place-content-center bg-grad-pattern">
        <div className=" flex justify-center">
          <img
            src={email}
            alt=""
            className=" w-[150px] md:w-[220px] xl:w-[250px]"
          />
        </div>
        <div className=" px-[2px]">
          <h1 className=" text-white text-center font-semibold text-xl lg:text-2xl xl:text-3xl">
            {message1}
          </h1>
          <h2 className=" text-center text-cyan-50 font-semibold text-xl lg:text-2xl xl:text-3xl">
            {message2}
          </h2>
        </div>
      </div>

      <div className=" absolute inset-0 flex justify-center items-center top-[70%]">
        <div className=" bg-white rounded-md shadow-xl p-8 w-[90vw] md:w-[60vw] flex justify-around items-center">
          <button
            className=" bg-primary text-white p-1 px-2 shadow-lg rounded-md md:text-lg"
            onClick={handleBack}
          >
            Go Back
          </button>
          <Link
            to={"/"}
            className=" bg-primary text-white p-1 px-2 shadow-lg rounded-md md:text-lg"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
