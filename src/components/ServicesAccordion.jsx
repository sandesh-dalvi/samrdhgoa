import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const ServicesAccordion = ({ item, toggle, open }) => {
  // console.log(active);
  return (
    <>
      <div
        onClick={() => toggle(item.id)}
        className={`flex gap-2 justify-between items-center cursor-pointer `}
      >
        <h3 className={` text-lg lg:text-xl font-bold text-black `}>
          {item.question}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-5 h-5 text-blue-600 transition-all duration-500 ${
            open ? "rotate-180" : ""
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
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-clip"
          >
            <p className=" md:text-base lg:text-lg font-medium p-2 text-white new-line">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesAccordion;
