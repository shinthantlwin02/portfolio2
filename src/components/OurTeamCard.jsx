import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const OurTeamCard = ({ member }) => {
  return (
    <div className=" relative group">
      <div className="  overflow-hidden">
        <img
          className=" object-cover w-full h-[450px] hover:scale-110 transition duration-500"
          src={member.image}
          alt=""
        />
      </div>
      <div className=" opacity-0 group-hover:opacity-100  transition duration-300 text-white z-10 text-center w-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <h1 className="  font-[700] text-[26px] mb-3">{member.name}</h1>
        <p className=" text-[16px] font-[500] mb-5 tracking-wider">
          Junior Frontend Developer
        </p>
        <div className=" flex items-center justify-center gap-5">
          <div className="">
            <FaFacebookF className=" cursor-pointer hover:text-gray-300 text-lg transition duration-500" />
          </div>
          <div className="">
            <FaLinkedinIn className=" cursor-pointer hover:text-gray-300 text-lg transition duration-500" />
          </div>
          <div className="">
            <FaTwitter className=" cursor-pointer hover:text-gray-300 text-lg transition duration-500" />
          </div>
        </div>
      </div>

      <div className=" opacity-0 group-hover:opacity-100  transition duration-300  absolute top-0 left-0 w-full h-full bg-[#0c0b0b8b]"></div>
    </div>
  );
};

export default OurTeamCard;
