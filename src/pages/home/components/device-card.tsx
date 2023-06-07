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
  const { _id, name, image, state, location } = device;

  const handleClick = () => {
    handleDeviceUpdate({ _id, name, image, state: !state, location });
  };

  return (
    <div className="relative shadow-xl h-64 w-64 rounded-3xl bg-white  border-black p-6">
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
        className="absolute right-6 bottom-6 flex h-12 w-12 cursor-pointer items-center justify-center  rounded-full  border-2 border-smoke-600 bg-smoke-600"
      >
        <PowerIcon width={36} height={36} className="text-white" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="absolute right-6 bottom-6 flex h-12 w-12 text-smoke-600 cursor-pointer items-center  justify-center rounded-full  border-2 border-smoke-600"
    >
      <PowerIcon width={36} height={36} />
    </button>
  );
}
