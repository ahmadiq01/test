import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import vectorIcon from "../../assets/Group 55.svg";

import { useState } from "react";

import Mobile1 from "../../assets/mobile1.svg";
import Mobile2 from "../../assets/mobile2.svg";
import Pic2 from "../../assets/2.svg";
import Pic21 from "../../assets/2.1.svg";
import Pic3 from "../../assets/3.svg";
import Pic4 from "../../assets/4.svg";
import Pic5 from "../../assets/5.svg";
import Pic6 from "../../assets/6.svg";
import Pic7 from "../../assets/7.svg";
import Pic8 from "../../assets/8.svg";
import Pic9 from "../../assets/9.svg";

const ContactPage = () => {
  const imageData = [
    { id: 1, primary: Mobile1, secondary: Mobile2, text: "Image 1", icon: Pic21 },
    { id: 2, primary: Pic2, text: "Image 2", icon: Pic21 },
    { id: 3, primary: Pic3, text: "Image 3" },
    { id: 4, primary: Pic4, text: "Image 4" },
    { id: 5, primary: Pic5, text: "Image 5", icon: Pic21 },
    { id: 6, primary: Pic6, text: "Image 6" },
    { id: 7, primary: Pic7, text: "Image 7" },
    { id: 8, primary: Pic8, text: "Image 8" },
    { id: 9, primary: Pic9, text: "Image 9", icon: Pic21 },
  ];
  
  return (
    <div className="relative min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Floating Icon */}
      <a href="home">
        <img
          src={vectorIcon}
          alt="Decoration"
          className="fixed top-6 right-6 w-10 h-10 cursor-pointer "
        />
      </a>

      {/* Background Image */}
      <div className="md:w-full">
        <img
          src="https://s3-alpha-sig.figma.com/img/dd4f/9d43/80fbdbdcfb9e32c6aa893ccf48e17ab7?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k9rcfgzH4xuSqz6UjTdezXwAqs2L0G~RlYEUo7N-QfujR0e6TsnGOJhjx9Oa7rypnQT2ndP6Pnd2RBR8rxWQj2beg~5sO98JEc-uCbshBZPwzhDCE7S28ei0wavv5iSeQSwzV5pbCc4MaK1BqTBHqLYEHBZRfpq0kcO5sXtzGCBcjWx3GAOO1~DW9KOcKRQe8ZQ2EOGNAzwBODRldnYfpZRGNP-9lPn2kTyB9nqRrTMFsyYWN5W~GDUZB9Ebx71qxGVjnBryVb2hx7xp7lWc3wY7HS8ZVFJFYXxC9h~Q0F6ojN6sX8ircChh3~G8L8hX6HIHXKaNjOCe7h8Wm~dH~w__"
          alt="Background"
          className="w-[1920px] h-[881px] top-[139px]"
        />
      </div>

      {/* Filter Section - Now Positioned After the GIF and Before Footer */}
      <div className="relative w-full flex justify-center md:ml-[-60px]">
        {/* Background container */}
        <div className="w-[1588px] h-[185px] flex items-center justify-start">
          <p className="font-poppins font-normal text-[25px] leading-[37.5px] text-black">
            Filter by:
            <span className="ml-4 cursor-pointer hover:underline">All</span>
            <span className="ml-4 cursor-pointer hover:underline">App</span>
            <span className="ml-4 cursor-pointer hover:underline">Web</span>
            <span className="ml-4 cursor-pointer hover:underline">UI/UX</span>
            <span className="ml-4 cursor-pointer hover:underline">
              Creative
            </span>
          </p>
        </div>
      </div>
      
      <div className="relative flex flex-wrap justify-center gap-16 mt-10">
      {imageData.map((item) => (
        <div
          key={item.id}
          className="w-[487.76px] h-[332.09px] rounded-[10px] bg-white shadow-lg transition-all duration-300 flex items-center justify-center relative overflow-hidden group"
          style={{ boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.3)" }}
        >
          {item.secondary ? (
            <>
              <img
                src={item.primary}
                alt="Primary"
                className="absolute w-[580px] h-[420px] object-contain transition-opacity duration-800 opacity-100 group-hover:opacity-0"
              />
              <img
                src={item.secondary}
                alt="Secondary"
                className="absolute w-[580px] h-[420px] object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center relative">
              <img src={item.primary} alt="" className="w-full h-full object-contain" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
          )}
          
          {/* Bottom left text */}
          <div className="absolute bottom-4 left-4 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.text}
          </div>

          {/* Bottom right icon */}
          {item.icon && (
            <div className="absolute bottom-4 right-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img src={item.icon} alt="icon" className="w-full h-full" />
            </div>
          )}
        </div>
      ))}
    </div>
      <div className="flex flex-col items-center justify-center text-center font-[Just_Another_Hand,cursive] mb-[180px] mt-[180px]">
        <p className="text-[50px] leading-[121px] font-normal text-black">
          Want to see what can Fooliz do for you?
        </p>
        <div className="flex items-center gap-2 mt-4 ">
          <a
            href="/your-target-url" // Replace with your actual URL
            className="bg-[#D9E021] text-black px-8 py-4 rounded-full text-[50px] font-handwritten transition-all duration-300 ease-out hover:opacity-80"
          >
            Fill out a project
          </a>
          <p className="text-[100px]  text-black">
            Brief and get the ball rolling!
          </p>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
