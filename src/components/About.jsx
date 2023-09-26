import React from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import EducationExperience from "./Education&Experience";
import Skills from "./Skills";

import one from "../assets/about/one.jpg"
import two from "../assets/about/two.jpg"
import img1 from "../assets/about/img1.jpg"
import img2 from "../assets/about/img2.jpg"

const About = () => {
  Aos.init();
 
  return (
    <div  id="about" className="max-w-[1215px] px-5 mx-auto">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="300" className="flex flex-wrap justify-between mb-[90px]">
        <div className="w-full mb-5 md:m-0 md:w-[45%]">
          <h3 className="uppercase text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 text-base font-[600] tracking-wider my-2">Human Resources Manager</h3>
          <h1 className="text-[54px] dark:text-white text-black font-[700]">That's me!</h1>
        </div>
        <div className="w-full md:w-[55%]">
          <p className="text-base_sm md:text-base dark:text-gray-300 text-gray-500 font-[500] leading-9">
          An experienced HR manager dedicated to your organization's success. With expertise in talent acquisition, employee development, and HR policy, I can help drive growth and engagement. 
          </p>
        </div>
      </div>

      {/* gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-[90px]">
        <div className="">
          <img className="h-[300px] md:h-[500px] w-full object-cover object-right-bottom" src={one} />
        </div>
        <div className="col-span-1 lg:col-span-2 ">
          <img className="h-[300px] md:h-[500px] w-full object-cover" src={two} />
        </div>
        <div className=" flex justify-between lg:flex lg:flex-col">
          <img  className="h-auto md:h-[250px] w-[48%] md:w-full object-cover" src={img1} />
          <img  className="h-auto md:h-[250px] w-[48%] md:w-full object-cover" src={img2} />
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
