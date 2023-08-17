import React, { useRef } from "react";
import OurTeamCard from "./OurTeamCard";
import mkz from "../assets/TeamMember/minkhantzaw.jpg";
import wla from "../assets/TeamMember/wailinnaung.jpg";
import mnnn from "../assets/TeamMember/myonyinyinaing.jpg";
import stl from "../assets/TeamMember/shinthantlwin.jpg";
import {MdArrowForwardIos, MdArrowBackIosNew} from 'react-icons/md'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const OurTeam = () => {
  const sliderRef = useRef();
  const teamMembers = [
    {
      id: 1,
      name: "Wai Lin Aung",
      position: "CEO & Founder",
      image: wla,
    },
    {
      id: 2,
      name: "Min Khant Zaw",
      position: "General Manager",
      image: mkz,
    },
    {
      id: 3,
      name: "Myo Nyi Nyi Naing",
      position: "Chief Financial Officer",
      image: mnnn,
    },
    {
      id: 4,
      name: "Shin Thant Lwin",
      position: "Building Manager",
      image: stl,
    },
  ];

  console.log(teamMembers);

  return (
    <div>
      <div className=" lg:max-w-[1215px] lg:mx-auto px-5">
        <div className=" max-lg:space-y-20 lg:grid lg:grid-cols-3 gap-10">
          <div>
            <h1 className=" text-title_sm md:text-title font-[700] text-black dark:text-white mb-10">
              Our Team
            </h1>
            <p className="text-base_sm md:text-base text-gray-500 dark:text-gray-300 font-[500]">
             
Meet our outstanding team! Comprising dedicated professionals with diverse skills and a unified mission, we collaborate seamlessly to achieve remarkable results. Each member brings a unique perspective, contributing to our collective goal. Join us to be a part of our shared vision and make a meaningful impact together!
            </p>
          </div>
          <div className=" lg:col-span-2 max-sm:w-[80%] max-sm:mx-auto">
            <Swiper
              onSwiper={(it) => (sliderRef.current = it)}
              slidesPerView={1}
              loop={true}
              speed={1000}
              modules={[Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                
              }}
              className=" mySwiper pb-5"
            >
              {teamMembers.map((member, i) => (
                <SwiperSlide>
                  <OurTeamCard key={member.id} member={member} index={i} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-5 flex items-center justify-end">
              <div
                onClick={() => sliderRef.current?.slidePrev()}
                className=" z-10 cursor-pointer bg-black text-white dark:text-black dark:bg-white w-12 h-14 flex items-center justify-center"
              >
                <MdArrowBackIosNew />
              </div>
              <div
                onClick={() => sliderRef.current?.slideNext()}
                className=" z-10 cursor-pointer bg-black text-white dark:text-black dark:bg-white w-12 h-14 flex items-center justify-center"
              >
                <MdArrowForwardIos />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
