import { useEffect, useRef, useState } from "react";
import monkey from "../../assets/monkey.gif";
import bee from "../../assets/bee.gif";
import human from "../../assets/human.gif";
import banana from "../../assets/banana.gif";
import { FaArrowLeft } from "react-icons/fa";

export default function Home() {
  const monkeyRef = useRef(null);
  const beeRef = useRef(null);
  const humanRef = useRef(null);
  const bananaRef = useRef(null);

  const monkeySectionRef = useRef(null);
  const beeSectionRef = useRef(null);
  const humanSectionRef = useRef(null);
  const bananaSectionRef = useRef(null);

  const [sectionVisibility, setSectionVisibility] = useState({
    monkey: false,
    bee: false,
    human: false,
    banana: false,
  });
  
  const [activeSection, setActiveSection] = useState(1);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    // Reset animations on initial load to ensure they work properly
    const resetAnimations = () => {
      if (monkeyRef.current) {
        monkeyRef.current.classList.remove("animate-from-left", "animate-to-left");
        // Force a reflow to ensure animations can be applied again
        void monkeyRef.current.offsetWidth;
      }
      if (beeRef.current) {
        beeRef.current.classList.remove("animate-from-right", "animate-to-right");
        void beeRef.current.offsetWidth;
      }
      if (humanRef.current) {
        humanRef.current.classList.remove("animate-from-left", "animate-to-left");
        void humanRef.current.offsetWidth;
      }
      if (bananaRef.current) {
        bananaRef.current.classList.remove("animate-from-left", "animate-to-left");
        void bananaRef.current.offsetWidth;
      }
    };

    // Initial reset
    resetAnimations();

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollDirection = scrollPosition > lastScrollPos ? 'down' : 'up';
      setLastScrollPos(scrollPosition);
      
      // Determine which section should be active based on scroll position
      const section1Top = monkeySectionRef.current?.offsetTop || 0;
      const section2Top = beeSectionRef.current?.offsetTop || 0;
      const section3Top = humanSectionRef.current?.offsetTop || 0;
      const section4Top = bananaSectionRef.current?.offsetTop || 0;
      
      if (scrollPosition < section2Top - windowHeight/2) {
        if (activeSection !== 1) {
          setActiveSection(1);
          // Reset animations when changing sections
          resetAnimations();
        }
      } else if (scrollPosition < section3Top - windowHeight/2) {
        if (activeSection !== 2) {
          setActiveSection(2);
          resetAnimations();
        }
      } else if (scrollPosition < section4Top - windowHeight/2) {
        if (activeSection !== 3) {
          setActiveSection(3);
          resetAnimations();
        }
      } else {
        if (activeSection !== 4) {
          setActiveSection(4);
          resetAnimations();
        }
      }

      // Check each section's position and update visibility
      if (monkeySectionRef.current) {
        const monkeyRect = monkeySectionRef.current.getBoundingClientRect();
        const isMonkeyVisible = monkeyRect.top < windowHeight/2 && monkeyRect.bottom > windowHeight/2;

        if (isMonkeyVisible !== sectionVisibility.monkey) {
          setSectionVisibility((prev) => ({
            ...prev,
            monkey: isMonkeyVisible,
          }));

          if (monkeyRef.current) {
            if (isMonkeyVisible) {
              // Monkey comes from left regardless of scroll direction
              monkeyRef.current.classList.remove("animate-to-left");
              monkeyRef.current.classList.add("animate-from-left");
            } else {
              monkeyRef.current.classList.remove("animate-from-left");
              monkeyRef.current.classList.add("animate-to-left");
            }
          }
        }
      }

      if (beeSectionRef.current) {
        const beeRect = beeSectionRef.current.getBoundingClientRect();
        const isBeeVisible = beeRect.top < windowHeight/2 && beeRect.bottom > windowHeight/2;

        if (isBeeVisible !== sectionVisibility.bee) {
          setSectionVisibility((prev) => ({ ...prev, bee: isBeeVisible }));

          if (beeRef.current) {
            if (isBeeVisible) {
              // Bee comes from right regardless of scroll direction
              beeRef.current.classList.remove("animate-to-right");
              beeRef.current.classList.add("animate-from-right");
            } else {
              beeRef.current.classList.remove("animate-from-right");
              beeRef.current.classList.add("animate-to-right");
            }
          }
        }
      }

      if (humanSectionRef.current) {
        const humanRect = humanSectionRef.current.getBoundingClientRect();
        const isHumanVisible = humanRect.top < windowHeight/2 && humanRect.bottom > windowHeight/2;

        if (isHumanVisible !== sectionVisibility.human) {
          setSectionVisibility((prev) => ({ ...prev, human: isHumanVisible }));

          if (humanRef.current) {
            if (isHumanVisible) {
              // Human comes from left regardless of scroll direction
              humanRef.current.classList.remove("animate-to-left");
              humanRef.current.classList.add("animate-from-left");
            } else {
              humanRef.current.classList.remove("animate-from-left");
              humanRef.current.classList.add("animate-to-left");
            }
          }
        }
      }

      if (bananaSectionRef.current) {
        const bananaRect = bananaSectionRef.current.getBoundingClientRect();
        const isBananaVisible = bananaRect.top < windowHeight/2 && bananaRect.bottom > windowHeight/2;

        if (isBananaVisible !== sectionVisibility.banana) {
          setSectionVisibility((prev) => ({
            ...prev,
            banana: isBananaVisible,
          }));

          if (bananaRef.current) {
            if (isBananaVisible) {
              // Banana comes from left regardless of scroll direction
              bananaRef.current.classList.remove("animate-to-left");
              bananaRef.current.classList.add("animate-from-left");
            } else {
              bananaRef.current.classList.remove("animate-from-left");
              bananaRef.current.classList.add("animate-to-left");
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initialize on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionVisibility, activeSection, lastScrollPos]);

  // Function to handle scrolling to a specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden">
      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          height: 100%;
          width: 100%;
        }
        
        .snap-section {
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }
        
        .animate-from-left {
          animation: slideInFromLeft 1s forwards;
        }

        .animate-to-left {
          animation: slideOutToLeft 1s forwards;
        }

        .animate-from-right {
          animation: slideInFromRight 1s forwards;
        }

        .animate-to-right {
          animation: slideOutToRight 1s forwards;
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

        @keyframes slideInFromRight {
          0% {
            transform: translateX(200%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutToRight {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>

      {/* monkey div */}
      <div 
        id="1"
        ref={monkeySectionRef}
        className={`bg-[rgba(92,186,71,1)] h-screen w-screen relative snap-section ${activeSection === 1 ? 'sticky top-0' : ''}`}
      >
        {/* Logo in top left corner */}
        <div className="absolute top-8 left-8">
          <h1 className="text-black text-3xl font-bold">FOOLIZ</h1>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row px-8 gap-10">
          {/* Left side */}
          <div className="flex flex-col space-y-12 md:pl-8">
            <p className="text-white text-5xl font-bold py-20 whitespace-nowrap">
              WE MAKE
            </p>
          </div>

          {/* Right side with APPS text and monkey */}
          <div className="relative md:mt-0">
            <p className="text-black text-[900px] font-[Heathergreen] -translate-x-[-600px] leading-[1]">
              APPS
            </p>
            <div className="absolute left-1/2 bottom-1/2 transform -translate-x-[-200px] translate-y-8/8">
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
          <button 
            className="bg-[rgba(71,76,186,1)] text-white font-bold p-10 rounded-full text-5xl"
            onClick={() => scrollToSection("2")}
          >
            SEE APPS WORK
          </button>
          <button className="text-white p-4 rounded-full">
            <FaArrowLeft className="text-5xl" />
          </button>
        </div>
      </div>

      {/* bee div */}
      <div 
        id="2"
        ref={beeSectionRef}
        className={`bg-[rgba(71,76,186,1)] h-screen w-screen relative snap-section ${activeSection === 2 ? 'sticky top-0' : ''}`}
      >
        {/* Logo in top left corner */}
        <div className="absolute top-8 left-8">
          <h1 className="text-black text-3xl font-bold">FOOLIZ</h1>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row px-8 gap-10">
          {/* Left side */}
          <div className="flex flex-col space-y-12 md:pl-8">
            <p className="text-white text-5xl font-bold py-20 whitespace-nowrap">
              WE MAKE
            </p>
          </div>

          {/* Right side with WEBSITES text and bee */}
          <div className="relative md:mt-20">
            <p className="text-black text-[500px] font-[Heathergreen] -translate-x-[-600px]">WEBSITES</p>
            <div className="absolute left-1/2 bottom-1/2 transform -translate-x-[-310px] translate-y-0.5/5">
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
          <button 
            className="bg-[rgba(186,71,174,1)] text-white ml-20 font-bold p-10 rounded-full text-5xl"
            onClick={() => scrollToSection("3")}
          >
            SEE WEBSITES WORK
          </button>
          <button 
            className="text-white p-4 rounded-full"
            onClick={() => scrollToSection("1")}
          >
            <FaArrowLeft className="text-5xl" />
          </button>
        </div>
      </div>

      {/* ui/ux div */}
      <div 
        id="3"
        ref={humanSectionRef}
        className={`bg-[rgba(186,71,174,1)] h-screen w-screen relative snap-section ${activeSection === 3 ? 'sticky top-0' : ''}`}
      >
        {/* Logo in top left corner */}
        <div className="absolute top-8 left-8">
          <h1 className="text-black text-3xl font-bold">FOOLIZ</h1>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row px-8 gap-10">
          {/* Left side */}
          <div className="flex flex-col space-y-40 md:pl-8">
            <p className="text-white text-5xl font-bold py-20 whitespace-nowrap">
              WE MAKE
            </p>
          </div>

          {/* Right side with UI/UX text and human */}
          <div className="relative md:mt-20">
            <button 
              className="bg-[rgba(222,225,62,1)] absolute top-1/2 left-[-250px] whitespace-nowrap text-white font-bold p-10 rounded-full text-5xl"
              onClick={() => scrollToSection("4")}
            >
              SEE UI/UX WORK
            </button>
            <p className="text-black text-[900px] font-[Heathergreen] -translate-x-[-600px] float-right whitespace-nowrap leading-[1]">
              UI/UX
            </p>
            <div className="absolute left-1/2 bottom-1/2 transform -translate-x-[-340px] translate-y-8/9">
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
          <button 
            className="text-white p-4 rounded-full"
            onClick={() => scrollToSection("2")}
          >
            <FaArrowLeft className="text-5xl" />
          </button>
        </div>
      </div>

      {/* banana div */}
      <div 
        id="4"
        ref={bananaSectionRef}
        className={`bg-[rgba(222,225,62,1)] h-screen w-screen relative snap-section ${activeSection === 4 ? 'sticky top-0' : ''}`}
      >
        {/* Logo in top left corner */}
        <div className="absolute top-8 left-8">
          <h1 className="text-black text-3xl font-bold">FOOLIZ</h1>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row px-8 gap-10">
          {/* Left side */}
          <div className="flex flex-col space-y-40 md:pl-8">
            <p className="text-white text-5xl font-bold py-20 whitespace-nowrap">
              WE MAKE
            </p>
          </div>

          {/* Right side with CREATIVE text and banana */}
          <div className="relative md:mt-40">
            <button 
              className="bg-[rgba(92,186,71,1)] absolute left-3/5 whitespace-nowrap text-white font-bold p-10 rounded-full text-5xl"
              onClick={() => scrollToSection("1")}
            >
              SEE CREATIVE WORK
            </button>
            <p className="text-black text-[500px] font-[Heathergreen] -translate-x-[-600px] float-right whitespace-nowrap">
              CREATIVE
            </p>
            <div className="absolute left-1/2 bottom-1/2 transform -translate-x-[-360px] translate-y-8/9">
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
          <button 
            className="text-black p-4 rounded-full"
            onClick={() => scrollToSection("3")}
          >
            <FaArrowLeft className="text-5xl" />
          </button>
        </div>
      </div>
    </div>
  );
}