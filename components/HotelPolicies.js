import React from "react";
import { Tabs, Tab } from "@mantine/core";
import { AiFillCar } from "react-icons/ai";
import { FaSmoking } from "react-icons/fa";
import { MdPets } from "react-icons/md";
function HotelPolicies() {
  return (
    <div className="h-[16rem] mb-5 w-full sm:w-4/5 lg:w-3/4 xl:w-3/5 ">
      <h1 className="font-bold text-center">Hotel Policies</h1>
      <div className="mx-3">
        <Tabs
          color="dark"
          variant="pills"
          tabPadding="xl"
          position="center"
          grow
        >
          <Tab label="Parking" icon={<AiFillCar size="xs" className="h-5 " />}>
            <ul className="list-disc text-lg lg:text-2xl font-semibold ml-4 space-y-4 mt-4">
              <li>Self parking: complimentary</li>
              <li>Valet parking: complimentary</li>
            </ul>
          </Tab>
          <Tab label="Pets" icon={<MdPets size="xs" className="h-5" />}>
            <ul className="list-disc text-lg lg:text-2xl font-semibold ml-4 space-y-4 mt-4">
              <li>Pets: Not allowed</li>
            </ul>
          </Tab>
          <Tab label="Smoking" icon={<FaSmoking size="xs" className="h-5" />}>
            <ul className="list-disc text-lg lg:text-2xl font-semibold ml-4 space-y-4 mt-4">
              <li>Smoking rooms available</li>
            </ul>{" "}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default HotelPolicies;
