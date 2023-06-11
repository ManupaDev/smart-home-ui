import { useEffect, useState } from "react";
import Device from "../../../types/device";
import DeviceCard from "./device-card";
import { getAllDevices } from "../../../api/api";

function DevicesSection({
  selectedLocation,
  search,
}: {
  selectedLocation: string;
  search: string;
}) {
  const [devices, setDevices] = useState<Device[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const data = await getAllDevices();
        setDevices(data);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchDevices();
    setIsLoading(false);
  }, []);

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
      <div className="my-4 grid grid-cols-4 gap-4  border-black">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="my-4 grid grid-cols-4 gap-4  border-black">
        <h1>Couldn't Resolve Request</h1>
      </div>
    );
  }

  return (
    <div className="my-4 grid grid-cols-4 gap-4 border-black">
      {filteredDevices.map((device, i) => (
        <DeviceCard
          device={device}
          key={i}
          handleDeviceUpdate={handleDeviceUpdate}
        />
      ))}
    </div>
  );
}

export default DevicesSection;
