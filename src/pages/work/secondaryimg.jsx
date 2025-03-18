import React, { useState } from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Link } from 'react-router-dom';
export default function Imgtogether() {
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="w-full h-screen overflow-auto relative">
      {/* Show loader while image is loading */}
      {!imageLoaded && (
        <div className="w-full h-screen flex items-center justify-center bg-white">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Image Preloading (Does not render UI yet) */}
      <img
        src="https://firebasestorage.googleapis.com/v0/b/foolee-inc.appspot.com/o/TalkTogather%20-%202.svg?alt=media&token=9ddb6d13-fdfe-4123-9f7f-23b2cb168164"
        alt="Talk Image"
        className="hidden"
        onLoad={() => {
          setImageLoaded(true);
          setTimeout(() => setLoading(false), 10); // Minimal delay for a seamless transition
        }}
      />

      {/* Once the image is loaded, instantly show everything */}
      {!loading && (
        <>
          <Header />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/foolee-inc.appspot.com/o/TalkTogather%20-%202.svg?alt=media&token=9ddb6d13-fdfe-4123-9f7f-23b2cb168164"
            alt="Talk Image"
            className="w-full h-auto object-cover"
          />
          <div className="mb-[-100px]">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
