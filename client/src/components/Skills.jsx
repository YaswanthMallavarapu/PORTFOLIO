import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
const Skills = () => {
  return (
    <div>
      <div className="skill-title">
        <h1 className="text-center color text-5xl m-6 font-bold">Skills</h1>
      </div>
      <div className="container mx-auto  flex flex-wrap justify-center gap-10 mb-10">
        <div className="skill-box flex justify-center items-center shadow-lg">
          <FaReact
            style={{ height: "100px", width: "100px" }}
            className="skill-logo"
          />
        </div>
        <div className="lg:col-span-1 skill-box flex justify-center items-center shadow-lg">
          <FaNodeJs
            style={{ height: "100px", width: "100px" }}
            className="skill-logo"
          />
        </div>
        <div className="lg:col-span-1 skill-box flex justify-center items-center shadow-lg">
          <SiExpress
            style={{ height: "100px", width: "100px" }}
            className="skill-logo"
          />
        </div>
        <div className="lg:col-span-1 skill-box flex justify-center items-center shadow-lg">
          <BiLogoMongodb
            style={{ height: "100px", width: "100px" }}
            className="skill-logo"
          />
        </div>
        <div className="lg:col-span-1 skill-box flex justify-center items-center shadow-lg">
          <FaHtml5
            style={{ height: "100px", width: "100px" }}
            className="skill-logo"
          />
        </div>
        <div className="lg:col-span-1 skill-box flex justify-center items-center shadow-lg">
          <IoLogoCss3
            style={{ height: "100px", width: "100px" }}
            className="skill-logo"
          />
        </div>
        <div className="lg:col-span-1 skill-box flex justify-center items-center shadow-lg">
          <FaJs
            style={{ height: "100px", width: "100px" }}
            className="skill-logo"
          />
        </div>
        <div className="lg:col-span-1 skill-box flex justify-center items-center shadow-lg">
          <FaJava
            style={{ height: "100px", width: "100px" }}
            className="skill-logo"
          />
        </div>
        <div className="lg:col-span-1 skill-box flex justify-center items-center shadow-lg">
          <SiMysql
            style={{ height: "100px", width: "100px" }}
            className="skill-logo"
          />
        </div>
        <div className="lg:col-span-1 skill-box flex justify-center items-center shadow-lg">
          <AiOutlinePython
            style={{ height: "100px", width: "100px" }}
            className="skill-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
