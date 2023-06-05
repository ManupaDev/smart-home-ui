import { PowerIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import Device from "../../../types/device";

function DeviceCard({
  device,
  handleDeviceUpdate,
}: {
  device: Device;
  handleDeviceUpdate: (device: Device) => void;
}) {
  const { id, name, image, state, location } = device;

  const handleClick = () => {
    handleDeviceUpdate({ id, name, image, state: !state, location });
  };

  return (
    <div className="relative h-64 w-64 rounded-2xl border border-black p-4">
      <h1 className="text-2xl">{name}</h1>
      <PowerButton state={state} handleClick={handleClick} />
    </div>
  );
}

export default DeviceCard;

function PowerButton({
  state,
  handleClick,
}: {
  state: boolean;
  handleClick: () => void;
}) {
  if (state) {
    return (
      <button
        type="button"
        onClick={handleClick}
        className="absolute right-4 bottom-4 flex h-12 w-12 cursor-pointer items-center justify-center  rounded-full border border-black bg-black"
      >
        <PowerIcon width={36} height={36} className="text-white" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="absolute right-4 bottom-4 flex h-12 w-12 cursor-pointer items-center  justify-center rounded-full border border-black"
    >
      <PowerIcon width={36} height={36} />
    </button>
  );
}
