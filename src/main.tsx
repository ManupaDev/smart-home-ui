import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./pages/layout";
import HomePage from "./pages/home/page";
import SettingsPage from "./pages/settings/page";
import SignInPage from "./pages/auth/sign-in/page";
import "./index.css";
import UserContext from "./contexts/user-context";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
