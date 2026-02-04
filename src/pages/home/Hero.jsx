import React from "react";
import bannerImg from "../../assets/banner.png";
import { CiSearch } from "react-icons/ci";
import { BsSun, BsMoon } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";


const Hero = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <section
      className="h-screen relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="md:pt-44 pt-24 px-2 text-center space-y-6 md:w-1/2 mx-auto">
        <h1 className="text-4xl lg:text-[64px] font-medium lg:leading-tight leading-snug">
          Make your interior more minimalistic & modern
        </h1>
        <p className="text-2xl md:w-1/2 mx-auto">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>

        {/* search box */}
        <div className="relative inline-block z-30">
          <input
            type="text"
            placeholder="Search furniture"
            className="w-full md:w-80 px-6 py-3 bg-white/25 rounded-full border border-gray-300 focus:outline-none placeholder:text-white"
          />
          <div className="absolute top-1/2 right-3 -translate-y-1/2 text-2xl text-white bg-primary p-2 rounded-full cursor-pointer">
            <CiSearch />
          </div>
        </div>
      </div>

      {/* bottom blur effect */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm"></div>

      {/* tooltip design */}
      <div className="absolute bottom-40 left-24 group">
        <button className="relative p-4 bg-white/25 rounded-full border border-white cursor-pointer">
          <div className="hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 p-2 rounded-lg bg-white/25 shadow-md group-hover:flex">
            <div className="size-6 bg-red-700 border border-white rounded-full"></div>
            <div className="size-6 bg-green-700 border border-white rounded-full"></div>
            <div className="size-6 bg-blue-700 border border-white rounded-full"></div>

            {/* tooltip arrow */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35"></div>
          </div>
        </button>
      </div>

      {/* dark and light mode */}
      <div className="absolute bottom-16 right-16 z-40">
        <button
          onClick={toggleTheme}
          className="focus:outline-none font-bold text-lg bg-black text-white p-5 rounded-full "
        >
          {isDarkMode ? <BsSun className="text-yellow-300" /> : <BsMoon />}
        </button>
      </div>
    </section>
  );
};

export default Hero;
