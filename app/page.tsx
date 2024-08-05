"use client"
import Link from "next/link";
import React from "react";
import SarufiChatbox from "react-sarufi-chatbox";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      {/* Appointment Schedule Section */}
      <div className="bg-blue-600 text-white p-4 h-[200px] rounded-lg mb-4">
        <h2 className="text-[12px] font-medium">Appointment Schedule</h2>
        <p className="text-[24px] font-bold">
          Your next appointment will be on 12th August, 2024 09:00 am
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 gap-4">
        <Link
          className="bg-green-500 text-white p-12 rounded-lg flex items-center justify-center"
          href={"/profile"}
        >
          <span className="text-lg font-bold">Clinic Card</span>
        </Link>
        <div className="bg-red-500 text-white p-12 rounded-lg flex items-center justify-center">
          <span className="text-lg font-bold">NurseBot</span>
          {/* <SarufiChatbox botId={4410} /> */}
          <script
            async
            data-id="9525793561"
            id="chatling-embed-script"
            data-display="fullscreen"
            type="text/javascript"
            src="https://chatling.ai/js/embed.js"
          ></script>
        </div>
        <Link
          className="bg-blue-500 text-white p-12 rounded-lg flex items-center justify-center"
          href={"/appointment"}
        >
          <span className="text-lg font-bold">Appointment</span>
        </Link>
        <div className="bg-orange-500 text-white p-12 rounded-lg flex items-center justify-center">
          <span className="text-lg font-bold">Chat</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
