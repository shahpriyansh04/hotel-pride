import React from "react";
import info from "../information.json";
import { FaCar, FaWifi, FaSmoking, FaConciergeBell } from "react-icons/fa";

function Info() {
  const AmenityCard = ({ icon, description }) => {
    console.log(icon);
    return (
      <div className="px-4 py-4 rounded-lg border-2 border-black   flex-col space-y-4 shadow-sm">
        <div className="h-10 flex justify-center mt-1">{icon}</div>
        <p>{description}</p>
      </div>
    );
  };
  console.log(info);
  return (
    <div className=" w-3/5  flex justify-center my-8 flex-col space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 flex-grow p-8 rounded-xl shadow-lg gap-5">
        <div className="flex-grow  flex justify-center items-center  flex-col space-y-2 shadow-lg">
          <p className="font-semibold text-lg">REVIEWS</p>
        </div>
        <div className="flex-grow  flex justify-center items-center  flex-col space-y-2 shadow-lg">
          <p className="font-semibold text-lg">CONTACT</p>
        </div>
        <div className="flex-grow  flex justify-center items-center  flex-col space-y-2 shadow-lg">
          <p className="font-semibold text-lg">LOCATION</p>
        </div>
        <div className="flex-grow flex justify-center items-center  flex-col space-y-2 shadow-lg">
          <p className="font-semibold text-lg">TIMINGS</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-bold text-4xl">Some random title for Info</h1>
        <p className="text-xl font-semibold">
          Hotel Pride, is just the answer to every business traveler’s need.
          Located in the happening suburb of Bhandup, the hotel has the
          advantage of being situated, just 10 minutes away from the business
          district of Powai, 20 minutes drive from the domestic and
          international airports, a kilometer from the Eastern Express Highway,
          walking distance from the suburban Bhandup Railway Station.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center text-center ">
        <h1 className="font-bold text-4xl justify-items-stretch">
          Our Amenities
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-2 justify-center">
          <AmenityCard
            icon={<FaCar size="md" class="h-7 w-7" />}
            description="Free Parking"
          />
          <AmenityCard
            icon={<FaWifi size="md" class="h-7 w-7" />}
            description="Free Wifi"
          />
          <AmenityCard
            icon={<FaSmoking size="md" class="h-7 w-7" />}
            description="Smoking rooms available"
          />
          <AmenityCard
            icon={<FaConciergeBell size="md" class="h-7 w-7" />}
            description="Concierge"
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
