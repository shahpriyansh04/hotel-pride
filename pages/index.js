import Head from "next/head";
import Navbar from "../components/Navbar";
import ImageCarousel from "../components/ImageCarousel";
import Info from "../components/Info";
import RoomSection from "../components/RoomSection";
import HotelPolicies from "../components/HotelPolicies";

export default function Home() {
  return (
    <div className="h-screen overflow-scroll scrollbar-hide">
      <Head>
        <title>Hotel Pride</title>
        {/* <meta tag="description">This is the site of Hotel Pride</meta> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center flex-col">
        <ImageCarousel />
        <Info />
        <RoomSection />
        <HotelPolicies />
      </div>
    </div>
  );
}
