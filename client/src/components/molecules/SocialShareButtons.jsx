import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const SocialShareButtons = () => {
  return (
    <div className="flex justify-center lg:justify-start md:justify-start gap-4 text-lg">
      <FaFacebookF />
      <FaTwitter />
      <FaInstagram />
      <FaLinkedin />
    </div>
  );
};

export default SocialShareButtons;
