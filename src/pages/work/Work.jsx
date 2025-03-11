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
  // Add category property to each item
  const imageData = [
    { 
      id: 1, 
      primary: Mobile1, 
      secondary: Mobile2, 
      text: "Talk To Gather", 
      link: "talktogather",
      category: "App" 
    },
    { 
      id: 2, 
      primary: Pic2, 
      text: "Multi Search Engine", 
      icon: Pic21, 
      category: "Web" 
    },
    { 
      id: 3, 
      primary: Pic3, 
      text: "Image 3",
      category: "UI/UX" 
    },
    { 
      id: 4, 
      primary: Pic4, 
      text: "Image 4",
      category: "Creative" 
    },
    { 
      id: 5, 
      primary: Pic5, 
      text: "Image 5", 
      category: "App" 
    },
    { 
      id: 6, 
      primary: Pic6, 
      text: "Image 6",
      category: "Web" 
    },
    { 
      id: 7, 
      primary: Pic7, 
      text: "Image 7",
      category: "UI/UX" 
    },
    { 
      id: 8, 
      primary: Pic8, 
      text: "Image 8",
      category: "Creative" 
    },
    { 
      id: 9, 
      primary: Pic9, 
      text: "Image 9", 
      category: "App" 
    },
  ];
  
  // State for active filter
  const [activeFilter, setActiveFilter] = useState("All");
  
  // Get filtered images based on active filter
  const getFilteredImages = () => {
    if (activeFilter === "All") {
      return imageData;
    }
    return imageData.filter(item => item.category === activeFilter);
  };
  
  return (
    <div className="relative min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Floating Icon */}
      {/* <a href="home">
        <img
          src={vectorIcon}
          alt="Decoration"
          className="fixed top-6 right-6 w-10 h-10 cursor-pointer "
        />
      </a> */}

      {/* Background Image */}
      <div className="w-full">
        <img
          src="https://s3-alpha-sig.figma.com/img/dd4f/9d43/80fbdbdcfb9e32c6aa893ccf48e17ab7?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k9rcfgzH4xuSqz6UjTdezXwAqs2L0G~RlYEUo7N-QfujR0e6TsnGOJhjx9Oa7rypnQT2ndP6Pnd2RBR8rxWQj2beg~5sO98JEc-uCbshBZPwzhDCE7S28ei0wavv5iSeQSwzV5pbCc4MaK1BqTBHqLYEHBZRfpq0kcO5sXtzGCBcjWx3GAOO1~DW9KOcKRQe8ZQ2EOGNAzwBODRldnYfpZRGNP-9lPn2kTyB9nqRrTMFsyYWN5W~GDUZB9Ebx71qxGVjnBryVb2hx7xp7lWc3wY7HS8ZVFJFYXxC9h~Q0F6ojN6sX8ircChh3~G8L8hX6HIHXKaNjOCe7h8Wm~dH~w__"
          alt="Background"
          className="w-full h-auto max-h-[440.5px] md:max-h-[881px]"
        />
      </div>

      {/* Filter Section - Now Positioned After the GIF and Before Footer */}
      <div className="relative w-full flex justify-center px-4 md:ml-[-60px]">
        {/* Background container */}
        <div className="w-full max-w-[1588px] py-6 md:h-[185px] flex flex-wrap items-center justify-start">
          <p className="font-poppins font-normal text-lg md:text-[25px] leading-[37.5px] text-black">
            Filter by:
            <span 
              className={`ml-2 md:ml-4 cursor-pointer hover:underline ${activeFilter === "All" ? "underline font-semibold" : ""}`}
              onClick={() => setActiveFilter("All")}
            >
              All
            </span>
            <span 
              className={`ml-2 md:ml-4 cursor-pointer hover:underline ${activeFilter === "App" ? "underline font-semibold" : ""}`}
              onClick={() => setActiveFilter("App")}
            >
              App
            </span>
            <span 
              className={`ml-2 md:ml-4 cursor-pointer hover:underline ${activeFilter === "Web" ? "underline font-semibold" : ""}`}
              onClick={() => setActiveFilter("Web")}
            >
              Web
            </span>
            <span 
              className={`ml-2 md:ml-4 cursor-pointer hover:underline ${activeFilter === "UI/UX" ? "underline font-semibold" : ""}`}
              onClick={() => setActiveFilter("UI/UX")}
            >
              UI/UX
            </span>
            <span 
              className={`ml-2 md:ml-4 cursor-pointer hover:underline ${activeFilter === "Creative" ? "underline font-semibold" : ""}`}
              onClick={() => setActiveFilter("Creative")}
            >
              Creative
            </span>
          </p>
        </div>
      </div>
      
      {/* Responsive Card Grid with 3 cards per row on mobile */}
      <div className="relative flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-8 lg:gap-16 px-2 md:px-4 mt-6 md:mt-10">
        {getFilteredImages().map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="w-[calc(33.33%-8px)] sm:w-[calc(33.33%-12px)] md:w-[calc(50%-16px)] lg:w-[487.76px] h-[120px] sm:h-[180px] md:h-[280px] lg:h-[332.09px] rounded-[10px] bg-white shadow-lg transition-all duration-300 flex items-center justify-center relative overflow-hidden group"
            style={{ boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)" }}
          >
            {item.secondary ? (
              <>
                <img
                  src={item.primary}
                  alt="Primary"
                  className="absolute w-full h-full object-contain transition-opacity duration-800 opacity-100 group-hover:opacity-0"
                />
                <img
                  src={item.secondary}
                  alt="Secondary"
                  className="absolute w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center relative">
                <img src={item.primary} alt="" className="w-full h-full object-contain" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            )}
            
            {/* Bottom left text - hidden on smallest screens, visible on hover for larger */}
            <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 text-white text-[10px] sm:text-xs md:text-sm lg:text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.text}
            </div>

            {/* Category badge - hidden on smallest screens, visible on hover for larger */}
            <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-black bg-opacity-70 text-white text-[8px] sm:text-xs px-1 py-0.5 md:px-2 md:py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.category}
            </div>

            {/* Bottom right icon */}
            {item.icon && (
              <div className="absolute bottom-2 right-2 md:bottom-8 md:right-4 w-3 h-3 md:w-6 md:h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img src={item.icon} alt="icon" className="w-full h-full" />
              </div>
            )}
          </a>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="flex flex-col items-center justify-center text-center font-[Just_Another_Hand,cursive] px-4 my-12 md:mb-[180px] md:mt-[180px]">
        <p className="text-[26px] sm:text-[36px] md:text-[60px] lg:text-[90px] leading-tight md:leading-[121px] font-normal text-black">
          Want to see what can Fooliz do for you?
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2 mt-4">
          <a
            href="/contact"
            className="bg-[#D9E021] font-semi-bold px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-[16px] sm:text-[20px] md:text-[35px] font-handwritten transition-all duration-300 ease-out hover:opacity-80"
          >
            Fill out a project
          </a>
          <p className="text-[24px] sm:text-[30px] md:text-[50px] lg:text-[80px] text-black">
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