import React, { useEffect } from "react";
import { motion } from "framer-motion";

import logo from "../assets/images/logo.png";
import { Helmet } from "react-helmet-async";

// function ScrollToTopOnMount() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return null;
// }
const PrivacyPolicy = () => {
  return (
    <>
      {/* <ScrollToTopOnMount /> */}
      {/* <motion.div
        className=" absolute inset-0 w-full bg-black h-full z-50"
        initial={{ height: "100%" }}
        animate={{ height: 0 }}
        exit={{ height: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
      ></motion.div> */}
      <Helmet>
        <title>
          Samrdh Design Studio & Branding Pvt. Ltd. - Privacy Policy
        </title>
        <meta
          name="description"
          content="Privacy Policy & Terms and Conditions"
        />
        <meta
          name="keywords"
          content="digital marketing, goa, website development"
        />
        <meta
          property="og:title"
          content="Privacy Policy & Terms and Conditions"
        />
        <meta
          property="og:description"
          content="Privacy Policy & Terms and Conditions"
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content={`http://samrdh.in/privacypolicy`} />
        <meta
          name="twitter:title"
          content="Privacy Policy & Terms and Conditions"
        />
        <meta
          name="twitter:description"
          content="Privacy Policy & Terms and Conditions"
        />
        <meta name="twitter:image" content={logo} />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <section
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.75, ease: "easeInOut" }}
        // exit={{ opacity: 1 }}
        className="privacy-policy-terms-and-conditions mt-2 md:mt-4 px-1 md:px-14 lg:px-20 2xl:px-32 lg:mt-6 xl:px-24 mb-4"
      >
        {/* <h1 className="text-2xl md:text-3xl font-bold text-center p-2">
          Our Privacy Policy And Terms & Conditions
        </h1> */}
        <div className="privacy-policy p-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-semibold">
            Privacy Policy
          </h2>
          <p className="w-full p-2 text-base lg:text-lg">
            At Samrdh Design Studio & Branding Pvt. Ltd., we value your privacy
            and are committed to protecting your personal information. This
            Privacy Policy outlines how we collect, use, and safeguard the
            information you provide when accessing our website and using our
            services.
          </p>
          <div className="p-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Information We Collect
            </h3>
            <ol className="p-2 pl-6 text-justify text-base lg:text-lg">
              <li className="list-disc marker:text-primary ">
                <strong>
                  Personal Information (Provided to us or asked by us):{" "}
                </strong>
                When you use our contact form or request our services, we may
                collect personal information, including but not limited to your
                name, email address, phone number and commpany details.
              </li>
              <li className="list-disc marker:text-primary  mt-2">
                <strong>Usage Data: </strong>We may gather non-personal
                information about your interactions with our website, such as IP
                address, browser type, device information, and referring pages.
              </li>
              <li className="list-disc marker:text-primary  mt-2">
                <strong>Cookies and Tracking Technologies: </strong>We use
                cookies and similar tracking technologies to enhance your
                experience on our website and to analyze trends. You can control
                the use of cookies through your browser settings.
              </li>
            </ol>
          </div>
          <div className="p-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              How we Use Your Information
            </h3>
            <ol className="p-2 ml-1 pl-4 text-base lg:text-lg">
              <li className="list-decimal marker:text-primary marker:font-bold p-1 ">
                To provide and improve our services, including digital
                marrketing, web development, SEO, SEM and related services.
              </li>
              <li className="list-decimal marker:text-primary marker:font-bold p-1 ">
                To communicate with you regarding our services,updates, and
                promotional offers.
              </li>
              <li className="list-decimal marker:text-primary marker:font-bold p-1 ">
                To analyze website usage and optimize our content and marketing
                efforts.
              </li>
            </ol>
          </div>
          <div className="p-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Third-Party Services
            </h3>
            <p className="p-2 text-base lg:text-lg">
              We may use third-party services, such as Google Analytics and
              Google Tags, to track and analyze website usage. These services
              may use cookies and other tracking tecknologies to collect data.
              Please review their respective privacy policies for more
              information on how they handle your data. Third party services
              always comes with a rider to disclose data to privacy policy or
              accep terms and conditions, or app or services usage permission.
              This is applicable for both the parties herein.
            </p>
          </div>
          <div className="p-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Blog Comments
            </h3>
            <p className="p-2 text-base lg:text-lg">
              When you comment on our blog posts, we collect your name, email
              address, website provided. This information is used to display
              your comment and respond to any queries you may have. Please be
              aware that any information you disclose in your comments becomes
              public information.
            </p>
          </div>
          <div className="p-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Data Security
            </h3>
            <p className="p-2 text-base lg:text-lg">
              We implement utmost security measures to protect your personal
              information from unauthorized access, disclosure, alteration, or
              destruction. But incase of any breach of service provider will not
              be liable for any legal recourse or adverse proceedings against
              service provider.
            </p>
          </div>
          <div className="p-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Your Choices
            </h3>
            <p className="p-2 text-lg lg:text-xl font-medium">
              You have the right to:
            </p>
            <ol className="p-2 pt-0 ml-3 pl-4 text-base lg:text-lg">
              <li className="list-decimal marker:text-primary marker:font-bold  p-1">
                Opt-out of marketing communications: You can unsubscribe from
                our marketing emails using the link provided in the emails.
              </li>
              <li className="list-decimal marker:text-primary marker:font-bold p-1">
                Access, Correct, or Delete your personal information: You may
                request access to your personal information or ask us to update
                or delete it by contacting us at hello@samrdh.in.
              </li>
            </ol>
          </div>
          <div className="p-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Changes to this Policy
            </h3>
            <p className="p-2 text-base lg:text-lg">
              We reserve the right to update this Privacy Policy as and when
              necessary. Any changes will be postedd on this page, and the
              effective date will be revised accordingly.
            </p>
          </div>
        </div>
        <div className="terms-and-conditions p-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
            Terms And Conditions
          </h2>
          <p className="p-2 text-base lg:text-lg">
            Welcome to Samrdh Design Studio & Branding Pvt. Ltd. By accessing
            and using our website and services, you agreeto comply with these
            Terms and Conditions. Please read this agreement carefully before
            proceeding, as availed by the client (all IP registration priority
            attained by the client)
          </p>
          <div className="p-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl  font-semibold">
              Intellectual Property
            </h3>
            <p className="p-2 text-base lg:text-lg">
              All Content on this website, including but not limited to text,
              images, graphics, logos, and software, is the intellectual
              property of Samrdh Design Studio & Branding Pvt. Ltd. and
              protected by copyright and other applicable laws. You may not
              reproduce, modify, distribute, or republish any content without
              our expressed written permission.
            </p>
          </div>
          <div className="p-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Services Offered
            </h3>
            <p className="p-2 text-base md:text-lg">
              Samrdh Design Studio & Branding Pvt. Ltd. provides digital
              marketing, content creation, content marketing, web development,
              graphic desiigning, influencer marketing, SEM & Advertisement,
              Printing & Branding and related services. The Specific details,
              scope, and pricing of these services will be outlined in
              individual agreements or proposals.
            </p>
          </div>
          <div className="p-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Payment and Billing
            </h3>
            <p className="p-2 text-base lg:text-lg">
              Payment terms will be specified in the agreement or proposal for
              each service. Invoices must be paid within the agreed-upon
              timeframe to avoid any service interruptions or penalties.
            </p>
          </div>
          <div className="p-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Third-Party Content
            </h3>
            <p className="p-2 text-base lg:text-lg">
              Our website may contain links to third-party websites,
              advertisements,or content. We do not endorse or control these
              external resources and are not responsible for their content or
              practices. Your interactions with third-party websites are at your
              own risk.
            </p>
          </div>
          <div className="p-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Disclaimer of Warranties
            </h3>
            <p className="p-2 text-base lg:text-lg">
              While we strive to provide accurate and reliable information, our
              services and website content are provided on an "as is" basis
              without any warranties, express or implied. We do not guarantee
              the accuracy, completeness, or timeliness of the information
              provided.
            </p>
          </div>
          <div className="p-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Limitation of Liability
            </h3>
            <p className="p-2 text-base lg:text-lg">
              Samrdh Design Studio & Branding Pvt. Ltd. shall not be liable for
              any direct, indirect, incidental, consequential, or punitive
              damages arising from your use of our services or website.
            </p>
          </div>
          <div className="p-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Governing Law and Jurisdiction
            </h3>
            <p className="p-2 text-base lg:text-lg">
              These Terms and Conditions shall be governed by and interpreted in
              accordance with the laws of the state of Goa and any disputes
              arising under this agreement shall be subject to the exclusive
              jurisdiction of the courts in which registered office of Samrdh
              Design Studio & Branding Pvt. Ltd. is loacted i.e CT Civil court
              of Panjim / district court north Goa and high court of Bombay at
              Goa.
            </p>
          </div>
          <div className="p-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Changes to the Terms
            </h3>
            <p className="p-2 text-base lg:text-lg">
              We reserve the right to modify or update these Terms and
              Conditions at any time without prior notice. By continuing to use
              our services and website, you agree to be bound by the revised
              Terms and Conditions.
            </p>
            <p className="p-2 text-base lg:text-lg">
              By using our website and services, you acknowleddge that you have
              read, understood, and agreed to these Privacy Policy and Terms and
              Conditions. Incase of any queries or concerns, please contact us
              at hello@samrdh.in
            </p>
          </div>
        </div>
        <div className="p-2 ">
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-center w-full font-semibold">
            Privacy policy of Samrdh Design Studio & Branding Pvt. Ltd. has been
            approved by the legal department under the supervision of Adv.
            Siddharth Sardesai and Associates.
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
