import { SearchBar } from "./components/search-bar";
import Header from "./components/header";
import RoomChip from "./components/room-chip";
import DeviceCard from "./components/device-card";

import devices from "../../data/devices";
import sensors from "../../data/sensors";

function HomePage() {
  return (
    <div className="min-h-[80vh] overflow-y-scroll rounded-2xl border border-black p-8">
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
      
      {/* Sensors Section */}
      <div className="my-8  border-black">
        <h1 className="text-3xl font-semibold">Sensors</h1>
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
