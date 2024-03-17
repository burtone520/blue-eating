import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faLock, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import "../login/login.scss"
const CreateRecipe = ({toggleRecipeDisplay}) => {
    const [recipeName, setRecipeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const handleCreateRecipe = async (e) => {
        e.preventDefault();
        const formData = {recipeName:recipeName, ingredients:ingredients, instructions:instructions}
        console.log(formData)

        try {
            const response = await axios.post('http://localhost:5231/login', formData);
            setRecipeName("")
            setIngredients("")
            setInstructions("")
            closeRecipeDisplay()
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const closeRecipeDisplay = () =>{
        toggleRecipeDisplay()
    }

    return (
        <div className="signin-container"> 
            <h2 class="createRecipeHeader">Create New Recipe</h2>
            <FontAwesomeIcon icon={faCircleXmark} className="closeIcon" onClick={()=>toggleRecipeDisplay()}/>
            <div className="input-box">
                <input type="text"  value={recipeName} onChange={(e) => setRecipeName(e.target.value)} placeholder="Recipe Name" />
            </div>
            <div className="input-box">
                <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients" />
            </div>
            <div className="input-box">
                <input type="text" value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions" />
            </div>
           <button className="primary-btn" onClick={()=>handleCreateRecipe}>Create</button>
        </div>
    );
};

export default CreateRecipe;
