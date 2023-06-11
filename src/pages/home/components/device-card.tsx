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
    <div className="relative h-72 w-56 rounded-3xl border border-black bg-white  shadow-xl ">
      <div className="absolute left-0 right-0 bottom-0 rounded-bl-3xl rounded-br-3xl border border-black py-2 px-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl  text-black">{name}</h3>
          <PowerButton state={state} handleClick={handleClick}/>
        </div>
      </div>
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
        className="flex h-12 w-12 cursor-pointer items-center justify-center  rounded-full  border-2 border-smoke-600 bg-smoke-600"
      >
        <PowerIcon width={36} height={36} className="text-white" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex h-12 w-12 cursor-pointer items-center justify-center  rounded-full border-2  border-smoke-600 text-smoke-600"
    >
      <PowerIcon width={36} height={36} />
    </button>
  );
}
