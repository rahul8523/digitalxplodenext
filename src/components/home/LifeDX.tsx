"use client";
import React from "react";

const LifeDX = () => {
  return (
    <section className="w-full py-10 bg-white">
      
      <h2 className="text-center text-4xl md:text-5xl text-black font-bold mb-10">
        Life @ DX
      </h2>

      <div className="relative max-w-7xl h-auto m-auto overflow-hidden">

        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/video/dx-video.mp4" type="video/mp4" />
        </video>

      </div>
    </section>
  );
};

export default LifeDX;