import React from "react";
import { Table } from "@mantine/core";
function Location() {
  const tableElements = [
    { location: "Bhandup Railway Station", distance: "1km" },
    { location: "Neptune Magnet Mall", distance: "1km" },
    { location: "RCity Mall", distance: "6km" },
    { location: "Powai", distance: "6km" },
    { location: "Airport", distance: "15km" }
  ];

  const rows = tableElements.map((element) => (
    <tr key={element.location}>
      <td>{element.location}</td>
      <td>{element.distance}</td>
    </tr>
  ));

  return (
    <div
      className="flex flex-col items-center"
      style={{ borderSpacing: "1rem" }}
    >
      <div className="mt-8 w-4/5">
        <h1 className="font-bold text-center">Location</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241232.80662087724!2d72.927933!3d19.139979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1f221447c0a2ee0a!2sHotel%20Pride!5e0!3m2!1sen!2sin!4v1636979738383!5m2!1sen!2sin"
          width="100%"
          height="600"
          title="Hotel Pride"
          loading="lazy"
        ></iframe>
      </div>
      <div className=" w-full sm:w-4/5 lg:w-3/5 py-8 my-8 shadow-l g rounded-lg">
        <h1 className="font-bold text-center">What's Nearby ?</h1>
        <table className="w-full  text-center p-2 sm:p-4 border-separate ">
          <thead className="text-2xl ">
            <th className="w-1/2 py-6 border border-gray-400">Location</th>
            <th className="w-1/2 py-6 border border-gray-400">Distance</th>
          </thead>
          <tbody className="py-4 text-lg md:text-xl  ">
            <tr className=" ">
              <td className="py-2 border border-gray-400">
                Bhandup Railway Station
              </td>
              <td className="py-2 border border-gray-400">1km</td>
            </tr>
            <tr>
              <td className="py-2 border border-gray-400">
                Neptune Magnet Mall
              </td>
              <td className="py-2 border border-gray-400">1km</td>
            </tr>
            <tr>
              <td className="py-2 border border-gray-400">RCity Mall</td>
              <td className="py-2 border border-gray-400">6km</td>
            </tr>
            <tr>
              <td className="py-2 border border-gray-400">Powai</td>
              <td className="py-2 border border-gray-400">6km</td>
            </tr>
            <tr>
              <td className="py-2 border border-gray-400">Airport</td>
              <td className="py-2 border border-gray-400">15km</td>
            </tr>
          </tbody>
        </table>{" "}
      </div>
    </div>
  );
}

export default Location;
