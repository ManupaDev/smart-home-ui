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
      <div>
        
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
