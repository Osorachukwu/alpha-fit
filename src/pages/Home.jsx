import React from 'react';
// Import your video file (assuming it's in a path like src/assets/video.mp4)
import backgroundVideo from '../assets/workout-vid.mp4'; 

const Home = () => {
  return (
    // The main container with Tailwind classes for full screen and relative positioning
    <div className="relative h-screen w-full overflow-hidden border-4 border-red-300">
      
      {/* --- 1. The Video Element --- */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        {/* Optional: Add a poster attribute for a static image fallback while loading */}
        {/* <source src="fallback-image.jpg" type="image/jpeg" /> */}
        Your browser does not support the video tag.
      </video>

      {/* --- 2. The Dark Overlay (Optional but Recommended) --- */}
      {/* This darkens the video to make text more readable */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* --- 3. The Content Overlay --- */}
      <div className="relative z-10 flex h-full items-center justify-center p-4">
        <div className="text-center text-white border-4">
          <h1 className="text-5xl font-bold md:text-7xl">
            Ignite Your Digital Future
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Building amazing web experiences with speed and precision.
          </p>
          <button className="mt-8 rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold transition hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;