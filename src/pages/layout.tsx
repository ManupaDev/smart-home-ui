import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="RootLayout grid-cols_1_2_4 grid h-screen gap-x-4 px-8 py-8 bg-midnight-black font-sans">
      <div className="rounded-3xl  bg-glass_grey border-black"></div>
      <div className="rounded-3xl  bg-glass_grey border-black"></div>
      <Outlet />
    </div>
  );
}

export default RootLayout;
