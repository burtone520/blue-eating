import React from 'react';
import "./recipes.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons"
const Recipes = ({ id, time, image, recipeName }) => {
  return (
    <div>
        <div>
            <div className="input">
                <FontAwesomeIcon icon={faSearch} />
                <input
                    type="text"
                    class="input-text"
                    placeholder="Filter by ingredients"/>
            </div>
        </div>
        {/* <img class="recipes" src={image} alt={recipeName} />
        <div class="overlay-text">
            <h2 class="recipe-name">{recipeName}</h2>
            <h2 class="recipe-time">{time} minutes</h2>
        </div> */}
      </div>
  );
};

export default Recipes;