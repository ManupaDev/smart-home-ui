import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="RootLayout min-h-screen grid grid-cols_1_2_4 p-4 gap-x-4">
      <div className="rounded-2xl border border-black"></div>
      <div className="border rounded-2xl border-black"></div>
      <Outlet />
    </div>
  );
}

export default RootLayout;
