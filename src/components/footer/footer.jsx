import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import frameLogo from "../../assets/Frame.svg"; // Adjust path if needed

const Footer = () => {
  return (
    <div className="bg-[#dee13e] w-full px-4 py-4">
      {/* Main content section */}
      <div className="flex flex-col h-full justify-between relative">
        
        {/* Top section with headings */}
        <div className="flex flex-col w-full">
          {/* "Let's Build" section */}
          <p className="font-[Heathergreen] text-[25px] font-normal leading-tight text-black text-left">
            Let's Build Your Apps Together
          </p>
          <a href="apply" className="text-[#474CBA] text-[10px] text-left cursor-pointer hover:text-gray-600">
            Get In Touch
          </a>
          
          {/* Dubai address directly after Let's Build text */}
          <div className="mt-2 flex justify-center">
            <div className="text-[12px] text-[#474cba] font-bold text-center">
              <p>Dubai, Lahore, wtv Road</p>
              <p>Address, wtv, 43543</p>
              <p>Address, wtv, 43543</p>
              <p>Address, wtv, 43543</p>
            </div>
          </div>
          
          {/* Careers text right below Let's Build Your Apps Together */}
          <div className="mt-2">
            <p className="font-[Heathergreen] text-[25px] font-normal leading-tight text-black text-right">
              Careers
            </p>
            <a href="apply" className="text-[#474CBA] text-[10px] text-right cursor-pointer hover:text-gray-600 block">
              Apply here
            </a>
          </div>
        </div>
        
        {/* Character image - positioned on right */}
        <div className="absolute right-0 top-16">
          <img 
            src="https://s3-alpha-sig.figma.com/img/df8f/7fc5/ebcb86426df7897596bb0414358e852b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=b8bdb7I4xHqz6FGkNKco3XX3o4MQise~UBwD4xGtGIlsFnXL~rah-ADXo9mjP9tipTBI9klnh2kGIVxPs6eF5NpUOtCB2YvLLseVr8obvwub5qnwmghEntRY7q~UGGe0QsFaUwY35msY22B-~coqv~HjqS1oIKoBP2RMzomkpUTnclw3UnPaBeb1zur97mOcQqHm2mg8xqHxlgCeh8QpezH9NFI2N833ck~RWeGVTFl6E~cbFy4nOqB80H1DF7AI11W6TuHy8-YRVQOqxWlSLTM5ypvit8H9ET-211EQXvGNE2H3RLZweyQdGglIrMke9sLbZVJPgoy56znyWaSCRQ__"
            alt="img" 
            className="w-[80px] h-[80px]"
          />
        </div>

        {/* Bottom navigation section - removed border, centered links */}
        <div className="mt-8">
          {/* Logo and social icons */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col w-[100px] h-[40px] items-start">
              <img src={frameLogo} alt="Logo" className="h-8 w-auto" />
            </div>
            
            {/* Social icons */}
            <div className="flex space-x-2">
              <FaInstagram className="text-black text-sm cursor-pointer" />
              <FaLinkedin className="text-black text-sm cursor-pointer" />
              <FaFacebook className="text-black text-sm cursor-pointer" />
            </div>
          </div>
          
          {/* Navigation menu - centered */}
          <div className="flex justify-center mt-2">
            <div className="flex space-x-4 text-[10px]">
              <a href="work" className="text-black hover:text-gray-600 cursor-pointer">
                Work
              </a>
              <a href="contact" className="text-black hover:text-gray-600 cursor-pointer">
                Contact
              </a>
              <a href="about" className="text-black hover:text-gray-600 cursor-pointer">
                About us
              </a>
              <a href="#" className="text-black hover:text-gray-600 cursor-pointer">
                Clients
              </a>
              <a href="#" className="text-black hover:text-gray-600 cursor-pointer">
                Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;