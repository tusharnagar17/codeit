import React from "react";
import ContactBtn from "./ContactBtn";
import Image from "next/image";
import { userDetails } from "@/constants/userDetails";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 dark:bg-slate-900 border-[0.1px]">
      <div className="md:flex justify-between items-center max-w-6xl mx-auto py-10 md:py-10 px-6">
        <div className="max-w-lg ">
          <div className="">
            {" "}
            <Image
              src="/codeit-logo.png"
              alt="code-it logo"
              height={150}
              width={200}
            />
          </div>
          <div className="text-lg pt-2 text-wrap">
            We are focused on providing the best digital services to our
            clients.
            <br />
            Contact us for more information.
          </div>

          {/* Social Icons */}
          <div className="flex gap-10 my-6">
            <a href={userDetails.link.x} className="hover:text-sky-500">
              <FaXTwitter size={40} />
            </a>
            <a href={userDetails.link.instagram} className="hover:text-red-500">
              <FaInstagram size={40} />
            </a>
            <a href={userDetails.link.instagram} className="hover:text-sky-600">
              <FaLinkedin size={40} />
            </a>
          </div>
        </div>

        {/* flex start here */}
        <div className="md:pr-32 mt-14 md:mt-0">
          <div className="">
            <div className="text-4xl font-bold my-2">Contact Info</div>
            <div className="my-2 text-lg">
              {userDetails.personalDetails.address}
            </div>
            <div className="font-bold my-2 text-lg">
              {userDetails.personalDetails.email}
            </div>
            <div className="my-2 text-lg">
              {userDetails.personalDetails.number}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:flex gap-6 md:gap-10">
          <div className="font-bold text-lg">
            <a href="#projects-section">PORTFOLIO</a>
          </div>
          <div className="font-bold text-lg">
            <a href="#about-section">OUR TEAM</a>
          </div>
          <div className="font-bold text-lg">
            <a href="#contact-section">PRICING PLAN</a>
          </div>
          <div className="font-bold text-lg">
            <a href="#services-section">SERVICES</a>
          </div>
          <div className="font-bold text-lg">
            <a href="#contact-section">CONTACT US</a>
          </div>
        </div>
        <div className="px-4 border-b-2 border-slate-900 dark:border-slate-100"></div>
        <div className="text-md my-5 md:my-10 font-bold text-center">
          @ 2024 Codeit Technologies
        </div>
      </div>
    </div>
  );
};

export default Footer;
