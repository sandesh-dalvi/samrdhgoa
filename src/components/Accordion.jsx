import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ item, page, toggle, open, home }) => {
  // console.log(active);
  return (
    <>
      <div
        onClick={() => toggle(item.id)}
        className={`flex gap-2 items-center cursor-pointer `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-5 h-5 text-blue-600 transition-all duration-500 ${
            open ? "rotate-90" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
        <h3
          className={`text-lg font-semibold ${page && "text-[1rem]"} ${
            home && " lg:text-xl"
          }`}
        >
          {item.question} ?
        </h3>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-clip"
          >
            <p
              className={` font-medium text-[#434343] md:text-base p-2 pl-4 ${
                home && "text-white"
              }  new-line ${home && " lg:text-lg"}`}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
