import { useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";

const ProjectsCard = ({ image, subTitle, title, link }) => {
  return (
    <div className=" group col-span-12 md:col-span-6 xl:col-span-4">
      <a href={link} target="_blank">
        <div className=" border border-gray-200/30 shadow">
          <div className="relative">
            <div className=" h-[305px] overflow-hidden relative">
              <img
                className="group-hover:scale-125 transition-all h-full w-full object-cover duration-500 cursor-pointer"
                src={image}
                alt={title}
              />
              {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300"></div> */}
            </div>
          </div>
          <div className="p-[32px]">
            <div to={""}>
              <h6 className="  text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 inline-block text-[14px] font-bold tracking-[4px] uppercase">
                {subTitle}
              </h6>
              <div className=" mt-[15px] mb-[20px]">
                <h3 className=" cursor-pointer text-[24px] dark:text-[#fff] text-[#000000] font-bold transition duration-300 group-hover:text-[#00000099] dark:group-hover:text-[#d3d3d3]">
                  {title}
                </h3>
              </div>
            </div>
            <a
              href={link}
              target="_blank"
              className="flex cursor-pointer hover-underline-animation_blog gap-3 text-[18px]  items-center font-normal transition duration-300 dark:text-[#fff] group-hover:text-[#00000099] text-[#000] dark:group-hover:text-[#d3d3d3]"
            >
              View Project
              <IoMdArrowForward />
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectsCard;
