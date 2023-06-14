import { HomeIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon,ChartPieIcon,ShieldCheckIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export function Sidebar({}) {
  return (
    <div className="flex flex-col items-center gap-y-8 rounded-3xl border-black bg-glass_grey py-4">
      <NavLink to={"/home"}>
        {({ isActive }) => {
          return (
            <div
              className={clsx(
                "flex h-16 w-16  items-center justify-center rounded-full border-white hover:bg-smoke-300 ",
                { "glow-1 bg-jade-500 text-black hover:bg-jade-500": isActive },
                { "text-white": !isActive }
              )}
            >
              <HomeIcon width={30} height={30} />
            </div>
          );
        }}
      </NavLink>

      <NavLink to={"/settings"}>
        {({ isActive }) => {
          return (
            <div
              className={clsx(
                "flex h-16 w-16  items-center justify-center  rounded-full border-white hover:bg-smoke-300 ",
                { "glow-1 bg-jade-500 text-black hover:bg-jade-500": isActive },
                { "text-white": !isActive }
              )}
            >
              <Cog6ToothIcon width={30} height={30} />
            </div>
          );
        }}
      </NavLink>

      <NavLink to={"/settings"}>
        {({ isActive }) => {
          return (
            <div
              className={clsx(
                "flex h-16 w-16  items-center justify-center  rounded-full border-white hover:bg-smoke-300 ",
                { "glow-1 bg-jade-500 text-black hover:bg-jade-500": isActive },
                { "text-white": !isActive }
              )}
            >
              <ChartPieIcon width={30} height={30} />
            </div>
          );
        }}
      </NavLink>

      <NavLink to={"/settings"}>
        {({ isActive }) => {
          return (
            <div
              className={clsx(
                "flex h-16 w-16  items-center justify-center  rounded-full border-white hover:bg-smoke-300 ",
                { "glow-1 bg-jade-500 text-black hover:bg-jade-500": isActive },
                { "text-white": !isActive }
              )}
            >
              <ShieldCheckIcon width={30} height={30} />
            </div>
          );
        }}
      </NavLink>

      
    </div>
  );
}
