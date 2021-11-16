import React from "react";
import { FaCar, FaWifi, FaSmoking, FaConciergeBell } from "react-icons/fa";
function Info() {
  // console.log(ConciergeLogo);
  const AmenityCard = ({ icon, description }) => {
    return (
      <div className="px-2 py-6  rounded-lg border-2 border-black   flex-col space-y-4 shadow-sm">
        <div className="h-10 flex justify-center mt-1">{icon}</div>
        <p className="truncate">{description}</p>
      </div>
    );
  };

  const V2 = () => {
    return (
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M1587 5105 c-84 -31 -177 -121 -208 -202 -35 -92 -28 -266 15 -371
17 -43 28 -101 41 -232 9 -96 27 -265 40 -375 l23 -199 -30 -35 c-49 -56 -62
-96 -62 -196 0 -102 25 -218 58 -268 12 -17 44 -46 71 -64 93 -59 103 -72 125
-158 44 -173 168 -365 314 -486 197 -162 389 -228 631 -216 244 12 444 110
625 304 115 123 193 261 224 396 20 86 35 108 96 141 75 41 107 78 131 154 27
86 36 235 18 299 -7 26 -28 64 -47 85 l-35 39 37 342 c42 392 46 420 77 502
20 50 23 80 24 180 0 113 -2 123 -29 178 -36 70 -108 139 -179 172 l-52 25
-935 -1 c-778 0 -941 -3 -973 -14z"
          />
          <path
            d="M1697 1953 c-11 -3 -96 -44 -190 -92 -95 -48 -262 -123 -372 -166
-507 -197 -759 -336 -887 -488 -72 -87 -68 -46 -68 -657 l0 -550 2380 0 2380
0 0 550 c0 611 4 570 -68 657 -128 152 -380 291 -887 488 -110 43 -277 117
-370 165 -94 48 -183 90 -198 94 -45 11 -97 -10 -169 -67 -280 -224 -733 -284
-1110 -147 -98 36 -198 90 -258 140 -81 66 -132 87 -183 73z m250 -699 c52
-39 68 -71 68 -134 0 -66 -18 -99 -75 -137 -24 -17 -47 -23 -85 -23 -93 0
-157 66 -157 159 0 61 24 105 77 137 33 20 50 24 93 21 32 -2 63 -12 79 -23z
m1400 0 c52 -39 68 -71 68 -134 0 -66 -18 -99 -75 -137 -46 -32 -124 -32 -170
0 -98 65 -96 212 4 273 34 20 51 24 94 21 32 -2 63 -12 79 -23z m-1440 -715
c109 -68 90 -238 -32 -284 -120 -47 -241 58 -214 184 11 49 38 82 90 109 51
27 103 24 156 -9z m1479 0 c37 -22 74 -91 74 -135 -1 -76 -61 -146 -138 -160
-110 -21 -210 91 -181 201 12 44 74 111 111 118 38 8 100 -3 134 -24z"
          />
        </g>
      </svg>
    );
  };

  return (
    <div className="w-full sm:w-3/4  flex justify-center items-center my-8 flex-col space-y-12">
      <div className="grid grid-cols-1  sm:w-4/5 md:w-full xl:w-4/5 md:grid-cols-2 xl:grid-cols-3 flex-grow p-8 gap-5 text-left justify-center">
        <div className="flex-grow flex justify-center items-center justify-items-center flex-col space-y-6 shadow-lg p-6 rounded-lg">
          <p className="font-bold text-xl">CONTACT</p>
          <div className="flex text-md font-semibold flex-col space-y-1 ">
            <p>2279660926</p>
            <p>9819914047</p>
          </div>
        </div>
        <div className="flex items-center shadow-lg p-6">
          <div className=" flex-grow  flex justify-center items-center  flex-col space-y-6">
            <p className="font-bold text-xl">LOCATION</p>
            <div className="flex  text-md font-semibold flex-col space-y-1  items-center justify-center truncate-ellipsis">
              <p className="cursor-pointer">L.B.S. Marg, Bhandup West,</p>
              <p className="cursor-pointer">Mumbai – 400 078</p>
            </div>
          </div>
        </div>
        <div className="flex-grow flex justify-center items-center  flex-col space-y-6 shadow-lg p-6">
          <p className="font-bold text-xl">TIMINGS</p>
          <div className="text-center flex text-md font-semibold flex-col space-y-">
            <p>Check in -12pm</p>
            <p>Check out -12pm</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center w-3/4 sm:w-full">
        <h1 className="font-bold text-3xl sm:text-4xl">Why Hotel Pride ?</h1>
        <p className="text-xl font-semibold">
          Hotel Pride, is just the answer to every business traveler’s need.
          Located in the happening suburb of Bhandup, the hotel has the
          advantage of being situated, just 10 minutes away from the business
          district of Powai, 20 minutes drive from the domestic and
          international airports, a kilometer from the Eastern Express Highway,
          walking distance from the suburban Bhandup Railway Station.
        </p>
      </div>
      <div className="flex xl:w2/3 flex-col justify-center items-center text-center ">
        <h1 className="font-bold text-3xl sm:text-4xl justify-items-stretch">
          Our Amenities
        </h1>
        <div className="grid grid-cols-1 auto-cols-auto sm:grid-cols-2 xl:grid-cols-5 gap-8 mt-2 justify-center">
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
            icon={<V2 size="md" class="h-7 w-7" />}
            description="Concierge"
          />
          <AmenityCard
            FaConciergeBell
            icon={<FaConciergeBell size="md" class="h-7 w-7" />}
            description="Room Service"
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
