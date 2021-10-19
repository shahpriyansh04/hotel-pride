import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Drawer } from "@mantine/core";
function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="sticky top-0 bg-gray-200 h-20 text-2xl flex  justify-center font-semibold w-full">
      <div className="absolute left-10 justify-center h-full flex items-center">
        <p>Hotel Pride</p>
      </div>
      <div className="hidden  lg:flex items-center justify-center space-x-10 lg:space-x-12 xl:space-x-20 ">
        <p className="h-full flex items-center cursor-pointer">Home</p>
        <p className="h-full flex items-center cursor-pointer">Rooms</p>
        <p className="h-full flex items-center cursor-pointer">Gallery</p>
        <p className="h-full flex items-center cursor-pointer">Location</p>
        <p className="h-full flex items-center cursor-pointer">Contact us</p>
      </div>

      <AiOutlineMenu
        className="absolute lg:hidden top-8 right-10 cursor-pointer"
        onClick={() => setOpenDrawer(true)}
      ></AiOutlineMenu>
      <Drawer
        position="right"
        opened={openDrawer}
        hideCloseButton
        transitionDuration={500}
        noFocusTrap
        shadow="lg"
        // transition="pop-top-right"
        onClose={() => setOpenDrawer(false)}
      >
        <div className="flex flex-col">
          <div className="flex px-10 py-8 justify-end">
            <AiOutlineClose
              onClick={() => setOpenDrawer(false)}
              className=" h-8 w-8 cursor-pointer"
              size="xs"
            ></AiOutlineClose>
          </div>

          <div className="flex flex-col items-center justify-start space-y-6 cursor-pointer text-2xl font-semibold mt-10 ">
            <p className="">Home</p>
            <p>Rooms</p>
            <p>Gallery</p>
            <p>Location</p>
            <p>Contact</p>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
