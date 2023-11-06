import React, { useState } from "react";
import Progressbar from "./Progressbar";

const WorkCompletionSlider = () => {
  const works = [
    [
      { type: "Web Design", level: 90 },
      { type: "Web Development", level: 60 },
      { type: "SEO", level: 70 },
    ],
    [
      { type: "Instagram Ads", level: 90 },
      { type: "Google Ads", level: 60 },
      { type: "Facebook Ads", level: 50 },
    ],
    [
      { type: "Porfolio Designs", level: 90 },
      { type: "Brochures & Banners", level: 60 },
      { type: "Web Application", level: 50 },
    ],
  ];

  const [work, setWork] = useState(works[0]);

  const handleClick = (i) => {
    const workSlider = works[i];
    // console.log(i);
    setWork(workSlider);
  };

  return (
    <div className="min-w-[200px] sm:min-w-[250px] md:min-w-[300px]">
      <div className="p-1">
        {work.map((item, j) => (
          <div key={j} className="w-full p-2">
            <span className="text-base font-semibold">{item.type}</span>
            <Progressbar progress={item.level} />
          </div>
        ))}
      </div>
      <div className="carousel flex justify-center items-center gap-4 p-1">
        {works.map((items, i) => (
          <div key={i} className="">
            <span onClick={() => handleClick(i)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCompletionSlider;
