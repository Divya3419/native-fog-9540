import { Box, Input } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      borderTop="1px solid grey"
      textAlign="left"
      marginBottom="60px"
      color="grey"
      gap="50px"
      fontSize="14px"
      display="grid"
      gridTemplateColumns="repeat(5,1fr)"
    >
      <Box marginTop="20px" marginLeft="40px">
        Get Expert Beauty Insight & Offer
        <Input
          fontSize="10px"
          border="none"
          borderBottom="1px solid black"
          placeholder="EMAIL ADDRESS"
        />
        By continuing, you agree to Bluemercury's
        <br />
        <a
          href="https://bluemercury.com/pages/privacy-policy#privacyHowCollect"
          target="_blank"
        >
          Privacy Practices.
        </a>
        <Box
          fontSize="23px"
          color="black"
          display="grid"
          gridTemplateColumns="repeat(5,1fr)"
        >
          <a href="https://twitter.com/bluemercury">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.pinterest.com/bluemercury/">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a href="https://www.facebook.com/bluemercury/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/bluemercury/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.youtube.com/channel/UCrgUXfV7IIFllEQMbzd9J3A">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </Box>
        Copyright 2022 bluemercury. All Rights Reserved.
      </Box>

      <Box marginTop="20px">
        <h3>BLUEMERCURY</h3>
        <a href="https://bluemercury.com/pages/our-company">Our Company</a>
        <br />
        <a href="https://bluemercury.com/apps/store-locator">Store Locator</a>
        <br />
        <a href="https://bluemercury.com/pages/events">
          in-Store & Online Event
        </a>
        <br />
        <a href="https://bluemercury.com/pages/spa-menu">Spa Menu</a>
        <br />
        <a href="https://bluemercury.com/pages/careers">Careers</a>
        <br />
        <a href="https://bluemercury.com/pages/vendor-submissions">
          Vendor Submissions
        </a>
        <br />
        <a href="https://bluemercury.com/pages/diversity-inclusion">
          Diversity & Inclusion
        </a>
      </Box>

      <Box marginTop="20px">
        <h3>MY ACCOUNT</h3>
        {/* addd account pages */}
        <Link to="/login">My Account</Link>
        <br />
        <a href="https://bluemercury.com/pages/bluerewards">Blue Rewards</a>
        <br />
        <a href="https://bluemercury.com/pages/gift-card-balance">
          Gift Card Balance Checker
        </a>
      </Box>

      <Box marginTop="20px">
        <h3>CUSTOMER SERVICES</h3>
        <a href="https://bluemercury.com/pages/contact-us">Contact Us</a>
        <br />
        <a href="https://bluemercury.com/pages/help-faq">Help & FAQ</a>
        <br />
        <a href="https://bluemercury.com/pages/shipping-returns-exchanges">
          Shipping,Returns & Exchanges
        </a>
        <br />
        <a href="https://bluemercury.com/pages/gift-cards">Gift Cards</a>
        <br />
        <a href="https://bluemercury.com/pages/offers-promotions">
          Offers & Promotions
        </a>
        <br />
        <a href="https://bluemercury.com/pages/klarna">Klarna</a>
        <br />
      </Box>
      <Box marginTop="20px">
        <h3>RESOURCES</h3>
        <a href="https://bluemercury.com/pages/terms-conditions">
          Terms & Conditions
        </a>
        <br />
        <a href="https://bluemercury.com/pages/privacy-policy">
          Privacy Notice
        </a>
        <br />
        <a href="https://bluemercury.com/pages/privacy-policy#dns">
          Do Not Sell My Personal Information
        </a>
        <br />
        <a href="https://bluemercury.com/pages/privacy-policy/#privacyCA">
          CA Privacy Rights
        </a>
        <br />
        <a href="https://bluemercury.com/pages/accessibility">Accessibility</a>
        <br />
        <a href="https://bluemercury.com/pages/bluemercury-affiliate-program">
          Affiliate Program
        </a>
        <br />
        <a href="https://bluemercury.com/pages/welcome-home">
          COVID-19 Updates
        </a>
        <br />
      </Box>
    </Box>
  );
};

export default Footer;
