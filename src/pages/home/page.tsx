import { SearchBar } from "./components/search-bar";
import Header from "./components/header";
import LocationChip from "./components/location-chip";
import DeviceCard from "./components/device-card";
import SensorCard from "./components/sensor-card";

import { ChangeEvent, useState } from "react";

import locations from "../../data/locations";

function HomePage() {
  const [devices, setDevices] = useState([
    {
      id: 1,
      name: "Main Light",
      image: "",
      state: false,
      location: "Living Room",
    },
    {
      id: 2,
      name: "Roof Light",
      image: "",
      state: false,
      location: "Bed Room",
    },
    {
      id: 3,
      name: "Night Light",
      image: "",
      state: false,
      location: "Bed Room",
    },
    {
      id: 4,
      name: "Ceiling Fan",
      image: "",
      state: false,
      location: "Living Room",
    },
    {
      id: 5,
      name: "Table Fan",
      image: "",
      state: false,
      location: "Bed Room",
    },
    {
      id: 6,
      name: "Air Conditioner",
      image: "",
      state: false,
      location: "Bed Room",
    },
  ]);

  const [search, setSearch] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClear = () => {
    setSearch("");
  };

  const filteredDevices =
    search === ""
      ? devices
      : devices.filter(
          (device) => device.name.replace(" ", "").toLowerCase().includes(search)
        );

  return (
    <div className="overflow-y-scroll rounded-2xl border border-black p-8">
      <Header />
      {/* Devices Section */}
      <div className="my-8  border-black">
        <h1 className="text-3xl font-semibold">Devices</h1>
        <SearchBar
          handleChange={handleChange}
          search={search}
          handleClear={handleClear}
        />
        <div className="my-4 flex gap-x-4 border-black">
          {locations.map((location) => (
            <LocationChip location={location} />
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
