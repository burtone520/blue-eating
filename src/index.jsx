import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./homepage/homepage";
import "../src/stuff from package default/index.css"
import DefaultRecipes from "./default-recipes/default-recipes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>
    },
    {
      path: "default-recipes",
      element: <DefaultRecipes/>
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
