import React, { useState } from 'react';
import "./recipes.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons"
const Recipes = ({ id, time, image, recipeName }) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
    setIsFocused(true);
    };
  return (
    <div>
        <div className="input">
            <FontAwesomeIcon icon={faSearch} class="search"/>
            <input
                type="text"
                class={isFocused ? "input-with-no-border focused input-text placeholder" : "input-with-no-border input-text placeholder"} // Apply different classes based on focus state
                onFocus={handleFocus}
                placeholder="Filter by ingredients"/>
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