import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="RootLayout grid-cols_1_2_4 grid h-screen gap-x-4 p-4 font-sans">
      <div className="rounded-2xl  bg-smoke-500 border-black"></div>
      <div className="rounded-2xl  bg-smoke-500 border-black"></div>
      <Outlet />
    </div>
  );
}

export default RootLayout;
