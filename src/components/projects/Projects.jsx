import "./projects.css";
import { projects } from "./projects";
import ProjectsCard from "./ProjectsCard";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import Button from "../Button";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      id="projects"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
      data-aos-delay="100"
      className=""
    >
      <div className="max-w-[1215px] px-5 mx-auto flex flex-col gap-5 lg:flex-row items-start lg:items-center justify-between ">
        <div className="">
          <div>
            <h6 className=" text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 inline-block uppercase tracking-[4px]">
              Projects
            </h6>
          </div>
          <div className=" mt-[20px]">
            <h2 className=" text-[36px] sm:text-[40px] md:text-[50px] font-bold dark:text-[#fff] text-[#000]">
              I bring results
              <br />
              My clients are proof
            </h2>
          </div>
        </div>
        <Button text={"View all projects"} />
      </div>
      <div className="grid grid-cols-12 mx-auto  gap-5 max-w-[1215px] px-5 pt-[65px]">
        {projects.map((project) => (
          <ProjectsCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
