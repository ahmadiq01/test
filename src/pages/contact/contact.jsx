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

      {/* Main Content Wrapper */}
      <div className="flex flex-col bg-green-800 items-start w-full gap-10 container mx-auto px-4">
        
        {/* First Section: Contact Info */}
        <div className="flex flex-col items-center gap-6 p-8 font-[Heathergreen] text-6xl bg-[#dee13e] rounded-lg shadow-lg w-full max-w-md mx-auto">
          {/* Column 1: Title */}
          <div className="text-center">
            <h2 className="text-8xl font-bold">LET'S CONNECT.</h2>
            <p className="text-lg mt-2">Get in Touch</p>
          </div>

          {/* Column 2: Contact Details */}
          <div className="flex flex-col items-center text-center">
            <p className="text-2xl font-bold">+971 56 725 7157</p>
            <p className="text-lg">fooliz@gmail.com</p>
            <p className="text-sm">Dubai, Business Bay, SBK-506, UAE</p>
          </div>

          {/* Column 3: Animation */}
          <div className="flex justify-center">
            <img
              className="w-24 h-24"
              src="https://s3-alpha-sig.figma.com/img/5092/9fd8/cf65f91df9f176a93f556878108115f9?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aYgv4YCQbmk85AWiVQD5GawAy7x3ZDdCfAex701M9r2BKufrsBiCyEgBeYq7lPNIGKHh7i-PiDFbVSMExtdGvF~N-U-y6Rpmj4tBf8IJp1q8qVbCTqkHOhxXypEVoPuvWbBQ21rZDQHiOhqpN3E6UMabqy-WlujTVOGKGE8eN~BNGfa~xZSNn0ogTjQjey20t7dPC90kRMUVFOKNXA6mtogF42YaxjX4~tICLYpbPPrA8ANEEpapDD7ZqQGPIBbSZZECW2OJLCug4RnvKgH-xs5nWIOHQaWXpGK3HbWEfs5m67bNGzTyYqXo8FED7JVWcomPlUw2K91F4jITmUVbqQ__"
              alt="Animation"
            />
          </div>
        </div>

        {/* Second Section: Contact Form */}
        <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-white">Contact Us</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
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
            <textarea placeholder="Write your message here..." className="border p-6 rounded-[20px] w-full" rows="4" required></textarea>
            </div>

            {/* Budget Options */}
            <fieldset className="col-span-1">
            <legend className="text-lg font-semibold mb-2 text-gray-700">Budget*</legend>
            <div className="flex flex-col space-y-2 text-gray-700">
                <label><input type="radio" name="budget" value="250-1000" className="mr-2" /> $250-$1000</label>
                <label><input type="radio" name="budget" value="1000-2000" className="mr-2" /> $1000-$2000</label>
                <label><input type="radio" name="budget" value="2000-5000" className="mr-2" /> $2000-$5000</label>
                <label><input type="radio" name="budget" value="5000-10000" className="mr-2" /> $5000-$10000</label>
            </div>
            </fieldset>
            <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-full w-[30%] hover:bg-blue-700 col-span-1">Submit</button>
        </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
