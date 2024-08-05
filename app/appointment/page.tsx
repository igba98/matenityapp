/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Appointment Card */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <button className="text-gray-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button className="text-gray-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m-7-7l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full"
            src="https://via.placeholder.com/150"
            alt="Doctor"
          />
          <h2 className="text-lg font-semibold mt-4 text-center">
            Your Upcoming Visit With Dr. Jennifer K. Smith
          </h2>
          <div className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 mt-2">
            Wed, 7 Feb 2024 at 10:30 - 11:30 AM
          </div>
          <p className="text-gray-500 text-center mt-2">
            Sports Medicine Specialist <br />
            Orthopedic Consultation (Foot & Ankle)
          </p>
        </div>

        <div className="flex mt-6 space-x-4">
          <button className="flex-1 bg-gray-100 text-gray-700 rounded-lg p-2 flex items-center justify-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l-4.95 4.95a2.121 2.121 0 01-3 0l-3.536-3.536a2.121 2.121 0 010-3l4.95-4.95a2.121 2.121 0 013 0l3.536 3.536a2.121 2.121 0 010 3zM14 7l3 3m0 0l-9 9-3-3L14 7z"
              ></path>
            </svg>
            Call Office
          </button>
          <button className="flex-1 bg-gray-100 text-gray-700 rounded-lg p-2 flex items-center justify-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3M8 3h8m-8 4h8m-8 0v4m8-4v4m0 0a8.003 8.003 0 010 14H8a8.003 8.003 0 010-14h8zm-8 0a8.003 8.003 0 000 14h8a8.003 8.003 0 000-14h-8z"
              ></path>
            </svg>
            Add to Calendar
          </button>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">
            What to know before you arrive
          </h3>
          <p className="text-gray-500 mt-2">
            <strong>Guidelines for all patients:</strong>
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-500">
            <li>
              Arrive 15 minutes early, especially if you're a new patient.
            </li>
            <li>
              Make a list of any questions you have for your doctor and bring it
              to your appointment.{" "}
              <span className="text-blue-600">See More</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
