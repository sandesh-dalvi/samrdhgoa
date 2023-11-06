import React, { useEffect, useState } from "react";
import { workData, categories } from "../utils/WorksData";

import { motion, AnimatePresence } from "framer-motion";
import {
  FaCircleChevronRight,
  FaCircleChevronLeft,
  FaCircleXmark,
} from "react-icons/fa6";

const OurWorks = () => {
  const [filtered, setFiltered] = useState([...workData]);

  const [activeCategory, setActiveCategory] = useState("all");

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    // if (activeCategory === "all") {
    //   setFiltered(workData);
    //   return;
    // }
    const filtered = workData.filter((work) =>
      work.category.includes(activeCategory)
    );
    setFiltered(filtered);
  }, [activeCategory]);

  const handleOpenModal = (id) => {
    setSlideNumber(id);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 1
      ? setSlideNumber(workData.length)
      : setSlideNumber(slideNumber - 1);
  };
  const nextSlide = () => {
    slideNumber === workData.length
      ? setSlideNumber(1)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <section className=" pt-4 md:pt-10 ">
      <div className=" overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          viewport={{ once: true }}
          whileInView={{ y: "0%", transition: { duration: 1 } }}
          className=" text-center px-2  "
        >
          <h2 className=" font-bold text-[2rem] lg:text-5xl 2xl:text-[3.5rem] text-cyan-900">
            From Vision to Reality
          </h2>
          <h3 className=" font-medium pt-2 pb-4 text-base md:text-lg xl:text-xl  md:py-5 ">
            Explore our work, spanning industries, each marked by excellence.
          </h3>
        </motion.div>
      </div>
      <div className="  w-full px-0 flex lg:flex-row pb-0 md:px-4 lg:px-12 xl:px-20 2xl:px-32">
        {openModal && (
          <div className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-neutral-900 bg-opacity-60 flex items-center justify-center w-full h-full">
            <FaCircleXmark
              onClick={handleCloseModal}
              className="fixed cursor-pointer opacity-60 text-white  hover:opacity-100 top-10 right-10 text-2xl md:text-4xl"
            />
            <FaCircleChevronLeft
              onClick={prevSlide}
              className="fixed cursor-pointer opacity-60 text-white  hover:opacity-100 top-1/2 -translate-y-1/2 left-10 text-2xl md:text-4xl"
            />
            <FaCircleChevronRight
              onClick={nextSlide}
              className="fixed cursor-pointer opacity-60 text-white  hover:opacity-100 top-1/2 -translate-y-1/2 right-10 text-2xl md:text-4xl"
            />

            <div className="w-fullscreenimage h-fullscreenimage flex items-center justify-center">
              <img
                src={workData.find((item) => item.id === slideNumber).image}
                alt=""
                className="max-w-full max-h-full pointer-events-none select-none"
              />
            </div>
          </div>
        )}
        <div className="work-tabs-section bg-black lg:flex">
          <div className=" pt-4 md:pt-10 px-1 flex flex-col justify-between items-center  lg:flex-col  lg:justify-start  text-white  overflow-x-auto sm:overflow-x-hidden gap-8 md:gap-10 lg:gap-8 pb-4 md:p-3 lg:p-8 relative isolate work-tabs mx-1">
            {categories.map((data) => (
              <button
                key={data.id}
                onClick={() => setActiveCategory(data.category)}
                className={
                  activeCategory === data.category
                    ? "text-xs sm:text-sm md:text-md lg:text-base active"
                    : "text-xs sm:text-sm ms:text-md lg:text-base"
                }
              >
                {data.title}
              </button>
            ))}
          </div>
        </div>
        <motion.div
          layout
          className="work-images-section w-full h-full grid grid-cols-workss md:grid-cols-works"
        >
          <AnimatePresence>
            {filtered.map((data) => (
              <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                key={data.id}
                className=""
                onClick={() => handleOpenModal(data.id)}
              >
                <img
                  src={data.image}
                  alt=""
                  className=" h-[20vh] w-full  object-cover"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default OurWorks;
