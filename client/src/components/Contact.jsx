import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
const Contact = () => {
  return (
    <div className="color2 ">
      <div>
        <h1 className="text-center color text-5xl font-bold p-10">
          Contact Me
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-2 gap-5 p-10 ">
        <div className="lg:col-span-1 sm:col-span-2 flex justify-center items-center mb-4">
          <form action="" className="form shadow bg-white">
            <h1 className="text-center color text-4xl font-bold m-5">
              Let's Work Together
            </h1>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="col-span-1 input"
              />
              <input
                type="text "
                placeholder="Second Name"
                className="col-span-1 input"
              />
              <input
                type="email"
                className="col-span-1 input"
                placeholder="Email address "
              />
              <input
                type="tel"
                className="col-span-1 input"
                placeholder="Mobile Number "
              />
              <textarea
                name=""
                id=""
                placeholder="message"
                className="col-span-2 input min-h-[150px]"
              ></textarea>
            </div>
            <button className="send-message">Send message</button>
          </form>
        </div>
        <div className="lg:col-span-1 sm:col-span-2 ">
          <div className="flex flex-col gap-10 h-[100%] justify-center text-xl">
            <div className="flex gap-5 i">
              <div className="h-[50px] w-[50px] bgc rounded-3xl flex justify-center items-center text-white">
                <BiSolidPhoneCall />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-sm">Phone</h3>
                <h1 className=" font-semibold text-2xl">+91 6305820373</h1>
              </div>
            </div>
            <div className="flex gap-5 ">
              <div className="h-[50px] w-[50px] bgc rounded-3xl flex justify-center items-center text-white">
                <MdEmail />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-sm">Email</h3>
                <h1 className="font-semibold text-2xl">
                  {" "}
                  mallavarapuyaswanth5@gmail.com
                </h1>
              </div>
            </div>
            <div className="flex gap-5 ">
              <div className="h-[50px] w-[50px] bgc rounded-3xl flex justify-center items-center text-white">
                <IoLocationSharp />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-sm">Address</h3>
                <h1 className="w-[500px] font-semibold text-2xl">
                  1-41 , Annangi,Maddipadu(md) ,Prakasam(dt),Andhra Pradesh
                  ,523211 , INDIA
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
