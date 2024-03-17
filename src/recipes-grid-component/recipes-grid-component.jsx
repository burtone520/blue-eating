import React from 'react';
import "./recipes-grid-component.scss";
import Recipe_Block from '../Recipe_Block';

const RecipesGrid = ({recipies}) => {
    
    return (
        <div className="grid-container">
            {recipies!=undefined && recipies.map((recipe)=>{
                return(
                    <div className="grid-item">
                        <Recipe_Block>
                            {recipe.name}
                            Minutes: {recipe.time}
                        </Recipe_Block>
                    </div>
                )
            })}
        </div>
    );
}; export default RecipesGrid;