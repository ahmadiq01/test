import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import V1 from "../../assets/Vector 1.svg";
import V2 from "../../assets/Vector 2.svg";
import V3 from "../../assets/Vector 3.svg";
import StoryImg from "../../assets/story.png";

const ContactPage = () => {
  return (
    <div className="relative bg-white overflow-x-hidden">
      <div className="lg:ml-[-25px]">
        <Header />
      </div>
      <div className="flex flex-col lg:flex-row items-start">
        {/* Left Column - Title & Paragraph */}
        <div className="w-full lg:w-1/2 pr-4 lg:pr-10 md:mt-[40px] ml-4 lg:ml-[-14px]">
          {/* Title "Our Story" - Shown first on all screen sizes */}
          <div className="mb-12 ml-4 lg:ml-[40px] w-full">
            <h1 className="text-[7rem] md:text-[12rem] font-semi-bold tracking-[0.3rem] md:tracking-[1rem] uppercase font-[Heathergreen] leading-[1.1]">
              Our Story
            </h1>
          </div>

          {/* Mobile-only team members section - Shown second on mobile */}
          <div className="lg:w-1/2 md:hidden container mx-auto px-4 lg:px-6 mt-[-58px] ml-4 lg:ml-[40px] relative">
            <img src={StoryImg} alt="" className="max-w-full" />
          </div>

          {/* Lorem Ipsum paragraph - Shown third on mobile */}
          <p className="text-gray-700 w-full leading-tight mb-[100px] font-semi-bold text-2xl ml-4 lg:ml-[30px] lg:w-[55%] text-justify break-words">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            onlet sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.

            We started our mission with a vision to transform the industry.
            we've remained committed to excellence and continuous improvement.
          </p>
        </div>

        {/* Right Column - Images & Description (Desktop only) */}
        <div className="lg:w-1/2 hidden md:block container mx-auto px-6 lg:px-20 mt-10 relative">
          {/* Mission Statement for Desktop */}
          <div className="w-full p-4 md:p-6 md:ml-[-195px] md:mt-[-105px] text-justify">
            <p className="text-2xl md:text-3xl lg:text-2xl text-gray-700 leading-tight mb-8">
              We started our mission with a vision to transform the industry. We've remained committed to excellence and continuous improvement.
            </p>
          </div>

          {/* Team Members Section for Desktop */}
          <div className="w-full mt-[-60px] ml-[-90px]">
            <img src={StoryImg} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;