import React from "react";
import { Tabs, Tab } from "@mantine/core";
import { AiFillCar } from "react-icons/ai";
import { FaSmoking } from "react-icons/fa";
import { MdPets } from "react-icons/md";
function HotelPolicies() {
  return (
    <div className="p-5 w-3/5">
      <h1 className="font-bold text-center">Hotel Policies</h1>
      <Tabs color="dark" variant="pills" tabPadding="xl" position="center" grow>
        <Tab label="Parking" icon={<AiFillCar size="xs" className="h-5 " />}>
          Parking Policies
        </Tab>
        <Tab label="Pets" icon={<MdPets size="xs" className="h-5" />}>
          Pets Policies
        </Tab>
        <Tab label="Smoking" icon={<FaSmoking size="xs" className="h-5" />}>
          Smoking Policies
        </Tab>
      </Tabs>
    </div>
  );
}

export default HotelPolicies;
