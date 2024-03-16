import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./homepage/homepage";
import Login from "./login/login";
import "../src/stuff from package default/index.css"
const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>
    },
    {
      path: "/login",
      element: <Login/>
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
