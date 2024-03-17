import React from 'react';
import "./recipes-grid-component.scss";
import Recipe_Block from '../Recipe_Block';

const RecipesGrid = ({recipies}) => {

    console.log(recipies)
    return (
        <div className="grid-container">
            {recipies!=undefined && recipies.map((recipe)=>{
                console.log(recipe)
                return(
                    <div className="grid-item">
                        <Recipe_Block recipeName={recipe.recipeName} image={recipe.imageOfProduct} id = {recipe.recipeID}>
                            Minutes: {recipe.time}
                        </Recipe_Block>
                    </div>
                )
            })}
        </div>
    );
}; export default RecipesGrid;