import { Sidebar } from "./components/sidebar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="RootLayout grid-cols_1_2_4 grid h-screen gap-x-4 bg-midnight-black px-8 py-8 font-sans">
      <Sidebar />
      <div className="rounded-3xl  border-black bg-glass_grey"></div>
      <Outlet />
    </div>
  );
}

export default RootLayout;
