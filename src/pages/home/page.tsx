import SearchBar from "./components/search-bar";
import Header from "./components/header";
import LocationChip from "./components/location-chip";
import DevicesSection from "./components/devices-section";

import { ChangeEvent, useState } from "react";

function HomePage() {
  const locations = ["All", "Living Room", "Bed Room"];

  const [selectedLocation, setSelectedLocation] = useState("All");

  const [search, setSearch] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClear = () => {
    setSearch("");
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
  };

  return (
    <div className="overflow-y-scroll rounded-3xl border-black  bg-white p-8">
      <Header />
      <div className=" mt-5  flex  gap-x-4">
        <div className="relative w-3/4 border-black rounded-2xl">
          <img
            src="https://source.unsplash.com/yFV39g6AZ5o"
            className="h-[300px] w-full rounded-2xl object-cover"
            alt=""
          />
          <div className="absolute left-0 right-0 top-0  z-10 rounded-bl-2xl rounded-br-2xl border-black   py-2 px-4 opacity-80">
            <div className="flex items-center  justify-between">
              <h3 className="text-xl  font-semibold text-white">Cam 1</h3>
              <div className="flex items-center gap-x-4">
                <h3 className="text-2xl  font-semibold text-red-500">•</h3>
                <h3 className="text-xl  font-semibold text-white">Live</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="relative border-black overflow-hidden rounded-2xl">
          <img
            src="https://source.unsplash.com/anapPhJFRhM"
            className="block h-[300px] w-full hover:scale-125 hover:cursor-pointer transition-all ease-in-out duration-500 rounded-2xl object-cover"
            alt=""
          />
          <div className="absolute left-0 right-0 top-0  z-10 rounded-bl-2xl rounded-br-2xl border-black   py-2 px-4 opacity-80">
            <div className="flex items-center  justify-between">
              <h3 className="text-xl  font-semibold text-midnight-black">Music</h3>
              
            </div>
          </div>
        </div>
      </div>
      {/* Devices Section */}
      <div className="my-5 border-black">
        <h1 className="text-3xl font-semibold">Devices</h1>
        <div className="flex items-center gap-x-8">
          <div className="my-5 flex gap-x-4 border-black">
            {locations.map((location, i) => (
              <LocationChip
                key={i}
                selectedLocation={selectedLocation}
                handleLocationSelect={handleLocationSelect}
                location={location}
              />
            ))}
          </div>
          <SearchBar
            search={search}
            handleChange={handleChange}
            handleClear={handleClear}
          />
        </div>
        <DevicesSection selectedLocation={selectedLocation} search={search} />
      </div>
    </div>
  );
}

export default HomePage;
