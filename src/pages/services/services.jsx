import { useEffect, useRef, useState } from "react";
import monkey from "../../assets/monkey.gif";
import bee from "../../assets/bee.svg";
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Check each section's position and update visibility
      if (monkeySectionRef.current) {
        const monkeyRect = monkeySectionRef.current.getBoundingClientRect();
        const monkeyTop = monkeyRect.top + window.scrollY;
        const monkeyBottom = monkeyRect.bottom + window.scrollY;
        const isMonkeyVisible =
          scrollPosition >= monkeyTop && scrollPosition <= monkeyBottom;

        if (isMonkeyVisible !== sectionVisibility.monkey) {
          setSectionVisibility((prev) => ({
            ...prev,
            monkey: isMonkeyVisible,
          }));

          if (monkeyRef.current) {
            if (isMonkeyVisible) {
              monkeyRef.current.classList.add("animate-from-left");
              monkeyRef.current.classList.remove("animate-to-left");
            } else {
              monkeyRef.current.classList.add("animate-to-left");
              monkeyRef.current.classList.remove("animate-from-left");
            }
          }
        }
      }

      if (beeSectionRef.current) {
        const beeRect = beeSectionRef.current.getBoundingClientRect();
        const beeTop = beeRect.top + window.scrollY;
        const beeBottom = beeRect.bottom + window.scrollY;
        const isBeeVisible =
          scrollPosition >= beeTop && scrollPosition <= beeBottom;

        if (isBeeVisible !== sectionVisibility.bee) {
          setSectionVisibility((prev) => ({ ...prev, bee: isBeeVisible }));

          if (beeRef.current) {
            if (isBeeVisible) {
              beeRef.current.classList.add("animate-from-left");
              beeRef.current.classList.remove("animate-to-left");
            } else {
              beeRef.current.classList.add("animate-to-left");
              beeRef.current.classList.remove("animate-from-left");
            }
          }
        }
      }

      if (humanSectionRef.current) {
        const humanRect = humanSectionRef.current.getBoundingClientRect();
        const humanTop = humanRect.top + window.scrollY;
        const humanBottom = humanRect.bottom + window.scrollY;
        const isHumanVisible =
          scrollPosition >= humanTop && scrollPosition <= humanBottom;

        if (isHumanVisible !== sectionVisibility.human) {
          setSectionVisibility((prev) => ({ ...prev, human: isHumanVisible }));

          if (humanRef.current) {
            if (isHumanVisible) {
              humanRef.current.classList.add("animate-from-left");
              humanRef.current.classList.remove("animate-to-left");
            } else {
              humanRef.current.classList.add("animate-to-left");
              humanRef.current.classList.remove("animate-from-left");
            }
          }
        }
      }

      if (bananaSectionRef.current) {
        const bananaRect = bananaSectionRef.current.getBoundingClientRect();
        const bananaTop = bananaRect.top + window.scrollY;
        const bananaBottom = bananaRect.bottom + window.scrollY;
        const isBananaVisible =
          scrollPosition >= bananaTop && scrollPosition <= bananaBottom;

        if (isBananaVisible !== sectionVisibility.banana) {
          setSectionVisibility((prev) => ({
            ...prev,
            banana: isBananaVisible,
          }));

          if (bananaRef.current) {
            if (isBananaVisible) {
              bananaRef.current.classList.add("animate-from-left");
              bananaRef.current.classList.remove("animate-to-left");
            } else {
              bananaRef.current.classList.add("animate-to-left");
              bananaRef.current.classList.remove("animate-from-left");
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
      `}</style>

      {/* monkey div */}
      <div
        ref={monkeySectionRef}
        className="bg-[rgba(92,186,71,1)] min-h-screen relative"
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
            <p className="text-black text-[650px] font-Heathergreen leading-[1]">
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
        <div className="absolute bottom-8 left-8 flex flex-col  space-y-4">
          <button className="bg-[rgba(71,76,186,1)] text-white font-bold p-10 rounded-full text-5xl">
            SEE APPS WORK
          </button>
          <button className="text-white p-4 rounded-full">
            <FaArrowLeft className="text-5xl" />
          </button>
        </div>
      </div>

      {/* bee div */}
      <div
        ref={beeSectionRef}
        className="bg-[rgba(71,76,186,1)] min-h-screen relative"
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
            <p className="text-black text-[350px] ">WEBSITES</p>
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
        <div className="absolute bottom-8 left-8 flex flex-col  space-y-4">
          <button className="bg-[rgba(186,71,174,1)] text-white ml-20 font-bold p-10 rounded-full text-5xl">
            SEE APPS WORK
          </button>
          <button className="text-white p-4 rounded-full">
            <FaArrowLeft className="text-5xl" />
          </button>
        </div>
      </div>

      {/* ui/ux div */}
      <div
        ref={humanSectionRef}
        className="bg-[rgba(186,71,174,1)] min-h-screen relative"
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
            <button className="bg-[rgba(222,225,62,1)] absolute top-1/2 left-[-250px] whitespace-nowrap text-white font-bold p-10 rounded-full text-5xl">
              SEE APPS WORK
            </button>
            <p className="text-black text-[550px] font-Heathergreen float-right whitespace-nowrap leading-[1]">
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
        <div className="absolute bottom-8 left-8 flex flex-col  space-y-4">
          <button className="text-white p-4 rounded-full">
            <FaArrowLeft className="text-5xl" />
          </button>
        </div>
      </div>

      {/* banana div */}
      <div
        ref={bananaSectionRef}
        className="bg-[rgba(222,225,62,1)] min-h-screen relative"
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
            <button className="bg-[rgba(92,186,71,1)] absolute left-3/5 whitespace-nowrap text-white font-bold p-10 rounded-full text-5xl">
              SEE APPS WORK
            </button>
            <p className="text-black text-[350px]  font-Heathergreen float-right whitespace-nowrap ">
              CREATIVE
            </p>
            <div className="absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-8/9">
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
        <div className="absolute bottom-8 left-8 flex flex-col  space-y-4">
          <button className="text-black p-4 rounded-full">
            <FaArrowLeft className="text-5xl" />
          </button>
        </div>
      </div>
    </>
  );
}
