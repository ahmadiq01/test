import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import frameLogo from "../../assets/Frame.svg"; // Adjust path if needed

const Footer = () => {
  return (
    <div className="bg-[#dee13e] w-full h-[425px] px-8 py-6">
      <div className="flex flex-col h-full justify-between">
        {/* Empty divs for future content customization */}
        <div className="w-[588px] h-[137px] absolute flex-row left-[53px] ">
            <p className="font-[Heathergreen] text-[100px] font-normal leading-[136.62px] text-black">
                Let’s Build Your Apps Together
            </p>
            <p className="text-[#474CBA] text-[24px] cursor-pointer hover:text-gray-600">
                Get In Touch
            </p>
            <div className="pr-13 text-end mt-[-45px]">
                <p className="font-[Heathergreen] text-[100px] font-normal leading-[136.62px] text-black">
                    Careers
                </p>
                <p className="text-[#474CBA] text-[24px] cursor-pointer hover:text-gray-600">
                    Apply here
                </p>
            </div>
        </div>

        <div></div>
        <div>
            
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-row w-full justify-between items-center px-10 py-4">
          
          {/* Header Section */}
          <div className="flex flex-col w-[140px] h-[47px]">
            <img src={frameLogo} alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Links Section */}
          <div className="flex flex-row justify-between space-x-6 ">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 cursor-pointer">
                Work
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 cursor-pointer">
                Contact
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 cursor-pointer">
                About Us
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 cursor-pointer">
                Clients
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 cursor-pointer">
                Services
            </a>
          </div>  


          {/* Icons Section */}
          <div className="flex space-x-4 flex-row justify-items-start">
            <FaInstagram className="text-black text-2xl cursor-pointer" />
            <FaLinkedin className="text-black text-2xl cursor-pointer" />
            <FaFacebook className="text-black text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
