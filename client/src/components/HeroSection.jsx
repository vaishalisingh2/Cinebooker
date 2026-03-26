import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className='relative flex flex-col items-start justify-end px-4 md:px-8 lg:px-16
      bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen pb-20'>

     
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

    
      <div className="relative z-10 flex flex-col gap-3 max-w-xl">

        <img src={assets.marvelLogo} alt="Marvel Studios" className="h-8 w-auto object-contain" />

        <h1 className="text-5xl md:text-[70px] md:leading-[1.1] font-semibold text-white">
          Guardians <br /> of the Galaxy
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm">
          <span>Action | Adventure | Sci-Fi</span>

          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" /> 2014
          </div>

          <div className="flex items-center gap-1">
            <ClockIcon className="w-4 h-4" /> 2h 1m
          </div>
        </div>

        <p className="max-w-md text-gray-300 text-sm leading-relaxed">
          A ragtag group of cosmic misfits must unite to stop a fanatical warrior
          from devastating the universe with an orb of immense power.
        </p>


        <button
          onClick={() => navigate('/movies')}
          className="flex items-center gap-2 px-6 py-3 text-sm bg-primary
          hover:bg-primary-dull transition rounded-full font-medium cursor-pointer w-fit mt-1"
        >
          Explore Movies
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
};

export default HeroSection;