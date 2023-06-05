import { SearchBar } from "./components/search-bar";
import Header from "./components/header";
import RoomChip from "./components/room-chip";
import DeviceCard from "./components/device-card";
import SensorCard from "./components/sensor-card";

import sensors from "../../data/sensors";
import { useState } from "react";
import Device from "./types/device";

function HomePage() {
  const [devices, setDevices] = useState([
    {
      id: 1,
      name: "Main Light",
      image: "",
      state: false,
    },
    {
      id: 2,
      name: "Roof Light",
      image: "",
      state: false,
    },
    {
      id: 3,
      name: "Night Light",
      image: "",
      state: false,
    },
    {
      id: 4,
      name: "Ceiling Fan",
      image: "",
      state: false,
    },
    {
      id: 5,
      name: "Table Fan",
      image: "",
      state: false,
    },
    {
      id: 6,
      name: "Air Conditioner",
      image: "",
      state: false,
    },
  ]);

  const [sensors, setSensors] = useState([
    {
      id: 1,
      name: "Temperature",
      image: "",
      value: "",
    },
    {
      id: 2,
      name: "Humidity",
      image: "",
      value: "",
    },
    {
      id: 3,
      name: "Window 1",
      image: "",
      value: "",
    },
    {
      id: 4,
      name: "Window 2",
      image: "",
      value: "",
    },
    {
      id: 5,
      name: "Main Door",
      image: "",
      value: "",
    },
  ]);

  const handleDeviceUpdate = (updatedDevice: Device) => {
    setDevices((prevDevices) => {
      return prevDevices.map((device) =>
        device.id === updatedDevice.id
          ? { ...device, ...updatedDevice }
          : device
      );
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
          <RoomChip />
          <RoomChip />
          <RoomChip />
          <RoomChip />
        </div>
        <div className=" my-4 grid grid-cols-4 gap-4  border-black">
          {devices.map((device, i) => (
            <DeviceCard
              device={device}
              handleDeviceUpdate={handleDeviceUpdate}
              key={i}
            />
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
          {sensors.map((sensor, i) => (
            <SensorCard sensor={sensor} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
