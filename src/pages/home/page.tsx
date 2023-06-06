import { SearchBar } from "./components/search-bar";
import Header from "./components/header";
import RoomChip from "./components/room-chip";
import DeviceCard from "./components/device-card";

import devices from "../../data/devices";

function HomePage() {
  const devices = [
    {
      id: 1,
      name: "Main Light",
      image: "",
      state: true,
    },
    {
      id: 2,
      name: "Roof Light",
      image: "",
      state: true,
    },
    {
      id: 3,
      name: "Night Light",
      image: "",
      state: true,
    },
    {
      id: 4,
      name: "Ceiling Fan",
      image: "",
      state: true,
    },
    {
      id: 5,
      name: "Table Fan",
      image: "",
      state: true,
    },
    {
      id: 6,
      name: "Air Conditioner",
      image: "",
      state: true,
    },
  ];

  return (
    <div className="overflow-y-scroll rounded-2xl border border-black p-8">
      <Header />
      {/* Devices Section */}
      <div className="my-8  border-black">
        <h1 className="text-3xl font-semibold">Devices</h1>
        <SearchBar />
        <div className="my-4 flex gap-x-4 border-black">
          <RoomChip />
          <RoomChip />
          <RoomChip />
          <RoomChip />
        </div>
        <div className=" my-4 grid grid-cols-4 gap-4  border-black">
          {devices.map((device, i) => (
            <DeviceCard device={device} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
