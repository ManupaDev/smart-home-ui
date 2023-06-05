import { PowerIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Device = {
  id: number;
  name: string;
  image: string;
  state: boolean;
};

function DeviceCard({ device }: { device: Device }) {
  const { id, name, image, state } = device;

  const [power, setPower] = useState(state);

  const handleClick = () => {
    setPower(!power);
  };

  return (
    <div className="relative h-64 w-64 rounded-2xl border border-black p-4">
      <h1 className="text-2xl">{name}</h1>
      <PowerButton power={power} handleClick={handleClick} />
    </div>
  );
}

export default DeviceCard;

function PowerButton({
  power,
  handleClick,
}: {
  power: boolean;
  handleClick: () => void;
}) {

  if (power) {
    return (
      <button
        type="button"
        onClick={handleClick}
        className="absolute right-4 bottom-4 flex h-12 w-12 cursor-pointer bg-black items-center  justify-center rounded-full border border-black"
      >
        <PowerIcon width={36} height={36}  className="text-white"/>
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
