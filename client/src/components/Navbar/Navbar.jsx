import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
const Navbar = () => {
  return (
    <div className="flex justify-between h-[100px] items-center container mx-auto">
      <div className="flex w-[25vw] justify-between">
        {/* <div className="logo">
          <Link to="/">PORT</Link>
        </div> */}
        <div>
          <Link to="/" className="text-xl font-bold">
            mallavarapuyaswanth5@gmail.com
          </Link>
        </div>
      </div>
      <div className="flex w-[70vw] justify-end items-center gap-10 text-xl">
        <Link to="">Services</Link>
        <Link to="">Works</Link>
        <Link to="">Resumes</Link>
        <Link to="">Skills</Link>
        <Link to="">Contact</Link>
        <Link to="">
          <Button>Hire Me</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
