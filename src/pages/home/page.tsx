import { SearchBar } from "./components/search-bar";
import Header from "./components/header";
import LocationChip from "./components/location-chip";
import DeviceCard from "./components/device-card";
import SensorCard from "./components/sensor-card";

import { useState } from "react";

import locations from "../../data/locations";
import devices from "../../data/devices";

function HomePage() {
  const [filteredDevices, setFilteredDevices] = useState(devices);

  const [selectedLocation, setSelectedLocation] = useState("All");

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(() => {
      setFilteredDevices(
        location === "All"
          ? devices
          : devices.filter((device) => device.location === location)
      );
      return location;
    });
  };

  return (
    <div className="overflow-y-scroll rounded-2xl border border-black p-8">
      <Header />
      {/* Devices Section */}
      <div className="my-8  border-black">
        <h1 className="text-3xl font-semibold">Devices</h1>
        <SearchBar />
        <div className="my-4 flex gap-x-4 border-black">
          {locations.map((location) => (
            <LocationChip
              selectedLocation={selectedLocation}
              handleLocationSelect={handleLocationSelect}
              location={location}
            />
          ))}
        </div>
        <div className=" my-4 grid grid-cols-4 gap-4  border-black">
          {filteredDevices.map((device, i) => (
            <DeviceCard device={device} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
