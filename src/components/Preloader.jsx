import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <div className="preloader h-screen w-full bg-black text-white fixed bottom-0 left-0 right-0 z-30 flex justify-center items-center">
      <div className="text-container flex items-center justify-between text-2xl font-bold text-white">
        <span>Samrdh Design Studio</span>
      </div>
    </div>
  );
};

export default Preloader;
