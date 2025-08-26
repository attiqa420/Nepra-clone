import React from 'react';
import PlanCard from './PlanCard';

function Hero() {
  return (
    <div className="bg-blue-950 w-full overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-10 lg:px-10 py-4 pt-28">
        <div className="pb-6 max-w-2xl">
          <h1 className="text-white font-semibold text-4xl">
            NEPRA Compliance as a Service
          </h1>
          <h2 className="text-white py-3 font-bold">
            Empowering the Power Sector to Comply with NEPRA Cyber Security Regulations.
          </h2>
          <h3 className="text-white py-3">
            We safeguard Pakistan's power generation, transmission, and
            distribution sectors with expert <br />
            cybersecurity consulting and systems integration, ensuring compliance with NEPRA's regulations.
          </h3>
        </div>

        <div className="pb-6 w-full">
          <PlanCard />
        </div>
      </div>
    </div>
  );
}

export default Hero;
