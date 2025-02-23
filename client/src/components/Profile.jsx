import React from "react";
import "./profile.css";
import { Button } from "./ui/button";
import { CiTwitter } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
const Profile = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center grid grid-cols-2">
        <div className="flex lg:col-span-1 md:col-span-2 flex-col w-[5ovw] h-[60vh] justify-center items-center ">
          <div className=" flex  flex-col gap-2">
            <h3 className="text-5xl name">I am yaswanth</h3>
            <h1 className="text-7xl position">Web Developer.</h1>
            <p className="text-2xl info">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>
          </div>
          <div className="w-[100%] h-[20vh] flex justify-between flex-wrap items-center">
            <div className="flex w-[50%] min-w-[150px]">
              <Button className="w-[80%] h-[40px] bg-transparent download">
                Download CV
              </Button>
            </div>
            <div className="flex justify-around  w-[50%]">
              <div className="icons rounded-3xl">
                <CiTwitter />
              </div>
              <div className="icons rounded-3xl">
                <TiSocialFacebook />
              </div>
              <div className="icons rounded-3xl">
                <FaLinkedinIn></FaLinkedinIn>
              </div>
              <div className="icons rounded-3xl">
                <FiGithub></FiGithub>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex lg:col-span-1 md:col-span-2 justify-center items-center w-[50vw] h-[80vh]">
          <div className="rounded-3xl flex items-center justify-center">
            <img src="/two2.png" className="rounded-3xl" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
