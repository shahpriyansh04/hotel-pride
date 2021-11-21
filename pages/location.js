import React from "react";

function Location() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-8 w-4/5">
        <h1 className="font-bold text-center">Location</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241232.80662087724!2d72.927933!3d19.139979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1f221447c0a2ee0a!2sHotel%20Pride!5e0!3m2!1sen!2sin!4v1636979738383!5m2!1sen!2sin"
          width="100%"
          height="600"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="mt-12 w-4/5 py-12">
        <h1 className="font-bold text-center">What's Nearby</h1>
        <div>
          <ul className="list-disc list-inside font-semibold text-2xl">
            <li>
              Bhandup Railway Station: 1km
              </li>
              <li>
                Neptune Manget Mall: 1km
              </li>
             <li>
             RCity Mall: 6km
              </li><li>
                Powai: 6km
              </li><li>
                Airport: 15km
              </li>
              </ul>
        </div>
      </div>
    </div>
  );
}

export default Location;
