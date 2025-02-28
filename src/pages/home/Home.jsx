import React from "react";
import Header from "../../components/header/header";
import Rectangle from "../../assets/Rectangle 44.svg"; // Adjust path if needed
import Image from "../../assets/walk-cycle-animation-pci4kmfuUS.svg"; // Adjust path if needed

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      {/* Subscription Section */}
      <div className="relative z-10 -mt-[50px]">
        <div className="flex flex-col text-black w-full h-auto font-extrabold italic text-[50px] md:text-3xl font-poppins items-end pr-[80px] md:pr-[100px] py-4">
          <p className="pr-[104px]">SUBSCRIPTION BASED SOLUTIONS</p>
          <p className="pr-[75px]">FOR ALL YOUR BUSINESS DIGITAL NEEDS</p>
        </div>
      </div>

      {/* Main Container: Two Columns Layout */}
      <div className="w-full flex flex-col md:flex-row relative">
        {/* Column 1: Text */}
        <div 
          className="relative flex flex-col text-black font-bold uppercase w-full md:w-1/2 py-10 md:pl-16"
          style={{ fontFamily: 'Heathergreen, sans-serif' }}
        >
          <h1 className="text-[240px] font-light w-full leading-[1] tracking-wider transition-colors duration-300 hover:text-[#5cba47] pl-10 -mt-[85px]">
            Work
          </h1>
          <h2 className="text-[230px] md:text-[200px] font-light leading-none w-full transition-colors duration-300 hover:text-[#474cba] -mt-[40px] pl-40">
            Services
          </h2>
          <h2 className="text-[150px] md:text-[180px] font-light leading-none w-full transition-colors duration-300 hover:text-[#dee13e] -mt-[20px] pl-55">
            Contact Us
          </h2>
          <h2 className="text-[55px] md:text-[120px] font-light leading-none w-full transition-colors duration-300 hover:text-[#5cba47] -mt-[20px] pl-72">
            Our Clients
          </h2>
          <h1 className="text-[50px] md:text-[100px] font-light leading-none w-full transition-colors duration-300 hover:text-[#ba47ae] -mt-[20px] pl-102">
            Our Story
          </h1>
        </div>

        {/* Column 2: Centered Rectangle Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center py-10 -mt-[80px] relative">
          {/* Background Circle */}
          <img 
            src={Rectangle} 
            alt="Rectangle" 
            className="w-[752px] h-[676px] rounded-full absolute"
          />

          {/* GIF inside the circle */}
          <img 
            // src={Image} 
            src="https://s3-alpha-sig.figma.com/img/bd8f/abf6/26326235eef46325d90d16d73d3154ed?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=foQJ8Xhk5fxXVQy~ImxS0BlUNHFxQqrBmdYsAS9XgjcsVhY29gUmFTz34KHonMhslrN2LygjdOy65I1NbLqbTwXc40MnwHmUfQR7Mz44Jovq6DIaLwi74JXl1kLuW3~PEKDjdL9EnvgyPIMkB6btLifXcWbYZPBhYNU-jYO6gYJfvRjDUfm3Ob4rqyFxmgsM5zq7cVEQkcS3VLEPgHxTypbNap6y6AHECmXBVFNLCCZafBpqlE-y4GXxM1QiMSHiP45hgS9ZxwRgqgAj6qk3~tyRKGBhzsEiA0odYKlyTHii9cZ5RaJP73kEk0mj9APgf4R6-p7Wq6rEs~eWpXex2Q__"
            alt="img" 
            className="w-[883px] h-[883px] rounded-full absolute top-[5px] left-[-108px]"
          />

          {/* Button */}
          <button 
            className="absolute top-[686px] left-[550px] w-[367px] h-[130.8px] bg-green-500 text-black font-bold rounded-[65px] text-2xl flex items-center justify-center transition-all duration-300 hover:bg-[#474cba] hover:text-white"
          >
            Subscribe Now!
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;