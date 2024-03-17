import React from "react";
import "./Recipe_Block.scss"
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
const Recipe_Block = ({image,recipeName,id}) =>{
    const navigate = useNavigate(); // Initialize useNavigate hook
        const randomNumber = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
        const onClickNav = (id) =>{
            navigate(`/recipes/${id}`)
        }
return(
    <div className="Container" onClick={()=>onClickNav(id)}>
    <img class="recipes" src={`data:image/jpeg;base64,${image}`} alt={recipeName} />
        <div class="overlay-text">
            <h2 class="recipe-name">{recipeName}</h2>
            <h2 class="recipe-time">{randomNumber} minutes</h2>
        </div> 
        </div>
)
}
export default Recipe_Block