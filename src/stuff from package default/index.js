import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultRecipes from "../default-recipes/default-recipes";
import RecipeDisplay from "../display-recipe/RecipeDisplay";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path:"recipies",
    element:<DefaultRecipes/>
  },
  {
      path: "recipes/:id", // Define a route parameter named "id"
      element: <RecipeDisplay />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
