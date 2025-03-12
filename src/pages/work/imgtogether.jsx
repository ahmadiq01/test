import React from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Pic2 from "../../assets/talkimage.svg";

export default function Imgtogether() {
  return (
    <div className="w-full h-screen overflow-auto">
        <Header/>
      <img
        // src={Pic2}
        src="https://firebasestorage.googleapis.com/v0/b/foolee-inc.appspot.com/o/Torah-Share%20-%2003.svg?alt=media&token=abe8e01c-5baf-4043-945f-5f1d27140edd"
        alt="Talk Image"
        className="w-full h-auto object-cover"
      />
        <div className='mb-[-100px]'>
        <Footer/>
        </div>

    </div>
  );
}
