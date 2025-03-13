import { useEffect, useRef, useState } from "react";
import monkey from "../../assets/monkey.gif";
import bee from "../../assets/bee.gif";
import human from "../../assets/human.gif";
import banana from "../../assets/banana.gif";
import { FaArrowLeft } from "react-icons/fa";
import Header from "../../components/header/header";


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
          {/* Logo in top left corner */}
          <div className="absolute ">
            <h1 className="text-black text-3xl font-bold"><Header/></h1>
          </div>

          {/* Main content */}
          <div className="flex flex-col md:flex-row px-8 gap-10">
            {/* Left side */}
            <div className="flex flex-col md:pl-4 md:mt-[40px]">
              <p className="text-white text-[80px] font-light leading-[100%] py-20 whitespace-nowrap font-poppins">
                WE MAKE
              </p>
            </div>

            {/* Right side with APPS text and monkey */}
            <div className="relative md:mt-0">
              <p className="text-black text-[1150px] md:mt-[-160px] md:ml-[260px] font-[Heathergreen] leading-[1]">
                APPS
              </p>
              <div className="absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-8/9">
                <img
                  ref={monkeyRef}
                  src={monkey}
                  alt="Blue monkey meditating"
                  className="h-[500px]"
                />
              </div>
            </div>
          </div>

          {/* Button and Back Arrow positioned together */}
          <div className="absolute bottom-8 left-8 flex flex-col space-y-4">
            <button className="bg-[rgba(71,76,186,1)] md:ml-[108px] text-white font-bold p-10 rounded-full text-5xl">
              SEE APPS WORK
            </button>
            <button className="text-white p-4 rounded-full mt-[90px]">
              <FaArrowLeft className="text-5xl" />
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
          <div className="absolute top-0 left-0">
            <h1 className="text-black text-3xl font-bold"><Header/></h1>
          </div>

          {/* Main content */}
          <div className="flex flex-col md:flex-row px-8 gap-10">
            {/* Left side */}
            <div className="flex flex-col md:pl-4 md:mt-[40px]">
              <p className="text-white text-[80px] font-light leading-[100%] py-20 whitespace-nowrap font-poppins">
                WE MAKE
              </p>
            </div>

            {/* Right side with WEBSITES text and bee */}
            <div className="relative md:mt-20">
              <p className="text-black text-[350px] font-[Heathergreen]">WEBSITES</p>
              <div className="absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-0.5/5">
                <img
                  ref={beeRef}
                  src={bee}
                  alt="Bee character"
                  className="h-[350px]"
                />
              </div>
            </div>
          </div>

          {/* Button and Back Arrow positioned together */}
          <div className="absolute bottom-8 left-8 flex flex-col space-y-4">
            <button className="bg-[rgba(186,71,174,1)] text-white ml-20 font-bold p-10 rounded-full text-5xl">
              SEE WEBSITES WORK
            </button>
            <button className="text-white p-4 rounded-full">
              <FaArrowLeft className="text-5xl" />
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
          <div className="absolute top-0 left-0">
            <h1 className="text-black text-3xl font-bold"><Header/></h1>
          </div>

          {/* Main content */}
          <div className="flex flex-col md:flex-row px-8 gap-10">
            {/* Left side */}
            <div className="flex flex-col md:pl-4 md:mt-[40px]">
              <p className="text-white text-[80px] font-light leading-[100%] py-20 whitespace-nowrap font-poppins">
                WE MAKE
              </p>
            </div>

            {/* Right side with UI/UX text and human */}
            <div className="relative md:mt-20">
              <button className="bg-[rgba(222,225,62,1)] absolute top-1/2 left-[-250px] whitespace-nowrap text-white font-bold p-10 rounded-full text-5xl">
                SEE UI/UX WORK
              </button>
              <p className="text-black text-[550px] font-[Heathergreen] float-right whitespace-nowrap leading-[1]">
                UI/UX
              </p>
              <div className="absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-8/9">
                <img
                  ref={humanRef}
                  src={human}
                  alt="Human character"
                  className="h-[500px]"
                />
              </div>
            </div>
          </div>

          {/* Button and Back Arrow positioned together */}
          <div className="absolute bottom-8 left-8 flex flex-col space-y-4">
            <button className="text-white p-4 rounded-full">
              <FaArrowLeft className="text-5xl" />
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
          <div className="absolute top-0 left-0">
            <h1 className="text-black text-3xl font-bold"><Header/></h1>
          </div>

          {/* Main content */}
          <div className="flex flex-col md:flex-row px-8 gap-10">
            {/* Left side */}
            <div className="flex flex-col md:pl-4 md:mt-[40px]">
              <p className="text-white text-[80px] font-light leading-[100%] py-20 whitespace-nowrap font-poppins">
                WE MAKE
              </p>
            </div>

            {/* Right side with CREATIVE text and banana */}
            <div className="relative md:mt-40">
              <button className="bg-[rgba(92,186,71,1)] absolute left-3/5 whitespace-nowrap text-white font-bold p-10 rounded-full text-5xl">
                SEE CREATIVE WORK
              </button>
              <p className="text-black text-[550px] font-[Heathergreen] float-right whitespace-nowrap ml-[400px]">
                CREATIVE
              </p>
              <div className="absolute left-1/2 bottom-1/2 transform -translate-x-[400px] translate-y-[-100px]">
                <img
                  ref={bananaRef}
                  src={banana}
                  alt="Banana character"
                  className="h-[400px]"
                />
              </div>
            </div>
          </div>

          {/* Button and Back Arrow positioned together */}
          <div className="absolute bottom-8 left-8 flex flex-col space-y-4">
            <button className="text-black p-4 rounded-full">
              <FaArrowLeft className="text-5xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
