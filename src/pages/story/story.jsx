import React from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import V1 from "../../assets/Vector 1.svg"; // Adjust path if needed
import V2 from "../../assets/Vector 2.svg"; // Adjust path if needed
import V3 from "../../assets/Vector 3.svg"; // Adjust path if needed


const ContactPage = () => {
    return (
        <div className="relative bg-white">
            <Header />
            
                <div className="container mx-auto px-6 lg:px-20 mt-10 relative">

                <div className="mt-[10px] bg-red-800">
                    <img 
                        src={V1} 
                        alt="Vector 1" 
                        className="absolute w-[284px] h-[284px] top-[1250px] left-[9200px] rotate-0"
                    />
                    <img 
                        src={V2} 
                        alt="Vector 2" 
                        className="absolute w-[284px] h-[284px] top-[422px] left-[1489px] -rotate-83"
                    />
                    <img 
                        src={V3} 
                        alt="Vector 3" 
                        className="absolute w-[14px] h-[135px] top-[787px] left-[1170px]"
                    />
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                    {/* Left Column - Story Text */}
                    <div>
                        <div className="mb-12">
                            <h1 className="text-9xl font-bold tracking-[0.5rem] uppercase font-[Heathergreen]">Our Story</h1>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged. It was popularised in 
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including 
                            versions of Lorem Ipsum.
                        </p>
                    </div>

                    {/* Right Column - Team Members */}
                    <div className="relative">
                        <div className="flex flex-col items-center space-y-8">
                            {/* Team Member: Moutamid */}
                            <div className="flex items-center flex-col col-1 space-x-6 mt-[60px] ml-[140px]">
                                <div className="w-32 h-32 rounded-full border-4 border-yellow-400 overflow-hidden">
                                    <img 
                                        src="https://s3-alpha-sig.figma.com/img/cd4b/18e8/6e997e80693617249606bd8795db8ec0?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L1OMp1YIJy5lKxwGQXm8L-6mJgwvD7kGYHnyT7~-GPvO2qUR-mJnUpfqrcBvzZuikmXGBXJgja25uedfiPgTpBNkw6PONI9fxKdQ~2rIDKkhzHOmuN5kVuddDGB0-KaHeHEfAPQJqDDXjoRaCXBQXbGFClLqj2juiypQlFfzajzuXbaKvQkuUSrojZmqhpZI2R6DMg25W02X0rqccvRzaD~rKBnUUwukdKL4YF8dMTq3v5Jk3FpOlY6iU~FZ~15IFhKuJEbjBYpWxcPIqKYbvSAl5I6gGh-GdYPMu7ybQLBetvAP2Za29Q3V-TxMBOrEWB4O2d2xmzMv3Up4FHxkOw__" 
                                        alt="Moutamid" 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                                <div>
                                    <p className="text-xl font-semibold">Moutamid</p>
                                    <p className="text-gray-600">Founder & CEO</p>
                                </div>
                            </div>

                            {/* Team Member: Sajjad */}
                            <div className="flex items-center flex-col self-end space-y-3 mr-[20px] mt-[10px]">
                                <div className="w-32 h-32 rounded-full border-4 border-blue-500 overflow-hidden">
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


                            {/* Team Member: Faizan */}
                            <div className="flex  mr-[108px] mt-[-140px] mb-[10px] items-center flex-col col-1 space-x-6">
                                <div className="w-32 h-32 rounded-full border-4 border-green-500 overflow-hidden">
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

            <Footer />
        </div>
    );
};

export default ContactPage;