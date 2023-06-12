import dayjs from "dayjs";
import { Dayjs } from "dayjs";
import { useEffect, useState } from "react";

import { WiThermometer, WiRain } from "react-icons/wi";

export function TopWidget({}) {
  const [time, setTime] = useState<Dayjs>(dayjs());
  useEffect(() => {
    const timer = setInterval(() => setTime(dayjs()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full rounded-3xl bg-glass_grey p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl text-white">{time.format("HH:mm")}</h1>
        <img
          className="block h-14 w-16"
          src="https://help.apple.com/assets/640A52196275DE31D4371B5E/640A52226275DE31D4371B8B/en_US/67aaf9dbe30989c25cbde6c6ec099213.png"
          alt="An icon symbolizing partly cloudy."
        />
      </div>
      <p className="mt-2 text-base text-white">
        {time.format("dddd Do MMMM YYYY")}
      </p>
      <div className="mt-4 grid grid-cols-1 gap-y-4">
        <div className="flex items-center gap-x-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-smoke-300">
            <WiThermometer className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="block text-xs text-smoke-200 ">Temperature</span>
            <span className="block text-lg text-white">27°C</span>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-smoke-300">
            <WiRain className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="block text-xs text-smoke-200 ">Rain Chance</span>
            <span className="block text-lg text-white">32%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
