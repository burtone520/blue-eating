import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./homepage/homepage";
import "./index.css"
import Recipes from "../src/recipe-photos/recipes.jsx"
import DefaultRecipes from "./default-recipes/default-recipes";
import RecipeDisplay from "./display-recipe/RecipeDisplay";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>
    },
    {
      path: "default-recipes",
      element: <DefaultRecipes/>
    },
    {
      path:"search",
      element: <Recipes/>
    },
      {
      path: "recipes/:id", // Define a route parameter named "id"
      element: <RecipeDisplay />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
