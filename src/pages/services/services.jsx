import { useEffect, useRef, useState } from "react";
import monkey from "../../assets/monkey.gif";
import bee from "../../assets/bee.gif";
import human from "../../assets/human.gif";
import banana from "../../assets/banana.gif";
import { FaArrowLeft } from "react-icons/fa";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";

export default function Home() {
  const monkeyRef = useRef(null);
  const beeRef = useRef(null);
  const humanRef = useRef(null);
  const bananaRef = useRef(null);

  const monkeySectionRef = useRef(null);
  const beeSectionRef = useRef(null);
  const humanSectionRef = useRef(null);
  const bananaSectionRef = useRef(null);

  const containerRef = useRef(null);

  const [sectionVisibility, setSectionVisibility] = useState({
    monkey: false,
    bee: false,
    human: false,
    banana: false,
  });

  useEffect(() => {
    // Calculate the height needed for smooth scrolling
    if (containerRef.current) {
      const containerHeight = window.innerHeight * 4; // 4 sections
      containerRef.current.style.height = `${containerHeight}px`;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Determine which section should be visible based on scroll position
      const sectionIndex = Math.floor(scrollPosition / windowHeight);
      const sectionProgress = (scrollPosition % windowHeight) / windowHeight;

      // Calculate visible section
      const sections = ["monkey", "bee", "human", "banana"];
      const currentSection =
        sections[Math.min(sectionIndex, sections.length - 1)];

      // Update section visibility state
      const newVisibility = {
        monkey: currentSection === "monkey",
        bee: currentSection === "bee",
        human: currentSection === "human",
        banana: currentSection === "banana",
      };

      // Apply animations based on visibility changes
      if (newVisibility.monkey !== sectionVisibility.monkey) {
        if (monkeyRef.current) {
          if (newVisibility.monkey) {
            monkeyRef.current.classList.add("animate-from-left");
            monkeyRef.current.classList.remove("animate-to-left");
          } else {
            monkeyRef.current.classList.add("animate-to-left");
            monkeyRef.current.classList.remove("animate-from-left");
          }
        }
      }

      if (newVisibility.bee !== sectionVisibility.bee) {
        if (beeRef.current) {
          if (newVisibility.bee) {
            beeRef.current.classList.add("animate-from-left");
            beeRef.current.classList.remove("animate-to-left");
          } else {
            beeRef.current.classList.add("animate-to-left");
            beeRef.current.classList.remove("animate-from-left");
          }
        }
      }

      if (newVisibility.human !== sectionVisibility.human) {
        if (humanRef.current) {
          if (newVisibility.human) {
            humanRef.current.classList.add("animate-from-left");
            humanRef.current.classList.remove("animate-to-left");
          } else {
            humanRef.current.classList.add("animate-to-left");
            humanRef.current.classList.remove("animate-from-left");
          }
        }
      }

      if (newVisibility.banana !== sectionVisibility.banana) {
        if (bananaRef.current) {
          if (newVisibility.banana) {
            bananaRef.current.classList.add("animate-from-left");
            bananaRef.current.classList.remove("animate-to-left");
          } else {
            bananaRef.current.classList.add("animate-to-left");
            bananaRef.current.classList.remove("animate-from-left");
          }
        }
      }

      setSectionVisibility(newVisibility);
    };

    window.addEventListener("scroll", handleScroll);

    // Initialize on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionVisibility]);

  return (
    <>
      <style jsx global>{`
        .animate-from-left {
          animation: slideInFromLeft 1s forwards;
        }

        .animate-to-left {
          animation: slideOutToLeft 1s forwards;
        }

        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-200%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutToLeft {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        .sticky-container {
          position: relative;
          height: 400vh;
        }

        .sticky-section {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      <div ref={containerRef} className="sticky-container">
        {/* monkey div */}
        <div
          ref={monkeySectionRef}
          className="sticky-section bg-[rgba(92,186,71,1)] min-h-screen relative"
          style={{ zIndex: sectionVisibility.monkey ? 40 : 10 }}
        >
          {/* Logo in top left corner - fixed position on mobile */}
          <div className="absolute mt-[-12px] ml-[-6px] md:p-4 lg:p-4">
            <h1 className="text-black text-xl md:text-3xl font-bold">
              <Header />
            </h1>
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center md:items-start md:flex-row px-4 md:px-8 gap-4 md:gap-10 pt-16 md:pt-0">
            {/* Left side */}
            <div className="flex flex-col md:pl-4 md:mt-[40px] mt-[-10px]">
              <p className="text-white text-4xl md:text-[80px] font-light leading-[100%] py-8 md:py-20 whitespace-nowrap font-poppins ml-[-180px] md:ml-0">
                WE MAKE
              </p>
            </div>

            {/* Right side with APPS text */}
            <div className="relative w-full md:mt-0">
              <p className="text-black text-[380px] sm:text-[350px] md:text-[650px] lg:text-[1150px] md:mt-[-160px] mt-[-100px] ml-[-12px] md:ml-[260px] font-[Heathergreen] leading-[1] text-center md:text-left">
                APPS
              </p>
            </div>
          </div>

          {/* Monkey image as a full-screen overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="w-full h-full max-w-screen max-h-screen mt-[220px] flex items-center justify-center">
              <img
                ref={monkeyRef}
                src={monkey}
                alt="Blue monkey meditating"
                className="max-w-full max-h-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl object-contain"
                style={{ aspectRatio: "preserve" }}
              />
            </div>
          </div>

          {/* Button and Back Arrow positioned together */}
          <div className="absolute bottom-8 left-0 right-0 md:left-8 md:right-auto flex flex-col items-center md:items-start space-y-4 z-10">
            {/* Link Integrated in the Button */}
            <a href="/work?category=App">
              <button className="bg-[rgba(71,76,186,1)] mb-[35px] ml-[190px] text-white font-bold p-2 md:p-10 rounded-full text-lg md:text-5xl md:ml-[108px] w-[160px] md:w-full lg:w-[500px]">
                SEE APPS WORK
              </button>
            </a>

            {/* Back Button */}
            <button className="text-white hidden md:block p-2 md:p-4 rounded-full md:mt-[90px]">
              <FaArrowLeft className="text-2xl md:text-5xl" />
            </button>
          </div>
        </div>

        {/* bee div */}
        <div
          ref={beeSectionRef}
          className="sticky-section bg-[rgba(71,76,186,1)] min-h-screen relative"
          style={{ zIndex: sectionVisibility.bee ? 30 : 9 }}
        >
          {/* Logo in top left corner */}
          <div className="absolute mt-[-12px] ml-[-6px] md:p-4 lg:p-4">
            <h1 className="text-black text-xl md:text-3xl font-bold">
              <Header />
            </h1>
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center md:items-start md:flex-row px-4 md:px-8 gap-4 md:gap-10 pt-16 md:pt-0">
            {/* Left side */}
            <div className="flex flex-col md:pl-4 md:mt-[40px] mt-[-10px]">
              <p className="text-white text-4xl md:text-[80px] font-light leading-[100%] py-8 md:py-20 whitespace-nowrap font-poppins ml-[-180px] md:ml-0">
                WE MAKE
              </p>
            </div>

            {/* Right side with WEBSITES text */}
            <div className="relative w-full md:mt-[20px] lg:mt-[-90px] mt-[-120px]">
              {/* Text Heading */}
              <p
                className="text-black text-[200px] sm:text-[250px] md:text-[450px] lg:text-[750px] 
                    ml-[-12px] md:ml-[100px] font-[Heathergreen] text-center md:text-left"
              >
                WEBSITES
              </p>
            </div>
          </div>

          {/* Bee image as a full-screen overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="w-full h-full max-w-screen max-h-screen mt-[-90px] ml-[-120px] flex items-center justify-center">
              <img
                ref={beeRef}
                src={bee}
                alt="Bee character"
                className="max-w-full max-h-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl object-contain"
                style={{ aspectRatio: "preserve" }}
              />
            </div>
          </div>

          {/* Button and Back Arrow positioned together */}
          <div className="absolute bottom-8 left-0 right-0 md:left-8 md:right-auto flex flex-col items-center md:items-start space-y-4 z-10">
            <a
              href="/work?category=Web"
              className="bg-[rgba(186,71,174,1)] mt-[-190px] ml-[-100px] text-white font-bold p-4 md:p-10 rounded-full text-lg md:text-2xl w-[220px] lg:w-3/6 md:w-auto md:ml-[370px] text-center block"
            >
              SEE WEBSITES WORK
            </a>

            <button className="text-white hidden md:block p-4 rounded-full">
              <FaArrowLeft className="text-3xl md:text-5xl" />
            </button>
          </div>
        </div>

        {/* ui/ux div */}
        <div
          ref={humanSectionRef}
          className="sticky-section bg-[rgba(186,71,174,1)] min-h-screen relative"
          style={{ zIndex: sectionVisibility.human ? 20 : 8 }}
        >
          {/* Logo in top left corner */}
          <div className="absolute mt-[-12px] ml-[-6px] md:p-4 lg:p-4">
            <h1 className="text-black text-xl md:text-3xl font-bold">
              <Header />
            </h1>
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center md:items-start md:flex-row px-4 md:px-8 gap-4 md:gap-10 pt-16 md:pt-0">
            {/* Left side */}
            <div className="flex flex-col md:pl-4 md:mt-[40px] mt-[-10px]">
              <p className="text-white text-4xl md:text-[80px] font-light leading-[100%] py-8 md:py-20 whitespace-nowrap font-poppins ml-[-180px] md:ml-0">
                WE MAKE
              </p>
            </div>

            {/* Right side with UI/UX text */}
            <div className="relative w-full md:mt-20 text-center">
              <a
                href="/work?category=UI/UX"
                className="bg-[rgba(222,225,62,1)] absolute
                lg:mt-[-70px] md:mt-[220px] mt-[400px] ml-[75px] w-[220px] h-[80px] md:w-[400px] md:h-[80px] lg:w-[400px] lg:h-[130px]
                text-center md:top-1/2 left-1/2 md:left-auto transform -translate-x-1/2
                md:-translate-x-0 md:ml-[-58px] lg:ml-[-708px] whitespace-nowrap text-black 
                font-bold p-4 md:p-10 rounded-full md:text-4xl z-30"
              >
                <p className="mt-[10px] md:mt-[10px] lg:mt-[-4px]"> SEE UI/UX WORK</p>
              </a>
              <p
                className="text-black text-[350px] sm:text-[350px] md:text-[650px] lg:text-[1050px] 
                    font-[Heathergreen] text-center md:text-right md:float-right whitespace-nowrap 
                    leading-[1] mt-[-65px] md:mt-[-180px] md:ml-[280px]"
              >
                UI/UX
              </p>
            </div>
          </div>

          {/* Human image as a full-screen overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="w-full h-full  max-w-screen max-h-screen flex items-center justify-center">
              <img
                ref={humanRef}
                src={human}
                alt="Human character"
                className="max-w-full md:ml-[200px] lg:ml-[700px] md:mt-[200px] lg:mt-[470px] max-h-full md:max-w-full lg:max-w-full xl:max-w-5xl object-contain"
                style={{ aspectRatio: "preserve" }}
              />
            </div>
          </div>

          {/* Button and Back Arrow positioned together */}
          <div className="absolute bottom-8 hidden md:block left-0 right-0 md:left-8 md:right-auto flex flex-col items-center md:items-start space-y-4 z-10">
            <button className="text-white p-4 rounded-full">
              <FaArrowLeft className="text-3xl md:text-5xl" />
            </button>
          </div>
        </div>

        {/* banana div */}
        <div
          ref={bananaSectionRef}
          className="sticky-section bg-[rgba(222,225,62,1)] min-h-screen relative"
          style={{ zIndex: sectionVisibility.banana ? 10 : 7 }}
        >
          {/* Logo in top left corner */}
          <div className="absolute mt-[-12px] ml-[-6px] md:p-4 lg:p-4">
            <h1 className="text-black text-xl md:text-3xl font-bold">
              <Header />
            </h1>
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center md:items-start md:flex-row px-4 md:px-8 gap-4 md:gap-10 pt-16 md:pt-0">
            {/* Left side */}
            <div className="flex flex-col md:pl-4 hidden md:block md:mt-[40px] mt-[-10px]">
              <p className="text-black text-4xl md:text-[80px] font-light leading-[100%] py-8 md:py-20 whitespace-nowrap font-poppins ml-[-180px] md:ml-0">
                WE MAKE
              </p>
            </div>

            {/* Right side with CREATIVE text */}
            <div className="relative w-full md:mt-40">
              <a
                href="/work?category=Creative"
                className="bg-[rgba(92,186,71,1)] absolute 
                mt-[550px] w-[200px] md:w-[200px] lg:w-[330px] lg:h-[130px] md:top-auto md:left-3/5 left-1/3 
                transform -translate-x-1/2 md:-translate-x-0 whitespace-nowrap lg:mt-[40px] lg:ml-[240px] text-black font-bold p-4 md:p-10 rounded-full text-xl md:text-5xl z-30"
              >
                <p className="text-[18px] mt:text-[18px] lg:text-[26px] lg:mt-[14px]">SEE CREATIVE WORK</p>
              </a>

              <p className="text-black text-[220px] ml-[-15px] sm:text-[250px] md:text-[500px] lg:text-[800px] font-[Heathergreen] text-center md:text-right md:float-right whitespace-nowrap mt-[-90px] md:mt-[-190px] md:ml-[100px]">
                CREATIVE
              </p>
            </div>
          </div>

          {/* Banana image as a full-screen overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="w-full h-full max-w-screen max-h-screen flex items-center justify-center">
              <img
                ref={bananaRef}
                src={banana}
                alt="Banana character"
                className="max-w-full max-h-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl object-contain"
                style={{ aspectRatio: "preserve" }}
              />
            </div>
          </div>

          {/* Button and Back Arrow positioned together */}
          <div className="absolute hidden md:block bottom-8 left-8 flex flex-col items-start space-y-4 z-10">
            <button className="text-black p-4 rounded-full">
              <FaArrowLeft className="text-3xl md:text-5xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
