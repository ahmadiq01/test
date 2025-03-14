import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import vectorIcon from "../../assets/Group 55.svg";
import { database } from "../../firebase"; // Import your Firebase Realtime Database configuration
import { ref, set, push, serverTimestamp } from "firebase/database";

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
      // Create a reference to the contacts collection
      const contactsRef = ref(database, "contacts");
      
      // Create a new contact entry with unique key
      const newContactRef = push(contactsRef);
      
      // Set data to the Realtime Database
      await set(newContactRef, {
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
<div className="relative min-h-screen">
  <Header />

  <a href="home" className="md:block hidden">
    <img
      src={vectorIcon}
      alt="Decoration"
      className="fixed top-6 right-6 w-10 h-10 cursor-pointer"
    />
  </a>

  <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row w-full">
    {/* Contact Info Section */}
    <div className="flex flex-row sm:flex-row md:flex-col items-center bg-[#dee13e] w-full sm:w-1/2 md:w-[30%] lg:w-[15%] p-6 md:rounded-t-2xl sm:space-x-4 md:space-x-0 md:ml-12">
      <div className="relative overflow-visible bg-blue-500 ">
        <p className="absolute text-[100px] ml-[-16px] md:text-9xl lg:text-8xl font-[400] font-[Heathergreen] leading-tight tracking-normal text-black whitespace-nowrap">
          LETS CONNECT.
        </p>

        <p className="text-black text-3xl font-bold mt-30 md:mt-24 lg:mt-24 w-full">
          +971 56 725 7157
        </p>

        <p className="text-black text-2xl font-bold mt-2 w-full">
          fooliz@gmail.com
        </p>

        <p className="text-black text-2xl md:text-2xl break-words font-semi-bold mt-2 leading-tight w-full">
          Dubai, Business Bay,<br />SBK-506, UAE
        </p>
      </div>

      <div className="flex justify-center bg-green-400 items-center w-full ml-[45px] mt-[20px] md:w-full pb-6">
        <img
          className="w-60 h-[200px] md:w-64 lg:w-80 md:mt-16 object-contain"
          src="https://s3-alpha-sig.figma.com/img/5092/9fd8/cf65f91df9f176a93f556878108115f9?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aYgv4YCQbmk85AWiVQD5GawAy7x3ZDdCfAex701M9r2BKufrsBiCyEgBeYq7lPNIGKHh7i-PiDFbVSMExtdGvF~N-U-y6Rpmj4tBf8IJp1q8qVbCTqkHOhxXypEVoPuvWbBQ21rZDQHiOhqpN3E6UMabqy-WlujTVOGKGE8eN~BNGfa~xZSNn0ogTjQjey20t7dPC90kRMUVFOKNXA6mtogF42YaxjX4~tICLYpbPPrA8ANEEpapDD7ZqQGPIBbSZZECW2OJLCug4RnvKgH-xs5nWIOHQaWXpGK3HbWEfs5m67bNGzTyYqXo8FED7JVWcomPlUw2K91F4jITmUVbqQ__"
          alt="Animation"
        />
      </div>
    </div>

    {/* Form Section */}
    <div className="w-full sm:w-1/2 md:w-[60%] lg:w-[65%] p-4 mt-20 md:p-8 md:ml-16">
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

        <div className="flex flex-col col-span-2">
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
            className="border p-3 md:p-6 rounded-[20px] w-full md:w-full h-30 md:h-40 text-base md:text-lg"
            rows="3"
            required
          ></textarea>
        </div>

        <fieldset className="col-span-1 md:col-span-1 ml-4 md:ml-8">
          <legend className="text-base md:text-lg font-semibold mb-2 md:mb-4 text-gray-700">
            Budget*
          </legend>
          <div className="grid grid-cols-1 gap-2 text-gray-700 md:text-xl font-semibold">
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
          className={`bg-[#474cba] text-white py-2 md:py-5 px-6 md:px-10 rounded-full w-1/3 md:w-auto hover:bg-blue-700 col-span-2 mt-4 md:mt-6 text-base md:text-lg ${
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
