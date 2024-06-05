import React from "react";
import "./Contact.css";
import Button from "./Button";
import Aos from "aos";
import "aos/dist/aos.css";
import {IoMdMail} from 'react-icons/io'
import {BsTelephoneFill} from 'react-icons/bs'

const Contact = () => {
  Aos.init();
  return (
    <>
      <div>
        <div id="contact" className=" max-w-[1215px] flex justify-center mx-auto">
          {/* contact wrapper  */}
          <div className="px-5">
            {/* left  */}
            <div className="lg:col-span-2 text-base_sm md:text-base text-gray-500 dark:text-gray-300 font-[500] space-y-10">
              <h1 className=" text-title_sm md:text-title font-[700] text-black dark:text-white">
                Get in touch
              </h1>
              <p
                className=""
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Have a project in mind? Looking to partner or work together?
                Reach out through the form and I'll get back to you in the next
                48 hours.
              </p>
              <div
                className=" font-[700] space-y-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className=" flex items-center gap-2">
                  <IoMdMail className=" text-[25px]"/>
                  <div class="">vibee1500@gmail.com</div>
                </div>
                <div className=" flex items-center gap-2">
                  <BsTelephoneFill />
                  <div class="">09-765320562</div>
                </div>
              </div>
            </div>

            {/* right  */}
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
