import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import vectorIcon from "../../assets/Group 55.svg";
import { db } from "../../firebase"; // Import your Firebase configuration
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const ContactPage = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    budget: "",
  });

  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add document to Firestore
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: serverTimestamp(),
      });

      // Success handling
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        budget: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <div className="relative min-h-screen ">
      <Header />

      <a href="home" className="md:block hidden">
        <img
          src={vectorIcon}
          alt="Decoration"
          className="fixed top-6 right-6 w-10 h-10 cursor-pointer  "
        />
      </a>

      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row w-full">
        {/* Contact Info Section */}
        <div className="flex flex-row sm:flex-row md:flex-col items-center bg-[#dee13e] w-full sm:w-1/2 md:w-[30%] lg:w-[15%] p-6 md:rounded-t-2xl space-y-6 sm:space-y-0 sm:space-x-4 md:space-x-0 md:ml-[45px]">
          <p className="text-6xl md:text-[106px] lg:text-[106px] font-[400] font-[Heathergreen] leading-[100%] tracking-[0%] text-[#000000] w-[820px] md:w-[320px] lg:w-[320px] md:h-[195px] lg:h-[195px] mt-[-20px] ml-[39px]">
            LETS CONNECT.
          </p>

          <p className="text-[#000000] text-[30px] font-extrabold mt-[-80px] mr-[-70px] w-[335.98px] h-[33.1px] ">
            +971 56 725 7157
          </p>

          <p className="text-[#000000] text-[28px] font-bold mt-[3px] mr-[-88px] w-[335.31px] h-[38.74px] ">
            fooliz@gmail.com
          </p>

          <p className="text-[#000000] md:text-[28px] break-words font-semi-bold mt-[2px] leading-tight mr-[-90px] w-[339.18px] h-[63.7px]">
            Dubai, Business Bay,<br />SBK-506, UAE
          </p>

          <div className="flex justify-center items-center w-full sm:w-1/2 md:w-full pb-6">
            <img
              className=" md:w-[280px] w-[160px] md:mt-[75px] lg:max-w-lg md:max-w-md max-w-xs md:h-auto object-contain"
              src="https://s3-alpha-sig.figma.com/img/5092/9fd8/cf65f91df9f176a93f556878108115f9?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aYgv4YCQbmk85AWiVQD5GawAy7x3ZDdCfAex701M9r2BKufrsBiCyEgBeYq7lPNIGKHh7i-PiDFbVSMExtdGvF~N-U-y6Rpmj4tBf8IJp1q8qVbCTqkHOhxXypEVoPuvWbBQ21rZDQHiOhqpN3E6UMabqy-WlujTVOGKGE8eN~BNGfa~xZSNn0ogTjQjey20t7dPC90kRMUVFOKNXA6mtogF42YaxjX4~tICLYpbPPrA8ANEEpapDD7ZqQGPIBbSZZECW2OJLCug4RnvKgH-xs5nWIOHQaWXpGK3HbWEfs5m67bNGzTyYqXo8FED7JVWcomPlUw2K91F4jITmUVbqQ__"
              alt="Animation"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full sm:w-1/2 md:w-[60%] lg:w-[65%] p-4 md:p-8 md:ml-[75px]">
          {submitStatus === "success" && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              There was an error sending your message. Please try again.
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12"
          >
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-1 md:mb-2 text-base md:text-lg">
                First Name*
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder=""
                className="border p-3 md:p-6 rounded-full w-full h-10 md:h-20 text-base md:text-lg"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-1 md:mb-2 text-base md:text-lg">
                Last Name*
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder=""
                className="border p-3 md:p-6 rounded-full w-full h-10 md:h-20 text-base md:text-lg"
                required
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-gray-700 font-semibold mb-1 md:mb-2 text-base md:text-lg">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=""
                className="border p-3 md:p-6 rounded-full w-full h-10 md:h-20 text-base md:text-lg"
                required
              />
            </div>

            <div className="flex flex-col col-span-1">
              <label className="text-gray-700 font-semibold mb-1 md:mb-2 text-base md:text-lg">
                Message*
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=""
                className="border p-3 md:p-6 rounded-[20px] w-full h-20 md:h-40 text-base md:text-lg"
                rows="3"
                required
              ></textarea>
            </div>

            <fieldset className="col-span-2 md:col-span-1 lg:col-span-1">
              <legend className="text-base md:text-lg font-semibold mb-2 md:mb-4 text-gray-700">
                Budget*
              </legend>
              <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-2 text-gray-700">
                <label>
                  <input
                    type="radio"
                    name="budget"
                    value="250-1000"
                    className="mr-2"
                    onChange={handleChange}
                    checked={formData.budget === "250-1000"}
                  />{" "}
                  $250-$1000
                </label>
                <label>
                  <input
                    type="radio"
                    name="budget"
                    value="1000-2000"
                    className="mr-2"
                    onChange={handleChange}
                    checked={formData.budget === "1000-2000"}
                  />{" "}
                  $1000-$2000
                </label>
                <label>
                  <input
                    type="radio"
                    name="budget"
                    value="2000-5000"
                    className="mr-2"
                    onChange={handleChange}
                    checked={formData.budget === "2000-5000"}
                  />{" "}
                  $2000-$5000
                </label>
                <label>
                  <input
                    type="radio"
                    name="budget"
                    value="5000-10000"
                    className="mr-2"
                    onChange={handleChange}
                    checked={formData.budget === "5000-10000"}
                  />{" "}
                  $5000-$10000
                </label>
              </div>
            </fieldset>

            <button
              type="submit"
              className={`bg-[#474cba] text-white py-3 md:py-5 px-6 md:px-10 rounded-full w-full md:w-1/4 hover:bg-blue-700 col-span-2 mt-4 md:mt-6 text-base md:text-lg ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
