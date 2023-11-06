import React from "react";

import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";

import Careers from "./pages/Careers";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQs from "./pages/FAQs";
import Testimonials from "./pages/Testimonials";
import Influencers from "./pages/Influencers";
import Campaigns from "./pages/Campaigns";
import { AnimatePresence } from "framer-motion";
import WebDevelopment from "./pages/WebDevelopment";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import SEMAndAdvertisement from "./pages/SEMAndAdvertisement";
import InfluencerMarketing from "./pages/InfluencerMarketing";
import ContentCreation from "./pages/ContentCreation";
import EmailMarketing from "./pages/EmailMarketing";
import GraphicDesign from "./pages/GraphicDesign";
import PrintingAndBranding from "./pages/PrintingAndBranding";
import VideoMarketing from "./pages/VideoMarketing";
import ThankYou from "./pages/ThankYou";
import Error from "./pages/Error";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/careers" element={<Careers />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/ourstory" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/web-development" element={<WebDevelopment />} />
          <Route
            path="/service/graphic-designing"
            element={<GraphicDesign />}
          />
          <Route
            path="/service/social-media-marketing"
            element={<SocialMediaMarketing />}
          />
          <Route
            path="/service/sem-and-advertisement"
            element={<SEMAndAdvertisement />}
          />
          <Route
            path="/service/influencer-marketing"
            element={<InfluencerMarketing />}
          />
          <Route
            path="/service/content-creation"
            element={<ContentCreation />}
          />
          <Route path="/service/email-marketing" element={<EmailMarketing />} />
          <Route
            path="/service/printing-and-branding"
            element={<PrintingAndBranding />}
          />
          <Route path="/service/video-marketing" element={<VideoMarketing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/influencers" element={<Influencers />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/error" element={<Error />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
