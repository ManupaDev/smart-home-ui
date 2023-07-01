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
    <div
      className={`relative  h-72 w-56 overflow-hidden rounded-3xl border-black   shadow-xl`}
    >
      <img
        src={image}
        className="block max-w-full rounded-3xl  object-cover"
        alt=""
      />
      <div className="absolute left-0 right-0  bottom-0 rounded-bl-3xl rounded-br-3xl border-black bg-white  py-2 px-4 opacity-80">
        <div className="flex items-center  justify-between">
          <h3 className="text-xl  text-black">{name}</h3>
          <PowerButton state={state} handleClick={handleClick} />
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
        className="flex h-12 w-12 cursor-pointer items-center justify-center  rounded-full  border-2 border-smoke-800 bg-smoke-800"
      >
        <PowerIcon width={36} height={36} className="text-white" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex h-12 w-12 cursor-pointer items-center justify-center  rounded-full border-2  border-smoke-800 text-smoke-800"
    >
      <PowerIcon width={36} height={36} />
    </button>
  );
}
