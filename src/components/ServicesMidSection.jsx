import React, { useEffect, useRef, useState } from "react";
import ServicesAccordion from "./ServicesAccordion";

import { AnimatePresence, motion } from "framer-motion";
import ServiceImgs from "./ServiceImgs";
import useMeasure from "react-use-measure";

const ServicesMidSection = ({ short, long, type, x, y, isHover }) => {
  const [openkey, setopenkey] = useState(1);

  const [width, setWidth] = useState(0);

  const carousel = useRef();

  const [ref, bounds] = useMeasure({ scroll: false });

  // console.log(short.accordion.image);

  const handletoggle = (key) => {
    setopenkey(openkey !== key ? key : 1);
  };

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  if (long) {
    return (
      <>
        <div className="hidden md:block py-8 x px-4 md:px-12 lg:px-32 xl:px-44 2xl:px-52 ">
          <h2 className=" text-[1.15rem] md:text-[1.75rem] xl:text-4xl 2xl:text-[2.5rem] font-bold max-w-5xl text-cyan-50 mb-2 md:mb-6">
            {long.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8 lg:gap-14 xl:gap-16 2xl:gap-20 justify-center items-center">
            <div className="">
              <div className=" mt-4 flex md:flex-col gap-1 max-w-xl">
                {long.accordion.map((item, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded-md shadow-2xl cursor-pointer text-white ${
                      openkey === item.id && "border-b-2 border-emerald-300"
                    }`}
                    onClick={() => handletoggle(item.id)}
                  >
                    <h3 className={`text-lg font-semibold lg:text-xl`}>
                      {item.question}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl 2xl:text-[1.3rem] font-bold ">
                {long.accordion.find((item) => item.id === openkey).question}
              </h3>
              <p className=" text-white text-base 2xl:text-[1.1rem] font-medium text-justify">
                {long.accordion.find((item) => item.id === openkey).answer}
              </p>
            </div>
            <div ref={ref} className="flex justify-center items-center">
              {/* <img
                src={long.accordion.find((item) => item.id === openkey).image}
                alt=""
              /> */}
              <ServiceImgs
                images={
                  long.accordion.find((item) => item.id === openkey).image
                }
                type={type}
                name={long.accordion.find((item) => item.id === openkey).name}
                bounds={bounds}
                x={x}
                y={y}
                isHover={isHover}
              />
            </div>
          </div>
        </div>
        <div className=" md:hidden px-4 overflow-x-hidden pt-4">
          <h2 className=" text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-cyan-50 mb-4">
            {long.title}
          </h2>
          <motion.div
            ref={carousel}
            whileTap={{ cursor: "grabbing" }}
            className=" "
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width + 1 }}
              className=" flex gap-2 justify-between h-full "
            >
              {long.accordion.map((item, i) => (
                <motion.div
                  key={item.id}
                  className={` grid place-content-center font-bold text-center cursor-pointer p-2 rounded-md shadow-2xl text-white text-lg ${
                    openkey === item.id && "border-b-2 border-emerald-300"
                  }`}
                  onClick={() => setopenkey(item.id)}
                >
                  <div>{item.question}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <div className=" p-4">
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="overflow-clip"
                >
                  <p className="text-base p-1  font-semibold  mb-2 text-white new-line ">
                    {long.accordion.find((item) => item.id === openkey).answer}
                  </p>
                  <div ref={ref} className=" grid place-content-center pb-8">
                    {/* <img
                      src={
                        long.accordion.find((item) => item.id === openkey).image
                      }
                      className=" h-[30vh]"
                      alt=""
                    /> */}
                    <ServiceImgs
                      images={
                        long.accordion.find((item) => item.id === openkey).image
                      }
                      type={type}
                      name={
                        long.accordion.find((item) => item.id === openkey).name
                      }
                      bounds={bounds}
                      x={x}
                      y={y}
                      isHover={isHover}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </>
    );
  } else if (short) {
    return (
      <div className="py-8 px-4 md:px-12 lg:px-32 xl:px-44 2xl:px-52">
        <h2 className=" text-[1.15rem] md:text-[1.75rem] xl:text-4xl 2xl:text-[2.5rem] font-bold  max-w-5xl text-cyan-50">
          {short.title}
        </h2>
        <div className="hidden md:grid md:grid-cols-2  gap-4 md:gap-8 lg:gap-14 xl:gap-16 2xl:gap-20  justify-center items-center">
          <div className="">
            <div className=" mt-4 flex md:flex-col gap-1 max-w-xl">
              {short.accordion.map((item, i) => (
                <div key={i} className=" p-2 rounded-md shadow-2xl text-white">
                  <ServicesAccordion
                    item={item}
                    toggle={handletoggle}
                    open={openkey === item.id}
                  />
                </div>
              ))}
            </div>
          </div>
          <div ref={ref} className="flex justify-center items-center">
            {/* <img
              src={short.accordion.find((item) => item.id === openkey).image}
              alt=""
            /> */}
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <ServiceImgs
                  images={
                    short.accordion.find((item) => item.id === openkey).image
                  }
                  type={type}
                  name={
                    short.accordion.find((item) => item.id === openkey).name
                  }
                  bounds={bounds}
                  x={x}
                  y={y}
                  isHover={isHover}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className=" md:hidden px-4 overflow-x-hidden pt-4">
          <h2 className=" text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-cyan-50 mb-4">
            {short.title}
          </h2>
          <motion.div
            ref={carousel}
            whileTap={{ cursor: "grabbing" }}
            className=" "
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width + 1 }}
              className=" flex gap-2 justify-between h-full "
            >
              {short.accordion.map((item, i) => (
                <motion.div
                  key={item.id}
                  className={` grid place-content-center font-bold text-center p-2 rounded-md shadow-2xl text-white text-lg ${
                    openkey === item.id && "border-b-2 border-emerald-300"
                  }`}
                  onClick={() => setopenkey(item.id)}
                >
                  <div>{item.question}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <div className=" p-4">
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className=" overflow-clip pb-4"
                >
                  <p className="text-lg p-1 text-white new-line font-medium text-center mb-2">
                    {short.accordion.find((item) => item.id === openkey).answer}
                  </p>
                  <div
                    ref={ref}
                    className=" w-full flex justify-center items-center p-2"
                  >
                    {/* <img
                      src={
                        short.accordion.find((item) => item.id === openkey)
                          .image
                      }
                      className=" h-[30vh]"
                      alt=""
                    /> */}
                    <ServiceImgs
                      images={
                        short.accordion.find((item) => item.id === openkey)
                          .image
                      }
                      type={type}
                      name={
                        short.accordion.find((item) => item.id === openkey).name
                      }
                      bounds={bounds}
                      x={x}
                      y={y}
                      isHover={isHover}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Some error occured please refresh</div>;
  }
};

export default ServicesMidSection;
