import React from 'react';
import "./recipes-grid-component.scss";

const RecipesGrid = ({recipies}) => {
    return (
        <div className="grid-container">
            {recipies.length!=undefined&&recipies.map((recipe)=>{
                return(
                    <div className="grid-item">

                    </div>
                )
            })}
            <div className="grid-item">1</div>
            <div className="grid-item">2</div>
            <div className="grid-item">3</div>
            <div className="grid-item">4</div>
            <div className="grid-item">5</div>
            <div className="grid-item">6</div>
            <div className="grid-item">7</div>
            <div className="grid-item">8</div>
            <div className="grid-item">9</div>
            <div className="grid-item">10</div>
            <div className="grid-item">11</div>
            <div className="grid-item">12</div>
        </div>
    );
}; export default RecipesGrid;