import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);
import { Dayjs } from "dayjs";
import { BellIcon } from "@heroicons/react/24/outline";

import { useContext, useEffect, useState } from "react";

import ProfileImg from "./../../../../public/images/profile.jpg";
import AuthContext from "../../../contexts/auth-context";

function Header() {

  const {user} = useContext(AuthContext);

  return (
    <div className=" flex  justify-between rounded-2xl border-black    text-white ">
      <div>
        <h1 className="text-4xl text-black">
          Hello, <span className="font-semibold ">{user?.displayName}!</span>
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
        </div>
        <img referrerPolicy="no-referrer" src={user?.photoURL?user?.photoURL:""} className="block h-20 w-20 rounded-full" alt="" />
      </div>
    </div>
  );
}

export default Header;
