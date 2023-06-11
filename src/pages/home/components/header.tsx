import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);
import { Dayjs } from "dayjs";
import { BellIcon } from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";

import ProfileImg from "./../../../../public/images/profile.jpg";

function Header() {
  const [time, setTime] = useState<Dayjs>(dayjs());
  useEffect(() => {
    const timer = setInterval(() => setTime(dayjs()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" flex  justify-between rounded-2xl border-black    text-white ">
      <div>
        <h1 className="text-4xl text-black">
          Hello, <span className="font-semibold ">Manupa!</span>
        </h1>
        <p className="mt-4 text-lg text-black">
          Your devices are under your control.
        </p>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="flex h-full flex-col items-end justify-between">
          <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-black  bg-off_white">
            <BellIcon width={20} height={20} className="block text-black" />
          </div>
          <p className="text-2xl font-semibold text-black">
            <span className="text-sm font-normal">{time.format("Do dddd MMMM YYYY")}</span> {time.format("HH:mm")}
          </p>
        </div>
        <img src={ProfileImg} className="block h-20 w-20 rounded-full" alt="" />
      </div>
    </div>
  );
}

export default Header;
