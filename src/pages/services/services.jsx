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

  // Track current active section (0-3)
  const [activeSection, setActiveSection] = useState(0);

  const [sectionVisibility, setSectionVisibility] = useState({
    monkey: true,
    bee: false,
    human: false,
    banana: false,
  });

  // Navigation functions
  const navigateToSection = (sectionIndex) => {
    if (sectionIndex < 0 || sectionIndex > 3) return;

    const sections = ["monkey", "bee", "human", "banana"];
    const newVisibility = {
      monkey: false,
      bee: false,
      human: false,
      banana: false,
    };

    newVisibility[sections[sectionIndex]] = true;
    setSectionVisibility(newVisibility);
    setActiveSection(sectionIndex);
  };

  const navigateNext = () => {
    navigateToSection(Math.min(activeSection + 1, 3));
  };

  const navigatePrev = () => {
    navigateToSection(Math.max(activeSection - 1, 0));
  };

  useEffect(() => {
    // Apply animations based on visibility changes
    const applyAnimation = (ref, isVisible) => {
      if (!ref.current) return;

      if (isVisible) {
        ref.current.classList.add("animate-from-left");
        ref.current.classList.remove("animate-to-left");
      } else {
        ref.current.classList.add("animate-to-left");
        ref.current.classList.remove("animate-from-left");
      }
    };

    applyAnimation(monkeyRef, sectionVisibility.monkey);
    applyAnimation(beeRef, sectionVisibility.bee);
    applyAnimation(humanRef, sectionVisibility.human);
    applyAnimation(bananaRef, sectionVisibility.banana);

    // Set up touch events
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;

      // If swipe distance is significant
      if (Math.abs(diffY) > 50) {
        if (diffY > 0) {
          // Swipe up - go to next section
          navigateNext();
        } else {
          // Swipe down - go to previous section
          navigatePrev();
        }
      }
    };

    let touchStartY = 0;
    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchend", handleTouchEnd, false);

    // Add keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        navigateNext();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        navigatePrev();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSection, sectionVisibility]);

  return (
    <>
      <style jsx global>{`
        .animate-from-left {
          animation: slideInFromLeft 1.5s forwards;
        }

        .animate-to-left {
          animation: slideOutToLeft 1.5s forwards;
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

        .section-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        }

        .section {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: opacity 0.3s ease-in-out;
          z-index: 0;
          opacity: 0;
          pointer-events: none;
        }

        .section.active {
          opacity: 1;
          z-index: 40;
          pointer-events: auto;
        }

        .nav-dots {
          position: fixed;
          left: 20px;
          bottom: 20px; /* Move to bottom */
          transform: none; /* Remove vertical centering */
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .nav-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-dot.active {
          background-color: white;
          transform: scale(1.5);
        }
      `}</style>

      <div className="section-container">
        {/* Navigation dots */}
        <div className="nav-dots">
          <div
            className={`nav-dot ${activeSection === 0 ? "active" : ""}`}
            onClick={() => navigateToSection(0)}
          />
          <div
            className={`nav-dot ${activeSection === 1 ? "active" : ""}`}
            onClick={() => navigateToSection(1)}
          />
          <div
            className={`nav-dot ${activeSection === 2 ? "active" : ""}`}
            onClick={() => navigateToSection(2)}
          />
          <div
            className={`nav-dot ${activeSection === 3 ? "active" : ""}`}
            onClick={() => navigateToSection(3)}
          />
        </div>

        {/* monkey div */}
        <div
          ref={monkeySectionRef}
          className={`section bg-[rgba(92,186,71,1)] ${
            sectionVisibility.monkey ? "active" : ""
          }`}
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
                className="max-w-full max-h-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl object-contain animate-from-left"
                style={{ aspectRatio: "preserve" }}
              />
            </div>
          </div>

          {/* Button and Back Arrow positioned together */}
          <div className="absolute bottom-8 left-0 right-0 md:left-8 md:right-auto flex flex-col items-center md:items-start space-y-4 z-10">
            {/* Link Integrated in the Button */}
            <Link to="/work?category=App">
              <button className="bg-[rgba(71,76,186,1)] mb-[35px] ml-[190px] text-white font-bold p-2 md:p-10 rounded-full text-lg md:text-5xl md:ml-[108px] w-[160px] md:w-full lg:w-[500px]">
                SEE APPS WORK
              </button>
            </Link>

            {/* Navigation buttons */}
            <div className="hidden md:flex gap-4 items-center mt-4">
              <button
                onClick={navigatePrev}
                disabled={activeSection === 0}
                className={`text-white p-4 rounded-full ${
                  activeSection === 0 ? "opacity-50" : ""
                }`}
              >
                <FaArrowLeft className="text-2xl md:text-5xl transform rotate-90" />
              </button>
              <button
                onClick={navigateNext}
                className="text-white p-4 rounded-full"
              >
                <FaArrowLeft className="text-2xl md:text-5xl transform -rotate-90" />
              </button>
            </div>
          </div>
        </div>

        {/* bee div */}
        <div
          ref={beeSectionRef}
          className={`section bg-[rgba(71,76,186,1)] ${
            sectionVisibility.bee ? "active" : ""
          }`}
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
            <Link
              to="/work?category=Web"
              className="bg-[rgba(186,71,174,1)] mt-[-190px] ml-[-100px] text-white font-bold p-4 md:p-10 rounded-full text-lg md:text-2xl w-[220px] lg:w-3/6 md:w-auto md:ml-[370px] text-center block"
            >
              SEE WEBSITES WORK
            </Link>

            {/* Navigation buttons */}
            <div className="hidden md:flex gap-4 items-center mt-4">
              <button
                onClick={navigatePrev}
                className="text-white p-4 rounded-full"
              >
                <FaArrowLeft className="text-2xl md:text-5xl transform rotate-90" />
              </button>
              <button
                onClick={navigateNext}
                className="text-white p-4 rounded-full"
              >
                <FaArrowLeft className="text-2xl md:text-5xl transform -rotate-90" />
              </button>
            </div>
          </div>
        </div>

        {/* ui/ux div */}
        <div
          ref={humanSectionRef}
          className={`section bg-[rgba(186,71,174,1)] ${
            sectionVisibility.human ? "active" : ""
          }`}
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
              <Link
                to="/work?category=UI/UX"
                className="bg-[rgba(222,225,62,1)] absolute
                lg:mt-[-70px] md:mt-[220px] mt-[400px] ml-[75px] w-[220px] h-[80px] md:w-[400px] md:h-[80px] lg:w-[400px] lg:h-[130px]
                text-center md:top-1/2 left-1/2 md:left-auto transform -translate-x-1/2
                md:-translate-x-0 md:ml-[-58px] lg:ml-[-708px] whitespace-nowrap text-black 
                font-bold p-4 md:p-10 rounded-full md:text-4xl z-30"
              >
                <p className="mt-[10px] md:mt-[10px] lg:mt-[-4px]">
                  {" "}
                  SEE UI/UX WORK
                </p>
              </Link>
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
            <div className="w-full h-full max-w-screen max-h-screen flex items-center justify-center">
              <img
                ref={humanRef}
                src={human}
                alt="Human character"
                className="max-w-full md:ml-[200px] lg:ml-[700px] md:mt-[200px] lg:mt-[470px] max-h-full md:max-w-full lg:max-w-full xl:max-w-5xl object-contain"
                style={{ aspectRatio: "preserve" }}
              />
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute bottom-8 hidden md:flex left-8 items-center gap-4 z-10">
            <button
              onClick={navigatePrev}
              className="text-white p-4 rounded-full"
            >
              <FaArrowLeft className="text-3xl md:text-5xl transform rotate-90" />
            </button>
            <button
              onClick={navigateNext}
              className="text-white p-4 rounded-full"
            >
              <FaArrowLeft className="text-3xl md:text-5xl transform -rotate-90" />
            </button>
          </div>
        </div>

        {/* banana div */}
        <div
          ref={bananaSectionRef}
          className={`section bg-[rgba(222,225,62,1)] ${
            sectionVisibility.banana ? "active" : ""
          }`}
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
              <Link
                to="/work?category=Creative"
                className="bg-[rgba(92,186,71,1)] absolute 
                mt-[550px] w-[200px] md:w-[200px] lg:w-[330px] lg:h-[130px] md:top-auto md:left-3/5 left-1/3 
                transform -translate-x-1/2 md:-translate-x-0 whitespace-nowrap lg:mt-[40px] lg:ml-[240px] text-black font-bold p-4 md:p-10 rounded-full text-xl md:text-5xl z-30"
              >
                <p className="text-[18px] mt:text-[18px] lg:text-[26px] lg:mt-[14px]">
                  SEE CREATIVE WORK
                </p>
              </Link>

              <p className="text-black text-[220px] lg:mt-[-220px] ml-[-15px] sm:text-[250px] md:text-[500px] lg:text-[800px] font-[Heathergreen] text-center md:text-right md:float-right whitespace-nowrap mt-[-90px] md:mt-[-190px] md:ml-[100px]">
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
                className="max-w-full max-h-full lg:mt-[450px] lg:ml-[520px] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl object-contain"
                style={{ aspectRatio: "preserve" }}
              />
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute bottom-8 hidden md:flex left-8 items-center gap-4 z-10">
            <button
              onClick={navigatePrev}
              className="text-black p-4 rounded-full"
            >
              <FaArrowLeft className="text-3xl md:text-5xl transform rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
