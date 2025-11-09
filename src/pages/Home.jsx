import React from 'react';
import backgroundVideo from '../assets/workout-vid.mp4';

const Home = () => {
  return (
    // Increased height for better mobile experience
    <div className="relative h-[90vh] sm:h-[95vh] w-full overflow-hidden">

      {/* Video element remains unchanged */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Adjusted overlay opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main content container with improved responsive padding and positioning */}
      <div className="relative top-1/2 -translate-y-1/2 px-4 sm:px-6 lg:px-8 max-w-3xl mx-aut z-10 md:mt-10">
        
        {/* Heading with responsive font sizes and improved spacing */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-4 sm:mb-6 lg:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200">
          Unleash Your{' '} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400">
            Alpha
          </span>
          <br className="hidden sm:block" /> {/* Line break on mobile only */}
          <span className="block sm:inline">Redefine Your Limit.</span>
        </h1>

        {/* Paragraph with responsive text and spacing */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium mb-6 sm:mb-8 lg:mb-10 mx-auto px-4">
          Alpha-Fit provides world-class coaching, custom programming, and the roadmap you need to build the strongest version of yourself.
        </p>

        {/* Button with responsive sizing and improved hover states */}
        <a 
          href="#signup" 
          className="btn btn-xl text-sm sm:text-base md:text-lg rounded-full bg-gradient-to-r from-red-600 to-yellow-500 transition-all duration-300 hover:from-red-700 hover:to-yellow-600 
            hover:scale-105 transform hover:shadow-lg border-0"
        >
          START YOUR TRANSFORMATION
        </a>
      </div>
    </div>
  );
};

export default Home;