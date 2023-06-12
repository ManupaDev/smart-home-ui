import { PowerWidget } from "./components/power-widget";
import { TopWidget } from "./components/top-widget";
import { Sidebar } from "./components/sidebar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="RootLayout grid-cols_1_2_4 grid h-screen gap-x-4 bg-midnight-black px-8 py-8 font-sans">
      <Sidebar />
      <div className="grid-rows-2_3  grid gap-y-4 rounded-3xl border-white ">
        <TopWidget />
        <PowerWidget />
      </div>
      <Outlet />
    </div>
  );
}

export default RootLayout;
