import React, { useState } from "react";

const Works = () => {
  // State for each project description
  const [expandedState, setExpandedState] = useState({
    expenseTracker: false,
    eCommerce: false,
    weatherApp: false,
  });

  // Descriptions for each project
  const descriptions = {
    expenseTracker:
      "The Real-Time Expense Tracker is a full-stack web application built using MongoDB, Express.js, React, and Node.js (MERN Stack). It helps users efficiently manage their expenses with features like adding, updating, deleting, and Showing Reports.",
    eCommerce:
      "YShop E-Commerce is a fully responsive online shopping platform built using HTML, CSS, and JavaScript. It provides a seamless shopping experience with features like product listings, a shopping cart, and an intuitive checkout process. Perfect for showcasing products and enabling users to make purchases effortlessly.",
    weatherApp:
      "Real-Time Website is an interactive web application built with HTML, CSS, and JavaScript, leveraging real-time data through API integrations. It provides users with up-to-date information, whether it's live weather updates, news feeds, or other dynamic content, offering a smooth and engaging experience in real-time.",
  };

  // Toggle expand/collapse for each project
  const toggleExpand = (project) => {
    setExpandedState((prevState) => ({
      ...prevState,
      [project]: !prevState[project],
    }));
  };

  return (
    <div className="container mx-auto mb-10">
      <div className="text-center text-5xl color font-bold m-10">
        My Recent Works
      </div>
      <div className="works flex flex-wrap gap-3 justify-around w-[100%]">
        {/* Project 1: Expense Tracker */}
        <div className="w-80 h-auto bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col p-3">
          <div
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url("expense.png")` }}
          ></div>
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-xl font-bold">Expense Tracker</h3>
            <p className="text-gray-600 text-sm mt-2">
              {expandedState.expenseTracker
                ? descriptions.expenseTracker
                : `${descriptions.expenseTracker.slice(0, 100)}...`}
              <button
                onClick={() => toggleExpand("expenseTracker")}
                className="text-blue-600 font-semibold ml-1 hover:underline"
              >
                {expandedState.expenseTracker ? "Read Less" : "Read More"}
              </button>
            </p>
            <a
              href="https://github.com/YaswanthMallavarapu/ExpenseTracker"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition text-center"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 2: ECommerce */}
        <div className="w-80 h-auto bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col p-3">
          <div
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url("shop.png")` }}
          ></div>
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-xl font-bold">ECommerce</h3>
            <p className="text-gray-600 text-sm mt-2">
              {expandedState.eCommerce
                ? descriptions.eCommerce
                : `${descriptions.eCommerce.slice(0, 100)}...`}
              <button
                onClick={() => toggleExpand("eCommerce")}
                className="text-blue-600 font-semibold ml-1 hover:underline"
              >
                {expandedState.eCommerce ? "Read Less" : "Read More"}
              </button>
            </p>
            <a
              href="https://github.com/YaswanthMallavarapu/Weather-App"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition text-center"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 3: Weather Application */}
        <div className="w-80 h-auto bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col p-3">
          <div
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url("weather.png")` }}
          ></div>
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-xl font-bold">Weather Application</h3>
            <p className="text-gray-600 text-sm mt-2">
              {expandedState.weatherApp
                ? descriptions.weatherApp
                : `${descriptions.weatherApp.slice(0, 100)}...`}
              <button
                onClick={() => toggleExpand("weatherApp")}
                className="text-blue-600 font-semibold ml-1 hover:underline"
              >
                {expandedState.weatherApp ? "Read Less" : "Read More"}
              </button>
            </p>
            <a
              href="https://github.com/YaswanthMallavarapu/Ecommerce"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition text-center"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
