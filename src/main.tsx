import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./pages/layout";
import HomePage from "./pages/home/page";
import SettingsPage from "./pages/settings/page";
import SignInPage from "./pages/auth/sign-in/page";
import "./index.css";
import AuthContext from "./contexts/auth-context";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from "./contexts/auth-provider";

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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
