import React from "react";

const Progressbar = ({ progress }) => {
  const progressDiv = {
    width: `${progress}%`,
  };
  return (
    <div className={`w-full bg-[#535257] bg-opacity-90 rounded-3xl`}>
      <div style={progressDiv} className={`bg-primary rounded-3xl text-right`}>
        <span className="text-white text-sm font-semibold">{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default Progressbar;
