import { PowerWidget } from "./components/power-widget";
import { TopWidget } from "./components/top-widget";
import { Sidebar } from "./components/sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../firebase/auth";

function RootLayout() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        if (!user) {
          navigate("/auth/sign-in");
        }
        setLoading(false);
      })
      .catch((error) => {
        navigate("/auth/sign-in");
      });
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-midnight-black">
        <h1 className="text-4xl font-bold  text-white">LOADING...</h1>
      </div>
    );
  }

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
