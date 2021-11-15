import React from "react";

function RoomSection() {
  const RoomCard = ({ text }) => {
    return (
      <div className="bg-white flex flex-col  rounded-lg shadow-lg ">
        <img
          src="https://i.picsum.photos/id/717/256/256.jpg?hmac=rCl0DM-dRoiDZhBvcW6jt1P80NBijpfrsfZwJB0Tz9A"
          className="rounded-t-lg h-64 w-full"
        />
        <p className=" w-full z-10 text-center p-4 text-2xl font-bold">
          {text}
        </p>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-100 w-full flex justify-center">
      <div className="w-4/5 sm:w-3/5 md:w-4/5 lg:w-3/4 xl:w-3/5 flex justify-center items-center flex-col space-y-4">
        <p className="text-3xl sm:text-4xl font-bold">Rooms</p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
          <RoomCard text="Executive" />
          <RoomCard text="Deluxe" />
          <RoomCard text="Non AC" />
        </div>
      </div>
    </div>
  );
}

export default RoomSection;
