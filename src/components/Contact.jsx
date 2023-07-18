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
        <div id="contact" className=" max-w-[1215px] px-5 mx-auto">
          {/* contact wrapper  */}
          <div className=" grid lg:grid-cols-5 gap-y-10 sm:gap-20">
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
                  <div class="">hi@thefolio.com</div>
                </div>
                <div className=" flex items-center gap-2">
                  <BsTelephoneFill />
                  <div class="">+889-776-899</div>
                </div>
              </div>
            </div>

            {/* right  */}
            <div className=" lg:col-span-3 dark:text-white">
              {/* form wrapper  */}
              <div
                className=" space-y-8"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                {/* name wrapper  */}
                <div className=" grid md:grid-cols-2 gap-10">
                  <div className=" flex flex-col gap-3">
                    <label htmlFor="first" className=" font-[700]">
                      First Name
                    </label>
                    <input
                      id="first"
                      type="text"
                      className=" py-4 px-5 bg-gray-100 outline-none dark:text-gray-500"
                      placeholder="First Name"
                    />
                  </div>
                  <div className=" flex flex-col gap-3">
                    <label htmlFor="last" className=" font-[700]">
                      Last Name
                    </label>
                    <input
                      id="last"
                      type="text"
                      className=" py-4 px-5 bg-gray-100 outline-none dark:text-gray-500"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                {/* email  */}
                <div className=" flex flex-col gap-3">
                  <label htmlFor="email" className=" font-[700]">
                    Your Email
                  </label>
                  <div className=" flex items-center gap-3 px-5 bg-gray-100">
                    <img
                      className=" w-5"
                      src="https://assets.website-files.com/5fef5619b640934b33c2385e/606421699f78709a207218d0_Vector-2.svg"
                    ></img>
                    <input
                      id="email"
                      type="email"
                      className=" py-4 bg-gray-100 outline-none dark:text-gray-500"
                      placeholder="Enter your e-mail"
                    />
                  </div>
                </div>
                {/* budget  */}
                <div class="flex flex-col gap-3">
                  <label htmlFor="Budget-2" class="font-[700]">
                    Your Budget
                  </label>
                  <div className=" relative text-gray-500">
                    <img
                      className=" absolute top-4 left-5 w-5"
                      src="https://assets.website-files.com/5fef5619b640934b33c2385e/60642169c28d21d6831de16d_Vector.svg"
                      alt=""
                    />
                    <select
                      id="Budget-2"
                      required=""
                      class=" py-4 pl-12 bg-gray-100 outline-none w-full"
                    >
                      <option value="First">1k-3k</option>
                      <option value="Second">3k-5k</option>
                      <option value="Third">5k-10k</option>
                      <option value="Fourth">More than 10k</option>
                    </select>
                  </div>
                </div>

                {/* Detail  */}
                <div className=" flex flex-col gap-3">
                  <label htmlFor="first" className=" font-[700]">
                    Tell me a bit more what you are looking for?
                  </label>
                  <textarea
                    id="first"
                    type="text"
                    rows="5"
                    className=" py-4 px-5 bg-gray-100 outline-none dark:text-gray-500"
                    placeholder="Text Here"
                  />
                </div>
                <div className=" ml-2 w-fit">
                  <Button text="Submit Now!" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
