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
            <p className="text-[#474CBA] text-[24px] mt-[-18px] cursor-pointer hover:text-gray-600">
                Get In Touch
            </p>
            <div className="pr-13 text-end mt-[-45px]">
                <p className="font-[Heathergreen] text-[100px] font-normal leading-[136.62px] text-black">
                    Careers
                </p>
                <p className="text-[#474CBA] mt-[-24px] mr-[37px] text-[24px] cursor-pointer hover:text-gray-600">
                    Apply here
                </p>
            </div>
        </div>

        <div className=" flex flex-col justify-center items-center mt-[40px]">
          <div className="flex flex-col space-y-6 text-[30px] text-[#474cba] font-extrabold leading-[45px] tracking-[-0.04em] font-[Poppins]">
            <div>
              <p>Dubai, Lahore, wtv Road</p>
              <p>Address, wtv, 43543</p>
            </div>
            <div>
              <p>Address, wtv, 43543</p>
              <p>Address, wtv, 43543</p>
            </div>
            <div className="">
            <img 
                    src="https://s3-alpha-sig.figma.com/img/df8f/7fc5/ebcb86426df7897596bb0414358e852b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=b8bdb7I4xHqz6FGkNKco3XX3o4MQise~UBwD4xGtGIlsFnXL~rah-ADXo9mjP9tipTBI9klnh2kGIVxPs6eF5NpUOtCB2YvLLseVr8obvwub5qnwmghEntRY7q~UGGe0QsFaUwY35msY22B-~coqv~HjqS1oIKoBP2RMzomkpUTnclw3UnPaBeb1zur97mOcQqHm2mg8xqHxlgCeh8QpezH9NFI2N833ck~RWeGVTFl6E~cbFy4nOqB80H1DF7AI11W6TuHy8-YRVQOqxWlSLTM5ypvit8H9ET-211EQXvGNE2H3RLZweyQdGglIrMke9sLbZVJPgoy56znyWaSCRQ__"
                    alt="img" 
                    className="w-[353px] h-[353px] rounded-full absolute top-[3px] left-[1457px]"
                  />
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full justify-between items-center px-10 py-4">
          <div className="flex flex-col w-[140px] h-[47px]">
            <img src={frameLogo} alt="Logo" className="h-12 w-auto" />
          </div>

          <div className="flex flex-row justify-between space-x-6 ml-[80px]">
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
          
          <div className="flex space-x-4 flex-row justify-items-start mr-[140px] ">
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
