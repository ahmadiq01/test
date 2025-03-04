import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import vectorIcon from "../../assets/Group 55.svg";

const ContactPage = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />

      {/* Floating SVG Icon */}
      <a href="home">
        <img 
          src={vectorIcon} 
          alt="Decoration" 
          className="fixed top-6 right-6 w-10 h-10 cursor-pointer" 
        />
      </a>

      {/* Main Content Wrapper - Changed to flex-col on mobile, flex-row on larger screens */}
      <div className="flex flex-col md:flex-row w-full container mx-auto px-4 pb-0 mr-[340px] gap-80">
        
        {/* First Section: Contact Info - Moved to left, adjusted height to extend to footer */}
        <div className="flex flex-col justify-start bg-[#dee13e] w-full md:w-1/3 pt-12 px-8 space-y-6 rounded-t-2xl ">
        {/* Title */}
        <div className="text-center mt-[-49px] ml-[-32px] mr-[-32px]">
            <h2 className="text-[100px] font-semi-bold font-[Heathergreen] ">
            LET'S CONNECT.
            </h2>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col items-start mt-[-40px] ml-[40px] text-align-center space-y-2 max-w-xs px-4">
          <p className="text-2xl font-bold break-words">+971 56 725 7157</p>
          <p className="text-lg break-words">fooliz@gmail.com</p>
          <p className="text-sm break-words">Dubai, Business Bay, SBK-506, UAE</p>
        </div>



        {/* Animation */}
        <div
            className="flex justify-center pb-6"
            style={{
                width: "320px",
                height: "239px",
                // position: "absolute",
                top: "523px",
                left: "91.15px",
            }}
            >
            <img
                className="w-full h-full object-contain"
                src="https://s3-alpha-sig.figma.com/img/5092/9fd8/cf65f91df9f176a93f556878108115f9?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aYgv4YCQbmk85AWiVQD5GawAy7x3ZDdCfAex701M9r2BKufrsBiCyEgBeYq7lPNIGKHh7i-PiDFbVSMExtdGvF~N-U-y6Rpmj4tBf8IJp1q8qVbCTqkHOhxXypEVoPuvWbBQ21rZDQHiOhqpN3E6UMabqy-WlujTVOGKGE8eN~BNGfa~xZSNn0ogTjQjey20t7dPC90kRMUVFOKNXA6mtogF42YaxjX4~tICLYpbPPrA8ANEEpapDD7ZqQGPIBbSZZECW2OJLCug4RnvKgH-xs5nWIOHQaWXpGK3HbWEfs5m67bNGzTyYqXo8FED7JVWcomPlUw2K91F4jITmUVbqQ__"
                alt="Animation"
            />
        </div>
        </div>

        {/* Second Section: Contact Form - Adjusted to take remaining space */}
        <div className="w-full md:w-2/3 bg-white p-6 md:p-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            {/* First Name */}
            <div className="flex flex-col col-span-1">
              <label className="text-gray-700 font-semibold mb-1">First Name*</label>
              <input type="text" placeholder="First Name" className="border p-3 rounded-full w-full" required />
            </div>

            {/* Last Name */}
            <div className="flex flex-col col-span-1">
              <label className="text-gray-700 font-semibold mb-1">Last Name*</label>
              <input type="text" placeholder="Last Name" className="border p-3 rounded-full w-full" required />
            </div>

            {/* Email */}
            <div className="flex flex-col col-span-2">
              <label className="text-gray-700 font-semibold mb-1">Email*</label>
              <input type="email" placeholder="Email" className="border p-3 rounded-full w-full" required />
            </div>

            {/* Message */}
            <div className="flex flex-col col-span-1">
              <label className="text-gray-700 font-semibold mb-1">Message*</label>
              <textarea placeholder="Write your message here..." className="border p-4 rounded-[20px] w-full" rows="4" required></textarea>
            </div>

            {/* Budget Options - Changed to horizontal layout for more compact display */}
            <fieldset className="col-span-1">
              <legend className="text-lg font-semibold mb-2 text-gray-700">Budget*</legend>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <label><input type="radio" name="budget" value="250-1000" className="mr-2" /> $250-$1000</label>
                <label><input type="radio" name="budget" value="1000-2000" className="mr-2" /> $1000-$2000</label>
                <label><input type="radio" name="budget" value="2000-5000" className="mr-2" /> $2000-$5000</label>
                <label><input type="radio" name="budget" value="5000-10000" className="mr-2" /> $5000-$10000</label>
              </div>
            </fieldset>

            <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-full w-full md:w-1/3 hover:bg-blue-700 col-span-2 mt-2">Submit</button>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage;