import React from 'react';
import "./recipes.scss";

const Recipes = ({ id, time, image, recipeName }) => {
  return (
    <div>
        <img class="recipes" src={image} alt={recipeName} />
        <div class="overlay-text">
            <h2 class="recipe-name">{recipeName}</h2>
            <h2 class="recipe-time">{time} minutes</h2>
        </div>
      </div>
  );
};

export default Recipes;