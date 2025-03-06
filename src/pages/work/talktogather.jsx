import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Talk from "../../assets/talk.svg"; // Adjust path if needed
import MainScreen from "../../assets/Main Screen 1.svg"; // Adjust path if needed
import LeftImg from "../../assets/Show Categories 1.svg"; // Adjust path if needed
import RightImg from "../../assets/Messages - Conversation 1.svg"; // Adjust path if needed
import Img1 from "../../assets/image 1.svg"; // Adjust path if needed

const ContactPage = () => {
  return (
    <div className="relative bg-white">
      <Header />
      
      <div className="flex justify-center md:mt-[100px] md:mb-[40px]">
        <img src={Talk} alt="" className="" />
      </div>

      <div className="bg-[#1554f6] flex justify-center">
        <img src={LeftImg} alt="" className="" />
        <img src={MainScreen} alt="" className="" />
        <img src={RightImg} alt="" className="" />
      </div>

      <div className="flex flex-col items-center text-center px-4 py-10">
        <h1 className="text-[#1B1B1B] font-poppins font-bold text-[100px] leading-[150px] md:text-[80px] md:leading-[120px] sm:text-[60px] sm:leading-[90px] xs:text-[40px] xs:leading-[60px]">
          Talk To Gather
        </h1>
        <p className="text-[#595959] font-poppins text-[50px] leading-[65px] font-normal md:text-[40px] md:leading-[55px] sm:text-[30px] sm:leading-[45px] xs:text-[20px] xs:leading-[30px] max-w-[90%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="bg-[#FBD81B] rounded-b-[70px] p-10 md:mt-[100px] md:p-14 max-w-[90%] md:max-w-[100%] mx-auto">
        <h2 className="text-[#1B1B1B] font-poppins font-bold text-[60px] leading-[90px]">
          The Problem
        </h2>
        <p className="text-[#1B1B1B] font-poppins text-[50px] leading-[65px] font-normal mt-4 max-w-[90%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      <div className="text-center px-4 py-12">
        <h2 className="text-[#1554F6] font-poppins font-bold text-[200px] leading-[300px] md:text-[150px] md:leading-[220px] sm:text-[100px] sm:leading-[150px]">
          The Solution
        </h2>
        <p className="text-[#1B1B1B] font-poppins text-[50px] leading-[65px] font-normal mt-4 max-w-[80%] mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      <div className="flex flex-col items-center text-center px-4 py-12">
        <h2 className="text-[#1B1B1B] font-poppins font-bold text-[60px] leading-[90px]">
          App User Flow
        </h2>
        <div className="mt-6">
          <img
            src={Img1}
            alt="App User Flow Diagram"
            className="w-full max-w-[1924px] h-auto"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
