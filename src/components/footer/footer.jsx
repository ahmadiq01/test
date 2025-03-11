import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import frameLogo from "../../assets/Frame.svg"; // Adjust path if needed
import Header from "../Header/header";

const Footer = () => {
  return (
    <div className="bg-[#dee13e] flex flex-col gap-8 md:gap-4 lg:gap-8">
      {/* Section 1 */}
      <div className="flex flex-col ml-[5px] md:ml-[10px] lg:ml-[20px]">
        <div className="relative">
          <p className="font-[Heathergreen] text-[20px] md:text-[50px] lg:text-[100px] leading-tight md:leading-[68px] lg:leading-[136.62px] text-black text-start ">
            Let's Build Your Apps Together
          </p>
          <div className="absolute bottom-0 translate-y-[15px] md:translate-y-[40px] lg:translate-y-[50px]">
            <a
              href="apply"
              className="text-[#474CBA] text-[4px] md:text-[15px] lg:text-[30px] cursor-pointer hover:text-gray-600"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Section 2 (Careers) */}
      <div className="pl-[107px] md:pl-[215px] lg:pb-[70px] md:pb-[70px] lg:pl-[430px] mt-[-25px] md:mt-[-20px] lg:mt-[-60px]">
        <p className="font-[Heathergreen] text-[15px] md:text-[50px] lg:text-[100px] leading-tight md:leading-[68px] lg:leading-[136.62px] text-black text-left">
          Careers
        </p>
        <div className="mt-[-10px] md:mt-[-10px] lg:mt-[-10px]">
          <a
            href="apply"
            className="text-[#474CBA] text-[4px] md:text-[15px] lg:text-[30px] cursor-pointer hover:text-gray-600"
          >
            Apply here
          </a>
        </div>
      </div>

      <div className="flex flex-col text-[8px] ml-[12px] mt-[-90px] md:text-[14px] lg:text-[24px] text-[#474cba] font-extrabold leading-relaxed tracking-[-0.04em] font-[Poppins] text-center md:mt-[-220px] lg:mt-[-340px]">
        <div>
          <p>Dubai, Lahore, wtv Road</p>
          <p>Address, wtv, 43543</p>
        </div>
        <div>
          <p>Address, wtv, 43543</p>
          <p>Address, wtv, 43543</p>
        </div>

        <div className=" flex justify-end mt-[-50px] md:mt-[-120px] lg:mt-[-200px]  ">
          <img
            src="https://s3-alpha-sig.figma.com/img/df8f/7fc5/ebcb86426df7897596bb0414358e852b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=b8bdb7I4xHqz6FGkNKco3XX3o4MQise~UBwD4xGtGIlsFnXL~rah-ADXo9mjP9tipTBI9klnh2kGIVxPs6eF5NpUOtCB2YvLLseVr8obvwub5qnwmghEntRY7q~UGGe0QsFaUwY35msY22B-~coqv~HjqS1oIKoBP2RMzomkpUTnclw3UnPaBeb1zur97mOcQqHm2mg8xqHxlgCeh8QpezH9NFI2N833ck~RWeGVTFl6E~cbFy4nOqB80H1DF7AI11W6TuHy8-YRVQOqxWlSLTM5ypvit8H9ET-211EQXvGNE2H3RLZweyQdGglIrMke9sLbZVJPgoy56znyWaSCRQ__"
            alt="img"
            className="rounded-full w-[15em] h-[6em] md:w-[10em] md:h-[12em] lg:w-[12em] lg:h-[12em] object-contain"
          />
        </div>
      </div>

      {/* Bottom Navigation and Social Icons */}
      <div className="flex justify-between items-center ">
        {/* Left Section: Logo & Navigation */}
        <div className="flex items-center ">
          {/* Logo */}
          <div className="text-black md:ml-[20px] ml-[10px] text-lg md:text-xl lg:text-2xl font-bold">
            <img
              src={frameLogo}
              alt="Logo"
              className="w-[2.5em] h-[2.5em] object-contain"
            />
          </div>
        </div>
        <div>
          {/* Navigation Links */}
          <nav className="flex space-x-4 md:space-x-6 lg:space-x-8">
            <a
              href="work"
              target="_blank"
              className="text-black hover:text-gray-600 cursor-pointer text-sm md:text-lg lg:text-xl"
            >
              Work
            </a>
            <a
              href="contact"
              target="_blank"
              className="text-black hover:text-gray-600 cursor-pointer text-sm md:text-lg lg:text-xl"
            >
              Contact
            </a>
            <a
              href="about"
              target="_blank"
              className="text-black hover:text-gray-600 cursor-pointer text-sm md:text-lg lg:text-xl"
            >
              About Us
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              className="text-black hover:text-gray-600 cursor-pointer text-sm md:text-lg lg:text-xl"
            >
              Clients
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              className="text-black hover:text-gray-600 cursor-pointer text-sm md:text-lg lg:text-xl"
            >
              Services
            </a>
          </nav>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex space-x-4 md:space-x-6 lg:space-x-8 mr-[30px]">
          <FaInstagram className="text-black text-lg md:text-xl lg:text-2xl cursor-pointer" />
          <FaLinkedin className="text-black text-lg md:text-xl lg:text-2xl cursor-pointer" />
          <FaFacebook className="text-black text-lg md:text-xl lg:text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
