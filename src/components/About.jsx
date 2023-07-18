import React from "react";
import { GoDotFill } from "react-icons/go";
import {PiArrowUpRightBold} from "react-icons/pi"
import Aos from "aos";
import "aos/dist/aos.css"
import EducationExperience from "./Education&Experience";
import Skills from "./Skills";

import contact2 from "../assets/about/contact2.jpg"
import contact from "../assets/about/contact.jpg"
import hotale from "../assets/about/hotale.jpg"
import hotale2 from "../assets/about/hotale2.jpg"

const About = () => {
  Aos.init();
 
  return (
    <div  id="about" className="max-w-[1215px] px-5 mx-auto">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="300" className="flex flex-wrap justify-between mb-[90px]">
        <div className="w-full mb-5 md:m-0 md:w-[45%]">
          <h3 className="uppercase text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 text-base font-[600] tracking-wider my-2">frontend developer</h3>
          <h1 className="text-[54px] dark:text-white text-black font-[700]">That's me!</h1>
        </div>
        <div className="w-full md:w-[55%]">
          <p className="text-base_sm md:text-base dark:text-gray-300 text-gray-500 font-[500] leading-9">
          Experienced frontend web developer adept at crafting visually captivating user interfaces and delivering seamless online experiences with a deep understanding of modern web technologies.
          </p>
        </div>
      </div>

      {/* gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-[90px]">
        <div className="">
          <img className="h-[300px] md:h-[500px] w-full object-cover object-right-bottom" src={contact2} />
        </div>
        <div className="col-span-1 lg:col-span-2 ">
          <img className="h-[300px] md:h-[500px] w-full object-cover" src={contact} />
        </div>
        <div className=" flex justify-between lg:flex lg:flex-col">
          <img  className="h-auto md:h-[250px] w-[48%] md:w-full object-cover" src={hotale2} />
          <img  className="h-auto md:h-[250px] w-[48%] md:w-full object-cover" src={hotale} />
        </div>
      </div>
      <div className=" mb-[90px]">
        <Skills/>
      </div>
      <div>
      <EducationExperience />
      </div>
    </div>
  );
};

export default About;
