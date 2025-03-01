import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Are there discounts for long-term subscriptions?",
      answer:
        "Yes! We offer special discounts for users who subscribe annually or for multiple years. " +
        "The longer your subscription, the bigger the discount. Reach out to our support team for custom pricing options.",
    },
    {
      question: "Are weekends included in the subscription plans?",
      answer:
        "Yes! Our services are available 24/7, including weekends and public holidays, ensuring uninterrupted access.",
    },
    {
      question: "Can I switch my plan later?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan at any time from your account settings. " +
        "Plan changes take effect immediately, and any remaining balance is adjusted in the next billing cycle.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We support payments via major credit cards, PayPal, and direct bank transfers. " +
        "For enterprise clients, we also offer invoicing options for bulk purchases.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes! We provide a 14-day money-back guarantee. If you're not satisfied within the first 14 days, " +
        "simply contact our support team to request a full refund.",
    },
  ];

  const features = [
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4",
    "Feature 5",
  ];
  const plans = ["Basic", "Standard", "Premium", "Custom"];

  return (
    <div className="flex flex-col bg-[#dee13e] min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className=" flex flex-col items-center justify-center text-center py-10">
        <div className="w-full font-[Heathergreen] font-normal flex flex-col items-center">
          <p className="font-semibold md:text-[150px] leading-[50px] tracking-[2px]">
            Find the Right Plan
          </p>
        </div>
        <div className="max-w-[80%]">
          <p className="md:text-[22px] font-[Poppins] font-normal leading-[30px] tracking-[1px] mt-23">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsumdummy text of the printing and typesetting industry. dummy text of the printing and typesetting industry.dewrwin
          </p>
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className="bg-[#dee13e]  flex items-center justify-center px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Basic Plan */}
          <div className="w-[300px] md:w-[368px] h-[500px] bg-gradient-to-b from-green-500 to-green-700 rounded-2xl shadow-lg flex flex-col items-center justify-center relative">
            <h2 className="text-black font-bold text-xl">Basic</h2>
            <div className="w-24 h-24 bg-green-300 rounded-full shadow-2xl absolute bottom-10"></div>
          </div>

          {/* Standard Plan */}
          <div className="w-[300px] md:w-[368px] h-[500px] bg-gradient-to-b from-purple-500 to-orange-300 rounded-2xl shadow-lg flex flex-col items-center justify-center relative">
            <h2 className="text-black font-bold text-xl">Standard</h2>
            <div className="w-0 h-0 border-l-[50px] border-r-[50px] border-b-[86px] border-transparent border-b-gray-400 opacity-80 absolute bottom-10"></div>
          </div>

          {/* Premium Plan */}
          <div className="w-[300px] md:w-[368px] h-[500px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center relative">
            <h2 className="text-black font-bold text-xl">Premium</h2>
            <div className="w-24 h-24 text-gray-500 opacity-50">★</div>
          </div>

          {/* Single Payment Plan */}
          <div className="w-[300px] md:w-[368px] h-[500px] bg-black rounded-2xl shadow-lg flex flex-col items-center justify-center">
            <h2 className="text-white font-bold text-xl">Single Payment</h2>
            <div className="w-16 h-16 border-4 border-white"></div>
          </div>
        </div>
      </div>

      {/* Plan Comparison Table */}
      <div className="bg-[#dee13e] py-10 flex flex-col items-center font-[Heathergreen] font-normal ">
        <h2 className="text-black font=[Heathergreen] text-5xl mt-10  md:text-[150px] w-full  mb-34 flex flex-col items-center ">Plan Comparison</h2>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-6 items-start ">
          {/* Feature Column */}
          <div className="bg-black text-white rounded-xl shadow-lg p-6 w-full">
            <h3 className="text-xl font-normal text-center border-b border-white pb-4">
              Features
            </h3>
            <ul className="mt-4 text-center space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="text-lg">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Plan Columns */}
          {plans.map((plan, index) => (
            <div key={index} className="text-black text-center">
              <h3 className="text-xl font-normal mb-4">{plan}</h3>
              <ul className="space-y-4">
                {features.map((_, idx) => (
                  <li key={idx} className="text-xl">
                    ✅
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
    <div key={index} className="w-full bg-transparent text-white text-lg font-semibold cursor-pointer p-4">
      
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
       <p className="w-[70%] ml-auto mr-[19%] text-white bg-red-500 text-2xl font-semibold mt-2 p-4 rounded-lg">
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
