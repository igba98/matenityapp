/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Home: React.FC = () => {
  const profileData = {
    clinicName: "Snow Clinic",
    registrationNumber: "SN123456",
    motherName: "Jane Doe",
    motherBirthdate: "1990-01-01",
    motherHeight: "165 cm",
    motherEducation: "Bachelor's Degree",
    motherOccupation: "Teacher",
    husbandName: "John Doe",
    husbandAge: "35",
    husbandOccupation: "Engineer",
    currentLocation: "New York, USA",
    localLeader: "Mr. Smith",
    numberOfPregnancies: "2",
    successfulDeliveries: "2",
    numberOfKids: "2",
    pregnancyDate: "2023-01-01",
    pregnancyAge: "20 weeks",
    lastPeriodDate: "2022-12-01",
    deliveryDate: "2023-09-01",
    bloodGroup: "O+",
    rh: "Positive",
    syphilisStatus: "Negative",
    otherMeasurements: "None",
    firstPregnancy: false,
    nextAppointmentDate: new Date("2023-07-20"),
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              className="w-24 h-24 rounded-full"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <div className="absolute bottom-0 right-0 bg-green-500 border-2 border-white rounded-full w-4 h-4"></div>
          </div>
          <h2 className="text-xl font-semibold mt-4">Wade Warren</h2>
          <p className="text-gray-600 text-center mt-2">
            Cursus etiam suspendisse cras senectus. Velit varius ornare aenean
            et semper faucibus ultrices quam. Proin euismod est nisi, urna cras
            feugiat aliquam bibendum.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700">Clinic Name</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.clinicName}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Registration Number</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.registrationNumber}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Mother's Name</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.motherName}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Mother's Birthdate</label>
            <input
              type="date"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.motherBirthdate}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Mother's Height</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.motherHeight}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Mother's Education</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.motherEducation}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Mother's Occupation</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.motherOccupation}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Husband's Name</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.husbandName}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Husband's Age</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.husbandAge}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Husband's Occupation</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.husbandOccupation}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Current Location</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.currentLocation}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Local Leader</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.localLeader}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Number of Pregnancies</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.numberOfPregnancies}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Successful Deliveries</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.successfulDeliveries}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Number of Kids</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.numberOfKids}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Pregnancy Date</label>
            <input
              type="date"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.pregnancyDate}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Pregnancy Age</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.pregnancyAge}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Period Date</label>
            <input
              type="date"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.lastPeriodDate}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Delivery Date</label>
            <input
              type="date"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.deliveryDate}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Blood Group</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.bloodGroup}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Rh</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.rh}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Syphilis Status</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.syphilisStatus}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Other Measurements</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={profileData.otherMeasurements}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">First Pregnancy</label>
            <input
              type="checkbox"
              className="mt-1"
              checked={profileData.firstPregnancy}
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Next Appointment Date</label>
            <input
              type="date"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={
                profileData.nextAppointmentDate.toISOString().split("T")[0]
              }
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
