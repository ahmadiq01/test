import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import frameLogo from "../../assets/Frame.svg"; // Adjust path if needed

const Footer = () => {
  return (
    <div className="bg-[#dee13e] w-full px-4 md:px-6 py-4 md:py-6 md:mt-[23px]">
      <div className="flex flex-col h-full justify-between relative">
        {/* Headline Section */}
        <div className="w-full md:w-[588px] md:h-[137px] relative flex flex-col space-y-2 md:space-y-0">
          <p className="font-[Heathergreen] text-[25px] md:text-[50px] lg:text-[100px] font-normal leading-tight md:leading-[136.62px] text-black text-center md:text-left">
            Let's Build Your Apps Together
          </p>
          <p className="text-[#474CBA] text-[10px] md:text-[12px] lg:text-[24px] text-center md:text-left cursor-pointer hover:text-gray-600">
            Get In Touch
          </p>
          
          <div className="text-right md:pr-13 mt-4 md:mt-[-45px]">
            <p className="font-[Heathergreen] text-[50px] md:text-[100px] font-normal leading-tight md:leading-[136.62px] text-black text-center md:text-right">
              Careers
            </p>
            <p className="text-[#474CBA] text-[10px] md:text-[24px] text-center md:text-right cursor-pointer hover:text-gray-600">
              Apply here
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-center items-center mt-8 lg:mt-[119px] ">
          <div className="flex flex-col space-y-4 md:space-y-6 text-base md:text-[30px]  text-[#474cba] font-extrabold leading-relaxed tracking-[-0.04em] font-[Poppins] text-center md:text-left lg:mt-[-170px]">
            <div>
              <p>Dubai, Lahore, wtv Road</p>
              <p>Address, wtv, 43543</p>
            </div>
            <div>
              <p>Address, wtv, 43543</p>
              <p>Address, wtv, 43543</p>
            </div>
            
            {/* Responsive Image */}
            <div className="relative w-full flex justify-center md:block">
              <img 
                src="https://s3-alpha-sig.figma.com/img/df8f/7fc5/ebcb86426df7897596bb0414358e852b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=b8bdb7I4xHqz6FGkNKco3XX3o4MQise~UBwD4xGtGIlsFnXL~rah-ADXo9mjP9tipTBI9klnh2kGIVxPs6eF5NpUOtCB2YvLLseVr8obvwub5qnwmghEntRY7q~UGGe0QsFaUwY35msY22B-~coqv~HjqS1oIKoBP2RMzomkpUTnclw3UnPaBeb1zur97mOcQqHm2mg8xqHxlgCeh8QpezH9NFI2N833ck~RWeGVTFl6E~cbFy4nOqB80H1DF7AI11W6TuHy8-YRVQOqxWlSLTM5ypvit8H9ET-211EQXvGNE2H3RLZweyQdGglIrMke9sLbZVJPgoy56znyWaSCRQ__"
                alt="img" 
                className="w-[200px] h-[200px] md:w-[353px] md:h-[353px] rounded-full mt-4 md:absolute md:top-[-340px] md:left-[757px]"
              />
            </div>
          </div>
        </div>

        {/* Logo and Navigation */}
        <div className="flex flex-col md:flex-row w-full justify-between items-center px-4 md:px-10 py-4 space-y-4 md:space-y-0">
          <div className="flex flex-col w-[140px] h-[47px] items-center md:items-start">
            <img src={frameLogo} alt="Logo" className="h-8 md:h-12 w-auto" />
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-between space-y-2 md:space-y-0 md:space-x-6 text-center">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <a href="work" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 cursor-pointer">
                Work
              </a>
              <a href="contact" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 cursor-pointer">
                Contact
              </a>
              <a href="about" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 cursor-pointer">
                About Us
              </a>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 cursor-pointer">
                Clients
              </a>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 cursor-pointer">
                Services
              </a>
            </div>
          </div>
          
          <div className="flex space-x-4 justify-center items-center mt-4 md:mt-0">
            <FaInstagram className="text-black text-xl md:text-2xl cursor-pointer" />
            <FaLinkedin className="text-black text-xl md:text-2xl cursor-pointer" />
            <FaFacebook className="text-black text-xl md:text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;