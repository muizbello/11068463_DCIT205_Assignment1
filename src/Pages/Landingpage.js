import React from "react";
import Landing_header from "./landing-header";
import Landing_cards from "./landing-cards";
import Landing_footer from "./landing-footer";



function Landingpage() {
  return (
    <div className="px-6 pt-1 shadow-lg">
      <Landing_header/>
      <div className="flex mt-5">
        <img src="/Media_Files/landing-image.jpg" className="w-[620px] h-[390px] mt-4 rounded-lg shadow-lg" />
        <div className="ml-5">
          <p className="ml-3 -mt-[40px] font-bold text-[136px] text-amber-950" >Empower</p>
          <p className="ml-3 -mt-[23px] font-bold text-7xl text-zinc-800 ">Your Academics.</p>
          <p className="ml-3 mt-3 font-semibold text-xl">
            Take control of your academic journey with our intuitive interface, ensuring that you have access to accurate and up-to-date information on your grades, as well as the capability to make complaints about perceived errors in your grades. Our system aims to address the common challenge of missing or unrecorded grades in a student's profile thus, empowering you to stay informed and proactive in their education.
          </p>
        </div>
      </div>
      <div>
        <p className="text-6xl mt-7 -mb-2 text-center font-semibold">Our Features.</p>
      </div>
      <Landing_cards/>
      <Landing_footer/>
    </div>
  );
}

export default Landingpage;
