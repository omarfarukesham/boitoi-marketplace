import React from 'react';
import { Link } from 'react-router-dom';

const CampaignBanner: React.FC = () => {
  return (
    <section className="relative mt-16">
      <div className="w-full min-h-[450px] md:h-[350px] bg-[#101940] relative overflow-hidden py-8 md:py-0">
        <div className="container mx-auto px-4 h-full relative">
          <div className="flex flex-col md:flex-row justify-around items-center h-full text-white gap-8 md:gap-0">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-6 relative text-center md:text-left max-w-xl">
              <button className="bg-[#FF6B6B] text-white px-4 md:px-6 py-2 rounded-full font-medium hover:bg-[#FF5252] transition-colors text-sm md:text-base">
                Limited Time Offer
              </button>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Annual Book Fair
                <br />
                <span className="text-[#FFD700]">2025</span>
              </h1>
              <p className="text-base md:text-lg text-gray-300">
                February 1st - February 28th
              </p>
              <p className="text-sm md:text-base text-gray-400 max-w-md">
                Join us for the biggest book event of the year. Discover amazing deals on thousands of titles across all genres.
              </p>
            </div>
            
            {/* Right Content */}
            <div className="space-y-4 md:space-y-6 relative text-center md:text-right max-w-xl">
              <p className="text-lg md:text-xl text-[#FFD700] font-semibold">
                Exclusive Deal
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Save Up To{" "}
                <span className="text-[#FF6B6B] text-4xl md:text-5xl">20% OFF</span>
                <br />
                on Bestsellers
              </h2>
              <Link to="/collection">
                <button className="bg-white cursor-pointer text-[#101940] px-6 mt-4 md:px-8 py-2 md:py-3 rounded-lg font-bold 
                  hover:bg-[#FFD700] transition-all transform hover:scale-105 
                  hover:shadow-lg active:scale-95 z-0">
                  Explore Collection
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -left-10 top-10 w-20 md:w-40 h-20 md:h-40 bg-[#FF6B6B] opacity-10 rounded-full 
          animate-pulse"></div>
        <div className="absolute right-10 md:right-20 bottom-10 w-40 md:w-60 h-40 md:h-60 bg-[#FFD700] opacity-10 
          rounded-full animate-pulse"></div>
        
        {/* Additional Decorative Elements */}
        <div className="absolute left-1/4 bottom-10 w-16 h-16 bg-white opacity-5 rounded-full"></div>
        <div className="absolute right-1/3 top-20 w-24 h-24 bg-white opacity-5 rounded-full"></div>
      </div>

      {/* Optional: Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default CampaignBanner;