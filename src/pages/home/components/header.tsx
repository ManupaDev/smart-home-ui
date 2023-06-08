import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);
import { Dayjs } from "dayjs";

import { useEffect, useState } from "react";

function Header() {
  const [time, setTime] = useState<Dayjs>(dayjs());
  useEffect(() => {
    const timer = setInterval(() => setTime(dayjs()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-underlay-1 flex  items-center justify-between rounded-2xl border-black   p-4 text-white ">
      <h1 className="text-4xl ">
        Hello, <span className="font-semibold ">Manupa!</span>
      </h1>
      <div className="flex  flex-col items-end">
        <h1 className="text-4xl font-semibold">{time.format("HH:mm")}</h1>
        <p className="mt-2">{time.format("Do dddd MMMM YYYY")}</p>
      </div>
    </div>
  );
}

export default Header;
