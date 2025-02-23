import React from "react";
import { GoArrowUpRight } from "react-icons/go";
const Services = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center text-5xl color font-bold service-title">
        <h1>My Quality Services</h1>
      </div>

      <div className=" grid grid-cols-5 service items-center px-4 h-[100px]">
        <div className="col-span-2 flex color1 font-bold text-4xl gap-3">
          <h2 className="text-3xl flex items-center">01</h2>
          <h1>Web development</h1>
        </div>
        <div className="col-span-3 flex px-5 items-center">
          <div>
            <p className="text-xl text-wrap">
              Ensure your website looks great on any device,with layouts that
              adapt to different screen sizes seamlessly.
            </p>
          </div>
          <div>
            <GoArrowUpRight className="text-4xl" />
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-5 service items-center px-4 h-[100px]">
        <div className="col-span-2 flex color1 font-bold text-4xl gap-3">
          <h2 className="text-3xl flex items-center">02</h2>
          <h1>UI/UX Design</h1>
        </div>
        <div className="col-span-3 flex px-5 items-center">
          <div>
            <p className="text-xl text-wrap">
              Set up user-friendly CMS solutions like WordPress or custom-built
              options so clients can manage content easily.
            </p>
          </div>
          <div>
            <GoArrowUpRight className="text-4xl" />
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-5 service items-center px-4 h-[100px]">
        <div className="col-span-2 flex color1 font-bold text-4xl gap-3">
          <h2 className="text-3xl flex items-center">03</h2>
          <h1>Content Writing</h1>
        </div>
        <div className="col-span-3 flex px-5 items-center">
          <div>
            <p className="text-xl text-wrap">
              Build and integrate APIs to connect websites with third-party
              applications, enhancing functionality and performance.
            </p>
          </div>
          <div>
            <GoArrowUpRight className="text-4xl" />
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-5 service items-center px-4 h-[100px]">
        <div className="col-span-2 flex color1 font-bold text-4xl gap-3">
          <h2 className="text-3xl flex items-center">04</h2>
          <h1>Digital Marketing</h1>
        </div>
        <div className="col-span-3 flex px-5 items-center">
          <div>
            <p className="text-xl text-wrap">
              Refresh outdated websites with modern, appealing designs that
              align with current brand goals and user expectations.
            </p>
          </div>
          <div>
            <GoArrowUpRight className="text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
