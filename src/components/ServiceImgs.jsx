import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import GraphicDesign3d from "./GraphicDesign3d";
import Printkiosk from "./Printkiosk";

const ServiceImgs = ({ images, type, name, bounds, x, y, isHover }) => {
  return (
    <div>
      {name === "webmobile" && (
        <WebMobile
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "webuser" && (
        <WebUser
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "webresponse" && (
        <WebResponse
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "webread" && (
        <WebRead
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "webvisual" && (
        <WebVisual
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "webtest" && (
        <WebTest
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "emailpromo" && (
        <EmailPromo
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "emailwelcome" && (
        <EmailWelcome
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "emailcart" && (
        <EmailCart
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "emailreengage" && (
        <EmailReengage
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "semadcopies" && (
        <SEMAdcopies
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "semkeyword" && (
        <SEMKeyword
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "semadcampaign" && (
        <SEMAdcamp
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "semleadgen" && (
        <SEMLeadGen
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "graphicbrand" && (
        <GraphicBrand
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "graphicpostprod" && <GraphicPostProd images={images} />}
      {name === "graphicmotion" && <GraphicMotion images={images} />}
      {name === "graphic3d" && <GraphicDesign3d />}
      {name === "influamplifyimpact" && (
        <InfluAmplifyImpact
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "influinfluencertarget" && (
        <InfluInfluencerTarget
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "influindustryspecific" && (
        <InfluIndustrySpecific
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "influcurateinfluencer" && (
        <InfluCurateInfluencer
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "influbrandpotential" && (
        <InfluBrandPotential
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "contcaptivephoto" && (
        <ContCaptivePhoto
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "contprovoice" && (
        <ContProVoice
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "contvideos" && (
        <ContVideos
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "contmixmaster" && (
        <ContMixMaster
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "contstrategy" && (
        <ContStrategy
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "contaware" && (
        <ContAware
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "conttraffic" && (
        <ContTraffic
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "contgenleads" && (
        <ContGenLeads
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "contexpert" && (
        <ContExpert
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "contretaincust" && (
        <ContRetainCust
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "socialcontschedule" && (
        <Socialcontschedule
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "socialaudience" && (
        <Socialaudience
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "socialad" && (
        <Socialad
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "socialanalytic" && (
        <Socialanalytic
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "socialinflucolab" && (
        <Socialinflucolab
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "socialstrategy" && (
        <Socialstrategy
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "socialplatform" && (
        <Socialplatform
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "socialreput" && (
        <Socialreput
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "socialcampaign" && (
        <Socialcampaign
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "printstandee" && (
        <Printstandee
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "printfoam" && (
        <Printfoam
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "printbrochure" && (
        <Printbrochure
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "printvisit" && (
        <Printvisit
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "printhoarding" && (
        <Printhoarding
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "printmobilebill" && (
        <Printmobilebill
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "printlit" && (
        <Printlit
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "printacrylic" && (
        <Printacrylic
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "printsignage" && (
        <Printsignage
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "printkiosk" && (
        <Printkiosk
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "printmagazine" && (
        <Printmagazine
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "printled" && (
        <Printled
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "printnewspaper" && (
        <Printnewspaper
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "printmobilead" && (
        <Printmobilead
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "vidanimate" && (
        <Vidanimate
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "vidweb" && (
        <Vidweb images={images} bounds={bounds} x={x} y={y} isHover={isHover} />
      )}
      {name === "vidcamppaign" && (
        <Vidcamppaign
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "vidreels" && (
        <Vidreels
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "vidhowto" && (
        <Vidhowto
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "vidcooperate" && (
        <Vidcooperate
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
      {name === "vidlive" && (
        <Vidlive
          images={images}
          bounds={bounds}
          x={x}
          y={y}
          isHover={isHover}
        />
      )}
    </div>
  );
};

export default ServiceImgs;

const WebMobile = ({ images, bounds, x, y, isHover }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px] "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0 top-1/2 right-1/2 -translate-y-1/2  "
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[20%] top-[46%] left-[25%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 6) / 1000}px, ${
              (bounds.y - y * 6) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0 w-[55%] top-[-5%] left-[25%] md:w-[55%] md:top-[-14%] md:left-[25%]  "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -6) / 1000}px, ${
              (bounds.y - y * -6) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[3]}
        alt=""
        className=" absolute inset-0 top-[18%] left-[2%] md:top-[14%]    "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 15) / 1000}px, ${
              (bounds.y - y * 15) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const WebUser = ({ images, bounds, x, y, isHover }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px] "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute h-[90%] inset-0 top-1/2 right-1/2 -translate-y-1/2 translate-x-[35%]  "
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[45%]  top-[38%] left-[30%] md:w-[40%] md:left-[23%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 1) / 1000}px, ${
              (bounds.y - y * 3) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0 w-[35%] top-[20%] left-[33%] md:left-[25%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -2) / 1000}px, ${
              (bounds.y - y * -2) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[3]}
        alt=""
        className=" absolute inset-0 top-[47%] left-[48%] w-[40%] md:left-[38%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 20) / 1000}px, ${
              (bounds.y - y * 20) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const WebResponse = ({ images, bounds, x, y, isHover }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute h-[90%] inset-0 top-1/2 right-1/2 -translate-y-1/2 translate-x-[35%]  "
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[35%]  top-[38%] left-[32%] md:w-[30%] md:left-[26%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -8) / 1000}px, ${
              (bounds.y - y * -8) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0  w-[75%] top-[8%] left-[15%] md:w-[65%] md:left-[12%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 4) / 1000}px, ${
              (bounds.y - y * 4) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[3]}
        alt=""
        className=" absolute inset-0 top-[47%] left-[40%] w-[40%] md:left-[32%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 15) / 1000}px, ${
              (bounds.y - y * 15) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const WebRead = ({ images, bounds, x, y, isHover }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute h-[90%] inset-0 top-1/2 right-1/2 -translate-y-1/2 translate-x-[5%]  "
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[25%]  top-[35%] left-[65%] md:w-[22%] md:left-[55%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -8) / 1000}px, ${
              (bounds.y - y * -8) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0  w-[40%] top-[20%] left-[-2%] md:w-[45%] md:left-[-15%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 20) / 1000}px, ${
              (bounds.y - y * 20) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const WebVisual = ({ images, bounds, x, y, isHover }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute  inset-0 top-1/2 right-1/2 -translate-y-1/2   "
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[35%]  top-[42.5%] left-[10%] md:w-[35%] md:top-[41%] md:left-[10%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 9) / 1000}px, ${
              (bounds.y - y * 9) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0  w-[32%] top-[33%] left-[60%] md:w-[35%] md:top-[30%] md:left-[58%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -8) / 1000}px, ${
              (bounds.y - y * -8) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[3]}
        alt=""
        className=" absolute inset-0 w-[25%] top-[53%] left-[60%] md:w-[22%] md:top-[56%] md:left-[64%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 3) / 1000}px, ${
              (bounds.y - y * 3) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const WebTest = ({ images, bounds, x, y, isHover }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute h-[90%]  inset-0 top-1/2 right-1/2 -translate-y-1/2  translate-x-[35%]  "
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[35%]  top-[30%] left-[33%] md:w-[35%] md:top-[30%] md:left-[25%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -3) / 1000}px, ${
              (bounds.y - y * -3) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0  w-[80%] top-[5%] left-[10%] md:left-[2%] md:top-[0%]  "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -10) / 1000}px, ${
              (bounds.y - y * -10) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[3]}
        alt=""
        className=" absolute inset-0  w-[50%] top-[41%] left-[38%] md:top-[45%] md:left-[30%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 20) / 1000}px, ${
              (bounds.y - y * 20) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};
const EmailPromo = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0 top-1/2 right-1/2 -translate-y-1/2  translate-x-[35%] h-[100%]  "
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 h-[90%] w-[60%] left-[20%] top-[5%]"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -20) / 1000}px, ${
              (bounds.y - y * 0) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0 h-[150%] top-[-26%] left-[-10%]  "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 10) / 1000}px, ${
              (bounds.y - y * 0) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[3]}
        alt=""
        className=" absolute inset-0  w-[50%] top-[1%] left-[45%] md:top-[0%] md:left-[65%] 2xl:top-[-20%]  2xl:left-[80%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 20) / 1000}px, ${
              (bounds.y - y * 20) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};
const EmailWelcome = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img src={images[0]} alt="" className=" absolute inset-0   h-[100%]  " />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[60%]  left-[-4%] top-[40%]"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 5) / 1000}px, ${
              (bounds.y - y * 5) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0 top-[50%] left-[30%]  "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -5) / 1000}px, ${
              (bounds.y - y * -3) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[3]}
        alt=""
        className=" absolute inset-0 w-[50%]  top-[46%] left-[48%] md:left-[50%] 2xl:w-[60%] 2xl:left-[60%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 3) / 1000}px, ${
              (bounds.y - y * 8) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[4]}
        alt=""
        className=" absolute inset-0 w-[20%]  left-[60%] md:top-[-20%] md:w-[25%] 2xl:w-[30%]  "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 8) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};
const EmailCart = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0   h-[75%] top-[20%] 2xl:h-[100%] 2xl:top-[0%]  "
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[30%]   left-[32%] top-[26%] 2xl:left-[35%] 2xl:top-[12%] 2xl:w-[32%]"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 5) / 1000}px, ${
              (bounds.y - y * 5) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0 w-[23%] top-[52%] left-[38%] 2xl:top-[44%] 2xl:left-[40%] 2xl:w-[26%]  "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -5) / 1000}px, ${
              (bounds.y - y * -3) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[3]}
        alt=""
        className=" absolute inset-0  top-[-10%] left-[2%] 2xl:left-[-10%] 2xl:w-[30%] 2xl:top-[-20%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 3) / 1000}px, ${
              (bounds.y - y * 8) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};
const EmailReengage = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0   h-[90%] top-[5%] left-[15%] 2xl:h-[100%] 2xl:top-[0%]  "
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 h-[90%]   left-[8%] top-[5%] 2xl:left-[6%] 2xl:top-[0%] 2xl:h-[100%]"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 5) / 1000}px, ${
              (bounds.y - y * 5) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0 w-[35%] top-[30%] left-[45%] 2xl:top-[20%] 2xl:left-[50%] 2xl:w-[45%]  "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -5) / 1000}px, ${
              (bounds.y - y * -3) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[3]}
        alt=""
        className=" absolute inset-0 w-[25%]  top-[45%] left-[73%] 2xl:left-[90%] 2xl:w-[35%] 2xl:top-[40%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 3) / 1000}px, ${
              (bounds.y - y * 8) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[4]}
        alt=""
        className=" absolute inset-0 w-[20%]  top-[0%] left-[66%] 2xl:left-[80%] 2xl:w-[25%] 2xl:top-[-20%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 3) / 1000}px, ${
              (bounds.y - y * 8) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};
const SEMAdcopies = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0   h-[90%] top-[5%] left-[15%] 2xl:h-[100%] 2xl:top-[0%]  "
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 h-[78%] left-[9%] top-[10%] xl:left-[12%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 2) / 1000}px, ${
              (bounds.y - y * 2) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0 w-[15%] top-[50%] left-[30%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -5) / 1000}px, ${
              (bounds.y - y * -3) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[3]}
        alt=""
        className=" absolute inset-0 w-[25%] top-[20%] left-[25%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 3) / 1000}px, ${
              (bounds.y - y * 8) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[4]}
        alt=""
        className=" absolute inset-0 w-[60%] top-[50%] left-[30%] 2xl:w-[75%] 2xl:left-[35%] 2xl:top-[55%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 3) / 1000}px, ${
              (bounds.y - y * 8) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};
const SEMKeyword = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0 w-[70%] left-[12%] top-[28%]"
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[100%]  top-[-10%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 0) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0  top-[-10%] left-[10%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -5) / 1000}px, ${
              (bounds.y - y * -3) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[3]}
        alt=""
        className=" absolute inset-0 w-[35%] top-[50%] left-[50%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 3) / 1000}px, ${
              (bounds.y - y * 8) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};
const SEMAdcamp = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  w-[60%] left-[10%] "
      />
      <img
        src={images[3]}
        alt=""
        className=" absolute inset-0 w-[35%] top-[15%] left-[64%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 3) / 1000}px, ${
              (bounds.y - y * 8) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[60%]  top-[10%] left-[10%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 0) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />

      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0  w-[60%]  top-[40%] left-[5%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -5) / 1000}px, ${
              (bounds.y - y * -3) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};
const SEMLeadGen = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  w-[65%] left-[26%]  top-[16%]"
      />

      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[40%]  top-[50%] left-[6%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 0) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />

      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0  w-[30%]  top-[30%] left-[10%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -5) / 1000}px, ${
              (bounds.y - y * -3) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[3]}
        alt=""
        className=" absolute inset-0 w-[35%] top-[15%] left-[10%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 3) / 1000}px, ${
              (bounds.y - y * 8) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[4]}
        alt=""
        className=" absolute inset-0 w-[25%] top-[-6%] left-[17%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 3) / 1000}px, ${
              (bounds.y - y * 8) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};
const GraphicBrand = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  left-[-5%]  top-[-5%]"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 10) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />

      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[40%]  top-[32%] left-[25%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 10) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />

      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0  w-[50%]  top-[50%] left-[-5%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -5) / 1000}px, ${
              (bounds.y - y * -3) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[3]}
        alt=""
        className=" absolute inset-0 w-[38%] top-[35%] left-[61%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 3) / 1000}px, ${
              (bounds.y - y * 8) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};
const GraphicPostProd = ({ images }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[300px]  lg:w-[350px] xl:w-[400px] 2xl:w-[450px] flex justify-center items-center "
    >
      <video
        autoPlay
        loop
        muted
        src={images[0]}
        className=" shadow-xl rounded-b-3xl rounded-tl-3xl "
      ></video>
    </motion.div>
  );
};
const GraphicMotion = ({ images }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[300px]  lg:w-[350px] xl:w-[400px] 2xl:w-[450px] flex justify-center items-center "
    >
      <img src={images[0]} alt="" />
    </motion.div>
  );
};

const InfluAmplifyImpact = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  left-[5%]  top-[-2%]"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 2) / 1000}px, ${
              (bounds.y - y * 2) / 1000
            }px,0px)`,
        }}
      />

      <img
        src={images[1]}
        alt=""
        className=" absolute w-[75%] left-[22%] top-[0%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 10) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />

      <img
        src={images[2]}
        alt=""
        className=" absolute w-[85%]  left-[17%] top-[4%]"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -5) / 1000}px, ${
              (bounds.y - y * -3) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const InfluInfluencerTarget = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  left-[5%]  top-[-2%]"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 2) / 1000}px, ${
              (bounds.y - y * 2) / 1000
            }px,0px)`,
        }}
      />

      <img
        src={images[1]}
        alt=""
        className=" absolute w-[90%] left-[10%] top-[2%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 10) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const InfluIndustrySpecific = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0 "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 3) / 1000}px, ${
              (bounds.y - y * 3) / 1000
            }px,20px)`,
        }}
      />

      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 left-[-2%] top-[-2%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 10) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />

      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0 top-[42%] left-[0%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 10) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const InfluCurateInfluencer = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0 left-[-2%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 3) / 1000}px, ${
              (bounds.y - y * 3) / 1000
            }px,20px)`,
        }}
      />

      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[95%] left-[2%] top-[3%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -5) / 1000}px, ${
              (bounds.y - y * -5) / 1000
            }px,0px)`,
        }}
      />

      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0  h-[100%] left-[15%] top-[0%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 6) / 1000}px, ${
              (bounds.y - y * 6) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const InfluBrandPotential = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 3) / 1000}px, ${
        //       (bounds.y - y * 3) / 1000
        //     }px,20px)`,
        // }}
      />

      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[85%] left-[12%]  top-[-5%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -5) / 1000}px, ${
              (bounds.y - y * -5) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const ContCaptivePhoto = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[60%] left-[33%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 0) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0 left-[2%] w-[85%] top-[20%]  "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 3) / 1000}px, ${
              (bounds.y - y * 3) / 1000
            }px,20px)`,
        }}
      />

      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0 w-[30%] top-[-5%] left-[10%]  "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -5) / 1000}px, ${
              (bounds.y - y * -5) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const ContProVoice = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 8) / 1000}px, ${
              (bounds.y - y * 8) / 1000
            }px,20px)`,
        }}
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0    "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 0) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const ContVideos = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0 w-[80%] left-[8%] top-[40%]   "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 8) / 1000}px, ${
        //       (bounds.y - y * 8) / 1000
        //     }px,20px)`,
        // }}
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0    "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 10) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const ContMixMaster = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 8) / 1000}px, ${
              (bounds.y - y * -10) / 1000
            }px,20px)`,
        }}
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 10) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const ContStrategy = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0 w-[85%] top-[10%] left-[10%] md:top-[0%] md:w-[100%] md:left-[0%]"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 8) / 1000}px, ${
              (bounds.y - y * -10) / 1000
            }px,20px)`,
        }}
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[85%] top-[10%] left-[10%] md:top-[0%] md:w-[100%] md:left-[0%]"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 10) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const ContAware = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0 left-[-2%]"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 8) / 1000}px, ${
              (bounds.y - y * -10) / 1000
            }px,20px)`,
        }}
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 top-[25%] left-[-2%]"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 10) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const ContTraffic = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0 w-[85%] left-[5%]"
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 8) / 1000}px, ${
        //       (bounds.y - y * -10) / 1000
        //     }px,20px)`,
        // }}
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0  w-[85%] left-[5%]"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 10) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const ContGenLeads = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0 w-[85%] top-[20%] left-[5%]"
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 8) / 1000}px, ${
        //       (bounds.y - y * -10) / 1000
        //     }px,20px)`,
        // }}
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 top-[0%]  w-[85%] left-[5%]"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 2) / 1000}px, ${
              (bounds.y - y * 15) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const ContExpert = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  top-[15%]"
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 8) / 1000}px, ${
        //       (bounds.y - y * -10) / 1000
        //     }px,20px)`,
        // }}
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[30%] top-[24%]  left-[35%]"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 10) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const ContRetainCust = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0 w-[50%] top-[35%] left-[5%] md:w-[70%] md:left-[-10%] "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 8) / 1000}px, ${
        //       (bounds.y - y * -10) / 1000
        //     }px,20px)`,
        // }}
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[50%] top-[10%] left-[47%] md:left-[55%] md:top-[20%]"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 10) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />
      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0 w-[45%] left-[50%] md:left-[60%]"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 10) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,0px)`,
        }}
      />
    </motion.div>
  );
};

const Socialcontschedule = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 2) / 1000}px, ${
              (bounds.y - y * 2) / 1000
            }px,20px)`,
        }}
      />
    </motion.div>
  );
};

const Socialaudience = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0 w-[95%] left-[5%]  "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 2) / 1000}px, ${
        //       (bounds.y - y * 2) / 1000
        //     }px,20px)`,
        // }}
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[32%] left-[15%] top-[43%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 5) / 1000}px, ${
              (bounds.y - y * 2) / 1000
            }px,20px)`,
        }}
      />
      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0 w-[25%] left-[50%] top-[32%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -6) / 1000}px, ${
              (bounds.y - y * -2) / 1000
            }px,20px)`,
        }}
      />
      <img
        src={images[3]}
        alt=""
        className=" absolute inset-0 w-[20%] left-[51%] top-[30%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 3) / 1000}px, ${
              (bounds.y - y * 3) / 1000
            }px,20px)`,
        }}
      />
    </motion.div>
  );
};

const Socialad = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0 w-[90%] left-[3%] top-[20%]  "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 2) / 1000}px, ${
              (bounds.y - y * 2) / 1000
            }px,20px)`,
        }}
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0  w-[90%] left-[3%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 5) / 1000}px, ${
              (bounds.y - y * 5) / 1000
            }px,20px)`,
        }}
      />
    </motion.div>
  );
};

const Socialanalytic = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0 w-[90%] left-[3%] top-[20%]  "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 2) / 1000}px, ${
              (bounds.y - y * 2) / 1000
            }px,20px)`,
        }}
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0  w-[90%] left-[3%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 5) / 1000}px, ${
              (bounds.y - y * 5) / 1000
            }px,20px)`,
        }}
      />
    </motion.div>
  );
};

const Socialinflucolab = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0 top-[5%]  "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 2) / 1000}px, ${
        //       (bounds.y - y * 2) / 1000
        //     }px,20px)`,
        // }}
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[45%] top-[17%] left-[57%]  "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 10) / 1000}px, ${
              (bounds.y - y * 2) / 1000
            }px,20px)`,
        }}
      />
      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0 w-[65%]  left-[5%]  "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * -5) / 1000}px, ${
              (bounds.y - y * -2) / 1000
            }px,20px)`,
        }}
      />
      <img
        src={images[3]}
        alt=""
        className=" absolute inset-0 w-[65%] left-[10%]  "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 2) / 1000}px, ${
              (bounds.y - y * 10) / 1000
            }px,20px)`,
        }}
      />
    </motion.div>
  );
};

const Socialstrategy = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 2) / 1000}px, ${
              (bounds.y - y * 2) / 1000
            }px,20px)`,
        }}
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0  left-[20%] top-[-10%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 8) / 1000}px, ${
              (bounds.y - y * 5) / 1000
            }px,20px)`,
        }}
      />
    </motion.div>
  );
};

const Socialplatform = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0 left-[5%]   "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 2) / 1000}px, ${
        //       (bounds.y - y * 2) / 1000
        //     }px,20px)`,
        // }}
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 left-[20%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 5) / 1000}px, ${
              (bounds.y - y * 5) / 1000
            }px,20px)`,
        }}
      />
      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0 w-[90%] md:w-[100%] left-[5%]  top-[-8%] md:left-[0%] md:top-[-10%]   "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 2) / 1000}px, ${
              (bounds.y - y * -5) / 1000
            }px,20px)`,
        }}
      />
      <img
        src={images[3]}
        alt=""
        className=" absolute inset-0 w-[90%] md:w-[100%] top-[5%] left-[2%] md:top-[0%] md:left-[0%]  "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 2) / 1000}px, ${
              (bounds.y - y * 2) / 1000
            }px,20px)`,
        }}
      />
    </motion.div>
  );
};

const Socialreput = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0 w-[90%] left-[5%]  top-[10%] md:w-[100%]  md:left-[0%]  "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 2) / 1000}px, ${
        //       (bounds.y - y * 2) / 1000
        //     }px,20px)`,
        // }}
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0  h-[100%] w-[90%] top-[-5%]  left-[3%] md:w-[100%] md:left-[0%] "
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 6) / 1000}px, ${
              (bounds.y - y * 5) / 1000
            }px,20px)`,
        }}
      />
    </motion.div>
  );
};

const Socialcampaign = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[350px] md:h-[350px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0 w-[85%] top-[15%] left-[6%] md:w-[100%] md:left-[5%] "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 2) / 1000}px, ${
        //       (bounds.y - y * 2) / 1000
        //     }px,20px)`,
        // }}
      />
      <img
        src={images[1]}
        alt=""
        className=" absolute inset-0 w-[50%] left-[3%] top-[5%] md:w-[60%]  md:left-[-1%]"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 7) / 1000}px, ${
              (bounds.y - y * 7) / 1000
            }px,20px)`,
        }}
      />
      <img
        src={images[2]}
        alt=""
        className=" absolute inset-0 w-[30%] left-[65%] top-[10%] md:w-[40%] md:left-[75%]"
        style={{
          transform:
            isHover &&
            `translate3d(${(bounds.x - x * 2) / 1000}px, ${
              (bounds.y - y * -7) / 1000
            }px,20px)`,
        }}
      />
    </motion.div>
  );
};
const Printstandee = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[600px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 2) / 1000}px, ${
        //       (bounds.y - y * 2) / 1000
        //     }px,20px)`,
        // }}
      />
    </motion.div>
  );
};

const Printfoam = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[600px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 2) / 1000}px, ${
        //       (bounds.y - y * 2) / 1000
        //     }px,20px)`,
        // }}
      />
    </motion.div>
  );
};

const Printbrochure = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[600px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 2) / 1000}px, ${
        //       (bounds.y - y * 2) / 1000
        //     }px,20px)`,
        // }}
      />
    </motion.div>
  );
};

const Printvisit = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[600px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 2) / 1000}px, ${
        //       (bounds.y - y * 2) / 1000
        //     }px,20px)`,
        // }}
      />
    </motion.div>
  );
};

const Printhoarding = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[600px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 2) / 1000}px, ${
        //       (bounds.y - y * 2) / 1000
        //     }px,20px)`,
        // }}
      />
    </motion.div>
  );
};

const Printmobilebill = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[600px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 2) / 1000}px, ${
        //       (bounds.y - y * 2) / 1000
        //     }px,20px)`,
        // }}
      />
    </motion.div>
  );
};

const Printlit = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[600px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 2) / 1000}px, ${
        //       (bounds.y - y * 2) / 1000
        //     }px,20px)`,
        // }}
      />
    </motion.div>
  );
};

const Printacrylic = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[600px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 2) / 1000}px, ${
        //       (bounds.y - y * 2) / 1000
        //     }px,20px)`,
        // }}
      />
    </motion.div>
  );
};

const Printsignage = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[600px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 2) / 1000}px, ${
        //       (bounds.y - y * 2) / 1000
        //     }px,20px)`,
        // }}
      />
    </motion.div>
  );
};

const Printmagazine = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[600px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 2) / 1000}px, ${
        //       (bounds.y - y * 2) / 1000
        //     }px,20px)`,
        // }}
      />
    </motion.div>
  );
};

const Printled = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[600px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 2) / 1000}px, ${
        //       (bounds.y - y * 2) / 1000
        //     }px,20px)`,
        // }}
      />
    </motion.div>
  );
};

const Printnewspaper = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[600px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 2) / 1000}px, ${
        //       (bounds.y - y * 2) / 1000
        //     }px,20px)`,
        // }}
      />
    </motion.div>
  );
};

const Printmobilead = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[600px]  "
    >
      <img
        src={images[0]}
        alt=""
        className=" absolute inset-0  "
        // style={{
        //   transform:
        //     isHover &&
        //     `translate3d(${(bounds.x - x * 2) / 1000}px, ${
        //       (bounds.y - y * 2) / 1000
        //     }px,20px)`,
        // }}
      />
    </motion.div>
  );
};

const Vidanimate = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate    "
    >
      <video
        autoPlay
        loop
        muted
        src={images[0]}
        className=" rounded-b-3xl rounded-tr-3xl transition-all shadow-[4px_4px_6px_#ffffff31] hover:shadow-[2px_2px_1px_#ffffff31]"
      ></video>
    </motion.div>
  );
};

const Vidweb = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate    "
    >
      <video
        autoPlay
        loop
        muted
        src={images[0]}
        className=" rounded-b-3xl rounded-tr-3xl transition-all shadow-[4px_4px_6px_#ffffff31] hover:shadow-[2px_2px_1px_#ffffff31]"
      ></video>
    </motion.div>
  );
};

const Vidcamppaign = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate    "
    >
      <video
        autoPlay
        loop
        muted
        src={images[0]}
        className=" rounded-b-3xl rounded-tr-3xl transition-all shadow-[4px_4px_6px_#ffffff31] hover:shadow-[2px_2px_1px_#ffffff31]"
      ></video>
    </motion.div>
  );
};

const Vidreels = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate    "
    >
      <video
        autoPlay
        loop
        muted
        src={images[0]}
        className=" rounded-b-3xl rounded-tr-3xl transition-all shadow-[4px_4px_6px_#ffffff31] hover:shadow-[2px_2px_1px_#ffffff31]"
      ></video>
    </motion.div>
  );
};

const Vidhowto = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate    "
    >
      <video
        autoPlay
        loop
        muted
        src={images[0]}
        className=" rounded-b-3xl rounded-tr-3xl transition-all shadow-[4px_4px_6px_#ffffff31] hover:shadow-[2px_2px_1px_#ffffff31]"
      ></video>
    </motion.div>
  );
};

const Vidcooperate = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate    "
    >
      <video
        autoPlay
        loop
        muted
        src={images[0]}
        className=" rounded-b-3xl rounded-tr-3xl transition-all shadow-[4px_4px_6px_#ffffff31] hover:shadow-[2px_2px_1px_#ffffff31]"
      ></video>
    </motion.div>
  );
};

const Vidlive = ({ images, bounds, x, y, isHover }) => {
  // console.log(bounds, x, y, isHover);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className=" mt-6 md:mt-1 relative isolate    "
    >
      <video
        autoPlay
        loop
        muted
        src={images[0]}
        className=" rounded-b-3xl rounded-tr-3xl transition-all shadow-[4px_4px_6px_#ffffff31] hover:shadow-[2px_2px_1px_#ffffff31]"
      ></video>
    </motion.div>
  );
};
