import React from "react";
const Recipe_Block = ({image,recipeName}) =>{
        const randomNumber = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
return(
    <React.Fragment>
    <img class="recipes" src={`data:image/jpeg;base64,${image}`} alt={recipeName} />
        <div class="overlay-text">
            <h2 class="recipe-name">{recipeName}</h2>
            <h2 class="recipe-time">{randomNumber} minutes</h2>
        </div> 
        </React.Fragment>
)
}
export default Recipe_Block