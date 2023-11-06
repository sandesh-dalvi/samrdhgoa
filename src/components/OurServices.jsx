import React from "react";
import { servicesData } from "../utils/ServicesData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OurServices = () => {
  return (
    <section className="our-services-section  pb-0">
      <div className="bg-black text-center py-2 md:py-4 xl:py-8 flex flex-col justify-center px-2 xl:px-4 overflow-hidden">
        <motion.div
          initial={{ x: "100%" }}
          viewport={{ once: true }}
          whileInView={{ x: "0%", transition: { duration: 0.6 } }}
        >
          <h2 className=" text-secondary font-bold text-4xl lg:text-5xl 2xl:text-[3.5rem] ">
            Our Services
          </h2>
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          viewport={{ once: true }}
          whileInView={{ x: "0%", transition: { duration: 0.6 } }}
        >
          <h3 className=" text-white font-medium py-1 text-base md:text-lg xl:text-xl  ">
            Experience digital success through our all-encompassing suite of
            services, providing everything you need in one place.
          </h3>
        </motion.div>
      </div>
      <div className=" services-section grid grid-cols-2 md:grid-cols-3 p-3 justify-center items-center lg:grid-cols-4 gap-3 md:gap-8 lg:gap-12 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {servicesData.map((service) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            key={service.id}
          >
            <Link
              to={service.link}
              className=" shadow p-3 h-full w-full bg-white flex flex-col justify-center items-center  service-card"
            >
              <div className="service-card-title">
                <h3 className="text-base font-bold text-center">
                  {service.title}
                </h3>
              </div>
              <div className="service-card-image">
                <img
                  src={service.img}
                  alt=""
                  className=" max-w-[100px] md:max-w-[150px] lg:max-w-[180px]"
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className=" pb-2 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          exit={{ opacity: 0 }}
          className="  w-fit"
        >
          <Link
            to={"/services"}
            className="my-3 lg:my-3 2xl:my-4 inline-flex rounded-3xl p-2 px-4 font-bold md:text-base bg-primary text-white md:p-3 md:px-5 xl:text-lg  shadow-lg"
          >
            View All
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
