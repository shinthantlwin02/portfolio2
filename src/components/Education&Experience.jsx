import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { GoDotFill } from "react-icons/go";
import {PiArrowUpRightBold} from "react-icons/pi"

const EducationExperience = () => {
    Aos.init();
    const education = [
        {
          id:1,
          name: "MMSIT",
          course: "Frontend Web Development",
          startDate: "2022",
          endDate: "2023",
        },
        {
            id:2,
          name: "Binary Digital Toolbox",
          course: "UI/UX Design",
          startDate: "2021",
          endDate: "2022",
        },
        {
            id:3,
          name: "Compass",
          course: "React JS",
          startDate: "2023",
          endDate: "2023",
        },
      ];
    
      const workExperience = [
        {
            id:1,
          img: "https://assets.website-files.com/5fef5619b640934b33c2385e/6087cab3a74dfa369ea2e92a_Group%2084.svg",
          name: "MMSIT Workshop",
          position: "Frontend developer",
          startDate: "June2023",
          endDate: "Current",
        },
        {
            id:2,
          img: "https://assets.website-files.com/5fef5619b640934b33c2385e/6087cab3f70370b7efe8c560_Group%2085.svg",
          name: "Hikari fashion",
          position: "Assistant fashion designer",
          startDate: "April2020",
          endDate: "May2021",
        },
        {
            id:3,
          img: "https://assets.website-files.com/5fef5619b640934b33c2385e/6087cab33450e64d2fa55138_Group%2086.svg",
          name: "SOM education",
          position: "UI/UX instructor",
          startDate: "July2023",
          endDate: "October2023",
        },
      ];
  return (
    <div>
        
      <div className="flex flex-wrap w-full justify-between">
        {/* education */}
        <div className=" w-full md:w-[45%] mb-[90px] md:m-0">
          <div>
            <h3  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" className="text-[36px] font-[700] mb-8">📚 Education</h3>
          </div>
          <div>
            {education?.map((el,index) => {
              return (
                <div key={el?.id} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay={150*index} className="group">
                   <div className="flex items-start justify-between py-[40px] h-[150px] border-b-gray-200 border-b-2">
                  <div className="flex flex-wrap gap-3 w-full items-end justify-between me-5">
                    <div>
                      <h3 className="text-base font-[500] mb-1">{el?.name}</h3>
                      <p className="text-gray-500 font-[500]">{el?.course}</p>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 font-[500]">
                      <GoDotFill />
                      <span>{el?.startDate}</span>-<span>{el.endDate}</span>
                    </div>
                  </div>
                  <div className=" group-hover:translate-x-2 group-hover:-translate-y-2 transition-all delay-75 ease-in-out duration-300">
                    <PiArrowUpRightBold />
                  </div>
                </div>
                <hr className="border-black w-0 group-hover:w-full transition-all duration-1000"/>
                </div>
               
              );
            })}
          </div>
        </div>

        {/* work experiences */}
        <div  className="w-full md:w-[45%]">
          <div>
            <h3  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" className="text-[36px] font-[700] mb-8">💼 Work Experience</h3>
          </div>
          {workExperience.map((el,index) => {
            return (
              <div key={el?.id} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay={150*index} className="group">
                <div className=" flex items-start justify-between py-[40px] h-[150px]  border-b-gray-200 border-b-2">
                  <div className="flex flex-wrap gap-3 w-full items-end justify-between me-5">
                    <div className="flex">
                      <img className="w-[50px] me-5" src={el?.img} />
                      <div>
                         <h3 className="text-base font-[500] mb-1">{el?.name}</h3>
                      <p className="text-gray-500 font-[500]">{el?.position}</p>
                      </div>
                     
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 font-[500]">
                      <GoDotFill />
                      <span>{el?.startDate}</span>-<span>{el.endDate}</span>
                    </div>
                  </div>
                  <div className=" group-hover:translate-x-2 group-hover:-translate-y-2 transition-all delay-75 ease-in-out duration-300">
                    <PiArrowUpRightBold/>
                  </div>
                </div>
                <hr className="border-black w-0 group-hover:w-full transition-all duration-1000"/>
              </div>
              
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default EducationExperience