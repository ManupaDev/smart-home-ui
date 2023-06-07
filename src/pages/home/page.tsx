import { SearchBar } from "./components/search-bar";
import Header from "./components/header";
import LocationChip from "./components/location-chip";
import DeviceCard from "./components/device-card";

import { getAllDevices } from "../../api/api";

import { ChangeEvent, useEffect, useState } from "react";

import Device from "../../types/device";

function HomePage() {
  const locations = ["All", "Living Room", "Bed Room"];

  const [devices, setDevices] = useState<Device[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState("All");

  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllDevices()
      .then((data) => setDevices(data))
      .catch((error) => {
        setIsError(true);
      });
    setIsLoading(false);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClear = () => {
    setSearch("");
  };

  const filteredDevices =
    selectedLocation === "All"
      ? devices.filter((device) =>
          device.name.replace(" ", "").toLowerCase().includes(search)
        )
      : devices.filter((device) => {
          return (
            device.location === selectedLocation &&
            device.name.replace(" ", "").toLowerCase().includes(search)
          );
        });

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
  };

  const handleDeviceUpdate = (updatedDevice: Device) => {
    setDevices((prevDevices) => {
      return prevDevices.map((device) =>
        device._id === updatedDevice._id
          ? { ...device, ...updatedDevice }
          : device
      );
    });
  };

  if (isLoading) {
    return (
      <div className="overflow-y-scroll rounded-2xl border border-black p-8">
        <Header />
        {/* Devices Section */}
        <div className="my-8  border-black">
          <h1 className="text-3xl font-semibold">Devices</h1>
          <SearchBar
            search={search}
            handleChange={handleChange}
            handleClear={handleClear}
          />
          <div className="my-4 flex gap-x-4 border-black">
            {locations.map((location, i) => (
              <LocationChip
                key={i}
                selectedLocation={selectedLocation}
                handleLocationSelect={handleLocationSelect}
                location={location}
              />
            ))}
          </div>
          <div className=" my-4 grid grid-cols-4 gap-4  border-black">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-y-scroll rounded-2xl border border-black p-8">
      <Header />
      {/* Devices Section */}
      <div className="my-8  border-black">
        <h1 className="text-3xl font-semibold">Devices</h1>
        <SearchBar
          search={search}
          handleChange={handleChange}
          handleClear={handleClear}
        />
        <div className="my-4 flex gap-x-4 border-black">
          {locations.map((location, i) => (
            <LocationChip
              key={i}
              selectedLocation={selectedLocation}
              handleLocationSelect={handleLocationSelect}
              location={location}
            />
          ))}
        </div>
        <div className=" my-4 grid grid-cols-4 gap-4  border-black">
          {filteredDevices.map((device, i) => (
            <DeviceCard
              device={device}
              key={i}
              handleDeviceUpdate={handleDeviceUpdate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
