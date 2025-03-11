import React from "react";
import Header from "../../components/header/header";
import Rectangle from "../../assets/Rectangle 44.svg";
const Home = ({ 
  desktopTextPadding = { 
    line1: "104px", 
    line2: "75px" 
  },
  mobileTextPadding = {
    line1: "0px",
    line2: "0px"
  }
}) => {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="hidden md:block">
        <div className="relative lg:mt-[-60px]" >
          <div className="flex flex-col text-black font-extrabold italic text-[0px] md:text-[30px] lg:text-[50px] font-poppins items-end ">
            <p className="md:pr-[120px] lg:pr-[104px]">
              SUBSCRIPTION BASED SOLUTIONS
            </p>
            <p className="pr-[75px]">
              FOR ALL YOUR BUSINESS DIGITAL NEEDS
            </p>
          </div>
        </div>

        <div className="w-full flex flex-row relative">
          <div 
            className="relative bg-y flex flex-col text-black font-bold uppercase w-1/2 py-10 pl-16"
            style={{ 
              fontFamily: 'Heathergreen, sans-serif',
              paddingLeft: "min(16px, calc(16px * (100vw/1920)))" 
            }}
          >
            <a
              href="work" 
              className="text-[240px] font-light w-full leading-[1] tracking-wider transition-colors duration-300 hover:text-[#5cba47] pl-10 -mt-[85px]"
              style={{ 
                fontSize: "min(240px, calc(240px * (100vw/1920)))",
                paddingLeft: "min(10px, calc(10px * (100vw/1920)))",
                marginTop: "min(-85px, calc(-85px * (100vw/1920)))" 
              }}
            >
              Work
            </a>
            <a
              href="services" 
              className="text-[200px] font-light leading-none w-full transition-colors duration-300 hover:text-[#474cba] -mt-[40px] pl-40"
              style={{ 
                fontSize: "min(200px, calc(200px * (100vw/1920)))",
                paddingLeft: "min(40px, calc(40px * (100vw/1920)))",
                marginTop: "min(-40px, calc(-40px * (100vw/1920)))" 
              }}
            >
              Services
            </a>
            <a href="contact" 
              className="text-[180px] font-light leading-none w-full transition-colors duration-300 hover:text-[#dee13e] -mt-[20px] pl-55"
              style={{ 
                fontSize: "min(180px, calc(180px * (100vw/1920)))",
                paddingLeft: "min(55px, calc(55px * (100vw/1920)))",
                marginTop: "min(-20px, calc(-20px * (100vw/1920)))" 
              }}
            >
              Contact Us
            </a>
            <a
              href="clients" 
              className="text-[120px] font-light leading-none w-full transition-colors duration-300 hover:text-[#5cba47] -mt-[20px] pl-72"
              style={{ 
                fontSize: "min(120px, calc(120px * (100vw/1920)))",
                paddingLeft: "min(72px, calc(72px * (100vw/1920)))",
                marginTop: "min(-20px, calc(-20px * (100vw/1920)))" 
              }}
            >
              Our Clients
            </a>
            <a 
              href="story"
              className="text-[100px] font-light leading-none w-full transition-colors duration-300 hover:text-[#ba47ae] -mt-[20px] pl-102"
              style={{ 
                fontSize: "min(100px, calc(100px * (100vw/1920)))",
                paddingLeft: "min(102px, calc(102px * (100vw/1920)))",
                marginTop: "min(-20px, calc(-20px * (100vw/1920)))" 
              }}
            >
              Our Story
            </a>
          </div>

          <div 
            className="w-1/2 flex justify-center items-center py-10 -mt-[80px] relative"
            style={{ marginTop: "min(-80px, calc(-80px * (100vw/1920)))" }}
          >
            <img 
              src={Rectangle} 
              alt="Rectangle" 
              className="w-[752px] h-[676px] rounded-full absolute"
              style={{ 
                width: "min(752px, calc(752px * (100vw/1920)))",
                height: "min(676px, calc(676px * (100vw/1920)))" 
              }}
            />

            <img 
              src="https://s3-alpha-sig.figma.com/img/bd8f/abf6/26326235eef46325d90d16d73d3154ed?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=foQJ8Xhk5fxXVQy~ImxS0BlUNHFxQqrBmdYsAS9XgjcsVhY29gUmFTz34KHonMhslrN2LygjdOy65I1NbLqbTwXc40MnwHmUfQR7Mz44Jovq6DIaLwi74JXl1kLuW3~PEKDjdL9EnvgyPIMkB6btLifXcWbYZPBhYNU-jYO6gYJfvRjDUfm3Ob4rqyFxmgsM5zq7cVEQkcS3VLEPgHxTypbNap6y6AHECmXBVFNLCCZafBpqlE-y4GXxM1QiMSHiP45hgS9ZxwRgqgAj6qk3~tyRKGBhzsEiA0odYKlyTHii9cZ5RaJP73kEk0mj9APgf4R6-p7Wq6rEs~eWpXex2Q__"
              alt="img" 
              className="w-[783px] h-[783px] rounded-full absolute top-[5px] left-[90px]"
              style={{ 
                width: "min(883px, calc(883px * (100vw/1920)))",
                height: "min(883px, calc(883px * (100vw/1920)))",
                left: "min(-108px, calc(-108px * (100vw/1920)))" 
              }}
            />

            <a
              href="subscribe"  
              className="absolute top-[626px] left-[590px] w-[367px] h-[130.8px] bg-green-500 text-black font-bold rounded-[65px] text-2xl flex items-center justify-center transition-all duration-300 hover:bg-[#474cba] hover:text-white"
              style={{ 
                top: "min(686px, calc(686px * (100vw/1920)))",
                left: "min(550px, calc(550px * (100vw/1920)))",
                width: "min(367px, calc(367px * (100vw/1920)))",
                height: "min(130.8px, calc(130.8px * (100vw/1920)))",
                fontSize: "min(24px, calc(24px * (100vw/1920)))",
                borderRadius: "min(65px, calc(65px * (100vw/1920)))" 
              }}
            >
              Subscribe Now!
            </a>
          </div>
        </div>

      </div>

      <div className="block md:hidden">
        <div className="ml-5">
        </div>

        <div className="bg-[#dee13e] ">

          <div className="text-black font-extrabold italic text-xl font-poppins ">
            <p style={{ paddingLeft: mobileTextPadding.line1 }} className="ml-[50px] pt-[12px]">
              SUBSCRIPTION BASED SOLUTIONS
            </p>
            <p style={{ paddingLeft: mobileTextPadding.line2 }} className="ml-[14px] mt-[4px]">
              FOR ALL YOUR BUSINESS DIGITAL NEEDS
            </p>
          </div>

          <div className="relative w-full flex justify-center top-[-20px]">
            <img 
              src="https://s3-alpha-sig.figma.com/img/bd8f/abf6/26326235eef46325d90d16d73d3154ed?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=foQJ8Xhk5fxXVQy~ImxS0BlUNHFxQqrBmdYsAS9XgjcsVhY29gUmFTz34KHonMhslrN2LygjdOy65I1NbLqbTwXc40MnwHmUfQR7Mz44Jovq6DIaLwi74JXl1kLuW3~PEKDjdL9EnvgyPIMkB6btLifXcWbYZPBhYNU-jYO6gYJfvRjDUfm3Ob4rqyFxmgsM5zq7cVEQkcS3VLEPgHxTypbNap6y6AHECmXBVFNLCCZafBpqlE-y4GXxM1QiMSHiP45hgS9ZxwRgqgAj6qk3~tyRKGBhzsEiA0odYKlyTHii9cZ5RaJP73kEk0mj9APgf4R6-p7Wq6rEs~eWpXex2Q__"
              alt="img" 
              className="w-1/2 max-w-md rounded-full"
            />
            
            <a
              href="subscribe"  
              className="absolute w-[200px] h-[70px] bg-green-500 ml-[220px] top-[180px] text-black font-bold rounded-full py-5 px-4 text-center transition-all duration-300 hover:bg-[#474cba] hover:text-white"
              style={{ 
                bottom: '40%'
              }}
            >
              Subscribe Now!
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start p-4 font-bold uppercase" style={{ fontFamily: 'Heathergreen, sans-serif' }}>
          <a href="work" className="text-8xl ml-[60px] font-light py-1 transition-colors duration-300 hover:text-[#5cba47]">
            Work
          </a>
          <a href="services" className="text-8xl ml-[130px] font-light transition-colors duration-300 hover:text-[#474cba]">
            Services
          </a>
          <a href="contact" className="text-8xl font-light ml-[65px] transition-colors duration-300 hover:text-[#dee13e]">
            Contact Us
          </a>
          <a href="clients" className="text-6xl font-light ml-[70px] transition-colors duration-300 hover:text-[#5cba47]">
            Our Clients
          </a>
          <a href="story" className="text-4xl font-light ml-[225px] mt-[-60px] transition-colors duration-300 hover:text-[#ba47ae]">
            Our Story
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;