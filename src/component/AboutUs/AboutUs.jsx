import React from "react";
import aboutUs from "../../static/images/aboutus.jpg";

import './AboutUs.scss'

function AboutUs() {
  return (
    <div className="aboutus">
      <div className="aboutus__contact-section">
        <div className="aboutus__contact-left-section ">
          <p>
            Do you have any comments or questions? Our team will be happy to
            assist you. Send us a message.
          </p>
          <h2>support@resumebuilder.com</h2>
          <p>
            We are here to answer any questions regarding our resume generator,
            do not hesitate to contact us for any reason. We will respond in
            less than 24 hours from receipt of the email. Thanks for trusting us
          </p>
        </div>
        <div className="aboutus__contact-right-section">
          <img src={aboutUs} className="full-width about-us-img" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
