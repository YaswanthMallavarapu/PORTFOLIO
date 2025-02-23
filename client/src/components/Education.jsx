import React from "react";
import { FaGraduationCap } from "react-icons/fa6";

const Resume = () => {
  return (
    <div className="color2 h-[80vh] flex items-center justify-center">
      <div className="container mx-auto">
        <div className="">
          <h1 className="text-center flex items-center justify-center color text-5xl font-bold">
            <FaGraduationCap /> Education
          </h1>
          <div className="grid grid-cols-2 flex flex-wrap justify-center gap-5 m-5 ">
            <div className="lg:col-span-1 sm:col-span-2 bg-white p-4 rounded-3xl shadow-lg font-bold pl-10 education">
              <h3 className="text-xl">2016-2020</h3>
              <h3 className="text-2xl">Secondary Education</h3>
              <p className="text-2xl">Z.P.H.S HighSchool</p>
            </div>
            <div className="lg:col-span-1 sm:col-span-2 bg-white p-4 rounded-3xl shadow-lg font-bold pl-10 education">
              <h3 className="text-xl">2020-2022</h3>
              <h3 className="text-2xl">Higher Secondary Education</h3>
              <p className="text-2xl">Sri Chaitanya</p>
            </div>
            <div className="lg:col-span-1 sm:col-span-2 bg-white p-4 rounded-3xl shadow-lg font-bold pl-10 education">
              <h3 className="text-xl">2022-Present</h3>
              <h3 className="text-2xl">Bachelor's Degree</h3>
              <p className="text-2xl">Sri Chaitanya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
