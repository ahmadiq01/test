import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import vectorIcon from "../../assets/Vector.svg"; // Adjust the path as needed


const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is included in each subscription package?",
      answer: `
        - **Basic Subscription Package:** Includes 1 Android Developer working 4 hours daily and a Project Manager (Available always).
        - **Medium Subscription Package:** Includes 1 Android Developer, 1 Creative Designer (both working 6 hours daily), and a Project Manager (Available always).
        - **Premium Subscription Package:** Includes 2 Android developers, 1 Creative Designer, 1 Social Media Manager, and a Project Manager, all working 8 hours daily.
        - **Single Payment:** Tailored to your specific requirements with a one-time project completion quote based on cost and time. Additional requests not initially agreed upon will be charged extra.
      `,
    },
    {
      question: "Are there discounts for long-term subscriptions?",
      answer: "Yes, we offer 5% and 10% discounts for clients who commit to 6-month or 12-month subscriptions.",
    },
    {
      question: "Are weekends included in the subscription plans?",
      answer: "No, the subscription plans cover work from Monday to Friday only. However, if you need work done on Saturdays or Sundays, it can be arranged at an additional hourly rate.",
    },
    {
      question: "How do I cancel my subscription, and are there any fees?",
      answer: "You can cancel your subscription at any time without any cancellation fees. However, we require a 1-month notice before cancellation.",
    },
    {
      question: "How can I make payments for the services?",
      answer: "We accept payments through PayPal, Payoneer, and Wise.",
    },
    {
      question: "Can I upgrade or downgrade my subscription plan?",
      answer: "Yes, you can upgrade or downgrade your subscription plan at any time. However, changes will be effective from the start of the next billing cycle.",
    },
    {
      question: "What are the hourly rates for weekend work?",
      answer: "Hourly rate for weekend work of Developer ($10/hr), Designer ($5/hr), Social Media Manager ($5/hr).",
    },
    {
      question: "Will my project be maintained as part of the subscription?",
      answer: "Yes, maintenance is included in all subscription plans. We will ensure your app is updated and functional.",
    },
    {
      question: "How long does it take to get started after signing up?",
      answer: "Once you’ve subscribed to a plan and completed payment, the team will be assigned and ready to start instantly.",
    },
    {
      question: "Can I request multiple projects in one subscription plan?",
      answer: "Yes, you can request multiple projects as long as they fit within the allocated hours and team roles provided in your subscription package.",
    },
    {
      question: "How do you handle confidential or proprietary information?",
      answer: "We are committed to protecting your confidentiality. All team members sign Non-Disclosure Agreements (NDAs) to ensure your information remains secure.",
    },
    {
      question: "What happens if I need more hours than allocated in my subscription plan?",
      answer: "If you require additional hours, you can consider upgrading to a higher subscription plan.",
    },
    {
      question: "Do I have direct communication with the assigned team?",
      answer: "Yes, you will have direct communication with your project manager, who will serve as your primary point of contact and facilitate communication with the team.",
    },
    {
      question: "Can I pause my subscription temporarily?",
      answer: "Yes, you can pause your subscription temporarily. Please inform us at least 2 weeks in advance.",
    },
    {
      question: "How do I track the progress of my project?",
      answer: "Your project manager will provide regular updates through reports and meetings. You can also request additional updates as needed.",
    },
    {
      question: "What kind of apps or software do you specialize in?",
      answer: "We specialize in Android app development, UI/UX design, Graphic Design, social media management, all tailored to your needs.",
    },
    {
      question: "Are there any limits to the features I can request in a subscription plan?",
      answer: "There are no limits!",
    },
    {
      question: "What tools and technologies do you use for development?",
      answer: "We use industry-standard tools and technologies, including Android Studio, Firebase, Kotlin, Java, Adobe XD, Figma, and other modern frameworks as per project requirements.",
    },
    {
      question: "Do you offer post-project support for Single Payment?",
      answer: "Yes, we offer post-project support at an additional cost or you can subscribe to any plan too and get any feature for free.",
    },
    {
      question: "Can I modify the scope of work during an ongoing Single Payment?",
      answer: "Yes, but any additional work or requirements not initially agreed upon will incur extra charges. We will provide a new cost and time estimate for the added scope.",
    },
  ];

  const features = [
    "Ayein",
    "Ayein",
    "Ayein",
    "Ayein",
    "Ayein",
  ];
  const plans = ["Basic", "Standard", "Premium", "Custom"];

  return (
    <div className="flex flex-col bg-[#dee13e] min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className=" flex flex-col items-center justify-center text-center py-10">
        <div className="md:w-full font-[Heathergreen] font-normal flex flex-col items-center">
          <p className="font-semibold text-9xl md:text-[150px] md:leading-[50px] leading-[50px] tracking-[2px]">
            Find the Right Plan
          </p>
        </div>
        <div className="max-w-[80%]">
          <p className="md:text-[22px] text-xl font-[Poppins] font-normal leading-[30px] tracking-[1px] mt-23">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem
            Ipsumdummy text of the printing and typesetting industry. dummy text
            of the printing and typesetting industry.dewrwin
          </p>
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className="bg-[#dee13e] flex items-center justify-center px-4 sm:px-6 py-6 sm:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Basic Plan */}
          <div className="w-[215px] h-[307px] sm:w-[30px] sm:h-[500px] md:w-[368px] md:h-[500px] bg-gradient-to-b from-green-500 to-green-700 rounded-2xl shadow-lg flex flex-col items-center justify-center relative">
            <h2 className="text-black font-bold text-sm sm:text-xl">Basic</h2>
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-green-300 rounded-full shadow-2xl absolute bottom-6 sm:bottom-10"></div>
          </div>

          {/* Standard Plan */}
          <div className="w-[215px] h-[307px] sm:w-[300px] sm:h-[500px] md:w-[368px] md:h-[500px] bg-gradient-to-b from-purple-500 to-orange-300 rounded-2xl shadow-lg flex flex-col items-center justify-center relative">
            <h2 className="text-black font-bold text-sm sm:text-xl">Standard</h2>
            <div className="w-0 h-0 border-l-[30px] border-r-[30px] sm:border-l-[50px] sm:border-r-[50px] border-b-[60px] sm:border-b-[86px] border-transparent border-b-gray-400 opacity-80 absolute bottom-6 sm:bottom-10"></div>
          </div>

          {/* Premium Plan */}
          <div className="w-[215px] h-[307px] sm:w-[300px] sm:h-[500px] md:w-[368px] md:h-[500px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center relative">
            <h2 className="text-black font-bold text-sm sm:text-xl">Premium</h2>
            <div className="w-16 h-16 sm:w-24 sm:h-24 text-gray-500 opacity-50">★</div>
          </div>

          {/* Single Payment Plan */}
          <div className="w-[215px] h-[307px] sm:w-[300px] sm:h-[500px] md:w-[368px] md:h-[500px] bg-black rounded-2xl shadow-lg flex flex-col items-center justify-center">
            <h2 className="text-white font-bold text-sm sm:text-xl">Single Payment</h2>
            <div className="w-10 h-10 sm:w-16 sm:h-16 border-4 border-white"></div>
          </div>
        </div>
      </div>


      {/* Plan Comparison Table */}
      <div className="bg-[#dee13e] py-16 flex flex-col items-center font-[Heathergreen] font-normal">
      {/* Title */}
      <h2 className="text-black font-[Heathergreen] md:text-5xl md:mt-10 md:text-[150px] rounded-2xl text-[130px] md:w-full text-center mb-16">
        Plan Comparison
      </h2>

      {/* Grid Layout */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-5 gap-12 items-start pb-[50px]">
        {/* Feature Column */}
        <div className="bg-black text-white rounded-xl shadow-lg p-8 min-h-[500px] flex flex-col ml-[-140px] mt-[-1px] mr-[-68px]">
        <h3 className="text-6xl font-semi-bold bg-white text-center text-black ml-[-32px] mt-[-32px] pt-[2px] mr-[-32px] py-4 rounded-t-xl">
          Plans
        </h3>
        <ul className="mt-6 text-center space-y-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="text-4xl font-[Poppins] font-semi-bold">{feature}</li>
          ))}
        </ul>
        </div>
        {/* Plan Columns */}
        {plans.map((plan, index) => (
          <div key={index} className="text-black text-center mt-[-14px] w-[250px] md:w-full min-h-[500px] flex flex-col">
            <h3 className="text-8xl font-semi-bold mb-6">{plan}</h3>
            <ul className="space-y-6 flex-grow">
              {features.map((_, idx) => (
                <li key={idx} className="flex justify-center">
                  <img src={vectorIcon} alt="Checkmark" className="w-10 h-10" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>


      {/* FAQ Section */}
      <div className="bg-[#914A8E] py-16 px-5 flex flex-col items-center">
        <h2 className="text-black font-normal font-[Heathergreen] text-5xl mb-10 text-center font=[Heathergreen] mt-[0]  md:text-[150px] w-full flex flex-col items-center">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="w-full pb-[100px] space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full bg-transparent text-white text-lg font-semibold cursor-pointer p-4"
            >
              {/* Question Section */}
              <div
                className="w-[80%] mx-auto flex justify-between items-center text-4xl p-4 font-[Poppins]"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-white" />
                ) : (
                  <FaChevronDown className="text-white" />
                )}
              </div>

              {/* Answer Section (Aligned with the question) */}
              {openIndex === index && (
                <p className="w-[70%] ml-auto mr-[19%] text-white text-2xl font-semibold mt-2 p-4 rounded-lg">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Extra Spacing Before Footer */}
      <div className="h-16"></div>

      <Footer />
    </div>
  );
};

export default Home;
