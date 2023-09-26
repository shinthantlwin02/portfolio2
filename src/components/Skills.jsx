
import React from "react";
import TechnicalSkill from "./TechnicalSkill";
import ProfessionalSkill from "./ProfessionalSkill";

const Skills = () => {

  const LanguageSkills = [
    {id: 1,label: "html", number: 90, duration: 1},
    {id: 2,label: "css", number: 65, duration: 1},
    {id: 3,label: "Javascript", number: 70, duration: 1},
    {id: 4,label: "React", number: 80, duration: 1},
  ]

  const professionalSkills = [
    {id: 1,label: "Communication", number: 90, duration: 1},
    {id: 2,label: "Teamwork", number: 85, duration: 1},
    {id: 3,label: "Creativity", number: 65, duration: 1},
    {id: 4,label: "Problem Solving", number: 85, duration: 1},
  ]
  

  return (
    <div className=" grid md:grid-cols-2 gap-10">
      {/* technicalSkills  */}
      <div className=" lg:w-[80%] mx-auto">
          <h1 className="text-[36px] font-[700] mb-8">Language Skills</h1>
          <div>
              <div className="flex gap-5 py-5">
                <h1 className="font-bold">English</h1>
                <h1>Upper Intermediate</h1>
              </div>
              <div className="flex gap-5 py-5">
                <h1 className="font-bold">Japanese</h1>
                <span>N4 Level</span>
              </div>
          </div>
      </div>

        
        {/* professionalSkills  */}

        <div className="lg:w-[80%] mx-auto">
          <h1 className="text-[36px] font-[700] mb-8">Professional Skills</h1>
          <div className=" grid grid-cols-2">
          {professionalSkills.map(data => (
            <ProfessionalSkill key={data.id} data={data}/>
          ))}
          </div>
      </div>
    </div>
  );
};

export default Skills;
