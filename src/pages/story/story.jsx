import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import V1 from "../../assets/Vector 1.svg"; // Adjust path if needed
import V2 from "../../assets/Vector 2.svg"; // Adjust path if needed
import V3 from "../../assets/Vector 3.svg"; // Adjust path if needed

const ContactPage = () => {
  return (
    <div className="relative bg-white">
      <Header />
      <div className="flex flex-col lg:flex-row items-start">
        {/* Left Column - Title & Paragraph */}
        <div className="w-full lg:w-1/2 pr-10 md:mt-[40px] md:ml-[1px] ml-[-14px]">
        <div className="mb-12 ml-[50px] w-full">
        <h1 className="text-[9rem] md:text-[12rem] font-bold tracking-[0.5rem] md:tracking-[1rem] uppercase font-[Heathergreen] leading-[1.1]">
            Our Story
        </h1>
        </div>
        <div className="lg:w-1/2 md:hidden container mx-auto px-6 lg:px-20 mt-10 relative">
          <div className="relative">
            <img
              src={V1}
              alt="Vector 1"
              className="
              absolute 
              w-[142px] h-[65px] top-[405px] left-[15px] rotate-[-6.5deg] 
              md:w-[84px] md:h-[100px] md:top-[315px] md:left-[-35px] md:rotate-[-4deg]
              lg:w-[84px] lg:h-[100px] lg:top-[215px] lg:left-[-25px] lg:rotate-[-4deg]
              "
            />
            <img
              src={V2}
              alt="Vector 2"
              className="
              absolute 
              w-[142px] h-[45px] top-[360px] left-[186px] rotate-[16deg] 
              md:w-[284px] md:h-[65px] md:top-[180px] md:left-[190px] md:rotate-[12deg]
              lg:w-[284px] lg:h-[65px] lg:top-[180px] lg:left-[190px] lg:rotate-[12deg]
              "
            />
            <img
              src={V3}
              alt="Vector 3"
              className="
              absolute w-[132px] h-[50px] top-[540px] left-[120px] rotate-[3deg]
              md:w-[284px] md:h-[104px] md:top-[435px] md:left-[89px] md:rotate-[6deg]
              lg:w-[284px] lg:h-[104px] lg:top-[435px] lg:left-[89px] lg:rotate-[6deg]
              "
            />
          </div>

          <div className="w-full p-4 md:p-6 md:ml-[-195px] md:mt-[-105px] ">
            <p className="text-2xl md:text-3xl lg:text-2xl text-gray-700 leading-relaxed mb-8 ">
              We started our mission with a vision to transform the industry.
              we've remained
              committed to excellence and continuous improvement.
            </p>
          </div>

          <div className="w-full md:mt-[200px] ml-[-78px]">
                {/* Members Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 w-full">

              <div className="w-full">
                <div className="flex flex-col items-center space-y-8 w-full md:mt-[-220px]">
                    
                  <div className="flex items-center flex-col space-x-6 md:mt-[10px] mr-[-150px] mb-[-50px] md:ml-[30px]">
                    <div className="md:w-55 md:h-55 w-32 h-32 rounded-full border-4 border-yellow-400 overflow-hidden">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/cd4b/18e8/6e997e80693617249606bd8795db8ec0?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L1OMp1YIJy5lKxwGQXm8L-6mJgwvD7kGYHnyT7~-GPvO2qUR-mJnUpfqrcBvzZuikmXGBXJgja25uedfiPgTpBNkw6PONI9fxKdQ~2rIDKkhzHOmuN5kVuddDGB0-KaHeHEfAPQJqDDXjoRaCXBQXbGFClLqj2juiypQlFfzajzuXbaKvQkuUSrojZmqhpZI2R6DMg25W02X0rqccvRzaD~rKBnUUwukdKL4YF8dMTq3v5Jk3FpOlY6iU~FZ~15IFhKuJEbjBYpWxcPIqKYbvSAl5I6gGh-GdYPMu7ybQLBetvAP2Za29Q3V-TxMBOrEWB4O2d2xmzMv3Up4FHxkOw__"
                        alt="Moutamid"
                        className="w-full h-full "
                      />
                    </div>
                    <div>
                      <p className="text-xl font-semibold">Moutamid</p>
                      <p className="text-gray-600">Founder & CEO</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col self-end space-y-3 md:mr-[-250px] mt-[-10px] mr-[-85px] md:mt-[-10px]">
                    <div className="md:w-55 md:h-55 w-32 h-32  rounded-full border-4 border-blue-500 overflow-hidden">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/2517/76a7/c47934b95505556a5d40dfcc24d3aee2?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g2xGkrFKR1GNkF-ZnlINHifQuDPBJqwR4wxxMUnrbe3spAbkOlLwkjRDwKTM78RX6ZBt4hviv2ClMfPahruWOyk10~fw-lrA087rGMnBjdMvn~UpvpKOQEmHSYHE1hPDcSA8ud0-ym59lPZV5JiXmaBHGIhv18k4K15DJlcGnNjEapm8jm61cJlhjPqBjiHJLr0~fP0QHFMdBaJV53pN1J1LO6MBBuN3f7d2I4EYTGiAKDpLxbHNF1SsdzX2QhpVfMAEl1fTXRczjFrZpC~RYdT8S7GJoM9YV5lRsYJkc2pGO4KVaCliMTB6gbHDINPRwoE7jiBNv18-cxuhTJiCzA__"
                        alt="Sajjad"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-semibold">Sajjad</p>
                      <p className="text-gray-600">CTO</p>
                    </div>
                  </div>

                  <div className="flex md:mr-[190px] md:mt-[-225px] md:mb-[0px] mr-[06px] mt-[-125px] mb-[20px] items-center flex-col space-x-6">
                    <div className="md:w-55 md:h-55 w-32 h-32  rounded-full border-4 border-green-500 overflow-hidden">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/7f21/5f05/844c0e7d065012026c1c112ec07a03be?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FanQGBhdTQJnz2NkLzmlwl0MVbZjEbP5kPllZ~4cx4rh7FiNuHxVkIr6dW1SAyyjh3AvlJ1Ogs1I4Yrk-wzqRRfZ4Rxe1kmXmjId7V8A9AHur7BBHzqApnDAe2HtkZ~zwRaA9Y6kbQ9EUnHQN8SDSJPhchL50GFrUwRBV2QZ~hbf7-PuIW3qcYupuuGwkQ80PqdCmHk-bPhcoSBLT8c4wy10ylqZ8~1AS~uLTKAiAVcibYb1284YHa71vdvc4Oqe~Cg1oAQkd7F-8T~NXZ-4lOaeVCLmsWzrkL~qX1gMQV6JsG~xUd4wjrveANC38RuuEJv7amKKFs7mxG~bgXus1A__"
                        alt="Faizan"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xl font-semibold">Faizan</p>
                      <p className="text-gray-600">Design Lead</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

          <p className=" text-gray-700 w-full leading-relaxed mb-8 font-semi-bold text-2xl ml-[50px] lg:w-[50%] text-left break-words">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            onlet sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </p>
        </div>

        {/* Right Column - Images & Description */}
        <div className="lg:w-1/2 hidden md:block container mx-auto px-6 lg:px-20 mt-10 relative">
          <div className="relative">
            <img
              src={V1}
              alt="Vector 1"
              className="absolute w-[142px] h-[65px] top-[360px] left-[25px] rotate-[-6.5deg] md:w-[84px] md:h-[100px] md:top-[215px] md:left-[-25px] md:rotate-[-4deg]"
            />
            <img
              src={V2}
              alt="Vector 2"
              className="absolute w-[142px] h-[45px] top-[338px] left-[215px] rotate-[9.5deg] md:w-[284px] md:h-[65px] md:top-[180px] md:left-[190px] md:rotate-[12deg]"
            />
            <img
              src={V3}
              alt="Vector 3"
              className="absolute w-[142px] h-[120px] top-[480px] left-[140px] rotate-[3deg] md:w-[284px] md:h-[104px] md:top-[435px] md:left-[89px] md:rotate-[6deg]"
            />
          </div>

          <div className="w-full p-4 md:p-6 md:ml-[-195px] md:mt-[-105px] ">
            <p className="text-2xl md:text-3xl lg:text-2xl text-gray-700 leading-relaxed mb-8 ">
              We started our mission with a vision to transform the industry.
              we've remained
              committed to excellence and continuous improvement.
            </p>
          </div>

          <div className="w-full md:mt-[200px] ml-[-78px]">
                {/* Members Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 w-full">

              <div className="w-full">
                <div className="flex flex-col items-center space-y-8 w-full md:mt-[-220px]">
                    
                  <div className="flex items-center flex-col space-x-6 md:mt-[10px] mr-[-120px] mb-[-50px] md:ml-[30px]">
                    <div className="md:w-55 md:h-55 w-32 h-32 rounded-full border-4 border-yellow-400 overflow-hidden">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/cd4b/18e8/6e997e80693617249606bd8795db8ec0?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L1OMp1YIJy5lKxwGQXm8L-6mJgwvD7kGYHnyT7~-GPvO2qUR-mJnUpfqrcBvzZuikmXGBXJgja25uedfiPgTpBNkw6PONI9fxKdQ~2rIDKkhzHOmuN5kVuddDGB0-KaHeHEfAPQJqDDXjoRaCXBQXbGFClLqj2juiypQlFfzajzuXbaKvQkuUSrojZmqhpZI2R6DMg25W02X0rqccvRzaD~rKBnUUwukdKL4YF8dMTq3v5Jk3FpOlY6iU~FZ~15IFhKuJEbjBYpWxcPIqKYbvSAl5I6gGh-GdYPMu7ybQLBetvAP2Za29Q3V-TxMBOrEWB4O2d2xmzMv3Up4FHxkOw__"
                        alt="Moutamid"
                        className="w-full h-full "
                      />
                    </div>
                    <div>
                      <p className="text-xl font-semibold">Moutamid</p>
                      <p className="text-gray-600">Founder & CEO</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col self-end space-y-3 md:mr-[-250px] mr-[-90px] md:mt-[-10px]">
                    <div className="md:w-55 md:h-55 w-32 h-32  rounded-full border-4 border-blue-500 overflow-hidden">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/2517/76a7/c47934b95505556a5d40dfcc24d3aee2?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g2xGkrFKR1GNkF-ZnlINHifQuDPBJqwR4wxxMUnrbe3spAbkOlLwkjRDwKTM78RX6ZBt4hviv2ClMfPahruWOyk10~fw-lrA087rGMnBjdMvn~UpvpKOQEmHSYHE1hPDcSA8ud0-ym59lPZV5JiXmaBHGIhv18k4K15DJlcGnNjEapm8jm61cJlhjPqBjiHJLr0~fP0QHFMdBaJV53pN1J1LO6MBBuN3f7d2I4EYTGiAKDpLxbHNF1SsdzX2QhpVfMAEl1fTXRczjFrZpC~RYdT8S7GJoM9YV5lRsYJkc2pGO4KVaCliMTB6gbHDINPRwoE7jiBNv18-cxuhTJiCzA__"
                        alt="Sajjad"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-semibold">Sajjad</p>
                      <p className="text-gray-600">CTO</p>
                    </div>
                  </div>

                  <div className="flex md:mr-[190px] md:mt-[-225px] md:mb-[0px] mr-[108px] mt-[-125px] mb-[20px] items-center flex-col space-x-6">
                    <div className="md:w-55 md:h-55 w-32 h-32  rounded-full border-4 border-green-500 overflow-hidden">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/7f21/5f05/844c0e7d065012026c1c112ec07a03be?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FanQGBhdTQJnz2NkLzmlwl0MVbZjEbP5kPllZ~4cx4rh7FiNuHxVkIr6dW1SAyyjh3AvlJ1Ogs1I4Yrk-wzqRRfZ4Rxe1kmXmjId7V8A9AHur7BBHzqApnDAe2HtkZ~zwRaA9Y6kbQ9EUnHQN8SDSJPhchL50GFrUwRBV2QZ~hbf7-PuIW3qcYupuuGwkQ80PqdCmHk-bPhcoSBLT8c4wy10ylqZ8~1AS~uLTKAiAVcibYb1284YHa71vdvc4Oqe~Cg1oAQkd7F-8T~NXZ-4lOaeVCLmsWzrkL~qX1gMQV6JsG~xUd4wjrveANC38RuuEJv7amKKFs7mxG~bgXus1A__"
                        alt="Faizan"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xl font-semibold">Faizan</p>
                      <p className="text-gray-600">Design Lead</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
