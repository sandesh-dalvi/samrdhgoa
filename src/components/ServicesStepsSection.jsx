import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ServicesStepsSection = ({ data }) => {
  const [openkey, setopenkey] = useState(1);

  const handletoggle = (key) => {
    setopenkey(openkey !== key ? key : 1);
  };

  return (
    <div className="">
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{
          x: "0%",
          opacity: 1,
          transition: { duration: 0.5, type: "spring" },
        }}
        viewport={{ once: true }}
        className="text-center mb-4 flex flex-col justify-center items-center"
      >
        <h2 className=" font-bold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-center">
          {data.title}
        </h2>
        <p className=" p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 md:max-w-lg lg:max-w-xl xl:max-w-2xl font-medium text-[#434343] md:text-base ">
          {data.desc}{" "}
        </p>
      </motion.div>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{
          x: "0%",
          opacity: 1,
          transition: { duration: 0.5, type: "spring" },
        }}
        viewport={{ once: true }}
        className=" hidden md:block "
      >
        <div className="step-wizard">
          <ul className="step-wizard-list">
            <li className="step-wizard-item">
              <span className="progress-count"></span>
              <span className="progress-label"></span>
            </li>
            {data.accordion.map((item) => (
              <li className="step-wizard-item current-item" key={item.id}>
                <span
                  className=" cursor-pointer"
                  onClick={() => handletoggle(item.id)}
                >
                  <span
                    className={`progress-count ${
                      openkey === item.id && "active-count"
                    }`}
                  >
                    {item.id}
                  </span>
                  <span
                    className={`progress-label ${
                      openkey === item.id ? " font-bold" : " text-gray-500"
                    }`}
                  >
                    {item.question}
                  </span>
                </span>
                {openkey === item.id && <span className="steps-active"></span>}
                <span className="arrow absolute"></span>
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex justify-center items-center ">
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-clip max-w-lg bg-white rounded-lg mt-6 p-4"
              >
                <div className=" flex justify-center items-center gap-2">
                  <span className=" font-black text-6xl text-[#21d4fd]">
                    0{openkey}
                  </span>
                  <span className=" w-2 bg-[#21d4fd] h-[100px] rounded"></span>
                  <p className="text-base  md:text-lg font-bold p-2 new-line">
                    {data.accordion.find((item) => item.id === openkey).answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      <div className=" md:hidden overflow-hidden">
        <div className="step-wizard">
          <ul className="step-wizard-list ">
            <li className="step-wizard-item">
              <span className="progress-count"></span>
              <span className="progress-label"></span>
            </li>
            {data.accordion.map((item) => (
              <li className="step-wizard-item current-item" key={item.id}>
                <span
                  className=" cursor-pointer "
                  onClick={() => handletoggle(item.id)}
                >
                  <span
                    className={`progress-count ${
                      openkey === item.id && "active-count"
                    }`}
                  >
                    {item.id}
                  </span>
                  <span
                    className={`progress-label ${
                      openkey === item.id ? " font-bold" : " text-gray-500"
                    }`}
                  >
                    {item.question}
                  </span>
                </span>
                <span className="downarrow absolute inset-0 left-1/2 -translate-x-1/2 -top-6"></span>
                {openkey === item.id && <span className="steps-active"></span>}
                <div className=" w-[70vw] self-center  flex justify-center items-center ">
                  <AnimatePresence>
                    {openkey === item.id && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                          damping: 2,
                          type: "tween",
                        }}
                        className="  max-w-lg bg-white rounded-lg shadow-lg p-4 mt-2"
                      >
                        <div className=" flex flex-col md:flex-row justify-center items-center gap-2">
                          <span className=" font-black text-6xl text-[#21d4fd]">
                            0{openkey}
                          </span>
                          <span className="hidden md:block w-2 bg-[#21d4fd] h-[100px] rounded"></span>
                          <span className="md:hidden  w-full bg-[#21d4fd] h-[4px] rounded"></span>
                          <p className="text-base font-medium md:text-lg md:font-bold p-2 new-line text-justify">
                            {
                              data.accordion.find((item) => item.id === openkey)
                                .answer
                            }
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesStepsSection;
