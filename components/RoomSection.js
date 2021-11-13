import React from "react";

function RoomSection() {
  const RoomCard = ({ text }) => {
    return (
      <div className="bg-white z-20 h-96 rounded-lg shadow-lg relative">
        <p className="absolute bottom-16 w-full z-10 text-center text-2xl font-bold">
          {text}
        </p>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-100 w-full flex justify-center">
      <div className="w-4/5 lg:w-3/4 xl:w-3/5 flex justify-center items-center flex-col space-y-4">
        <p className="text-3xl sm:text-4xl font-bold">Rooms</p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full ">
          <RoomCard text="Executive" />
          <RoomCard text="Deluxe" />
          <RoomCard text="Non AC" />
        </div>
      </div>
    </div>
  );
}

export default RoomSection;
