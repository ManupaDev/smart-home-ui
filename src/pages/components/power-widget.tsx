import { WiLightning } from "react-icons/wi";

import { LightBulbIcon } from "@heroicons/react/24/outline";
import { WiWindy } from "react-icons/wi";

export function PowerWidget({}) {
  return (
    <div className="w-full  rounded-3xl bg-glass_grey p-6">
      <h1 className="text-xl text-white">Power Consumption</h1>
      <p className="mt-1 text-xs  text-smoke-200">
        Summary of the energy consumption
      </p>
      <div className="mt-4 flex gap-x-2 ">
        <div className="h-28 w-24 rounded-xl border border-smoke-300 p-4">
          <div className="flex h-8 w-8  items-center justify-center rounded-full bg-smoke-300">
            <WiLightning className="h-4 w-4 text-white" />
          </div>
          <div className="mt-2">
            <span className="block text-sm text-white">16 kwh</span>
            <span className="block text-xs  text-smoke-200">Today</span>
          </div>
        </div>
        <div className="h-28 w-24 rounded-xl bg-smoke-300 p-4">
          <div className="flex h-8 w-8  items-center justify-center rounded-full bg-smoke-100">
            <WiLightning className="h-4 w-4 text-white" />
          </div>
          <div className="mt-2">
            <span className="block text-sm text-white">439 kwh</span>
            <span className="block text-xs  text-smoke-200">This month</span>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-y-4">
        <div className="flex items-center gap-x-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-smoke-300">
            <LightBulbIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="block text-lg text-white">Main Light</span>
            <span className="block text-xs text-smoke-200 ">2 kwh</span>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-smoke-300">
            <WiWindy className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="block text-lg text-white">Air Conditioner</span>
            <span className="block text-xs text-smoke-200 ">8 kwh</span>
          </div>
        </div>
      </div>
    </div>
  );
}
